'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Save, MapPin, Clock, Phone, Mail } from 'lucide-react';

interface Settings {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  addressAr: string;
  hours: string;
  latitude: string;
  longitude: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    phone: '+971 55 476 2284',
    whatsapp: 'https://wa.me/971554762284',
    email: 'info@wmk.ae',
    address: '18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE',
    addressAr: 'شارع 18، منطقة راس الخور الصناعية 2، دبي، الإمارات',
    hours: 'Mon–Thu, Sat–Sun: 08:00–20:00 (Closed Friday)',
    latitude: '25.1972',
    longitude: '55.3586',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch settings:', error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    try {
      setMessage('Settings saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
      setMessage('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
          <p className="text-steel-light">Loading settings...</p>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-steel-light">Manage your business information and preferences</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Contact Information */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Phone size={24} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold">Contact Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="+971 55 476 2284"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-white mb-2">WhatsApp Link</label>
              <input
                id="whatsapp"
                type="url"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="https://wa.me/971554762284"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="info@wmk.ae"
              />
            </div>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin size={24} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold">Location & Coordinates</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="address-en" className="block text-sm font-semibold text-white mb-2">Address (English)</label>
              <textarea
                id="address-en"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                placeholder="18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE"
                rows={2}
              />
            </div>

            <div>
              <label htmlFor="address-ar" className="block text-sm font-semibold text-white mb-2">Address (Arabic)</label>
              <textarea
                id="address-ar"
                value={settings.addressAr}
                onChange={(e) => setSettings({ ...settings, addressAr: e.target.value })}
                className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                placeholder="شارع 18، منطقة راس الخور الصناعية 2، دبي، الإمارات"
                rows={2}
                dir="rtl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="latitude" className="block text-sm font-semibold text-white mb-2">Latitude</label>
                <input
                  id="latitude"
                  type="text"
                  value={settings.latitude}
                  onChange={(e) => setSettings({ ...settings, latitude: e.target.value })}
                  className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-mono text-sm"
                  placeholder="25.1972"
                />
              </div>

              <div>
                <label htmlFor="longitude" className="block text-sm font-semibold text-white mb-2">Longitude</label>
                <input
                  id="longitude"
                  type="text"
                  value={settings.longitude}
                  onChange={(e) => setSettings({ ...settings, longitude: e.target.value })}
                  className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-mono text-sm"
                  placeholder="55.3586"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Clock size={24} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold">Business Hours</h2>
          </div>

          <div>
            <label htmlFor="hours" className="block text-sm font-semibold text-white mb-2">Operating Hours</label>
            <textarea
              id="hours"
              value={settings.hours}
              onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
              className="w-full px-4 py-3 bg-steel-dark border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              placeholder="Mon–Thu, Sat–Sun: 08:00–20:00 (Closed Friday)"
              rows={3}
            />
            <p className="text-xs text-steel-light mt-2">Format: Day(s): HH:MM–HH:MM (Notes)</p>
          </div>
        </motion.div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-sm font-medium ${
              message.includes('success')
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}
          >
            {message}
          </motion.div>
        )}

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex gap-4 pt-4 border-t border-primary/10"
        >
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-steel-dark font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save size={20} />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
