'use client'

import ScrollReveal from '@/components/ScrollReveal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest technical standards on every inspection, report, and recommendation — because fire safety leaves no room for compromise.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description:
      'Transparent reporting, honest assessments, and unwavering adherence to Australian Standards — our reputation is built on trust.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'From digital compliance portals to streamlined AFSS workflows, we continually invest in smarter ways to protect people and property.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description:
      'We embed ourselves alongside building owners, strata managers, and facility teams — acting as a genuine extension of your compliance operations.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'James Whitfield',
    role: 'Managing Director',
    credentials: 'FPAA Accredited Practitioner, BEng (Fire Safety)',
    bio: 'Over 18 years of fire safety leadership across commercial, residential, and industrial sectors throughout Greater Sydney.',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Senior Fire Safety Engineer',
    credentials: 'MIFireE, CPEng, FPAA Level 3',
    bio: 'Specialises in complex compliance assessments and performance-based fire engineering solutions for high-rise and mixed-use developments.',
  },
  {
    name: 'Michael Torres',
    role: 'Compliance Manager',
    credentials: 'FPAA Accredited, Cert IV Fire Systems Inspection',
    bio: 'Manages AFSS programs and AS 1851 inspection schedules for a portfolio of over 200 buildings across the Sydney metropolitan area.',
  },
  {
    name: 'Rebecca Osei',
    role: 'Operations Manager',
    credentials: 'Diploma of Building & Construction, FPAA Member',
    bio: 'Ensures seamless coordination of field teams, equipment logistics, and quality assurance across every engagement.',
  },
  {
    name: 'Daniel Park',
    role: 'Client Relations Manager',
    credentials: 'FPAA Associate, MBA',
    bio: 'Dedicated to building lasting partnerships with strata managers, facility teams, and building owners throughout NSW.',
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
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              About Verex Fire Solutions
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Precision-Engineered <br className="hidden sm:block" />
              <span className="text-cyan-400">Fire Compliance</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Founded in Sydney and headquartered in Breakfast Point, NSW, Verex Fire Solutions
              was built on a single premise: that every building deserves fire safety managed by
              verified experts. Our name — a portmanteau of <em>Verify</em> and <em>Expert</em> —
              captures that commitment in every service we deliver.
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
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">
                Our Mission &amp; Values
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Safeguarding What Matters Most
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-navy-900/60">
                Our mission is to eliminate fire compliance complexity for building owners, strata
                managers, and facility teams across Greater Sydney. We combine deep regulatory
                knowledge with modern technology to deliver clarity, confidence, and continuous
                protection — so you can focus on your core responsibilities knowing your fire
                safety obligations are in expert hands.
              </p>
            </ScrollReveal>
          </div>

          {/* Values grid */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} direction="up" delay={0.1 * i}>
                <div className="group rounded-2xl border border-navy-900/5 bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-navy-900">
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
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">
                Our Team
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Accredited Specialists, Dedicated Partners
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-navy-900/60">
                Every member of our team holds recognised industry accreditations and brings
                hands-on experience across the full spectrum of Australian fire safety standards.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={0.1 * i}>
                <div className="rounded-2xl border border-navy-900/5 bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/5">
                  {/* Avatar placeholder */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-serif text-xl font-bold text-white">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <h3 className="mt-6 font-serif text-lg font-semibold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-cyan-600">{member.role}</p>
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
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <ScrollReveal direction="up">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">
                  Careers
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                  Build Your Career in Fire Safety
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-navy-900/60">
                  We are always looking for passionate professionals who share our commitment to
                  protecting lives and property. At Verex, you will work alongside some of
                  Sydney&apos;s most experienced fire safety practitioners in a culture that values
                  continuous learning, technical rigour, and genuine teamwork.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="rounded-2xl border border-navy-900/5 bg-slate-50 p-8 lg:p-10">
                <h3 className="font-serif text-xl font-semibold text-navy-900">
                  Why Join Verex?
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    'FPAA-supported accreditation and professional development pathways',
                    'Collaborative, safety-first team culture',
                    'Exposure to diverse building types across Greater Sydney',
                    'Investment in modern compliance technology and tools',
                    'Competitive remuneration and flexible working arrangements',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-900/70">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500"
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
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-navy-900/90"
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
