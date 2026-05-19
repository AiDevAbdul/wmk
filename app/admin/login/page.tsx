'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, AlertCircle, Eye, EyeOff, Shield, Wrench, Zap } from 'lucide-react';
import Image from 'next/image';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(
        result.error.includes('Too many login attempts')
          ? 'Too many login attempts. Please try again in 15 minutes.'
          : 'Invalid email or password'
      );
      setLoading(false);
    } else if (result?.ok) {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: '#060E1E' }}>

      {/* Left panel — branding */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0D1E4A 0%, #060E1E 60%, #0A1830 100%)' }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#F5C518 1px, transparent 1px), linear-gradient(90deg, #F5C518 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glow spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#F5C518' }} />
        <div className="absolute bottom-1/4 right-8 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: '#3B82F6' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-md"
        >
          {/* Circular logo */}
          <div className="relative mb-8">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 shadow-2xl" style={{ borderColor: '#F5C518', boxShadow: '0 0 48px rgba(245,197,24,0.35)' }}>
              <Image
                src="/wmk.jpg"
                alt="WMK Auto Repairing Garage"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Badge ring animation */}
            <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-ping" style={{ animationDuration: '3s' }} />
          </div>

          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">
            WMK Auto
          </h1>
          <p className="text-lg font-semibold mb-1" style={{ color: '#F5C518' }}>
            Repairing Garage LLC
          </p>
          <p className="text-sm text-slate-400 mb-10">
            Ras Al Khor, Dubai · Est. 2014
          </p>

          {/* Feature pills */}
          <div className="flex flex-col gap-3 w-full">
            {[
              { icon: Zap, label: 'ECM / ECU Repair & Programming' },
              { icon: Wrench, label: 'Hybrid Battery Specialists' },
              { icon: Shield, label: 'Secure Admin Portal' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-300"
                style={{ background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.12)' }}
              >
                <Icon size={16} style={{ color: '#F5C518' }} className="flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom credit */}
        <p className="absolute bottom-6 text-xs text-slate-600">
          © 2024 WMK Auto Repairing Garage LLC. All rights reserved.
        </p>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo — only visible on small screens */}
          <div className="flex flex-col items-center mb-10 lg:hidden">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4 shadow-xl" style={{ borderColor: '#F5C518', boxShadow: '0 0 32px rgba(245,197,24,0.3)' }}>
              <Image
                src="/wmk.jpg"
                alt="WMK Auto Repairing Garage"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white">WMK Auto Garage</h1>
            <p className="text-sm" style={{ color: '#F5C518' }}>Admin Portal</p>
          </div>

          {/* Heading */}
          <div className="mb-8 hidden lg:block">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-slate-400">Sign in to manage your garage operations</p>
          </div>

          {/* Card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder-slate-600"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '1px solid rgba(245,197,24,0.5)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,197,24,0.12)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="admin@wmk.ae"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-11 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder-slate-600"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '1px solid rgba(245,197,24,0.5)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,197,24,0.12)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="••••••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl text-red-400 text-sm"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                >
                  <AlertCircle size={15} className="flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-3.5 rounded-xl font-bold text-sm transition-all overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #F5C518 0%, #E0A800 100%)',
                  color: '#060E1E',
                  boxShadow: '0 8px 24px rgba(245,197,24,0.3)',
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.boxShadow = '0 12px 32px rgba(245,197,24,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,197,24,0.3)';
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin" />
                    Signing in…
                  </span>
                ) : (
                  'Sign In to Admin Panel'
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-600">
            Secure admin access · WMK Auto Repairing Garage LLC
          </p>
        </motion.div>
      </div>
    </div>
  );
}
