'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Trash2, Eye, Search, Filter, CheckCircle, Clock, MessageCircle } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  carBrand: string;
  service: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchContacts();
  }, [filter, search]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/contacts?status=${filter}&search=${search}`);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' });
      setContacts(contacts.filter((c) => c.id !== id));
      setSelectedContacts((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'read' }),
      });
      fetchContacts();
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Phone', 'Car Brand', 'Service', 'Message', 'Status', 'Date'];
    const rows = contacts.map((c) => [
      c.name,
      c.phone,
      c.carBrand,
      c.service,
      c.message.replace(/"/g, '""'),
      c.status,
      new Date(c.createdAt).toLocaleDateString(),
    ]);

    const csv = [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const toggleSelectContact = (id: string) => {
    setSelectedContacts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedContacts.size === contacts.length) {
      setSelectedContacts(new Set());
    } else {
      setSelectedContacts(new Set(contacts.map((c) => c.id)));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Clock size={16} className="text-yellow-400" />;
      case 'read':
        return <Eye size={16} className="text-blue-400" />;
      case 'replied':
        return <CheckCircle size={16} className="text-emerald-400" />;
      default:
        return <MessageCircle size={16} className="text-steel-light" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'read':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'replied':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

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
          <h1 className="text-4xl font-bold tracking-tight mb-1">Contact Submissions</h1>
          <p className="text-steel-light">Manage and respond to customer inquiries</p>
        </div>
        <button
          onClick={handleExportCSV}
          disabled={contacts.length === 0}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-steel-dark font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download size={20} />
          Export CSV
        </button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        {/* Search */}
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel-light" />
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-steel-mid border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>

        {/* Status Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2.5 bg-steel-mid border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all cursor-pointer"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
      </motion.div>

      {/* Contacts List */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
            <p className="text-steel-light">Loading submissions...</p>
          </div>
        </motion.div>
      ) : contacts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 rounded-xl border border-primary/10 bg-steel-mid/30"
        >
          <div className="text-4xl mb-3">📧</div>
          <p className="text-steel-light mb-2">No submissions found</p>
          <p className="text-sm text-steel-light/70">
            {search || filter !== 'all' ? 'Try adjusting your filters' : 'No contact submissions yet'}
          </p>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {contacts.map((contact) => (
            <motion.div
              key={contact.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border border-primary/10 bg-steel-mid/50 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedContacts.has(contact.id)}
                  onChange={() => toggleSelectContact(contact.id)}
                  className="w-5 h-5 rounded border-primary/30 bg-steel-dark cursor-pointer accent-primary"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg truncate group-hover:text-primary transition-colors">
                        {contact.name}
                      </h3>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {/* Car Brand Badge */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      {contact.carBrand}
                    </span>

                    {/* Service Badge */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {contact.service}
                    </span>

                    {/* Status Badge */}
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                        contact.status
                      )}`}
                    >
                      {getStatusIcon(contact.status)}
                      {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                    </span>

                    {/* Date */}
                    <span className="text-xs text-steel-light">
                      {new Date(contact.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Message Preview */}
                  <p className="text-sm text-steel-light line-clamp-2">{contact.message}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {contact.status === 'new' && (
                    <button
                      onClick={() => handleMarkAsRead(contact.id)}
                      className="inline-flex items-center justify-center p-2.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors hover:scale-110 active:scale-95"
                      title="Mark as read"
                    >
                      <Eye size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="inline-flex items-center justify-center p-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors hover:scale-110 active:scale-95"
                    title="Delete submission"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Hover indicator line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Stats Footer */}
      {!loading && contacts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-steel-mid/30 border border-primary/10 text-sm text-steel-light"
        >
          <div className="flex items-center gap-4">
            <span>
              Showing <span className="font-semibold text-white">{contacts.length}</span> submissions
            </span>
            <span className="hidden sm:inline text-primary/50">•</span>
            <span className="hidden sm:inline">
              New: <span className="font-semibold text-yellow-400">{contacts.filter((c) => c.status === 'new').length}</span>
            </span>
            <span className="hidden sm:inline text-primary/50">•</span>
            <span className="hidden sm:inline">
              Replied: <span className="font-semibold text-emerald-400">{contacts.filter((c) => c.status === 'replied').length}</span>
            </span>
          </div>
          {selectedContacts.size > 0 && (
            <span className="text-primary font-semibold">
              {selectedContacts.size} selected
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
}
