'use client'

import ScrollReveal from '@/components/ScrollReveal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest scientific and technical standards in every research program, publication, and engineered solution — because fire safety leaves no room for compromise.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description:
      'Transparent research methodologies, rigorous peer review, and unwavering adherence to scientific principles — our reputation is built on trust.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'From AI-powered detection algorithms to computational fire dynamics simulations, we continually push the frontier of what technology can achieve in fire safety.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description:
      'We collaborate with industry leaders, academic institutions, and engineering teams — acting as a genuine research and development partner to advance fire safety globally.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Kaspar Tavitian',
    role: 'Director & Founder | AI Research Lead',
    credentials: 'Bachelor of Engineering (Structural & Physics), Polytechnic University of Yerevan',
    bio: 'Director and founder of Verex Fire Solutions, Kaspar brings over a decade of hands-on leadership in the fire safety industry, combining deep technical expertise in fire engineering systems with a research-driven approach to AI. He holds a Bachelor of Engineering with a major in Structural Engineering and Physics from the Polytechnic University of Yerevan, and has since led the design, commissioning, and integration of mission-critical fire-life-safety systems across commercial, industrial, and high-risk built environments. Kaspar is also the founder of Mentaris AI — a machine learning venture focused on cognitive inference systems — which was acquired by a large Chinese technology firm in March 2026. Beyond Verex, he actively contributes to the innovation ecosystem through multiple angel investment programs, backing early-stage founders in applied AI, sensor technology, and industrial safety. As AI Research Lead at Verex, he directs the laboratory\u2019s core research agenda across physics-informed neural networks, neuromorphic detection, and computational fire dynamics.',
  },
  {
    name: 'James Whitfield',
    role: 'Chief Research Officer',
    credentials: 'PhD (Fire Safety Engineering), FPAA Accredited Practitioner',
    bio: 'Pioneering fire safety research, leading advances in AI-driven detection, computational fire dynamics, and next-generation suppression technologies.',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Director of AI Research',
    credentials: 'PhD (Machine Learning), MIFireE, CPEng',
    bio: 'Leads the AI fire detection research division, developing next-generation machine learning models for early fire event recognition and predictive analytics.',
  },
  {
    name: 'Michael Torres',
    role: 'Head of Computational Fire Engineering',
    credentials: 'PhD (Fire Dynamics), FPAA Accredited, CFD Specialist',
    bio: 'Directs computational fire dynamics research and simulation programs, developing advanced CFD models for fire behaviour prediction across complex building geometries.',
  },
  {
    name: 'Rebecca Osei',
    role: 'Principal Fire Engineer',
    credentials: 'PhD (Structural Fire Engineering), FPAA Accredited, CPEng',
    bio: 'Leads performance-based fire engineering research using FDS, PyroSim, and thermal finite element analysis. Specialises in structural fire response modelling, steel connection behaviour at elevated temperatures, and concrete spalling prediction.',
  },
  {
    name: 'Daniel Park',
    role: 'Research Programme Manager',
    credentials: 'MSc (Cybersecurity), MBA, PMP',
    bio: 'Manages cross-divisional research programmes including federated learning for privacy-preserving fire risk intelligence and neuromorphic computing initiatives on Intel Loihi 2 hardware. Coordinates industry and academic partnerships.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="relative overflow-hidden bg-navy-900 pb-24 pt-36 text-white lg:pb-32 lg:pt-44">
        {/* Subtle grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 0H0v60\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'.5\'/%3E%3C/svg%3E")' }} />
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
              About Verex Fire Solutions
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Scientific Research for <br className="hidden sm:block" />
              <span className="text-orange-400">Next-Generation Fire Safety</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Verex Fire Solutions is a world-class research laboratory advancing fire safety
              through physics-informed neural networks, neuromorphic computing, federated
              machine learning, and computational fire dynamics. Our interdisciplinary research
              teams publish in leading journals and develop the foundational technologies —
              from spiking neural network detectors to autonomous suppression orchestration —
              that will define the next era of fire-life-safety systems globally. Our name — a
              portmanteau of <em>Verify</em> and <em>Expert</em> — reflects our commitment to
              evidence-based, rigorously validated fire science.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- MISSION & VALUES ---- */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mission narrative */}
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal direction="up">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
                Our Mission &amp; Values
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Advancing the Science of Fire Safety
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-navy-900/60">
                Our mission is to push the boundaries of fire safety science through rigorous
                research, AI-driven innovation, and computational engineering. We develop
                next-generation detection systems, simulation models, and integrated platforms
                that redefine how buildings are protected — translating cutting-edge research
                into real-world fire safety breakthroughs.
              </p>
            </ScrollReveal>
          </div>

          {/* Values grid */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} direction="up" delay={0.1 * i}>
                <div className="group rounded-2xl border border-navy-900/5 bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- OUR TEAM ---- */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal direction="up">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
                Our Team
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Research Leaders, Engineering Pioneers
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-navy-900/60">
                Every member of our team holds advanced research credentials and brings
                deep expertise across AI, computational engineering, and fire safety science.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={0.1 * i}>
                <div className="rounded-2xl border border-navy-900/5 bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/5">
                  {/* Avatar placeholder */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-heading text-xl font-bold text-white">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-semibold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-orange-600">{member.role}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-900/40">
                    {member.credentials}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-900/60">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CAREERS ---- */}
      <section id="careers" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <ScrollReveal direction="up">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
                  Careers
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                  Build Your Career in Fire Science
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-navy-900/60">
                  We are always looking for researchers and engineers who share our commitment to
                  advancing fire safety science. At Verex, you will work alongside PhD-level fire
                  engineers, AI researchers, and embedded systems specialists in a culture that values
                  scientific rigour, innovation, and interdisciplinary collaboration.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="rounded-2xl border border-navy-900/5 bg-slate-50 p-8 lg:p-10">
                <h3 className="font-heading text-xl font-semibold text-navy-900">
                  Why Join Verex?
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    'Research-focused environment with publication opportunities',
                    'Collaborative, interdisciplinary team culture',
                    'Access to advanced simulation and AI compute infrastructure',
                    'Conference attendance and professional development funding',
                    'Competitive remuneration and flexible working arrangements',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-900/70">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="mailto:info@verexfire.com.au?subject=Career%20Enquiry"
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-navy-800"
                  >
                    Get in Touch
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
