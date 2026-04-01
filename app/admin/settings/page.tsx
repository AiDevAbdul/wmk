'use client';

import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';

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
      // In a real app, fetch from API
      // For now, use defaults
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
      // In a real app, save to API
      // const res = await fetch('/api/admin/settings', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(settings),
      // });

      // For now, just show success
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
    return <div className="min-h-screen bg-steel-dark p-8 text-steel-light">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="+971 55 476 2284"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">WhatsApp Link</label>
                <input
                  type="url"
                  value={settings.whatsapp}
                  onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                  className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="https://wa.me/971554762284"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="info@wmk.ae"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <h2 className="text-xl font-bold text-white mb-6">Address</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Address (English)</label>
                <textarea
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="18 Street, Ras Al Khor Industrial Area 2, Dubai, UAE"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Address (Arabic)</label>
                <textarea
                  value={settings.addressAr}
                  onChange={(e) => setSettings({ ...settings, addressAr: e.target.value })}
                  className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="شارع 18، منطقة راس الخور الصناعية 2، دبي، الإمارات"
                  rows={2}
                  dir="rtl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Latitude</label>
                  <input
                    type="text"
                    value={settings.latitude}
                    onChange={(e) => setSettings({ ...settings, latitude: e.target.value })}
                    className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="25.1972"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Longitude</label>
                  <input
                    type="text"
                    value={settings.longitude}
                    onChange={(e) => setSettings({ ...settings, longitude: e.target.value })}
                    className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="55.3586"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <h2 className="text-xl font-bold text-white mb-6">Business Hours</h2>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Hours</label>
              <textarea
                value={settings.hours}
                onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
                className="w-full px-4 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Mon–Thu, Sat–Sun: 08:00–20:00 (Closed Friday)"
                rows={3}
              />
            </div>
          </div>

          {/* Message */}
          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('success')
                ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}>
              {message}
            </div>
          )}

          {/* Save Button */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Save size={18} />
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
