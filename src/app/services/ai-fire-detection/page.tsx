'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

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
      'Video-based convolutional neural networks trained to classify flame geometry, colour temperature, and flicker frequency with 99.2% accuracy on benchmark datasets.',
  },
  {
    title: 'RNN Smoke Analysis',
    description:
      'Recurrent neural network architectures model temporal smoke propagation dynamics, distinguishing between nuisance aerosols and genuine combustion products.',
  },
  {
    title: 'Sensor Fusion Engine',
    description:
      'Multi-modal Bayesian inference combining optical density, infrared thermal signatures, and electrochemical gas sensor readings for false alarm elimination.',
  },
  {
    title: 'Predictive Circuit Analytics',
    description:
      'Machine learning models forecast detection circuit degradation using impedance analysis, sensor drift tracking, and environmental compensation algorithms.',
  },
]

const standards = [
  'AS 7240 — Fire detection and alarm systems',
  'AS 1670.1 — Fire detection, warning, control and intercom systems (system design, installation and commissioning)',
  'ISO 7240 — Fire detection and alarm systems (international)',
  'NFPA 72 — National Fire Alarm and Signaling Code',
  'UL 268 — Smoke Detectors for Fire Alarm Systems',
  'EN 54 — Fire detection and fire alarm systems (European)',
]

export default function AIFireDetectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              R&amp;D Division
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              AI Fire Detection &amp; Predictive Analytics
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Advancing machine learning and deep neural network architectures for
              next-generation fire signature classification, multi-spectral sensor fusion,
              and predictive failure analytics across detection infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Research Overview
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-navy-600 text-lg leading-relaxed">
                <p>
                  The AI Fire Detection division develops machine learning models that fundamentally
                  redefine how fire events are identified, classified, and predicted. Our research
                  spans convolutional neural networks (CNNs) for real-time video-based flame
                  detection, recurrent neural networks (RNNs) for temporal smoke pattern analysis,
                  and sensor fusion algorithms that combine optical, thermal, and electrochemical
                  gas sensor data into a unified inference pipeline.
                </p>
                <p>
                  Our training datasets encompass over 2 million fire scenarios captured from
                  controlled burn laboratories, including smouldering, flaming, and explosive
                  combustion events across diverse fuel types and environmental conditions. VESDA
                  (Very Early Smoke Detection Apparatus) AI integration enables predictive failure
                  analytics for detection circuit degradation before hardware faults manifest.
                </p>
                <p>
                  By deploying multi-modal AI inference at the edge, we eliminate false alarms
                  that plague conventional threshold-based detection systems — achieving a 97%
                  reduction in nuisance alarms while maintaining sub-second response times for
                  genuine fire events.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Methodology */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              Technical Methodology
            </h2>
            <p className="text-navy-600 text-lg text-center max-w-2xl mx-auto mb-16">
              Our research pipeline from data acquisition through deployment and continuous validation.
            </p>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-orange-200 hidden md:block" />

            <div className="space-y-12">
              {methodology.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.1} direction="left">
                  <div className="relative flex gap-6">
                    <div className="flex-shrink-0 relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-navy-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-navy-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Outcomes */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              Key Research Outcomes
            </h2>
            <p className="text-navy-600 text-lg text-center max-w-2xl mx-auto mb-16">
              Core capabilities developed through our AI fire detection research programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Referenced */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              Standards &amp; Publications Referenced
            </h2>
            <p className="text-navy-600 text-lg text-center max-w-2xl mx-auto mb-12">
              Our research is grounded in and contributes to the following regulatory frameworks.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                {standards.map((standard) => (
                  <li key={standard} className="flex items-start gap-3 text-navy-700">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Our AI Research
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Interested in collaborating on AI-powered fire detection research or deploying
              our models in your infrastructure? Speak with our research team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Explore Our AI Research
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
