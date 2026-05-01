'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  FileText,
  Mail,
  Wrench,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Phone,
  Car,
} from 'lucide-react';
import Link from 'next/link';

interface RecentContact {
  id: string;
  name: string;
  phone: string;
  service: string;
  carBrand: string;
  status: string;
  createdAt: string;
}

interface Stats {
  services: number;
  blogPosts: number;
  contacts: number;
  newContacts: number;
  pageViews: number;
  contactsTrend: number;
  pageViewsTrend: number;
  recentContacts: RecentContact[];
}

const quickActions = [
  {
    title: 'New Blog Post',
    description: 'Create and publish content',
    href: '/admin/blog/new',
    icon: FileText,
    color: 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20',
  },
  {
    title: 'View Analytics',
    description: 'Check performance metrics',
    href: '/admin/analytics',
    icon: BarChart3,
    color: 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20',
  },
  {
    title: 'Manage Contacts',
    description: 'Review submissions',
    href: '/admin/contacts',
    icon: Mail,
    color: 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20',
  },
  {
    title: 'Services',
    description: 'Update service list',
    href: '/admin/services',
    icon: Wrench,
    color: 'bg-primary/10 text-primary hover:bg-primary/20',
  },
];

const statusColors: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  read: 'bg-steel-dark/50 text-steel-light border-primary/10',
  replied: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  archived: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

function TrendBadge({ value }: { value: number }) {
  if (value > 0) {
    return (
      <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold">
        <ArrowUpRight size={16} />
        {value}%
      </div>
    );
  }
  if (value < 0) {
    return (
      <div className="flex items-center gap-1 text-red-400 text-sm font-semibold">
        <ArrowDownRight size={16} />
        {Math.abs(value)}%
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 text-steel-light text-sm font-semibold">
      <Minus size={16} />
    </div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    services: 0,
    blogPosts: 0,
    contacts: 0,
    newContacts: 0,
    pageViews: 0,
    contactsTrend: 0,
    pageViewsTrend: 0,
    recentContacts: [],
  });
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState<'checking' | 'ok' | 'error'>('checking');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setStats(data);
        setDbStatus('ok');
      } catch (error) {
        console.error('Failed to fetch stats:', error);
        setDbStatus('error');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: 'Total Services',
      value: stats.services,
      icon: Wrench,
      color: 'from-primary/20 to-primary/5',
      trend: null,
    },
    {
      label: 'Blog Posts',
      value: stats.blogPosts,
      icon: FileText,
      color: 'from-blue-500/20 to-blue-500/5',
      trend: null,
    },
    {
      label: 'New Contacts',
      value: stats.newContacts,
      icon: Mail,
      color: 'from-emerald-500/20 to-emerald-500/5',
      trend: stats.contactsTrend,
    },
    {
      label: 'Page Views (30d)',
      value: stats.pageViews,
      icon: BarChart3,
      color: 'from-purple-500/20 to-purple-500/5',
      trend: stats.pageViewsTrend,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-steel-light">Welcome back to WMK Admin Panel</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br ${card.color} p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  {card.trend !== null && <TrendBadge value={card.trend} />}
                </div>

                <p className="text-steel-light text-sm mb-2">{card.label}</p>
                <p className="text-3xl font-bold tracking-tight">
                  {loading ? '—' : card.value.toLocaleString()}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quick Actions + Recent Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-1"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.href}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={action.href}
                    className="group flex items-center gap-3 p-4 rounded-lg border border-primary/10 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className={`p-2 rounded-lg flex-shrink-0 ${action.color} transition-colors`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-xs text-steel-light">{action.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Recent Contacts
            </h2>
            <Link
              href="/admin/contacts"
              className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View all →
            </Link>
          </div>

          <div className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
              </div>
            ) : stats.recentContacts.length === 0 ? (
              <div className="text-center py-12 text-steel-light">
                <Mail size={32} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">No contact submissions yet</p>
              </div>
            ) : (
              <div className="divide-y divide-primary/10">
                {stats.recentContacts.map((contact) => (
                  <div key={contact.id} className="p-4 hover:bg-steel-dark/30 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-white text-sm truncate">{contact.name}</p>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[contact.status] ?? statusColors.read}`}>
                            {contact.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-steel-light">
                          <span className="flex items-center gap-1">
                            <Phone size={11} />
                            {contact.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Car size={11} />
                            {contact.carBrand}
                          </span>
                        </div>
                        <p className="text-xs text-steel-light/70 mt-1 truncate">{contact.service}</p>
                      </div>
                      <p className="text-xs text-steel-light/60 flex-shrink-0 whitespace-nowrap">
                        {new Date(contact.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          System Status
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-steel-dark/50 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${dbStatus === 'ok' ? 'bg-emerald-400 animate-pulse' : dbStatus === 'error' ? 'bg-red-400' : 'bg-yellow-400 animate-pulse'}`} />
              <span className="text-sm font-medium">Database</span>
            </div>
            <span className={`text-xs font-semibold ${dbStatus === 'ok' ? 'text-emerald-400' : dbStatus === 'error' ? 'text-red-400' : 'text-yellow-400'}`}>
              {dbStatus === 'ok' ? 'Connected' : dbStatus === 'error' ? 'Error' : 'Checking...'}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-steel-dark/50 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium">API</span>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">Operational</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-steel-dark/50 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium">Authentication</span>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">Active</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
