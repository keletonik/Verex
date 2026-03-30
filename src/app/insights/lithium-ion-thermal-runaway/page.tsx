'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function LithiumIonThermalRunawayPage() {
  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/insights"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="inline-block text-orange-400 font-sans text-sm font-semibold tracking-widest uppercase mb-4">
              Research Paper
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Thermal Runaway Propagation Modelling in Lithium-Ion Battery Storage: Implications for Strata Car Park Fire Engineering
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Verex Fire Solutions Research Division</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>14 February 2026</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">Abstract</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The rapid proliferation of electric vehicles in Australian strata buildings has introduced a fire hazard for which most existing car park designs were never conceived. This paper presents a computational fluid dynamics (CFD) study of thermal runaway propagation from lithium-ion battery modules in underground car parks typical of those governed by AS 2890.1. Using Fire Dynamics Simulator (FDS) version 6.8, we modelled single-module ignition scenarios for both nickel manganese cobalt (NMC) and lithium iron phosphate (LFP) cell chemistries within a simulation domain of 40 m &times; 20 m &times; 2.7 m, representative of a common strata basement configuration. NMC modules produced a peak heat release rate of approximately 200 kW, activating the nearest 68 &deg;C sprinkler head at 47 seconds, whereas LFP modules peaked at roughly 80 kW with first sprinkler activation at 112 seconds. Floor-level temperature contours revealed that NMC scenarios reached 180 &deg;C within a 3-metre radius of the ignition source at 60 seconds post-initiation. The results highlight significant limitations of both conventional sprinkler systems and gaseous suppression agents in open car park geometries, and raise important questions about hydrogen fluoride toxicity during electrolyte decomposition. Implications for compliance with NCC Volume One Section C and the EP&amp;A Regulation 2021 in strata contexts are discussed.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Electric vehicle registrations in New South Wales grew by 161% between 2022 and 2025, and a disproportionate share of these vehicles are garaged in the basement car parks of strata-titled residential and mixed-use buildings. The fire engineering implications of this shift are substantial. Unlike a conventional internal combustion engine vehicle fire &mdash; which is well characterised and reasonably well managed by AS 2118.1 sprinkler systems &mdash; a lithium-ion battery thermal runaway event exhibits fundamentally different behaviour. The energy release is driven by exothermic decomposition reactions within the cathode, anode, and electrolyte materials, and once initiated, the process is self-sustaining regardless of external oxygen supply.
                </p>
                <p>
                  Thermal runaway in lithium-ion cells proceeds through a well-documented cascade. The solid electrolyte interphase layer begins decomposing at around 90 &deg;C, releasing flammable gases. By 150&ndash;200 &deg;C the electrolyte solvents vapourise and the cathode undergoes oxygen-releasing decomposition, the precise temperature depending on cell chemistry. NMC cathodes are particularly concerning in this regard because the layered oxide structure releases oxygen at lower temperatures than the olivine structure of LFP cells. The resulting jet-like venting of hot, flammable gases can propagate thermal runaway to adjacent cells within seconds, a phenomenon that has been documented extensively by Ribiere et al. (2012) and Larsson et al. (2017).
                </p>
                <p>
                  For fire engineers working in the Australian strata sector, the challenge is acute. Most basement car parks in residential strata buildings were designed and constructed to comply with the deemed-to-satisfy provisions of NCC Volume One Section C, which assumes fire loads and growth rates consistent with conventional vehicles. The EP&amp;A Regulation 2021, which governs fire safety in existing buildings through the annual fire safety statement regime, similarly makes no specific provision for lithium-ion battery hazards. This paper seeks to quantify the thermal environment produced by a single-module thermal runaway event in a representative car park geometry, and to evaluate whether conventional fire protection measures respond adequately.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. Methodology</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.1 Simulation Domain and Mesh</h3>
                <p>
                  The computational domain measured 40 m &times; 20 m &times; 2.7 m in height, representing a single-level basement car park compliant with the minimum dimensional requirements of AS 2890.1. The ceiling height of 2.7 metres corresponds to the typical clearance found in strata residential buildings constructed in Sydney and Melbourne over the past two decades, accounting for services and structural beams. Boundary conditions included concrete walls and ceiling (thermal conductivity 1.6 W/m&middot;K, specific heat 0.88 kJ/kg&middot;K) and a 150 mm concrete slab floor. Two ventilation openings of 4 m &times; 1.5 m were positioned on one long wall to represent a partially open car park facade, providing a natural ventilation flow of approximately 1.2 m/s based on wind tunnel data for a sheltered urban basement entry.
                </p>
                <p>
                  The mesh employed a non-uniform grid with 0.1 m resolution in the near-field region surrounding the ignition source (extending 5 metres in each horizontal direction and floor-to-ceiling vertically) and 0.2 m resolution in the far field. This yielded a total of approximately 3.2 million computational cells. A mesh sensitivity analysis confirmed that the 0.1 m near-field resolution satisfied the D*/&delta;x criterion recommended by the FDS User Guide for resolving the fire plume, where D* is the characteristic fire diameter.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.2 Fire Source Characterisation</h3>
                <p>
                  Two battery chemistries were modelled. The NMC scenario used a heat release rate (HRR) curve derived from calorimetry data published by Ribiere et al. (2012), scaled to represent a single 5 kWh battery module containing 12 pouch cells. The curve ramped to a peak HRR of approximately 200 kW at 35 seconds post-initiation, sustained the peak for roughly 20 seconds, then decayed over 90 seconds as consumable material was exhausted. The total energy release was 42 MJ. The LFP scenario followed a more gradual profile, peaking at approximately 80 kW at 55 seconds with a total energy release of 28 MJ, reflecting the inherently more stable thermal decomposition pathway of the iron phosphate cathode. Both scenarios included a gas-phase combustion model for the vented electrolyte, with soot yield set to 0.07 g/g based on published values for organic carbonate combustion.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.3 Sprinkler and Detection Modelling</h3>
                <p>
                  Sprinkler heads were modelled as standard response 68 &deg;C glass bulb devices mounted at ceiling level (2.7 m), spaced on a 3.0 m &times; 3.0 m grid in accordance with AS 2118.1 for Ordinary Hazard Group 1 occupancies. The response time index (RTI) was set at 50 (m&middot;s)<sup>0.5</sup>, representative of commercially available pendant sprinklers commonly installed in Australian car parks. Point heat detectors were co-located with the sprinkler heads for temperature logging purposes. No smoke detection was modelled, as most existing strata car parks rely on sprinklers rather than addressable smoke detectors for suppression initiation.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.4 Toxicity Modelling</h3>
                <p>
                  A particular concern with lithium-ion battery fires is the generation of hydrogen fluoride (HF) from the decomposition of the polyvinylidene fluoride (PVDF) binder and fluorinated electrolyte salts such as lithium hexafluorophosphate (LiPF<sub>6</sub>). HF production was modelled using a species yield of 0.02 g/g of electrolyte consumed, consistent with the measurements reported by Larsson et al. (2017). The immediately dangerous to life or health (IDLH) concentration for HF is 30 ppm, and we tracked HF concentrations at 1.5 m above floor level to assess occupant exposure risk during the early stages of the event.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Results and Discussion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.1 Thermal Environment and Sprinkler Activation</h3>
                <p>
                  The NMC scenario produced a rapidly developing ceiling jet that activated the nearest sprinkler head &mdash; located 1.5 metres horizontally from the ignition source &mdash; at 47 seconds post-initiation. By this time the ceiling gas temperature directly above the fire had reached 320 &deg;C, and the hot gas layer had extended approximately 8 metres radially from the source. The second nearest sprinkler activated at 63 seconds. Temperature contours at floor level (0.1 m above slab) revealed a localised region exceeding 180 &deg;C within a 3-metre radius of the module at 60 seconds, driven by radiant heat transfer from the burning electrolyte pool that formed beneath the simulated vehicle.
                </p>
                <p>
                  The LFP scenario, by contrast, produced a considerably less aggressive thermal environment. First sprinkler activation occurred at 112 seconds &mdash; more than twice the delay observed for NMC. The lower peak HRR meant that the ceiling jet developed more slowly and the critical activation temperature of 68 &deg;C was reached later. Floor-level temperatures remained below 80 &deg;C at the 3-metre radius throughout the simulation. This difference has practical significance: it suggests that the cell chemistry of the vehicle involved will substantially influence the available safe egress time (ASET) for occupants in adjacent parking bays.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.2 Suppression Effectiveness</h3>
                <p>
                  While the sprinkler system activated within a reasonable timeframe for both scenarios, the effectiveness of water-based suppression against a lithium-ion thermal runaway is questionable on thermodynamic grounds. The exothermic decomposition reactions within the cell are self-sustaining once initiated and do not require external oxygen. Water applied to the exterior of the battery casing provides surface cooling that may slow cell-to-cell propagation, but it cannot arrest the internal decomposition of an already-compromised cell. Our simulations modelled sprinkler activation but did not claim suppression of the battery fire itself &mdash; rather, the sprinklers served to cool surrounding structures and vehicles, limiting secondary fire spread.
                </p>
                <p>
                  Gaseous suppression systems, which are sometimes proposed as an alternative for enclosed car parks, face a different limitation in the strata context. The partially open geometry mandated by AS 2890.1 for natural ventilation makes it extremely difficult to achieve and maintain the design concentration of any clean agent or inert gas system. Our ventilation boundary conditions produced air exchange rates of approximately 6 air changes per hour through the facade openings alone, which would dissipate a gaseous agent far too rapidly for effective suppression. This finding aligns with the broader industry consensus that gas suppression is poorly suited to open or partially open car park geometries.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.3 Hydrogen Fluoride Exposure</h3>
                <p>
                  The HF concentration mapping produced some of the most concerning results of the study. In the NMC scenario, concentrations at the 1.5 m breathing zone exceeded the IDLH threshold of 30 ppm within a 6-metre radius of the fire source by 90 seconds post-initiation. The partially open ventilation geometry, while unhelpful for gaseous suppression, did provide some dilution &mdash; but not enough to prevent dangerous exposures in the immediate vicinity. The LFP scenario produced lower peak HF concentrations owing to its reduced electrolyte mass and lower decomposition temperatures, though levels still exceeded 30 ppm within 2 metres by 150 seconds.
                </p>
                <p>
                  These findings have direct implications for occupant evacuation and firefighter intervention. Building occupants who delay evacuation to retrieve belongings from vehicles parked adjacent to a battery fire could face toxic HF exposure well before visible flame or smoke would ordinarily prompt them to leave. First-responding firefighters entering a strata basement car park during a confirmed battery fire should be aware that the atmospheric hazard is not limited to the conventional combustion products &mdash; carbon monoxide and hydrogen cyanide &mdash; but includes a highly corrosive acid gas that attacks mucous membranes and lung tissue at concentrations well below the lethal threshold.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.4 Regulatory and Strata Implications</h3>
                <p>
                  The current regulatory framework does not explicitly address lithium-ion battery fires in car parks. NCC Volume One Section C establishes fire resistance levels and compartmentation requirements based on building class and rise in storeys, but the deemed-to-satisfy provisions assume conventional fire loads. Performance-based fire engineering solutions under C1.1 could, in principle, account for EV battery hazards through fire engineering briefs that incorporate battery-specific design fire scenarios &mdash; yet in practice, such briefs are rarely prepared for standard residential strata developments. The EP&amp;A Regulation 2021, which requires an annual fire safety statement certifying that essential fire safety measures are maintained to the performance standards established at the time of the original building approval, creates an additional complication: the fire safety measures installed at the time of approval may not have contemplated EV battery fires at all.
                </p>
                <p>
                  For strata owners corporations and their fire safety consultants, the practical question is what, if anything, can be done within existing buildings. Options include upgrading to fast-response sprinkler heads (RTI &le; 35 (m&middot;s)<sup>0.5</sup>) to improve activation times, installing linear heat detection cable along parking bay ceilings to provide earlier warning, and developing battery fire-specific emergency response procedures for the building&apos;s fire safety management plan. None of these measures eliminate the hazard, but they may meaningfully improve the available safe egress time and reduce the risk of fire spread to adjacent vehicles.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  This study demonstrates that a single lithium-ion battery module undergoing thermal runaway in a typical strata car park produces a thermal and toxic environment that differs materially from the conventional vehicle fire scenarios upon which current fire protection designs are based. NMC cell chemistries generate peak heat release rates roughly 2.5 times greater than LFP cells, with correspondingly faster sprinkler activation but also more aggressive floor-level temperatures and higher HF concentrations. Conventional sprinkler systems activate within acceptable timeframes but cannot suppress the self-sustaining electrochemical decomposition reactions within the battery itself. Gaseous suppression is rendered ineffective by the open ventilation geometry inherent to AS 2890.1 car park design.
                </p>
                <p>
                  Several limitations of this study should be acknowledged. The fire source was modelled as a single battery module with a simplified planar geometry, whereas real vehicle battery packs contain dozens of modules in complex enclosures that influence venting direction and heat transfer pathways. Ventilation was modelled as uniform natural airflow, neglecting the mechanical exhaust systems present in many basement car parks. The simulation considered only single-module ignition and did not model propagation to adjacent vehicle batteries, which would substantially increase the total fire load and duration. Despite these simplifications, the results provide a useful baseline for fire engineers assessing EV battery hazards in strata buildings and underscore the need for updated regulatory guidance specific to this emerging risk.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>Standards Australia. (2017). <em>AS 2118.1: Automatic fire sprinkler systems &mdash; General systems.</em> Sydney: SAI Global.</p>
                <p>Standards Australia. (2011). <em>AS 2890.1: Parking facilities &mdash; Off-street car parking.</em> Sydney: SAI Global.</p>
                <p>Australian Building Codes Board. (2022). <em>National Construction Code 2022, Volume One.</em> Canberra: Commonwealth of Australia.</p>
                <p>NSW Government. (2021). <em>Environmental Planning and Assessment Regulation 2021.</em> Sydney: NSW Parliamentary Counsel.</p>
                <p>Ribi&egrave;re, P., Gruber, S., Blaise, R. et al. (2012). &quot;Investigation on the fire-induced hazards of Li-ion battery cells by fire calorimetry.&quot; <em>Energy &amp; Environmental Science,</em> 5(1), 5271&ndash;5280.</p>
                <p>Larsson, F., Andersson, P., Blomqvist, P. &amp; Mellander, B.E. (2017). &quot;Toxic fluoride gas emissions from lithium-ion battery fires.&quot; <em>Scientific Reports,</em> 7, 10018.</p>
                <p>McGrattan, K., Hostikka, S., Floyd, J. et al. (2023). <em>Fire Dynamics Simulator User&apos;s Guide, NIST Special Publication 1019.</em> 6th ed. Gaithersburg: National Institute of Standards and Technology.</p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-white/10 bg-gradient-to-b from-[#0A1628] to-[#0F1D32]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-white mb-8">Related Research</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <Link href="/insights/smoke-management-cfd" className="group block">
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    Research Paper
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Comparative Analysis of Zone Model and CFD Approaches to Smoke Management System Design
                  </h3>
                  <p className="text-slate-400 text-sm">CFAST vs FDS comparison for tenability analysis in high-rise buildings.</p>
                </article>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/insights/ewis-speech-intelligibility" className="group block">
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    Research Paper
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Optimising Speech Transmission Index in Emergency Warning Systems
                  </h3>
                  <p className="text-slate-400 text-sm">Acoustic modelling study of STI performance in open-plan commercial environments.</p>
                </article>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
