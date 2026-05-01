'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Wifi, Wrench } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const features = [
  {
    icon: Cpu,
    title: 'Expert ECM Repair',
    desc: 'Full ECM/ECU diagnostics and repair for all major automotive brands. We restore your engine brain to factory spec.',
  },
  {
    icon: Wrench,
    title: 'Advanced Diagnostics',
    desc: 'Latest OBD2 and factory-level diagnostic equipment for precise fault detection. No guesswork, only data.',
  },
  {
    icon: Wifi,
    title: 'Online Programming',
    desc: 'Remote ECU reprogramming and live data updates. Available for select brands without leaving the workshop.',
  },
]

export function SpecializationSection() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  return (
    <section className="relative py-28 bg-steel-mid overflow-hidden">
      {/* Inset top/bottom lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-0 w-[400px] h-[400px] opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #F5C518, transparent 60%)' }} />
        <div className="absolute -bottom-10 right-0 w-[300px] h-[300px] opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #3B6FD4, transparent 60%)' }} />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div>
              <span className="section-label mb-5 inline-flex">Our Specialty</span>
              <h2 className="font-black text-white mb-5" style={{ letterSpacing: '-0.04em', lineHeight: 1.05 }}>
                Advanced ECM &amp;{' '}
                <span className="text-gold-gradient">Programming</span>
                <br />Specialists
              </h2>
              <p className="text-steel-light/65 text-base leading-relaxed max-w-lg">
                Precision ECM repair and advanced programming for all major automotive brands. We combine
                factory-grade diagnostics with deep technician expertise for reliable, guaranteed results.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {features.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:bg-white/[0.04] group"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      style={{ background: 'rgba(245,197,24,0.10)', border: '1px solid rgba(245,197,24,0.20)' }}>
                      <Icon size={18} className="text-primary" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-1 tracking-tight">{item.title}</p>
                      <p className="text-steel-light/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <Link
              href={`/${locale}/services/ecm-repair`}
              className="btn-primary inline-flex text-sm gap-2 self-start"
            >
              <span>Explore ECM Repair</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — Circuit visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-sm aspect-square rounded-[32px] flex flex-col items-center justify-center p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(245,197,24,0.08) 0%, rgba(10,14,26,0.9) 100%)',
                border: '1px solid rgba(245,197,24,0.18)',
                boxShadow: '0 0 60px rgba(245,197,24,0.06), 0 24px 48px rgba(0,0,0,0.4)',
              }}
            >
              {/* Rotating ring */}
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-primary/[0.07]" style={{ animationDirection: 'reverse' }} />

              {/* SVG circuit */}
              <svg viewBox="0 0 240 240" className="w-56 h-56 relative z-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <style>{`
                    .cl { stroke:#F5C518; stroke-width:1.8; fill:none; stroke-dasharray:600; stroke-dashoffset:600; animation:circuit-draw 2.5s ease forwards; }
                    .cd { fill:#F5C518; animation:glow-dot 2s ease-in-out infinite; }
                    @keyframes circuit-draw { to { stroke-dashoffset: 0; } }
                    @keyframes glow-dot { 0%,100%{opacity:.5;transform:scale(.9);}50%{opacity:1;transform:scale(1.1);} }
                  `}</style>
                </defs>

                {/* Outer decorative circles */}
                <circle cx="120" cy="120" r="110" fill="none" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
                <circle cx="120" cy="120" r="80" fill="none" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />

                {/* Circuit paths */}
                <path className="cl" d="M120 20 L120 70 M120 70 L80 70 M80 70 L80 110" style={{ animationDelay: '0s' }} />
                <path className="cl" d="M120 70 L160 70 M160 70 L160 110" style={{ animationDelay: '0.2s' }} />
                <path className="cl" d="M120 220 L120 170 M120 170 L80 170 M80 170 L80 130" style={{ animationDelay: '0.4s' }} />
                <path className="cl" d="M120 170 L160 170 M160 170 L160 130" style={{ animationDelay: '0.6s' }} />

                {/* Center chip */}
                <rect x="90" y="100" width="60" height="40" rx="6" fill="rgba(245,197,24,0.12)" stroke="#F5C518" strokeWidth="1.5" />
                <rect x="98" y="108" width="44" height="24" rx="3" fill="rgba(245,197,24,0.20)" />

                {/* Chip pins */}
                {[104, 112, 120, 128].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="100" x2={x} y2="93" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1={x} y1="140" x2={x} y2="147" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                ))}

                {/* Dots */}
                <circle className="cd" cx="80" cy="70" r="4" style={{ animationDelay: '0s' }} />
                <circle className="cd" cx="160" cy="70" r="4" style={{ animationDelay: '0.3s' }} />
                <circle className="cd" cx="80" cy="170" r="4" style={{ animationDelay: '0.6s' }} />
                <circle className="cd" cx="160" cy="170" r="4" style={{ animationDelay: '0.9s' }} />
              </svg>

              {/* Label */}
              <div className="absolute bottom-8 text-center">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/80">ECM Expertise</p>
                <p className="text-[10px] text-steel-light/40 mt-0.5">Precision Diagnostics &amp; Programming</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
