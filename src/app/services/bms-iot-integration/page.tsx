'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'Protocol Stack Analysis & Design',
    description:
      'Deep analysis of existing building management protocols (BACnet/IP, Modbus TCP, LonWorks) to design interoperable integration layers that bridge fire systems with HVAC, access control, and lighting.',
  },
  {
    step: '02',
    title: 'IoT Mesh Network Architecture',
    description:
      'Design and deployment of LoRaWAN and Zigbee mesh sensor networks for environmental monitoring — temperature, humidity, particulate matter, and gas concentration mapping across building envelopes.',
  },
  {
    step: '03',
    title: 'Edge Computing Node Development',
    description:
      'Development of edge computing nodes positioned at network boundaries for latency-critical fire detection responses, reducing cloud round-trip dependencies to sub-millisecond local processing.',
  },
  {
    step: '04',
    title: 'Cloud SCADA & API Gateway Deployment',
    description:
      'Cloud-based SCADA dashboard development with MQTT broker architecture for high-throughput sensor data ingestion and API gateway services for cross-system integration.',
  },
  {
    step: '05',
    title: 'End-to-End Validation & Monitoring',
    description:
      'Comprehensive integration testing under simulated fire scenarios with continuous telemetry monitoring to validate response time SLAs and data integrity across all system boundaries.',
  },
]

const capabilities = [
  {
    title: 'BACnet/IP & Modbus TCP',
    description:
      'Custom protocol stack development enabling seamless bidirectional communication between fire panels and building management systems across IP networks.',
  },
  {
    title: 'LoRaWAN Sensor Networks',
    description:
      'Long-range, low-power mesh sensor deployments for environmental monitoring with multi-year battery life and building-wide coverage from minimal gateway infrastructure.',
  },
  {
    title: 'MQTT Broker Architecture',
    description:
      'High-throughput message broker systems capable of ingesting millions of sensor data points per minute with guaranteed delivery and topic-based routing.',
  },
  {
    title: 'Edge Computing Nodes',
    description:
      'Latency-critical processing units deployed at the network edge, enabling sub-millisecond fire detection decisions without cloud dependency.',
  },
]

const standards = [
  'ASHRAE 135 — BACnet: A Data Communication Protocol for Building Automation and Control Networks',
  'Modbus Application Protocol Specification V1.1b3',
  'IEEE 802.15.4 — Low-Rate Wireless Personal Area Networks (Zigbee PHY/MAC)',
  'LoRaWAN Specification v1.0.4 — LoRa Alliance',
  'MQTT Version 5.0 — OASIS Standard',
  'IEC 62443 — Industrial Communication Networks: Network and System Security',
]

export default function BMSIoTIntegrationPage() {
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
              BMS &amp; IoT Systems Integration Research
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Developing protocol stacks, IoT mesh sensor networks, cloud SCADA platforms,
              and edge computing architectures that unify fire safety systems with broader
              building intelligence infrastructure.
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
                  The BMS &amp; IoT Systems Integration division bridges the gap between fire safety
                  infrastructure and modern building intelligence platforms. Our research focuses on
                  BACnet/IP and Modbus TCP protocol stack development, enabling fire panels to
                  communicate natively with HVAC, access control, and lighting management systems.
                </p>
                <p>
                  We design and deploy IoT mesh sensor networks using LoRaWAN and Zigbee
                  technologies for continuous environmental monitoring — mapping temperature,
                  humidity, particulate matter, and gas concentrations across entire building
                  envelopes. These sensor networks feed into cloud-based SCADA dashboards that
                  provide real-time fire system telemetry to facility managers and first responders.
                </p>
                <p>
                  For latency-critical applications, our edge computing nodes process fire
                  detection data locally, eliminating cloud round-trip delays. API gateway
                  development enables cross-system fire/HVAC/access control integration, while
                  our MQTT broker architecture handles high-throughput sensor data ingestion
                  across thousands of concurrent device connections.
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
              Our integration research pipeline from protocol analysis through deployment.
            </p>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
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
              Core capabilities from our BMS and IoT integration research programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
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
              Protocol specifications and security frameworks guiding our integration research.
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
              View Integration Research
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Need to integrate fire systems with your BMS platform or deploy IoT sensor
              networks for environmental monitoring? Our integration team is ready.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              View Integration Research
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
