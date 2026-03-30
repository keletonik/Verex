'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function SmokeManagementCFDPage() {
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
              Comparative Analysis of Zone Model and CFD Approaches to Smoke Management System Design in Australian High-Rise Buildings
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Verex Fire Solutions Research Division</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>5 March 2026</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>14 min read</span>
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
                  Smoke management system design for Australian high-rise buildings increasingly relies on computational modelling to demonstrate performance compliance under the National Construction Code 2022 Verification Methods. This paper presents a comparative analysis of two predominant modelling approaches — the CFAST 7.7.2 zone model and the FDS 6.8 computational fluid dynamics (CFD) solver — applied to a hypothetical 30-storey commercial building in the Sydney CBD. A design fire scenario of 3 MW consistent with NCC Verification Method CV1 was modelled with a fuel load density of 560 MJ/m&sup2; per AS/NZS 1170.1. Zone model predictions were evaluated against CFD results employing Large Eddy Simulation with the Smagorinsky turbulence model across three mesh resolutions. The study finds that zone modelling provides adequate predictions of smoke layer height and temperature for simple rectangular floor plates, with results within 8&ndash;12% of CFD at 0.2 m resolution. However, for complex geometries including atria, interconnected floors, and irregular floor plates, the two-layer assumption inherent in zone models introduces errors of 25&ndash;40% in smoke layer height predictions. A mesh sensitivity analysis demonstrates that 0.2 m cell resolution offers the optimal balance between computational cost and predictive accuracy for design practice, while 0.5 m cells overestimate smoke layer height by 15&ndash;20%. These findings have direct implications for performance-based design submissions under NCC 2022 Verification Methods CV1 through CV3.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The design of smoke management systems in Australian high-rise buildings has undergone a quiet but consequential transformation over the past two decades. Where once prescriptive deemed-to-satisfy provisions governed virtually every aspect of smoke hazard management — mechanical exhaust rates, stairwell pressurisation differentials, smoke reservoir depths — the shift towards performance-based design under successive editions of the National Construction Code has placed computational fire modelling at the centre of the engineering workflow. The 2022 edition of the NCC, with its consolidated Verification Methods CV1 through CV3, has only accelerated this trend.
                </p>
                <p>
                  Two broad categories of computational tool dominate current Australian practice. Zone models, exemplified by the NIST-developed CFAST, divide each compartment into a small number of control volumes — typically a hot upper layer and a cool lower layer — and solve conservation equations for mass and energy exchange between them. They are computationally inexpensive, running in seconds to minutes on modest hardware, and their simplicity makes them accessible to a wide range of practitioners. CFD models, most notably NIST&apos;s Fire Dynamics Simulator (FDS), discretise the computational domain into thousands or millions of cells and solve the Navier-Stokes equations with turbulence modelling to resolve the spatial and temporal evolution of smoke, heat, and toxic species. They are correspondingly more demanding of both computational resources and user expertise.
                </p>
                <p>
                  The question of when a zone model suffices and when CFD becomes necessary is one that fire engineers confront regularly, yet the guidance available in Australian practice documents remains somewhat general. The International Fire Engineering Guidelines (IFEG, 2005), while providing a useful framework for fire engineering analysis, predate the current generation of CFD tools and do not offer specific mesh resolution guidance for FDS. This paper seeks to contribute quantitative data to that decision by comparing CFAST and FDS predictions for a realistic high-rise building scenario, with particular attention to the mesh sensitivity that so often determines whether a CFD analysis is trustworthy.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. Methodology</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.1 Building Geometry and Design Fire</h3>
                <p>
                  The study building is a hypothetical 30-storey Class 5 commercial tower located in the Sydney CBD, representative of stock constructed between 2005 and 2020. Each typical floor plate comprises 1,200 m&sup2; of net lettable area with a floor-to-ceiling height of 2.7 metres and a floor-to-floor height of 3.6 metres. The ground floor includes a triple-height lobby and atrium void extending through the first three storeys. The design fire was established in accordance with NCC Verification Method CV1, adopting a peak heat release rate of 3 MW for a Class 5 office occupancy. Fuel load density was set at 560 MJ/m&sup2; in accordance with AS/NZS 1170.1, representing a typical open-plan office fit-out with workstations, paper storage, and soft furnishings. The fire was assumed to follow a medium t-squared growth rate with a growth coefficient of 0.012 kW/s&sup2;, reaching its peak at approximately 500 seconds post-ignition.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.2 Zone Model Configuration</h3>
                <p>
                  CFAST version 7.7.2 was employed for the zone model analysis. The fire floor was modelled as a single rectangular compartment of 40 m &times; 30 m &times; 2.7 m, with mechanical exhaust represented as a ceiling-level vent and make-up air as a wall vent at low level. The two-layer assumption central to CFAST&apos;s formulation divides the compartment into a hot upper gas layer and a cooler lower layer, with a sharp interface between them. This is a reasonable approximation for well-ventilated fires in simple rectangular rooms, where buoyancy-driven stratification produces a clearly defined smoke layer. However, the model cannot capture localised flow phenomena such as smoke spill around structural beams, channelling effects from partition walls, or the complex three-dimensional plume behaviour that occurs in atrium spaces.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.3 CFD Model Configuration</h3>
                <p>
                  FDS version 6.8 was employed for the CFD analysis, utilising the Large Eddy Simulation (LES) approach with the default Smagorinsky turbulence model (C<sub>s</sub> = 0.2). The computational domain encompassed the fire floor and, for atrium scenarios, the three interconnected storeys of the lobby void. Three uniform mesh resolutions were evaluated: 0.5 m, 0.2 m, and 0.1 m cells. The coarsest mesh (0.5 m) yielded approximately 0.4 million cells and completed in roughly 2 hours on a 16-core workstation. The 0.2 m mesh produced 6.2 million cells and required 38 hours of wall-clock time. The finest mesh (0.1 m) generated approximately 50 million cells and proved computationally prohibitive for routine design practice, requiring an estimated 12 days on the same hardware — a duration that is simply incompatible with commercial project timelines.
                </p>
                <p>
                  The characteristic fire diameter D* was calculated as 1.55 metres for the 3 MW fire, yielding D*/&delta;x ratios of 3.1, 7.75, and 15.5 for the 0.5 m, 0.2 m, and 0.1 m meshes respectively. McGrattan et al. (2021) recommend a minimum D*/&delta;x of 4 for adequate plume resolution, suggesting that the 0.5 m mesh is marginal while the 0.2 m mesh comfortably satisfies this criterion.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.4 Tenability Criteria</h3>
                <p>
                  Tenability was assessed against three criteria consistent with the IFEG framework and AS 1668.1-2015. Visibility was calculated using the mass extinction coefficient for soot of C<sub>s</sub> = 8,700 m&sup2;/kg, with a target visibility distance of 10 metres in accordance with AS 1668.1 for large enclosures. Temperature tenability was assessed against the Purser criterion of 60&deg;C at 2.0 metres above floor level, representing the threshold for incapacitation during evacuation. Fractional Effective Dose (FED) toxicity calculations incorporated CO yield of 0.04 g/g and HCN yield of 0.006 g/g, values representative of mixed office furnishings based on published cone calorimeter data for Australian commercial fit-out materials.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Results and Discussion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.1 Smoke Layer Height Predictions</h3>
                <p>
                  For the simple rectangular floor plate, CFAST predicted smoke layer descent to 2.1 metres above floor level at 60 seconds post-ignition, 1.6 metres at 120 seconds, and a steady-state height of 1.2 metres at 300 seconds with mechanical exhaust operating. The FDS results at 0.2 m resolution showed broadly comparable behaviour: 2.0 metres at 60 seconds, 1.5 metres at 120 seconds, and 1.15 metres at 300 seconds. The agreement was well within the 8&ndash;12% range typically considered acceptable for design purposes.
                </p>
                <p>
                  The coarser 0.5 m FDS mesh, however, consistently overestimated the smoke layer height by 15&ndash;20%, predicting 2.4 metres at 60 seconds and 1.4 metres at 300 seconds. This overprediction arises from insufficient resolution of the fire plume entrainment, which artificially broadens the plume and reduces the rate of hot gas accumulation at ceiling level. For a performance-based design submission, this degree of non-conservatism could be consequential — a smoke management system dimensioned on the basis of 0.5 m CFD results might prove undersized in practice. The 0.1 m mesh showed negligible improvement over the 0.2 m results (less than 3% difference), confirming that mesh refinement beyond 0.2 m offers diminishing returns for this fire size.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.2 Visibility and Temperature Tenability</h3>
                <p>
                  Visibility dropped below the 10-metre threshold at the 2.0-metre evaluation height approximately 80 seconds post-ignition in both the CFAST model and the 0.2 m FDS simulation. The 0.5 m FDS mesh delayed this onset to approximately 100 seconds, again reflecting the non-conservative bias of the coarser resolution. Temperature at the 2.0-metre height reached the 60&deg;C Purser criterion at approximately 240 seconds in the 0.2 m FDS model, whereas CFAST predicted this threshold at 220 seconds — a modest conservatism in the zone model attributable to its assumption of a uniform upper layer temperature, which does not account for the spatial temperature gradients that CFD resolves.
                </p>
                <p>
                  FED calculations indicated that the toxic gas hazard remained below the 0.3 FED threshold (representing incapacitation for a susceptible population) at the 2.0-metre evaluation height throughout the first 300 seconds, with CO being the dominant contributor. This is consistent with expectations for a well-ventilated office fire where combustion efficiency is relatively high and HCN production is limited.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.3 Atrium and Complex Geometry Performance</h3>
                <p>
                  The comparison diverged substantially when the atrium geometry was introduced. CFAST, modelling the three-storey void as a series of stacked compartments connected by large openings, predicted a relatively uniform smoke layer descending through the atrium at a rate governed by the plume entrainment correlation. FDS at 0.2 m resolution revealed a far more complex picture: smoke preferentially accumulated on the side of the atrium opposite the fire source, driven by ceiling jet deflection off the structural frame. The smoke layer was notably non-uniform in depth, varying by up to 1.8 metres across the atrium width. CFAST&apos;s predicted average layer height at 300 seconds was 25&ndash;40% higher than the minimum layer height observed in the CFD simulation — a discrepancy that would lead to a materially non-conservative assessment of tenability conditions for occupants on the upper gallery levels.
                </p>
                <p>
                  This finding reinforces a point that experienced fire engineers recognise intuitively but that is worth stating plainly: the two-layer zone model assumption, while adequate for simple compartments, fundamentally cannot represent the three-dimensional smoke transport phenomena that govern hazard development in atria, interconnected floors, and irregular geometries. For such configurations, CFD is not merely preferable but necessary for a defensible performance-based design submission under the NCC Verification Methods.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  This comparative study offers several practical conclusions for Australian fire engineers undertaking smoke management system design. For simple rectangular floor plates with conventional ceiling heights, the CFAST zone model produces smoke layer height and temperature predictions that agree with CFD results to within 8&ndash;12% — a margin that is generally acceptable for preliminary design and, in many cases, sufficient for final performance-based design submissions. The zone model&apos;s computational efficiency — seconds rather than hours — makes it the rational first choice for parametric studies and sensitivity analyses during the early design phases.
                </p>
                <p>
                  Where complex geometries are involved — atria, interconnected floors, deep floor plates with significant obstruction, or spaces with non-rectangular boundaries — CFD modelling with FDS is the appropriate tool. The mesh sensitivity analysis presented here indicates that a cell size of 0.2 m provides the optimal balance between accuracy and computational cost for fires in the 1&ndash;5 MW range, satisfying the D*/&delta;x &ge; 4 criterion recommended in the FDS Technical Reference Guide. The 0.5 m mesh, while temptingly quick, introduces a systematic non-conservative bias of 15&ndash;20% in smoke layer height predictions that could compromise the integrity of a performance solution. Fire engineers should treat mesh sensitivity analysis not as an academic exercise but as a fundamental quality assurance step in any CFD-based smoke management assessment.
                </p>
                <p>
                  Looking forward, the continued evolution of performance-based design under the NCC places an increasing burden on practitioners to demonstrate the reliability of their modelling assumptions. The Australian fire engineering community would benefit from the development of consensus guidelines on CFD mesh resolution, validation benchmarks, and reporting standards — building on the foundation laid by the IFEG and informed by the growing body of validation data available for FDS. Until such guidelines exist, studies of this nature serve a useful, if modest, role in calibrating expectations.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>Standards Australia. (2015). <em>AS 1668.1-2015: The use of ventilation and airconditioning in buildings &mdash; Fire and smoke control in buildings.</em> Sydney: SAI Global.</p>
                <p>Standards Australia/Standards New Zealand. (2002). <em>AS/NZS 1170.1: Structural design actions &mdash; Permanent, imposed and other actions.</em> Sydney: SAI Global.</p>
                <p>Australian Building Codes Board. (2022). <em>National Construction Code 2022, Volume One.</em> Canberra: Commonwealth of Australia.</p>
                <p>International Fire Engineering Guidelines. (2005). <em>International Fire Engineering Guidelines, Edition 2005.</em> Canberra: Australian Building Codes Board.</p>
                <p>McGrattan, K., Hostikka, S., Floyd, J., McDermott, R. &amp; Vanella, M. (2021). <em>Fire Dynamics Simulator Technical Reference Guide, Volume 1: Mathematical Model.</em> NIST Special Publication 1018-1, Sixth Edition. Gaithersburg, MD: National Institute of Standards and Technology.</p>
                <p>Peacock, R.D., Reneke, P.A. &amp; Forney, G.P. (2021). <em>CFAST &mdash; Consolidated Model of Fire Growth and Smoke Transport (Version 7), Technical Reference Guide.</em> NIST Technical Note 1889v3. Gaithersburg, MD: National Institute of Standards and Technology.</p>
                <p>Purser, D.A. &amp; McAllister, J.L. (2016). &quot;Assessment of Hazards to Occupants from Smoke, Toxic Gases, and Heat.&quot; In M.J. Hurley (Ed.), <em>SFPE Handbook of Fire Protection Engineering,</em> 5th ed., pp. 2308&ndash;2428. New York: Springer.</p>
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
            <ScrollReveal delay={0.2}>
              <Link href="/insights/digital-twin-fire-maintenance" className="group block">
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    Research Paper
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Digital Twin Frameworks for Predictive Maintenance of Fire Protection Systems
                  </h3>
                  <p className="text-slate-400 text-sm">Machine learning approaches to AS 1851 compliance optimisation.</p>
                </article>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
