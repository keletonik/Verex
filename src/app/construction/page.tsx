'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Link from 'next/link'

const wetSystems = [
  {
    title: 'Automatic Fire Sprinkler Systems',
    standard: 'AS 2118.1 / AS 2118.4',
    description:
      'Design, installation, and commissioning of wet-pipe, dry-pipe, pre-action, and deluge sprinkler systems for all building classifications. We size hydraulic calculations, select heads, and coordinate with hydraulic engineers to ensure adequate water supply and system performance under BCA/NCC requirements.',
  },
  {
    title: 'Fire Hydrant Systems',
    standard: 'AS 2419.1',
    description:
      'Complete fire hydrant system installation including internal and external hydrants, booster assemblies, isolating valves, block plans, and signage. We perform hydrostatic testing, flow testing, and ensure compliance with Fire & Rescue NSW operational requirements for firefighter access.',
  },
  {
    title: 'Fire Hose Reel Systems',
    standard: 'AS 2441',
    description:
      'Supply and installation of fire hose reel systems including 36-metre coverage verification, flow rate testing (minimum 0.33 L/s), nozzle shut-off testing, and signage. Hose reels are installed to provide first-attack firefighting capability for building occupants.',
  },
  {
    title: 'Fire Pump Sets & Tank Systems',
    standard: 'AS 2941',
    description:
      'Installation and commissioning of diesel and electric fire pump sets, jockey pumps, suction tanks, and combined sprinkler/hydrant water storage systems. We conduct performance testing including flow/pressure curves, automatic start sequencing, and duty/standby changeover verification.',
  },
  {
    title: 'Wet Chemical & Foam Systems',
    standard: 'AS 2118.2 / AS 2118.3',
    description:
      'Specialist wet chemical suppression systems for commercial kitchens and foam-based systems for flammable liquid hazards. Includes hood and duct protection, manual release stations, gas shut-off interlocks, and compliance with kitchen exhaust ventilation standards.',
  },
  {
    title: 'Deluge & Water Mist Systems',
    standard: 'AS 2118.5',
    description:
      'Design and installation of deluge and water mist suppression systems for high-hazard applications including transformer bays, conveyor systems, and industrial processes. Includes detection integration, valve control, and drainage design.',
  },
]

const drySystems = [
  {
    title: 'Fire Detection & Alarm Systems (FDAS)',
    standard: 'AS 1670.1 / AS 1670.4',
    description:
      'Design, installation, and commissioning of addressable and conventional fire detection and alarm systems. Includes smoke detectors, heat detectors, beam detectors, aspirating smoke detection (ASD/VESDA), manual call points, fire indicator panels (FIP), and integration with building management systems (BMS).',
  },
  {
    title: 'Emergency Warning & Intercommunication Systems (EWIS)',
    standard: 'AS 1670.4',
    description:
      'Installation of emergency warning and intercommunication systems for buildings requiring occupant warning beyond simple alarm bells. Includes warden intercommunication phones (WIP), public address speakers, alert/evacuate tone sequencing, and integration with the fire indicator panel.',
  },
  {
    title: 'Emergency & Exit Lighting',
    standard: 'AS 2293.1 / AS 2293.3',
    description:
      'Supply and installation of emergency luminaires, illuminated exit signs, and central battery systems. We design photometric layouts to achieve minimum 0.2 lux on evacuation routes and verify 90-minute battery duration compliance. Includes LED upgrade programs for existing buildings.',
  },
  {
    title: 'Portable Fire Extinguishers',
    standard: 'AS 2444',
    description:
      'Selection, placement, and installation of portable fire extinguishers based on hazard classification and travel distance requirements. Includes water, foam, dry chemical, CO2, and wet chemical types. We provide extinguisher location signage, ID tags, and maintenance scheduling.',
  },
  {
    title: 'Fire Blankets & First-Attack Equipment',
    standard: 'AS/NZS 3504',
    description:
      'Supply and installation of fire blankets for commercial kitchens, laboratories, and residential common areas. Includes correct placement, signage, and integration with overall first-attack firefighting strategy.',
  },
  {
    title: 'Gaseous Suppression Systems',
    standard: 'AS 4214 / ISO 14520',
    description:
      'Design and installation of clean agent gaseous suppression systems (FM-200, Novec 1230, inert gas) for server rooms, data centres, switch rooms, and archive storage. Includes room integrity testing, detection integration, abort switches, and pre-discharge warning systems.',
  },
]

const passiveSystems = [
  {
    title: 'Fire-Rated Walls, Floors & Ceilings',
    standard: 'AS 1530.4 / BCA Spec C1.1',
    description:
      'Construction of fire-rated compartment barriers including fire-resistant level (FRL) walls, floors, shafts, and ceilings. We verify FRL ratings (structural adequacy / integrity / insulation) against BCA Table Spec C1.1 requirements for the building classification and rise in storeys.',
  },
  {
    title: 'Fire Doors & Fire Windows',
    standard: 'AS 1905.1 / AS 1530.4',
    description:
      'Supply, installation, and commissioning of fire-rated doorsets including hinged, sliding, and roller shutter fire doors. Includes self-closing devices, smoke seals, hold-open devices with detector release, and fire-rated glazing assemblies. All installations certified to the required FRL.',
  },
  {
    title: 'Penetration Sealing & Firestopping',
    standard: 'AS 4072.1 / AS 1530.4',
    description:
      'Fire-rated sealing of all service penetrations through fire-rated construction including electrical cables, plumbing pipes, mechanical ducts, and mixed services. We use tested and certified firestopping products (collars, wraps, sealants, pillows, boards) and provide penetration sealing certificates.',
  },
  {
    title: 'Smoke Management & Pressurisation',
    standard: 'AS 1668.1 / BCA Spec E2.2b',
    description:
      'Design and installation of smoke hazard management systems including stairwell pressurisation, zone smoke control, smoke exhaust, and natural ventilation solutions. Includes commissioning, air velocity testing, and pressure differential verification.',
  },
  {
    title: 'Fire Collars, Wraps & Dampers',
    standard: 'AS 1530.4 / AS 1682.1',
    description:
      'Installation of intumescent fire collars on PVC pipes, fire-rated wraps on combustible services, and fire/smoke dampers in HVAC ductwork. Includes actuator testing, fusible link verification, and integration with the fire detection system for automatic damper closure.',
  },
  {
    title: 'Non-Combustible Cladding & Facades',
    standard: 'BCA C1.9 / AS 5113',
    description:
      'Assessment and installation of compliant external wall cladding systems following the NSW Cladding Taskforce requirements. Includes facade material testing certification (AS 5113), cavity barrier installation, and compliance with the prohibition on certain combustible cladding materials.',
  },
]

export default function ConstructionPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              Construction Fire Services
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              Wet &amp; Dry Fire Systems for{' '}
              <span className="gradient-text">Construction Projects</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              End-to-end fire protection design, installation, and commissioning for new
              construction, major refurbishments, and fitout projects. From wet suppression
              systems to dry detection networks and passive compartmentalisation — delivered
              by C10-licensed fire protection contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Project Scope Banner */}
      <section className="relative py-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ember-dark via-fire-700 to-ember-dark" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M2 20h20"/>
                  <path d="M5 20V8l7-5 7 5v12"/>
                  <path d="M9 20v-4h6v4"/>
                  <path d="M9 12h6"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-heading font-semibold text-sm">
                  From DA to Occupation Certificate
                </p>
                <p className="text-white/70 text-xs">
                  We support construction projects at every stage — design, procurement, installation, commissioning, and handover.
                </p>
              </div>
            </div>
            <Link href="/contact" className="flex-shrink-0 px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Wet Fire Systems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Wet Fire Systems
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Water-Based{' '}
                <span className="gradient-text">Suppression</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Wet fire protection systems use water or water-based agents as the primary
                suppression medium. These systems are the backbone of active fire protection
                in most commercial, residential, and industrial buildings.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wetSystems.map((system, index) => (
              <ScrollReveal key={system.title} delay={index * 0.08}>
                <div className="card p-8 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z"/>
                      </svg>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-fire-500/10 text-fire-600 border border-fire-500/15 font-mono">
                      {system.standard}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mb-3 group-hover:text-fire-600 transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dry Fire Systems */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Dry Fire Systems
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Detection, Alarm &{' '}
                <span className="gradient-text">Warning Systems</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Dry fire protection systems encompass all non-water-based active fire safety
                measures including detection, alarm, warning, emergency lighting, portable
                extinguishers, and gaseous suppression. These systems detect fire, alert
                occupants, and enable safe evacuation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drySystems.map((system, index) => (
              <ScrollReveal key={system.title} delay={index * 0.08}>
                <div className="card p-8 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                        <path d="M12 9v4"/>
                        <path d="M12 17h.01"/>
                      </svg>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-fire-500/10 text-fire-600 border border-fire-500/15 font-mono">
                      {system.standard}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mb-3 group-hover:text-fire-600 transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Passive Fire Protection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Passive Fire Protection
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Compartmentalisation &{' '}
                <span className="gradient-text">Fire Barriers</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Passive fire protection systems contain fire and smoke within defined
                compartments without requiring activation. They are integral to the building
                fabric and include fire-rated construction, fire doors, penetration seals,
                and smoke management systems.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passiveSystems.map((system, index) => (
              <ScrollReveal key={system.title} delay={index * 0.08}>
                <div className="card p-8 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-fire-50 flex items-center justify-center text-fire-600 group-hover:bg-fire-100 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-fire-500/10 text-fire-600 border border-fire-500/15 font-mono">
                      {system.standard}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mb-3 group-hover:text-fire-600 transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Project Stages */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Project Lifecycle
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                How We Support Your{' '}
                <span className="gradient-text">Build</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Design & Specification',
                description: 'Fire protection system design, hydraulic calculations, specification writing, and BCA compliance assessment during the DA/CC phase.',
              },
              {
                step: '02',
                title: 'Procurement & Coordination',
                description: 'Equipment procurement, subcontractor coordination, builder liaison, and construction program integration for fire services.',
              },
              {
                step: '03',
                title: 'Installation & Testing',
                description: 'C10-licensed installation of all wet, dry, and passive fire protection systems with progressive inspection and testing.',
              },
              {
                step: '04',
                title: 'Commissioning & Handover',
                description: 'Integrated systems testing, commissioning certification, as-built documentation, O&M manuals, and fire safety schedule preparation for OC.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div className="card p-8 h-full group">
                  <span className="text-3xl font-heading font-bold text-fire-600/30 group-hover:text-fire-600/50 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mt-3 mb-3 group-hover:text-fire-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
              Planning a Construction{' '}
              <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-lg text-smoke-600 mb-8">
              Get expert fire protection from design through to handover. Our C10-licensed
              team delivers fully compliant wet, dry, and passive fire systems for projects
              of any scale across Sydney and NSW.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Discuss Your Project</span>
              </Link>
              <a href="tel:0405605196" className="btn-outline-fire">
                Call 0405 605 196
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
