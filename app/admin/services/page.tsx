'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, Edit2 } from 'lucide-react';

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
    if (!confirm('Are you sure?')) return;

    try {
      await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      setServices(services.filter((s) => s.id !== id));
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Services</h1>
          <Link
            href="/admin/services/new"
            className="px-4 py-2 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Add Service
          </Link>
        </div>

        {loading ? (
          <div className="text-steel-light">Loading...</div>
        ) : (
          <div className="bg-steel-mid rounded-lg overflow-hidden border border-steel-light/10">
            <table className="w-full">
              <thead className="bg-steel-dark/50 border-b border-steel-light/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name (EN)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name (AR)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Slug</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-steel-light/10 hover:bg-steel-dark/30 transition-colors">
                    <td className="px-6 py-4 text-white">{service.nameEn}</td>
                    <td className="px-6 py-4 text-steel-light">{service.nameAr}</td>
                    <td className="px-6 py-4 text-steel-light text-sm">{service.slug}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/services/${service.id}`}
                          className="p-2 hover:bg-steel-light/10 rounded-lg transition-colors"
                        >
                          <Edit2 size={18} className="text-primary" />
                        </Link>
                        <button
                          onClick={() => handleDelete(service.id)}
                          className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} className="text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
