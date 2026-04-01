'use client';

import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Menu, LogOut, BarChart3, FileText, Mail, Settings, Wrench } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    services: 0,
    blogPosts: 0,
    contacts: 0,
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

  return (
    <div className="min-h-screen bg-steel-dark">
      {/* Header */}
      <header className="bg-steel-mid border-b border-steel-light/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">WMK Admin</h1>
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: '/admin/login' })}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link
            href="/admin/services"
            className="p-4 bg-steel-mid hover:bg-steel-mid/80 rounded-lg border border-steel-light/10 transition-colors flex items-center gap-3"
          >
            <Wrench className="text-primary" size={24} />
            <div>
              <div className="font-semibold text-white">Services</div>
              <div className="text-sm text-steel-light">Manage services</div>
            </div>
          </Link>

          <Link
            href="/admin/blog"
            className="p-4 bg-steel-mid hover:bg-steel-mid/80 rounded-lg border border-steel-light/10 transition-colors flex items-center gap-3"
          >
            <FileText className="text-primary" size={24} />
            <div>
              <div className="font-semibold text-white">Blog</div>
              <div className="text-sm text-steel-light">Manage posts</div>
            </div>
          </Link>

          <Link
            href="/admin/contacts"
            className="p-4 bg-steel-mid hover:bg-steel-mid/80 rounded-lg border border-steel-light/10 transition-colors flex items-center gap-3"
          >
            <Mail className="text-primary" size={24} />
            <div>
              <div className="font-semibold text-white">Contacts</div>
              <div className="text-sm text-steel-light">View submissions</div>
            </div>
          </Link>

          <Link
            href="/admin/analytics"
            className="p-4 bg-steel-mid hover:bg-steel-mid/80 rounded-lg border border-steel-light/10 transition-colors flex items-center gap-3"
          >
            <BarChart3 className="text-primary" size={24} />
            <div>
              <div className="font-semibold text-white">Analytics</div>
              <div className="text-sm text-steel-light">View metrics</div>
            </div>
          </Link>
        </nav>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="text-steel-light text-sm mb-2">Total Services</div>
            <div className="text-4xl font-bold text-primary">
              {loading ? '-' : stats.services}
            </div>
          </div>

          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="text-steel-light text-sm mb-2">Blog Posts</div>
            <div className="text-4xl font-bold text-primary">
              {loading ? '-' : stats.blogPosts}
            </div>
          </div>

          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="text-steel-light text-sm mb-2">Contact Submissions</div>
            <div className="text-4xl font-bold text-primary">
              {loading ? '-' : stats.contacts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
