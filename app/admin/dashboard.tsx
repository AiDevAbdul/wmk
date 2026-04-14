'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  FileText,
  Mail,
  Wrench,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import Link from 'next/link';

interface Stats {
  services: number;
  blogPosts: number;
  contacts: number;
  pageViews?: number;
  conversionRate?: number;
}

const statCards = [
  {
    label: 'Total Services',
    key: 'services',
    icon: Wrench,
    color: 'from-primary/20 to-primary/5',
    trend: 'stable',
  },
  {
    label: 'Blog Posts',
    key: 'blogPosts',
    icon: FileText,
    color: 'from-blue-500/20 to-blue-500/5',
    trend: 'up',
  },
  {
    label: 'Contact Submissions',
    key: 'contacts',
    icon: Mail,
    color: 'from-emerald-500/20 to-emerald-500/5',
    trend: 'up',
  },
  {
    label: 'Page Views',
    key: 'pageViews',
    icon: BarChart3,
    color: 'from-purple-500/20 to-purple-500/5',
    trend: 'up',
  },
];

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

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    services: 0,
    blogPosts: 0,
    contacts: 0,
    pageViews: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
          const value = stats[card.key as keyof Stats] || 0;

          return (
            <motion.div
              key={card.key}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br ${card.color} p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  {card.trend === 'up' && (
                    <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold">
                      <ArrowUpRight size={16} />
                      12%
                    </div>
                  )}
                </div>

                <p className="text-steel-light text-sm mb-2">{card.label}</p>
                <p className="text-3xl font-bold tracking-tight">
                  {loading ? '—' : value.toLocaleString()}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  className={`group block p-4 rounded-lg border border-primary/10 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10`}
                >
                  <div className={`inline-flex p-2 rounded-lg mb-3 ${action.color} transition-colors`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-steel-light">{action.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Activity */}
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

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-steel-dark/50 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium">Database Connection</span>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">Connected</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-steel-dark/50 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium">API Status</span>
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
