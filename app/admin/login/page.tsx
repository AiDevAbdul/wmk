'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, AlertCircle, Eye, EyeOff, Shield, Zap, ChevronRight, Cpu } from 'lucide-react';
import Image from 'next/image';

const STATS = [
  { value: '12+', label: 'Years' },
  { value: '16+', label: 'Brands' },
  { value: '10K+', label: 'Repairs' },
];

const FEATURES = [
  { icon: Cpu, label: 'ECM / ECU Repair & Programming', desc: 'Engine control module specialists' },
  { icon: Zap, label: 'Hybrid & EV Battery Services', desc: 'Tesla, BYD & hybrid experts' },
  { icon: Shield, label: 'Secure Management Console', desc: 'Role-based encrypted access' },
];

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

    const result = await signIn('credentials', { email, password, redirect: false });

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

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.border = '1px solid rgba(245,197,24,0.5)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,197,24,0.09)';
    e.currentTarget.style.background = 'rgba(245,197,24,0.03)';
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
  };

  return (
    <div className="min-h-screen flex overflow-hidden" style={{ background: '#06080F' }}>

      {/* ─────────── LEFT — Branding ─────────── */}
      <div className="hidden lg:flex lg:w-[44%] relative flex-col items-center justify-center p-12 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(155deg, #0E1D47 0%, #080F22 55%, #06080F 100%)',
        }} />

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />

        {/* Top ambient glow */}
        <div className="absolute pointer-events-none" style={{
          top: '-15%', left: '50%', transform: 'translateX(-50%)',
          width: '640px', height: '640px',
          background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 65%)',
        }} />

        {/* Bottom-right blue accent */}
        <div className="absolute bottom-0 right-0 pointer-events-none" style={{
          width: '260px', height: '260px',
          background: 'radial-gradient(circle at bottom right, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }} />

        {/* Panel divider — gold gradient line */}
        <div className="absolute right-0 top-0 bottom-0 w-px" style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(245,197,24,0.12) 25%, rgba(245,197,24,0.25) 50%, rgba(245,197,24,0.12) 75%, transparent 100%)',
        }} />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex flex-col items-center text-center max-w-sm w-full"
        >
          {/* Logo badge */}
          <motion.div
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-8"
          >
            <div
              className="w-[124px] h-[124px] rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, #141E40 0%, #0B1330 100%)',
                border: '1.5px solid rgba(245,197,24,0.38)',
                boxShadow: '0 0 0 1px rgba(245,197,24,0.07) inset, 0 24px 64px rgba(0,0,0,0.65), 0 0 60px rgba(245,197,24,0.13)',
              }}
            >
              <Image
                src="/wmk-nobg.png"
                alt="WMK Auto Repairing Garage"
                width={92}
                height={92}
                className="object-contain"
                priority
              />
            </div>
            {/* Pulsing glow ring */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.08, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 rounded-[26px] -z-10"
              style={{ background: 'rgba(245,197,24,0.12)', filter: 'blur(12px)' }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
          >
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-3" style={{ color: '#F5C518' }}>
              Admin Portal
            </p>
            <h1 className="text-[2.7rem] font-black leading-none tracking-tight text-white">
              WMK Auto
            </h1>
            <p className="text-xl font-bold tracking-wide mt-1" style={{ color: 'rgba(245,197,24,0.85)' }}>
              Repairing Garage
            </p>
            <p className="text-sm text-slate-500 mt-1.5 font-medium tracking-wide">
              Ras Al Khor · Dubai · Est. 2014
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.6 }}
            className="flex w-full mt-8 mb-7 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.055)', background: 'rgba(255,255,255,0.02)' }}
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex-1 flex flex-col items-center py-3.5 ${i !== STATS.length - 1 ? 'border-r' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.055)' }}
              >
                <span className="text-[1.6rem] font-black leading-none" style={{ color: '#F5C518' }}>{value}</span>
                <span className="text-[9.5px] text-slate-500 font-semibold mt-1 tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Feature cards */}
          <div className="w-full space-y-2.5">
            {FEATURES.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.52 + i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(245,197,24,0.04)',
                  border: '1px solid rgba(245,197,24,0.09)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(245,197,24,0.11)' }}
                >
                  <Icon size={14} style={{ color: '#F5C518' }} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white leading-tight">{label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="absolute bottom-6 text-xs text-slate-700">
          © {new Date().getFullYear()} WMK Auto Repairing Garage LLC. All rights reserved.
        </p>
      </div>

      {/* ─────────── RIGHT — Form ─────────── */}
      <div
        className="flex-1 flex items-center justify-center p-6 lg:p-16 relative"
        style={{ background: '#07111E' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 70% 25%, rgba(245,197,24,0.045) 0%, transparent 60%)',
        }} />

        {/* Top gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(245,197,24,0.18) 35%, rgba(245,197,24,0.35) 50%, rgba(245,197,24,0.18) 65%, transparent 100%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-[400px] relative z-10"
        >
          {/* Mobile logo */}
          <div className="flex flex-col items-center mb-10 lg:hidden">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(145deg, #141E40, #0B1330)',
                border: '1.5px solid rgba(245,197,24,0.35)',
                boxShadow: '0 0 32px rgba(245,197,24,0.18)',
              }}
            >
              <Image
                src="/wmk-nobg.png"
                alt="WMK"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl font-black text-white">WMK Auto Garage</h1>
            <p className="text-sm font-semibold mt-0.5" style={{ color: '#F5C518' }}>Admin Portal</p>
          </div>

          {/* Desktop heading */}
          <div className="mb-8 hidden lg:block">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="h-[2px] w-8 rounded-full"
                style={{ background: 'linear-gradient(90deg, #F5C518, rgba(245,197,24,0.25))' }}
              />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-slate-500">
                Secure Access
              </span>
            </div>
            <h2 className="text-[2.9rem] font-black tracking-tight leading-none mb-3 text-white">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-[13.5px] leading-relaxed">
              Sign in to access the WMK management console.
            </p>
          </div>

          {/* Glass form card */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: 'rgba(255,255,255,0.028)',
              border: '1px solid rgba(255,255,255,0.065)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.03) inset',
              backdropFilter: 'blur(20px)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#4E6580' }} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    placeholder="admin@wmk.ae"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-300">
                  Password
                </label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#4E6580' }} />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="w-full pl-10 pr-11 py-3.5 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    placeholder="••••••••••••"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: '#4E6580' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#8BA4BE')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#4E6580')}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.07)',
                      border: '1px solid rgba(239,68,68,0.18)',
                      color: '#F87171',
                    }}
                  >
                    <AlertCircle size={14} className="flex-shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-4 rounded-xl font-bold text-sm overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{
                  background: 'linear-gradient(135deg, #F5C518 0%, #DDA800 100%)',
                  color: '#06080F',
                  boxShadow: '0 8px 32px rgba(245,197,24,0.3)',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.boxShadow = '0 14px 44px rgba(245,197,24,0.5)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,197,24,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Hover shine sweep */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(108deg, transparent 30%, rgba(255,255,255,0.24) 50%, transparent 70%)',
                  }}
                />
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin" />
                    Authenticating…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-1.5">
                    Sign In to Admin Panel
                    <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Security footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <Shield size={11} style={{ color: '#2E4460' }} />
            <p className="text-xs" style={{ color: '#2E4460' }}>
              256-bit encrypted · JWT sessions · Rate limited
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
