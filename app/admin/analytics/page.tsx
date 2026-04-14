'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Phone, MessageSquare, BarChart3, Calendar } from 'lucide-react';

interface AnalyticsData {
  dateRange: { startDate: string; endDate: string };
  metrics: {
    pageViews: number;
    phoneClicks: number;
    whatsappClicks: number;
    formSubmissions: number;
    contactSubmissions: number;
    conversionRate: number;
  };
  eventsByType: Record<string, number>;
  pageStats: Record<string, number>;
  topPages: Array<{ page: string; count: number }>;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState('30d');

  useEffect(() => {
    fetchAnalytics();
  }, [range]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/analytics?range=${range}`);
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
          <p className="text-steel-light">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-400 mb-4">Failed to load analytics</p>
          <button
            onClick={() => fetchAnalytics()}
            className="px-4 py-2 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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

  const metricCards = [
    {
      label: 'Page Views',
      value: data.metrics.pageViews,
      icon: BarChart3,
      color: 'from-blue-500/20 to-blue-500/5',
      trend: 12,
    },
    {
      label: 'Phone Clicks',
      value: data.metrics.phoneClicks,
      icon: Phone,
      color: 'from-emerald-500/20 to-emerald-500/5',
      trend: 8,
    },
    {
      label: 'WhatsApp Clicks',
      value: data.metrics.whatsappClicks,
      icon: MessageSquare,
      color: 'from-primary/20 to-primary/5',
      trend: 15,
    },
    {
      label: 'Form Submissions',
      value: data.metrics.formSubmissions,
      icon: BarChart3,
      color: 'from-purple-500/20 to-purple-500/5',
      trend: 5,
    },
  ];

  const maxPageViews = Math.max(...data.topPages.map((p) => p.count), 1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-1">Analytics</h1>
          <p className="text-steel-light">Track your website performance and conversions</p>
        </div>

        <div className="flex items-center gap-2 bg-steel-mid border border-primary/20 rounded-lg p-1">
          {[
            { value: '7d', label: '7 Days' },
            { value: '30d', label: '30 Days' },
            { value: '90d', label: '90 Days' },
            { value: '1y', label: '1 Year' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setRange(option.value)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                range === option.value
                  ? 'bg-primary text-steel-dark'
                  : 'text-steel-light hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metricCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br ${card.color} p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold">
                    <TrendingUp size={16} />
                    {card.trend}%
                  </div>
                </div>

                <p className="text-steel-light text-sm mb-2">{card.label}</p>
                <p className="text-3xl font-bold tracking-tight">
                  {card.value.toLocaleString()}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Secondary Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Conversion Rate */}
        <div className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-steel-light font-semibold">Conversion Rate</h3>
            <TrendingUp className="text-primary" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">
            {data.metrics.conversionRate.toFixed(2)}%
          </p>
          <p className="text-sm text-steel-light">Form submissions / page views</p>
        </div>

        {/* Contact Submissions */}
        <div className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-steel-light font-semibold">Contact Submissions</h3>
            <MessageSquare className="text-primary" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">
            {data.metrics.contactSubmissions}
          </p>
          <p className="text-sm text-steel-light">Total submissions received</p>
        </div>

        {/* Total Conversions */}
        <div className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-steel-light font-semibold">Total Conversions</h3>
            <BarChart3 className="text-primary" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">
            {(
              data.metrics.phoneClicks +
              data.metrics.whatsappClicks +
              data.metrics.formSubmissions
            ).toLocaleString()}
          </p>
          <p className="text-sm text-steel-light">Phone + WhatsApp + Form</p>
        </div>
      </motion.div>

      {/* Top Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
      >
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          Top Pages
        </h2>

        {data.topPages.length > 0 ? (
          <div className="space-y-4">
            {data.topPages.map((page, index) => {
              const percentage = (page.count / maxPageViews) * 100;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate group-hover:text-primary transition-colors">
                        {page.page || '/'}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-primary ml-4">
                      {page.count.toLocaleString()} views
                    </span>
                  </div>

                  <div className="relative h-2 bg-steel-dark rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-steel-light/70 text-center py-8">No page data available</p>
        )}
      </motion.div>

      {/* Date Range Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center justify-between p-4 rounded-lg bg-steel-mid/30 border border-primary/10 text-sm text-steel-light"
      >
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-primary" />
          <span>
            Data from <span className="font-semibold text-white">{data.dateRange.startDate}</span> to{' '}
            <span className="font-semibold text-white">{data.dateRange.endDate}</span>
          </span>
        </div>
        <button
          onClick={() => fetchAnalytics()}
          className="px-3 py-1 rounded-lg hover:bg-steel-dark/50 transition-colors text-primary hover:text-primary/80"
        >
          Refresh
        </button>
      </motion.div>
    </div>
  );
}
