'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function EWISSpeechIntelligibilityPage() {
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
              Optimising Speech Transmission Index in Emergency Warning Systems: An Acoustic Modelling Study of Open-Plan Commercial Environments
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Verex Fire Solutions Research Division</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>19 November 2025</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>11 min read</span>
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
                  Emergency warning and intercommunication systems (EWIS) in modern commercial buildings must achieve a minimum Speech Transmission Index (STI) of 0.5 as mandated by AS 1670.4-2018. Yet field experience consistently reveals that many installations fall short of this threshold once realistic background noise conditions are introduced — particularly from heating, ventilation, and air conditioning (HVAC) plant. This paper presents an acoustic modelling study examining STI performance across three representative open-plan commercial floor plates of 200 m², 500 m², and 1,200 m². Using ray-tracing simulation calibrated against in-situ measurements, we evaluated two speaker deployment strategies: distributed ceiling-mounted speakers and wall-mounted horn speakers. Results indicate that distributed ceiling configurations achieved compliant STI values (0.52&ndash;0.61) across all floor plates under ambient HVAC noise of 45&ndash;55 dBA, whereas horn speaker arrangements failed to maintain STI &ge; 0.5 in the 1,200 m² configuration without supplementary digital signal processing. The findings underscore the necessity for in-situ STIPA verification testing following commissioning and highlight the role of adaptive equalisation techniques in maintaining intelligibility under variable noise conditions.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  When a fire alarm activates in a busy commercial building, the occupants&apos; ability to hear and comprehend spoken evacuation instructions can be the difference between orderly egress and dangerous confusion. This is not a theoretical concern. Post-incident reviews from Australian fire services have repeatedly identified poor voice intelligibility as a contributing factor in delayed evacuations, particularly in open-plan office environments where reverberant conditions and ambient noise conspire against the EWIS loudspeaker system.
                </p>
                <p>
                  The Speech Transmission Index, originally proposed by Houtgast and Steeneken in the 1970s and now formalised in IEC 60268-16, provides a quantitative measure of how faithfully a transmission channel preserves the temporal modulations essential to speech comprehension. An STI of 1.0 represents perfect intelligibility; 0.5 is generally considered the lower bound for &quot;fair&quot; intelligibility. AS 1670.4-2018, which governs the design and commissioning of sound systems and intercom systems for emergency purposes in Australia, adopts this 0.5 threshold as a mandatory minimum.
                </p>
                <p>
                  Despite the clarity of the standard, compliance in practice is far from guaranteed. The fundamental difficulty is that STI depends on the interaction between the electroacoustic properties of the speaker system, the acoustic characteristics of the receiving space, and the spectral content and level of background noise. A system that comfortably passes commissioning tests on a quiet Saturday morning may prove woefully unintelligible on a Wednesday afternoon when the HVAC system is running at full capacity and 200 staff are working at open desks. This paper sets out to quantify that gap and explore practical mitigation strategies.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. Methodology</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.1 STIPA Measurement Protocol</h3>
                <p>
                  All measurements and simulations in this study employ the Speech Transmission Index for Public Address systems (STIPA) method as specified in IEC 60268-16:2020. STIPA uses a standardised test signal — pink noise modulated with a specific set of modulation frequencies across seven octave bands from 125 Hz to 8 kHz. The receiving analyser measures the modulation transfer function (MTF) in each band and computes a weighted composite STI score. This approach is well suited to EWIS assessment because it captures the combined effects of room reverberation, ambient noise masking, and loudspeaker frequency response in a single metric.
                </p>
                <p>
                  The measurement grid for each floor plate followed the requirements of AS 1670.4 Clause 5.3, with receiver positions spaced at 3-metre intervals throughout the occupied area at a height of 1.5 metres above finished floor level. Additional positions were included at the geometric centre of each floor plate, at the maximum distance from any speaker, and adjacent to known noise sources such as photocopier alcoves and kitchen areas.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.2 Acoustic Modelling Environment</h3>
                <p>
                  Three open-plan commercial floor plates were modelled: a small tenancy of 200 m² (roughly 15 m &times; 13 m), a mid-size floor plate of 500 m² (25 m &times; 20 m), and a large floor plate of 1,200 m² (40 m &times; 30 m). Room geometries were derived from as-built architectural drawings of actual Class 5 office buildings in Sydney. Ceiling heights were 2.7 metres throughout, consistent with typical Australian commercial fitout. Surface absorption coefficients were assigned based on published material data: suspended acoustic tile ceiling (&alpha; = 0.65 at 1 kHz), commercial carpet (&alpha; = 0.30), plasterboard perimeter walls (&alpha; = 0.05), and glazed curtain wall (&alpha; = 0.03). Furniture and workstation screens were represented as distributed scattering objects.
                </p>
                <p>
                  Simulations were performed using a hybrid ray-tracing and image-source method, which handles both specular and diffuse reflections. The models were calibrated against in-situ RT60 measurements taken in two of the three buildings, yielding reverberation times of 0.8&ndash;1.2 seconds at mid-frequencies — values that sit uncomfortably close to the threshold at which speech intelligibility begins to degrade markedly.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.3 Speaker Configurations</h3>
                <p>
                  Two speaker deployment strategies were evaluated. Configuration A used distributed ceiling-mounted speakers (100 mm cone drivers, 2 W tapping) on a regular grid, spaced to achieve a nominal coverage overlap of 50% at the listening plane. Configuration B employed wall-mounted re-entrant horn speakers (15 W rated) positioned at 2.4-metre mounting height along the perimeter walls, angled inward at 15 degrees below horizontal. Both configurations were modelled with and without DSP-based adaptive equalisation applied to the amplifier output stage.
                </p>
                <p>
                  Background noise profiles were measured in occupied and unoccupied conditions across the three reference buildings. HVAC noise dominated the ambient spectrum, with measured levels of 42&ndash;55 dBA depending on system load and proximity to diffusers. These measured profiles were injected into the simulation as spatially distributed noise sources to provide realistic masking conditions.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Results and Discussion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.1 STI Performance Under Nominal Conditions</h3>
                <p>
                  Under unoccupied conditions with HVAC at minimum load (42 dBA), both speaker configurations achieved STI &ge; 0.5 across all three floor plates. The distributed ceiling configuration (A) returned average STI values of 0.68, 0.63, and 0.58 for the 200 m², 500 m², and 1,200 m² spaces respectively. The horn speaker configuration (B) yielded 0.62, 0.55, and 0.51. So far, so compliant — but the margins in the larger spaces were thin enough to warrant concern.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.2 Impact of Realistic HVAC Noise</h3>
                <p>
                  When background noise was increased to represent typical occupied conditions (50&ndash;55 dBA), the picture changed substantially. Configuration A maintained compliant STI values across all floor plates, though the 1,200 m² space dropped to an average of 0.52 — barely above the threshold. Configuration B fell below 0.5 in the 1,200 m² space, with an average STI of 0.44 and a minimum of 0.38 at the centre of the floor plate, well away from the perimeter-mounted horns. The 500 m² floor plate hovered at exactly 0.50, which in practice would likely yield non-compliant readings at several measurement positions due to spatial variation.
                </p>
                <p>
                  The early-to-late energy ratio (C50) analysis revealed why. In the 1,200 m² floor plate, positions more than 12 metres from the nearest horn speaker exhibited C50 values below &minus;2 dB, indicating that reverberant energy dominated the direct sound field. For speech, this is problematic: the temporal modulations that carry consonant information are smeared by late-arriving reflections, and the HVAC noise floor masks whatever residual modulation survives.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.3 DSP Equalisation and Noise Compensation</h3>
                <p>
                  Applying adaptive equalisation to the horn speaker system recovered approximately 0.06 STI points in the 1,200 m² configuration, lifting the average to 0.50. The equalisation algorithm operated by boosting the 2&ndash;4 kHz band — the frequency range most critical for consonant discrimination — while attenuating low-frequency energy that contributed to reverberant masking without aiding intelligibility. A more aggressive approach using ambient noise monitoring and real-time level adjustment (effectively a noise-cancelling strategy at the amplifier stage) added a further 0.04 STI points, bringing the horn configuration to a workable 0.54. However, this required integration with the building management system to receive real-time ambient noise telemetry — an integration that is rarely implemented in current Australian installations.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.4 Warden Intercom Considerations</h3>
                <p>
                  A separate challenge emerged when analysing warden intercom performance in plant rooms and mechanical risers, where background noise levels routinely exceed 70 dBA during equipment operation. Even with close-talking microphone techniques, the measured STI at the receiving warden phone in these environments dropped to 0.35&ndash;0.42. This has real operational implications: during an emergency, the chief warden&apos;s ability to communicate with floor wardens stationed near mechanical plant is compromised at precisely the moment clear communication matters most. Noise-cancelling handsets with active feedback circuits offer a partial solution, though they remain uncommon in Australian EWIS installations. ISO 7240-19, which addresses design requirements for emergency communication systems, provides useful guidance on minimum signal-to-noise ratios for warden intercoms that AS 1670.4 could beneficially reference more explicitly.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  This study confirms what many fire services engineers have long suspected: a significant proportion of EWIS installations in open-plan commercial environments are likely to fail the STI &ge; 0.5 requirement of AS 1670.4 under realistic occupied conditions, even when they pass commissioning tests conducted in quieter circumstances. Distributed ceiling speaker systems demonstrate meaningfully better intelligibility performance than wall-mounted horn configurations in large floor plates, principally because they maintain a more favourable direct-to-reverberant energy ratio at all listening positions.
                </p>
                <p>
                  The practical recommendation is straightforward: in-situ STIPA verification testing should be conducted not merely at commissioning but under representative occupied noise conditions, including HVAC at typical operational load. Where horn speakers are the only viable option — as in retrofit situations or heritage-listed buildings — DSP-based adaptive equalisation and ambient noise compensation should be considered essential rather than optional. The broader industry would benefit from a revision to AS 1670.4 that mandates testing under defined background noise conditions, rather than leaving the acoustic environment at the time of test to chance.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>Standards Australia. (2018). <em>AS 1670.4: Fire detection, warning, control and intercom systems — Sound systems and intercom systems for emergency purposes.</em> Sydney: SAI Global.</p>
                <p>International Organization for Standardization. (2019). <em>ISO 7240-19: Fire detection and alarm systems — Part 19: Design of sound systems for emergency purposes.</em> Geneva: ISO.</p>
                <p>International Electrotechnical Commission. (2020). <em>IEC 60268-16: Sound system equipment — Part 16: Objective rating of speech intelligibility by speech transmission index.</em> Geneva: IEC.</p>
                <p>Houtgast, T. &amp; Steeneken, H.J.M. (1985). &quot;A review of the MTF concept in room acoustics and its use for estimating speech intelligibility in auditoria.&quot; <em>The Journal of the Acoustical Society of America,</em> 77(3), 1069&ndash;1077.</p>
                <p>Australian Building Codes Board. (2022). <em>National Construction Code 2022, Volume One.</em> Canberra: Commonwealth of Australia.</p>
                <p>Fire Protection Association Australia. (2021). <em>Technical Advisory Note: EWIS Speech Intelligibility Testing.</em> Melbourne: FPA Australia.</p>
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
              <Link href="/insights/machine-learning-fire-detection" className="group block">
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    Research Paper
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Convolutional Neural Network Architectures for Real-Time Fire Signature Classification
                  </h3>
                  <p className="text-slate-400 text-sm">CNN-based classifiers for addressable fire detection networks.</p>
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
