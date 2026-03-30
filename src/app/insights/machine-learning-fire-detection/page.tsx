'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function MachineLearningFireDetectionPage() {
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
              Convolutional Neural Network Architectures for Real-Time Fire Signature Classification in Addressable Detection Networks
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Verex Fire Solutions Research Division</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>18 March 2026</span>
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
                  False alarm rates in commercial fire detection systems remain a persistent source of operational disruption and desensitisation among building occupants. This paper examines the application of convolutional neural network (CNN) architectures to the real-time classification of fire signatures captured by addressable detection networks. Three architectures — a lightweight MobileNetV3 variant, a ResNet-18 adaptation, and a custom shallow network — were evaluated against a labelled dataset of 14,200 sensor event sequences drawn from photoelectric and ionisation detector pairs deployed across six commercial buildings in Sydney and Melbourne. The multi-modal fusion approach, combining optical obscuration curves with ionisation current traces, achieved a classification accuracy of 96.3% on the held-out test set, with a false positive rate of 1.8%. These results suggest that embedded inference at the fire indicator panel (FIP) level could meaningfully reduce nuisance alarms while maintaining compliance with the detection sensitivity thresholds mandated by AS 7240.2 and AS 7240.14.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The Australian fire detection industry has grappled with nuisance alarms for decades. Studies by the Australasian Fire and Emergency Service Authorities Council have consistently placed the false alarm rate for commercial buildings somewhere between 94% and 97% of all brigade attendances — a figure that has barely shifted since the early 2000s despite advances in detector hardware. The consequences are not trivial. Beyond the direct cost of fire brigade charges (currently $2,165 per false alarm attendance in NSW), repeated nuisance activations erode occupant confidence in warning systems, leading to slower evacuation responses when genuine emergencies occur.
                </p>
                <p>
                  Addressable fire detection systems, now standard in any building of reasonable complexity, generate rich telemetry that is largely discarded after threshold evaluation. A typical addressable photoelectric detector on a loop reports analogue values at polling intervals of roughly 2–5 seconds. The resulting time-series data — optical obscuration percentage, drift compensation values, chamber contamination indices — contains discriminative information about the source of an alarm event that simple threshold comparison cannot exploit. Cooking fumes produce a characteristically different obscuration curve from smouldering electrical cable insulation, for instance, yet the FIP treats both identically once the alarm threshold is breached.
                </p>
                <p>
                  This paper investigates whether CNN-based classifiers, operating on short windows of multi-channel sensor data, can reliably distinguish genuine fire signatures from common nuisance sources. It is worth noting at the outset that we are not proposing these models replace the deterministic alarm logic mandated by AS 7240.2 — rather, we explore their potential as a supplementary classification layer that could inform alarm verification protocols and reduce unnecessary brigade dispatch.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. Methodology</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.1 Dataset Construction</h3>
                <p>
                  The training corpus was assembled from event log archives spanning 2021–2025, obtained with permission from six commercial building operators in the Sydney CBD and Melbourne Docklands precincts. Buildings ranged from 8 to 42 storeys and included Class 5 (office), Class 6 (retail), and Class 9b (assembly) occupancies under the National Construction Code. Raw analogue values were extracted from FIP event logs for all alarm and pre-alarm events, yielding 14,200 labelled event sequences after cleaning.
                </p>
                <p>
                  Each event sequence comprised a 120-second window of analogue samples from the triggering detector and, where available, its nearest neighbour on the same loop. Labels were assigned through a combination of brigade incident reports, building management logbook entries, and post-event investigation notes. Six classes were defined: smouldering fire, flaming fire, cooking aerosol, steam/humidity, dust/construction, and electrical interference. Curiously, the dust/construction class proved most difficult to label reliably — many events attributed to &quot;construction dust&quot; in building logs turned out, on closer examination, to correlate with HVAC filter changes rather than actual construction activity.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.2 Sensor Data Fusion</h3>
                <p>
                  Where buildings employed dual-sensor (photoelectric and ionisation) detectors or co-located single-technology detectors, we constructed two-channel input tensors pairing optical obscuration with ionisation chamber current. Approximately 38% of the dataset included paired sensor data. For single-sensor events, the second channel was zero-padded — an acknowledged limitation that introduced a modest class imbalance artefact, since newer buildings with dual-sensor deployments were disproportionately represented in the flaming fire class. We applied SMOTE oversampling to the minority classes to partially address this.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.3 Architecture Selection</h3>
                <p>
                  Three CNN architectures were evaluated. The first was a MobileNetV3-Small variant adapted for 1D temporal convolution, selected for its low parameter count (approximately 1.5M parameters) suitable for edge deployment on ARM Cortex-M7 class processors found in modern FIP controller boards. The second was a ResNet-18 adaptation with 1D convolutional layers, serving as a performance ceiling benchmark. The third was a custom shallow network comprising three convolutional blocks with batch normalisation, global average pooling, and a softmax classifier — deliberately kept under 200K parameters to assess the minimum viable model complexity.
                </p>
                <p>
                  All models were trained using the Adam optimiser with an initial learning rate of 1×10⁻³, cosine annealing schedule, and a batch size of 64. The dataset was split 70/15/15 into training, validation, and test partitions, stratified by class and source building. Training was conducted on a single NVIDIA A100 GPU, though we note that inference benchmarking was performed on a Raspberry Pi 4 as a proxy for FIP-class hardware.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Results and Discussion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.1 Classification Performance</h3>
                <p>
                  The ResNet-18 variant achieved the highest overall accuracy at 97.1% on the held-out test set, followed by MobileNetV3 at 96.3% and the custom shallow network at 92.7%. More pertinent than raw accuracy, however, is the confusion matrix structure. All three architectures demonstrated near-perfect separation between genuine fire classes (smouldering and flaming) and nuisance classes, with false negative rates for fire events below 0.5% across all models. The practical implication is significant: the system is far more likely to misclassify a nuisance event as another nuisance type than to miss a genuine fire.
                </p>
                <p>
                  The most common misclassification involved cooking aerosol events being labelled as smouldering fire — an understandable confusion given the similar obscuration profiles. The MobileNetV3 model misclassified 4.2% of cooking events as smouldering fire, compared to 2.8% for ResNet-18. Interestingly, incorporating the ionisation channel reduced cooking-fire confusion by approximately 40% across all architectures, as ionisation detectors respond more strongly to the smaller particle sizes characteristic of flaming combustion than to the larger aerosol droplets from cooking.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.2 Inference Latency</h3>
                <p>
                  On the Raspberry Pi 4 proxy hardware, the MobileNetV3 model achieved an average inference time of 23 milliseconds per event window — well within the sub-second response requirement for real-time classification. The custom shallow network was faster still at 8 milliseconds, while ResNet-18 required 142 milliseconds. Given that the polling interval for addressable loops is typically 2–5 seconds, even the ResNet-18 model could theoretically operate within the detection cycle, though we would not recommend it for production deployment on constrained hardware.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.3 Compliance Considerations</h3>
                <p>
                  AS 7240.2 specifies alarm sensitivity thresholds that FIPs must respect unconditionally. Any supplementary classification layer must not delay or suppress a genuine alarm condition. Our proposed deployment architecture addresses this by running the CNN classifier in parallel with the standard threshold logic — the classifier&apos;s output informs a verification flag but cannot override the primary alarm pathway. This approach aligns with the alarm verification provisions in AS 7240.2 Clause 8.4, which permit a configurable verification period of up to 60 seconds for investigation before brigade dispatch.
                </p>
                <p>
                  It is worth noting that AS 7240.14 (point-type fire detectors using scattered-light, transmitted-light, and ionisation principles) defines specific response time indices that constrain how much pre-processing can occur before alarm acknowledgement. Our architecture satisfies these constraints by treating classification as an annotation to, rather than a gate on, the alarm event.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The results demonstrate that CNN-based classifiers operating on addressable detector telemetry can achieve commercially meaningful reductions in false alarm rates without compromising fire detection sensitivity. The MobileNetV3 variant offers the most attractive balance of accuracy (96.3%), latency (23ms), and model size for embedded deployment. Multi-modal data fusion — particularly the combination of photoelectric and ionisation channels — provides a substantial discriminative advantage that argues for broader adoption of dual-sensor or multi-criteria detector configurations in new installations.
                </p>
                <p>
                  Several limitations should be acknowledged. The dataset, while substantial, was drawn entirely from commercial buildings in two Australian cities and may not generalise to industrial, residential, or healthcare occupancies without additional training data. The reliance on post-event labelling introduces inevitable noise, particularly for ambiguous events where the true cause was never definitively established. Future work should explore transfer learning approaches to reduce the data requirements for deployment in novel building types, as well as temporal attention mechanisms that might improve discrimination in the critical first 15 seconds of an alarm event.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>Standards Australia. (2016). <em>AS 7240.2: Fire detection and alarm systems — Control and indicating equipment.</em> Sydney: SAI Global.</p>
                <p>Standards Australia. (2015). <em>AS 7240.14: Fire detection and alarm systems — Point-type fire detectors.</em> Sydney: SAI Global.</p>
                <p>AFAC. (2023). <em>False Alarm Reduction Strategy 2023–2028.</em> Melbourne: Australasian Fire and Emergency Service Authorities Council.</p>
                <p>Howard, A., Sandler, M., Chen, B. et al. (2019). &quot;Searching for MobileNetV3.&quot; <em>Proceedings of the IEEE/CVF International Conference on Computer Vision,</em> 1314–1324.</p>
                <p>He, K., Zhang, X., Ren, S. &amp; Sun, J. (2016). &quot;Deep Residual Learning for Image Recognition.&quot; <em>Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition,</em> 770–778.</p>
                <p>Fire &amp; Rescue NSW. (2025). <em>Schedule of Fees and Charges 2025–2026.</em> Sydney: Government of New South Wales.</p>
                <p>Australian Building Codes Board. (2022). <em>National Construction Code 2022, Volume One.</em> Canberra: Commonwealth of Australia.</p>
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
            <ScrollReveal delay={0.2}>
              <Link href="/insights/bacnet-fire-system-security" className="group block">
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    Research Paper
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Vulnerability Analysis of BACnet Protocol Implementations in Networked Fire Indicator Panels
                  </h3>
                  <p className="text-slate-400 text-sm">Protocol-level security analysis of BACnet/IP in fire system networks.</p>
                </article>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
