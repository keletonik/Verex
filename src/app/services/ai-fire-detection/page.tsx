'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import SplitHeading from '@/components/SplitHeading'
import GradientOrbs from '@/components/GradientOrbs'
import FluidCanvas from '@/components/FluidCanvas'
import Marquee from '@/components/Marquee'
import PerspectiveCard from '@/components/PerspectiveCard'
import MagneticLink from '@/components/MagneticLink'
import ScrollVelocity from '@/components/ScrollVelocity'

const methodology = [
  {
    step: '01',
    title: 'Data Acquisition & Labelling',
    description:
      'Fire scenario data is captured from controlled burn laboratories, multi-spectral cameras, gas chromatography sensors, and real-world incident databases. Over 2 million labelled fire scenarios form the training corpus.',
  },
  {
    step: '02',
    title: 'Model Architecture Design',
    description:
      'Convolutional neural networks (CNNs) process video feeds for flame geometry recognition while recurrent neural networks (RNNs) analyse temporal smoke propagation patterns across sequential frames.',
  },
  {
    step: '03',
    title: 'Sensor Fusion & Multi-Modal Inference',
    description:
      'Optical, thermal, and gas sensor streams are fused through a Bayesian inference engine, dramatically reducing false alarm rates while maintaining sub-second detection latency.',
  },
  {
    step: '04',
    title: 'VESDA AI Integration & Deployment',
    description:
      'Trained models are deployed to edge devices integrated with VESDA (Very Early Smoke Detection Apparatus) systems, providing predictive failure analytics for detection circuit degradation.',
  },
  {
    step: '05',
    title: 'Continuous Learning & Validation',
    description:
      'Deployed models undergo continuous evaluation against new fire scenarios, with automated retraining pipelines ensuring detection accuracy improves over each operational cycle.',
  },
]

const capabilities = [
  {
    title: 'CNN Flame Detection',
    description:
      'Video-based convolutional neural networks trained to classify flame geometry, colour temperature, and flicker frequency across benchmark datasets.',
    metric: '97.3%',
    metricLabel: 'precision',
  },
  {
    title: 'RNN Smoke Analysis',
    description:
      'Recurrent neural network architectures model temporal smoke propagation dynamics, distinguishing between nuisance aerosols and genuine combustion products.',
    metric: '< 800ms',
    metricLabel: 'latency',
  },
  {
    title: 'Sensor Fusion Engine',
    description:
      'Multi-modal Bayesian inference combining optical density, infrared thermal signatures, and electrochemical gas sensor readings for false alarm elimination.',
    metric: '−97%',
    metricLabel: 'false alarms',
  },
  {
    title: 'Predictive Circuit Analytics',
    description:
      'Machine learning models forecast detection circuit degradation using impedance analysis, sensor drift tracking, and environmental compensation algorithms.',
    metric: '+38d',
    metricLabel: 'fault foresight',
  },
]

const standards = [
  'AS 7240 — Fire detection and alarm systems',
  'AS 1670.1 — Fire detection, warning, control and intercom systems',
  'ISO 7240 — Fire detection and alarm systems (international)',
  'NFPA 72 — National Fire Alarm and Signaling Code',
  'UL 268 — Smoke Detectors for Fire Alarm Systems',
  'EN 54 — Fire detection and fire alarm systems (European)',
]

const stack = [
  'PyTorch',
  'TensorFlow',
  'CUDA',
  'ONNX Runtime',
  'Intel Loihi 2',
  'OpenCV',
  'Bayesian Fusion',
  'VESDA Edge',
  'AS 7240',
  'NFPA 72',
]

export default function AIFireDetectionPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroFade = useTransform(heroProgress, [0, 1], [1, 0])
  const heroLift = useTransform(heroProgress, [0, 1], [0, -120])
  const heroBlur = useTransform(heroProgress, [0, 1], ['blur(0px)', 'blur(8px)'])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden bg-navy-950 grain"
      >
        <div className="absolute inset-0">
          <FluidCanvas
            className="absolute inset-0 h-full w-full"
            density={1.4}
          />
          <GradientOrbs variant="intense" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950" />
        </div>

        <motion.div
          style={{ opacity: heroFade, y: heroLift, filter: heroBlur }}
          className="layer-content mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-20 pt-40 lg:px-8"
        >
          <ScrollReveal direction="fade">
            <p className="label-mono mb-6">
              <span className="text-orange-400">{'>'}</span>{' '}
              research.division / ai.fire.detection
            </p>
          </ScrollReveal>

          <SplitHeading
            text="We teach machines to see fire before it becomes one."
            as="h1"
            className="font-heading text-4xl font-bold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
          />

          <ScrollReveal delay={0.5}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">
              CNN flame geometry. RNN smoke temporality. Multi-modal Bayesian fusion.
              Sub-second inference deployed to edge silicon &mdash; trained on
              two million labelled combustion events.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticLink href="/contact" className="btn-primary text-base">
                Brief Our Research Team
              </MagneticLink>
              <MagneticLink href="#methodology" className="btn-secondary">
                Read the Methodology
              </MagneticLink>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <div className="mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">
              {[
                { v: '2.1M', l: 'labelled events' },
                { v: '97.3%', l: 'detection precision' },
                { v: '< 800ms', l: 'inference latency' },
                { v: '−97%', l: 'false alarms' },
              ].map((m) => (
                <div key={m.l} className="bg-navy-950/60 p-6 backdrop-blur">
                  <div className="font-heading text-3xl font-bold text-white sm:text-4xl">
                    {m.v}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="layer-content absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-navy-300">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
              Scroll
            </span>
            <motion.div
              className="h-10 w-px bg-gradient-to-b from-orange-400 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── VELOCITY MARQUEE ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-10">
        <ScrollVelocity className="font-heading text-7xl font-bold tracking-tight text-stroke sm:text-8xl lg:text-9xl">
          {'  fire.intelligence  ·  vision.ai  ·  edge.inference  '}
        </ScrollVelocity>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-32">
        <GradientOrbs variant="subtle" />
        <div className="layer-content mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <p className="label-mono mb-6">
                <span className="text-orange-400">{'>'}</span> overview
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
                A research pipeline, not a product brochure.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-navy-200">
                <p>
                  The AI Fire Detection division develops machine learning models that
                  redefine how fire events are identified, classified, and predicted &mdash;
                  spanning convolutional networks for real-time flame recognition,
                  recurrent networks for temporal smoke analysis, and sensor fusion
                  algorithms that combine optical, thermal and electrochemical streams
                  into a unified inference pipeline.
                </p>
                <p>
                  Training data covers more than two million labelled combustion events
                  captured across controlled burn laboratories &mdash; smouldering,
                  flaming and explosive scenarios across diverse fuels and conditions.
                  VESDA AI integration extends the same models into predictive failure
                  analytics for detection circuit degradation before hardware faults
                  manifest.
                </p>
                <p>
                  By deploying multi-modal inference at the edge, we eliminate false
                  alarms that plague threshold-based systems &mdash; a 97% reduction in
                  nuisance events while sustaining sub-second response on genuine fire
                  signatures.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-white/5 bg-navy-900/40 py-8">
        <Marquee
          speed={50}
          className="mask-fade-x"
          items={stack.map((s) => (
            <span
              key={s}
              className="font-mono text-sm uppercase tracking-[0.3em] text-navy-300"
            >
              {s} <span className="text-orange-500/50">·</span>
            </span>
          ))}
        />
      </section>

      {/* ── METHODOLOGY (sticky timeline) ────────────────────────────── */}
      <section
        id="methodology"
        className="relative overflow-hidden bg-navy-950 py-32"
      >
        <GradientOrbs variant="subtle" />
        <div className="layer-content mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24 max-w-3xl">
            <ScrollReveal>
              <p className="label-mono mb-6">
                <span className="text-orange-400">{'>'}</span> methodology
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-6xl">
                From raw burn telemetry to deployed firmware.
              </h2>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0 lg:left-1/2 lg:-translate-x-1/2" />
            <div className="space-y-24 lg:space-y-32">
              {methodology.map((item, i) => (
                <MethodologyRow key={item.step} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES (perspective cards) ─────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-32">
        <GradientOrbs variant="default" />
        <div className="layer-content mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <ScrollReveal>
              <p className="label-mono mb-6">
                <span className="text-orange-400">{'>'}</span> research outcomes
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
                Capabilities engineered, measured, deployed.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 perspective-card">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <PerspectiveCard className="group h-full">
                  <div className="glass-card h-full p-8">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                        {c.title}
                      </h3>
                      <div className="text-right">
                        <div className="font-heading text-3xl font-bold gradient-text leading-none">
                          {c.metric}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-navy-400">
                          {c.metricLabel}
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-navy-300">
                      {c.description}
                    </p>
                    <div className="hairline mt-8" />
                    <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-navy-500">
                      <span>module / verex.ai</span>
                      <span className="text-orange-400">live</span>
                    </div>
                  </div>
                </PerspectiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARDS ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-32">
        <div className="layer-content mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-16">
            <ScrollReveal>
              <p className="label-mono mb-6">
                <span className="text-orange-400">{'>'}</span> standards / publications
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
                Built against the standards that govern fire safety.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-2">
            {standards.map((s, i) => (
              <ScrollReveal key={s} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-navy-950/80 p-6">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-orange-500/40 text-orange-400">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-navy-200">{s}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-32 grain">
        <div className="absolute inset-0">
          <FluidCanvas className="absolute inset-0 h-full w-full" density={0.7} interactive={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        </div>
        <div className="layer-content mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <p className="label-mono mb-6">
              <span className="text-orange-400">{'>'}</span> collaborate
            </p>
            <SplitHeading
              text="Bring us a fire detection problem worth solving."
              as="h2"
              className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-6xl"
            />
            <p className="mx-auto mt-8 max-w-xl text-lg text-navy-300">
              Research partnerships, model deployments, custom inference pipelines &mdash;
              speak with the team building it.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <MagneticLink href="/contact" className="btn-primary text-base">
                Start a Research Partnership
              </MagneticLink>
              <Link href="/services" className="btn-secondary">
                Explore All Divisions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

function MethodologyRow({
  item,
  index,
}: {
  item: { step: string; title: string; description: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.5])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`relative grid grid-cols-1 gap-6 lg:grid-cols-2 ${isLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}
    >
      <div className={`relative pl-16 lg:pl-0 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-orange-400">
          step / {item.step}
        </span>
        <h3 className="mt-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-navy-300">
          {item.description}
        </p>
      </div>

      <div className="relative hidden lg:block" />

      {/* Node on the line */}
      <div
        className="absolute left-6 top-2 z-10 lg:left-1/2 lg:-translate-x-1/2"
      >
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/40 bg-navy-950 font-mono text-sm font-bold text-orange-400">
          {item.step}
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange-500/20" />
        </div>
      </div>
    </motion.div>
  )
}
