'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  LogOut,
  BarChart3,
  FileText,
  Mail,
  Settings,
  Wrench,
  Home,
  ChevronRight,
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/services', label: 'Services', icon: Wrench },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
  { href: '/admin/contacts', label: 'Contacts', icon: Mail },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session } = useSession();
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: '/admin/login' });
  };

  return (
    <div className="min-h-screen bg-steel-dark text-white">
      {/* Sidebar - Icon-only with hover expansion */}
      <motion.aside
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
        animate={{ width: sidebarHovered ? 280 : 80 }}
        transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-screen bg-gradient-to-b from-steel-mid to-steel-dark border-r border-primary/20 z-40 hidden lg:flex flex-col overflow-hidden"
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-primary/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-steel-dark flex-shrink-0">
              W
            </div>
            <motion.div
              animate={{ opacity: sidebarHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap"
            >
              <h1 className="font-bold text-lg tracking-tight">WMK</h1>
              <p className="text-xs text-steel-light">Admin</p>
            </motion.div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="group relative flex items-center gap-3 px-3 py-3 rounded-lg text-steel-light hover:text-white transition-colors overflow-hidden"
                  title={item.label}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                  <Icon size={20} className="relative z-10 flex-shrink-0" />
                  <motion.span
                    animate={{ opacity: sidebarHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 font-medium text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                  <motion.div
                    animate={{ opacity: sidebarHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <ChevronRight
                      size={16}
                      className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-2 border-t border-primary/10 space-y-2 flex-shrink-0">
          <motion.div
            animate={{ opacity: sidebarHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="px-3 py-2 bg-steel-dark/50 rounded-lg border border-primary/10 whitespace-nowrap overflow-hidden"
          >
            <p className="text-xs text-steel-light mb-1">Logged in as</p>
            <p className="text-xs font-semibold truncate">{session?.user?.email}</p>
          </motion.div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors font-medium text-sm"
            title="Sign out"
          >
            <LogOut size={18} />
            <motion.span
              animate={{ opacity: sidebarHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap"
            >
              Sign Out
            </motion.span>
          </button>
        </div>
      </motion.aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed bottom-6 right-6 lg:hidden z-50 p-3 bg-primary text-steel-dark rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 lg:hidden z-40 bg-steel-mid border border-primary/20 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-steel-dark/50 transition-colors border-b border-primary/10 last:border-b-0"
                  >
                    <Icon size={18} className="text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="transition-all duration-300" style={{ marginLeft: sidebarHovered ? 280 : 80 }}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-steel-mid/80 backdrop-blur-md border-b border-primary/10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex-1" />

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">{session?.user?.email}</p>
                <p className="text-xs text-steel-light">Administrator</p>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"
                title="Sign out"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
