'use client'

import {
  LogoConcept1,
  LogoConcept2,
  LogoConcept3,
  LogoConcept4,
  LogoConcept5,
  LogoLockup1,
  LogoLockup2,
  LogoLockup3,
  LogoLockup4,
  LogoLockup5,
} from '@/components/ui/logos/VerexLogoConcepts'

const concepts = [
  {
    id: 1,
    name: 'The Monolith',
    inspiration: 'Pentagram / Michael Bierut',
    description:
      'Two precision-cut parallelograms forming a monolithic V. The negative space between them creates an upward arrow — growth, protection, momentum. Pure corporate authority.',
    Icon: LogoConcept1,
    Lockup: LogoLockup1,
  },
  {
    id: 2,
    name: 'The Shield',
    inspiration: 'Wolff Olins',
    description:
      'A hexagonal shield with an abstracted V carved via negative space. Communicates protection, trust, and structural integrity — core fire safety values. Faceted geometry suggests precision engineering.',
    Icon: LogoConcept2,
    Lockup: LogoLockup2,
  },
  {
    id: 3,
    name: 'The Grid',
    inspiration: 'Massimo Vignelli / Swiss International Style',
    description:
      'Constructed from a modular grid system. The V is built from precisely placed geometric blocks — like architectural blueprints. Mathematical precision communicates reliability and methodical safety.',
    Icon: LogoConcept3,
    Lockup: LogoLockup3,
  },
  {
    id: 4,
    name: 'The Apex',
    inspiration: 'Landor / Aaron Draplin',
    description:
      'An inverted chevron with bold, confident strokes inside a circle-in-square tension container. Suggests verification and the apex of a structure. Heavy, boardroom-ready authority.',
    Icon: LogoConcept4,
    Lockup: LogoLockup4,
  },
  {
    id: 5,
    name: 'The Prism',
    inspiration: 'Sagmeister & Walsh / Paula Scher',
    description:
      'A three-dimensional V from two intersecting planes. Overlapping transparency creates a third color — depth, dimension, and the intersection of safety and innovation. The most contemporary concept.',
    Icon: LogoConcept5,
    Lockup: LogoLockup5,
  },
]

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-navy-DEFAULT pt-28 pb-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Logo Concepts
          </h1>
          <p className="text-smoke-400 text-lg max-w-2xl mx-auto">
            5 corporate-grade identity concepts for Verex Fire Solutions.
            Each designed with a distinct philosophy and visual language.
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="space-y-16">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 md:p-10"
            >
              {/* Concept Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-fire-500 font-heading font-bold text-sm">
                      CONCEPT {concept.id}
                    </span>
                    <span className="w-8 h-px bg-fire-500/30" />
                    <span className="text-smoke-500 text-xs uppercase tracking-wider">
                      {concept.inspiration}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {concept.name}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-smoke-400 text-sm leading-relaxed mb-10 max-w-3xl">
                {concept.description}
              </p>

              {/* Logo Display — Multiple Sizes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Icon at various sizes */}
                <div className="bg-navy-DEFAULT/60 rounded-xl p-8 border border-white/5">
                  <p className="text-[10px] text-smoke-500 uppercase tracking-widest mb-6">
                    Icon Scalability
                  </p>
                  <div className="flex items-end gap-6">
                    <concept.Icon size={24} />
                    <concept.Icon size={32} />
                    <concept.Icon size={40} />
                    <concept.Icon size={56} />
                    <concept.Icon size={80} />
                    <concept.Icon size={120} />
                  </div>
                </div>

                {/* Full lockup */}
                <div className="bg-navy-DEFAULT/60 rounded-xl p-8 border border-white/5">
                  <p className="text-[10px] text-smoke-500 uppercase tracking-widest mb-6">
                    Full Lockup
                  </p>
                  <div className="flex items-center h-full pb-6">
                    <concept.Lockup />
                  </div>
                </div>
              </div>

              {/* Usage on different backgrounds */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-6 flex items-center justify-center">
                  <concept.Icon size={48} />
                </div>
                <div className="bg-smoke-100 rounded-lg p-6 flex items-center justify-center">
                  <concept.Icon size={48} />
                </div>
                <div className="bg-gradient-to-br from-navy-DEFAULT to-navy-light rounded-lg p-6 flex items-center justify-center border border-white/5">
                  <concept.Icon size={48} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
