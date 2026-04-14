'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  description: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      setServices(services.filter((s) => s.id !== id));
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  const filteredServices = services.filter((service) =>
    service.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-1">Services</h1>
          <p className="text-steel-light">Manage your service offerings</p>
        </div>
        <Link
          href="/admin/services/new"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-steel-dark font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          New Service
        </Link>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative"
      >
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel-light" />
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-steel-mid border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
        />
      </motion.div>

      {/* Services Table */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
            <p className="text-steel-light">Loading services...</p>
          </div>
        </motion.div>
      ) : filteredServices.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 rounded-xl border border-primary/10 bg-steel-mid/30"
        >
          <div className="text-4xl mb-3">🔧</div>
          <p className="text-steel-light mb-2">No services found</p>
          <p className="text-sm text-steel-light/70">
            {searchTerm ? 'Try adjusting your search' : 'Create your first service'}
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="overflow-x-auto rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/20 bg-steel-dark/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">English Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Arabic Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Slug</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, idx) => (
                <motion.tr
                  key={service.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="border-b border-primary/10 hover:bg-steel-dark/50 transition-colors"
                >
                  <td className="px-6 py-4 text-white font-medium">{service.nameEn}</td>
                  <td className="px-6 py-4 text-steel-light">{service.nameAr}</td>
                  <td className="px-6 py-4 text-steel-light text-sm font-mono">{service.slug}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/services/${service.id}`}
                        className="inline-flex items-center justify-center p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors hover:scale-110 active:scale-95"
                        title="Edit service"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="inline-flex items-center justify-center p-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors hover:scale-110 active:scale-95"
                        title="Delete service"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Stats Footer */}
      {!loading && filteredServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-between p-4 rounded-lg bg-steel-mid/30 border border-primary/10 text-sm text-steel-light"
        >
          <span>
            Showing <span className="font-semibold text-white">{filteredServices.length}</span> of{' '}
            <span className="font-semibold text-white">{services.length}</span> services
          </span>
        </motion.div>
      )}
    </div>
  );
}
