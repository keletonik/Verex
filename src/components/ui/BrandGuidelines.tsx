'use client'

import { motion } from 'framer-motion'
import VerexWordmark, { VerexWordmarkSVG } from './VerexWordmark'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}

/* ────────────── COLOR DATA ────────────── */

const primaryColors = [
  { name: 'Verex Orange', hex: '#F97316', rgb: '249, 115, 22', usage: 'Primary accent, CTA buttons, brand "v"', tailwind: 'fire-500' },
  { name: 'Signal Red', hex: '#E63946', rgb: '230, 57, 70', usage: 'Gradient endpoints, alerts, urgency', tailwind: 'ember-DEFAULT' },
  { name: 'Ember Glow', hex: '#FF6B35', rgb: '255, 107, 53', usage: 'Hover states, highlights, warmth', tailwind: 'ember-light' },
  { name: 'Deep Navy', hex: '#0a1628', rgb: '10, 22, 40', usage: 'Primary background, depth, authority', tailwind: 'navy-DEFAULT' },
]

const secondaryColors = [
  { name: 'Amber Light', hex: '#FDB44B', rgb: '253, 180, 75', usage: 'Inner flame, accent fills' },
  { name: 'Ember Dark', hex: '#9B1D20', rgb: '155, 29, 32', usage: 'Deep accent, hover darks' },
  { name: 'Navy Mid', hex: '#162033', rgb: '22, 32, 51', usage: 'Cards, elevated surfaces' },
  { name: 'Navy Light', hex: '#1e293b', rgb: '30, 41, 59', usage: 'Borders, subtle backgrounds' },
]

const neutralColors = [
  { name: 'Smoke 200', hex: '#e2e8f0', usage: 'Primary body text' },
  { name: 'Smoke 300', hex: '#cbd5e1', usage: 'Secondary text' },
  { name: 'Smoke 400', hex: '#94a3b8', usage: 'Tertiary / muted text' },
  { name: 'Smoke 500', hex: '#64748b', usage: 'Disabled / placeholder' },
]

const gradients = [
  { name: 'Fire Gradient', css: 'linear-gradient(135deg, #E63946 0%, #FF6B35 50%, #F97316 100%)', usage: 'CTA buttons, key interactions' },
  { name: 'Dark Gradient', css: 'linear-gradient(180deg, #0a1628 0%, #162033 50%, #1e293b 100%)', usage: 'Section backgrounds' },
  { name: 'Text Gradient', css: 'linear-gradient(135deg, #FF6B35, #F97316, #E63946)', usage: 'Headline text (gradient clip)' },
]

/* ────────────── COMPONENT ────────────── */

export default function BrandGuidelines() {
  return (
    <div className="min-h-screen bg-navy-DEFAULT">
      {/* Header */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-heading font-semibold text-fire-400 tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-fire-500/20 bg-fire-500/5">
              Brand Identity System
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mt-6 mb-4">
              Brand <span className="gradient-text">Guidelines</span>
            </h1>
            <p className="text-smoke-400 text-lg max-w-2xl mx-auto">
              The complete Verex Fire Solutions visual identity — colors, typography, logo usage, and design principles.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20 space-y-24">

        {/* ═══════════ 1. LOGO ═══════════ */}
        <Section title="Logo" subtitle="The Verex wordmark is the primary brand identifier." index={0}>
          {/* Primary Logo Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Dark background */}
            <div className="rounded-2xl bg-navy-light border border-white/5 p-10 flex flex-col items-center justify-center gap-4">
              <VerexWordmark size="lg" variant="light" />
              <span className="text-[10px] text-smoke-500 uppercase tracking-widest mt-4">On Dark Background</span>
            </div>
            {/* Light background */}
            <div className="rounded-2xl bg-white border border-smoke-200 p-10 flex flex-col items-center justify-center gap-4">
              <VerexWordmark size="lg" variant="dark" />
              <span className="text-[10px] text-smoke-500 uppercase tracking-widest mt-4">On Light Background</span>
            </div>
          </div>

          {/* Size Variants */}
          <div className="glass-card p-8">
            <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-6">Size Variants</h4>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-smoke-500 w-8 shrink-0">XL</span>
                <VerexWordmark size="xl" />
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-smoke-500 w-8 shrink-0">LG</span>
                <VerexWordmark size="lg" />
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-smoke-500 w-8 shrink-0">MD</span>
                <VerexWordmark size="md" />
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-smoke-500 w-8 shrink-0">SM</span>
                <VerexWordmark size="sm" />
              </div>
            </div>
          </div>

          {/* Logo Clear Space & Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="glass-card p-8">
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">Clear Space</h4>
              <p className="text-sm text-smoke-400 mb-6">
                Maintain a minimum clear space equal to the height of the letter &quot;v&quot; around all sides of the wordmark.
              </p>
              <div className="bg-navy-DEFAULT rounded-xl p-8 flex items-center justify-center border-2 border-dashed border-fire-500/20">
                <div className="border-2 border-dashed border-fire-500/30 p-6 rounded-lg">
                  <VerexWordmark size="md" showTagline={false} />
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">Do Not</h4>
              <ul className="space-y-3 text-sm text-smoke-400">
                <li className="flex items-start gap-3">
                  <span className="text-ember-DEFAULT mt-0.5">&#x2717;</span>
                  Change the proportions of the wordmark
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember-DEFAULT mt-0.5">&#x2717;</span>
                  Change the &quot;v&quot; to any color other than Verex Orange
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember-DEFAULT mt-0.5">&#x2717;</span>
                  Add drop shadows, outlines, or effects
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember-DEFAULT mt-0.5">&#x2717;</span>
                  Rotate or skew the wordmark
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember-DEFAULT mt-0.5">&#x2717;</span>
                  Place on busy backgrounds without contrast
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember-DEFAULT mt-0.5">&#x2717;</span>
                  Use the wordmark at less than 80px width
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ═══════════ 2. COLORS ═══════════ */}
        <Section title="Color Palette" subtitle="Our colors convey trust, urgency, and premium fire safety expertise." index={1}>
          {/* Primary Colors */}
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">Primary Palette</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {primaryColors.map((c, i) => (
              <motion.div
                key={c.hex}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card overflow-hidden group"
              >
                <div
                  className="h-28 w-full transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-4 space-y-2">
                  <p className="font-heading font-semibold text-white text-sm">{c.name}</p>
                  <div className="space-y-1">
                    <p className="text-[11px] text-smoke-400 font-mono">{c.hex}</p>
                    <p className="text-[11px] text-smoke-500 font-mono">rgb({c.rgb})</p>
                    {c.tailwind && (
                      <p className="text-[11px] text-fire-400 font-mono">{c.tailwind}</p>
                    )}
                  </div>
                  <p className="text-[11px] text-smoke-400 leading-relaxed mt-2">{c.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Colors */}
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">Secondary Palette</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {secondaryColors.map((c, i) => (
              <motion.div
                key={c.hex}
                custom={i + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card overflow-hidden"
              >
                <div className="h-16 w-full" style={{ backgroundColor: c.hex }} />
                <div className="p-3 space-y-1">
                  <p className="font-heading font-semibold text-white text-xs">{c.name}</p>
                  <p className="text-[10px] text-smoke-400 font-mono">{c.hex}</p>
                  <p className="text-[10px] text-smoke-500">{c.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Neutrals */}
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">Neutral / Text</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {neutralColors.map((c) => (
              <div key={c.hex} className="glass-card overflow-hidden">
                <div className="h-12 w-full" style={{ backgroundColor: c.hex }} />
                <div className="p-3 space-y-1">
                  <p className="font-heading font-semibold text-white text-xs">{c.name}</p>
                  <p className="text-[10px] text-smoke-400 font-mono">{c.hex}</p>
                  <p className="text-[10px] text-smoke-500">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradients */}
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-4">Gradients</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gradients.map((g) => (
              <div key={g.name} className="glass-card overflow-hidden">
                <div className="h-20 w-full" style={{ background: g.css }} />
                <div className="p-4 space-y-1">
                  <p className="font-heading font-semibold text-white text-sm">{g.name}</p>
                  <p className="text-[10px] text-smoke-400 font-mono break-all">{g.css}</p>
                  <p className="text-[11px] text-smoke-500 mt-1">{g.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════ 3. TYPOGRAPHY ═══════════ */}
        <Section title="Typography" subtitle="Two typefaces create hierarchy: Space Grotesk for impact, Inter for readability." index={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Heading Font */}
            <div className="glass-card p-8">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[10px] text-fire-400 uppercase tracking-widest font-heading font-semibold">Heading / Display</span>
                <span className="text-[10px] text-smoke-500 font-mono">Google Fonts (OFL)</span>
              </div>
              <p className="text-5xl font-heading font-bold text-white mb-2">Space Grotesk</p>
              <p className="text-lg font-heading text-smoke-300 mb-6">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p>
              <div className="space-y-2 border-t border-white/5 pt-4">
                <p className="text-xs text-smoke-500 font-mono">Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)</p>
                <p className="text-xs text-smoke-500">Use for: Logo, headings, navigation, buttons, stat numbers</p>
              </div>
            </div>

            {/* Body Font */}
            <div className="glass-card p-8">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[10px] text-fire-400 uppercase tracking-widest font-heading font-semibold">Body / UI</span>
                <span className="text-[10px] text-smoke-500 font-mono">Google Fonts (OFL)</span>
              </div>
              <p className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inter</p>
              <p className="text-lg text-smoke-300 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p>
              <div className="space-y-2 border-t border-white/5 pt-4">
                <p className="text-xs text-smoke-500 font-mono">Weights: 300–900 (variable)</p>
                <p className="text-xs text-smoke-500">Use for: Body copy, labels, descriptions, form inputs</p>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div className="glass-card p-8 mt-6">
            <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-6">Type Scale</h4>
            <div className="space-y-4">
              {[
                { label: 'Display', size: 'text-5xl', weight: 'font-bold', font: 'font-heading', example: 'Fire Safety Experts' },
                { label: 'H1', size: 'text-4xl', weight: 'font-bold', font: 'font-heading', example: 'Protecting Lives & Property' },
                { label: 'H2', size: 'text-3xl', weight: 'font-semibold', font: 'font-heading', example: 'Our Services' },
                { label: 'H3', size: 'text-2xl', weight: 'font-semibold', font: 'font-heading', example: 'Annual Fire Safety Statements' },
                { label: 'H4', size: 'text-xl', weight: 'font-semibold', font: 'font-heading', example: 'Compliance Made Simple' },
                { label: 'Body', size: 'text-base', weight: 'font-normal', font: '', example: 'Verex Fire Solutions provides comprehensive testing and maintenance.' },
                { label: 'Small', size: 'text-sm', weight: 'font-normal', font: '', example: 'Licensed & Fully Insured | ABN Registered' },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline gap-6 pb-4 border-b border-white/5 last:border-0">
                  <span className="text-[10px] text-fire-400 font-mono w-14 shrink-0 uppercase">{t.label}</span>
                  <p className={`${t.size} ${t.weight} ${t.font} text-white truncate`}>{t.example}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══════════ 4. USAGE EXAMPLES ═══════════ */}
        <Section title="Brand Applications" subtitle="How the brand system comes together in real components." index={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Card Mockup */}
            <div className="glass-card p-8">
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-6">Business Card (Front)</h4>
              <div className="bg-navy-DEFAULT rounded-xl p-8 border border-white/5 aspect-[1.6/1] flex flex-col justify-between">
                <VerexWordmark size="md" />
                <div>
                  <p className="text-sm font-heading font-semibold text-white">John Smith</p>
                  <p className="text-[11px] text-smoke-400">Fire Safety Technician</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-6">Business Card (Back)</h4>
              <div className="bg-navy-DEFAULT rounded-xl p-8 border border-white/5 aspect-[1.6/1] flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-[11px] text-smoke-400">info@verexfire.com.au</p>
                  <p className="text-[11px] text-smoke-400">Breakfast Point, NSW</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-fire-500/50 to-transparent" />
                  <span className="text-[9px] text-fire-400 tracking-[0.2em] uppercase font-heading">24/7 Emergency</span>
                </div>
              </div>
            </div>

            {/* Button Styles */}
            <div className="glass-card p-8 md:col-span-2">
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-6">Button System</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-fire"><span>Get a Quote</span></button>
                <button className="btn-outline-fire">Learn More</button>
                <button className="px-6 py-3 bg-white/5 text-smoke-300 rounded-xl border border-white/10 text-sm font-heading font-medium hover:bg-white/10 transition-colors">
                  Secondary Action
                </button>
                <a href="#" className="text-sm text-fire-400 hover:text-fire-300 font-heading font-medium transition-colors underline underline-offset-4 decoration-fire-500/30">
                  Text Link
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════════ 5. QUICK REFERENCE ═══════════ */}
        <Section title="Quick Reference" subtitle="Copy-paste values for development." index={4}>
          <div className="glass-card p-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-[10px] text-fire-400 uppercase tracking-wider font-heading">Token</th>
                  <th className="text-left py-3 px-4 text-[10px] text-fire-400 uppercase tracking-wider font-heading">Value</th>
                  <th className="text-left py-3 px-4 text-[10px] text-fire-400 uppercase tracking-wider font-heading">Tailwind</th>
                  <th className="text-left py-3 px-4 text-[10px] text-fire-400 uppercase tracking-wider font-heading">CSS Variable</th>
                </tr>
              </thead>
              <tbody className="text-smoke-300">
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Primary Orange</td><td className="py-3 px-4 font-mono text-xs">#F97316</td><td className="py-3 px-4 font-mono text-xs">fire-500</td><td className="py-3 px-4 font-mono text-xs">--fire-orange</td></tr>
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Signal Red</td><td className="py-3 px-4 font-mono text-xs">#E63946</td><td className="py-3 px-4 font-mono text-xs">ember-DEFAULT</td><td className="py-3 px-4 font-mono text-xs">--fire-red</td></tr>
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Ember Glow</td><td className="py-3 px-4 font-mono text-xs">#FF6B35</td><td className="py-3 px-4 font-mono text-xs">ember-light</td><td className="py-3 px-4 font-mono text-xs">--ember-glow</td></tr>
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Deep Navy</td><td className="py-3 px-4 font-mono text-xs">#0a1628</td><td className="py-3 px-4 font-mono text-xs">navy-DEFAULT</td><td className="py-3 px-4 font-mono text-xs">--navy-deep</td></tr>
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Heading Font</td><td className="py-3 px-4 font-mono text-xs">Space Grotesk</td><td className="py-3 px-4 font-mono text-xs">font-heading</td><td className="py-3 px-4 font-mono text-xs">--font-heading</td></tr>
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Body Font</td><td className="py-3 px-4 font-mono text-xs">Inter</td><td className="py-3 px-4 font-mono text-xs">font-body</td><td className="py-3 px-4 font-mono text-xs">--font-body</td></tr>
                <tr className="border-b border-white/5"><td className="py-3 px-4 font-mono text-xs">Border Radius</td><td className="py-3 px-4 font-mono text-xs">12px / 16px</td><td className="py-3 px-4 font-mono text-xs">rounded-xl / rounded-2xl</td><td className="py-3 px-4 font-mono text-xs">—</td></tr>
                <tr><td className="py-3 px-4 font-mono text-xs">Fire Gradient</td><td className="py-3 px-4 font-mono text-xs">135deg</td><td className="py-3 px-4 font-mono text-xs">bg-fire-gradient</td><td className="py-3 px-4 font-mono text-xs">—</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

      </div>
    </div>
  )
}

/* ────────── Section Wrapper ────────── */

function Section({
  title,
  subtitle,
  index,
  children,
}: {
  title: string
  subtitle: string
  index: number
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-fire-500 font-mono text-sm font-semibold">0{index + 1}</span>
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white">{title}</h2>
      </div>
      <p className="text-smoke-400 text-sm mb-8 ml-10">{subtitle}</p>
      <div className="ml-0 lg:ml-10">
        {children}
      </div>
    </motion.section>
  )
}
