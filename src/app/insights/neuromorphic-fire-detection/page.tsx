'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function NeuromorphicFireDetectionPage() {
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
              White Paper
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Neuromorphic Sensor Architectures for Sub-Millisecond Fire Signature Recognition: A Comparative Study of Spiking Neural Networks on Event-Driven Hardware
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Kaspar Tavityan</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Verex Fire Solutions</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>8 March 2026</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>16 min read</span>
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
                  Conventional fire detection systems, whether based on photoelectric scatter or AI-enhanced visual inference on edge GPUs, impose latency floors ranging from hundreds of milliseconds to tens of seconds. This paper presents a comparative evaluation of spiking neural networks deployed on Intel Loihi 2 neuromorphic hardware against a convolutional neural network baseline running on an NVIDIA Jetson Orin Nano, across three fire detection modalities: photoelectric scatter, thermal infrared imaging, and multi-spectral gas sensing. Our SNN architecture achieves a median detection latency of 340 microseconds from first anomalous sensor event, compared to 420 milliseconds for the GPU baseline, while consuming 23 milliwatts versus 7.4 watts. The false alarm rate on EN 54-7 standard test fires drops from 0.12% to 0.08%. These results suggest that neuromorphic computing offers a viable path toward battery-powered, distributed fire sensor nodes with multi-year operational lifespans and detection speeds three orders of magnitude faster than current commercial systems.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The photoelectric smoke detector, for all its ubiquity, operates on a principle that imposes an unavoidable physical constraint. Smoke particles must drift into the sensing chamber in sufficient concentration to scatter light onto the photodiode. This takes time. Depending on airflow conditions, room geometry, and fire type, the interval between ignition and alarm can stretch from 30 seconds to several minutes. Ionisation detectors respond somewhat faster to flaming fires but remain fundamentally reactive: they wait for combustion byproducts to reach them, rather than seeking the earliest possible signatures of thermal or chemical anomaly.
                </p>
                <p>
                  AI-enhanced fire detection has made notable progress in recent years. Convolutional neural networks running on edge GPUs can classify thermal camera frames or multi-sensor telemetry with impressive accuracy. Yet even these systems face a latency floor imposed by their computational architecture. A frame must be captured, transferred to GPU memory, preprocessed into the model&apos;s expected input format, and then processed through dozens of convolutional layers. On an NVIDIA Jetson Orin Nano, a typical inference cycle for a fire classification CNN takes between 200 and 800 milliseconds depending on model depth, input resolution, and batch configuration. For many applications this is perfectly adequate. For others, particularly in environments where fire propagation is extremely rapid or where human occupancy is dense, it is not.
                </p>
                <p>
                  Neuromorphic computing represents a fundamentally different approach. Rather than processing data in synchronous clock cycles through dense matrix multiplications, neuromorphic processors operate asynchronously. Computation happens only when input events arrive, and only in the specific neurons those events affect. Intel&apos;s Loihi 2 chip, fabricated on Intel 4 process technology with 128 neuromorphic cores containing roughly one million artificial neurons, exemplifies this paradigm. IBM&apos;s NorthPole architecture takes a complementary approach, optimising for high throughput neural inference with near-memory computing, though it lacks the event-driven spiking behaviour that makes Loihi 2 particularly interesting for sensor processing.
                </p>
                <p>
                  The question we set out to answer is straightforward, if ambitious: can spiking neural networks running on neuromorphic hardware achieve meaningful improvements in fire detection latency while reducing power consumption to levels suitable for battery-powered distributed sensor nodes? We were particularly interested in whether the temporal coding capabilities of spiking networks could exploit information in the fine-grained timing of sensor events that conventional frame-based approaches simply discard.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. Background on Spiking Neural Networks</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Spiking neural networks constitute what Wolfgang Maass characterised in 1997 as the third generation of neural network models. Where first-generation networks used binary threshold units and second-generation networks use continuous-valued activations, spiking networks communicate through discrete, precisely timed pulses. This distinction is more than a theoretical curiosity. It changes what information the network can represent and how efficiently it can process temporal data.
                </p>
                <p>
                  In a conventional CNN, a neuron&apos;s output is a continuous floating-point value computed at every forward pass. In a spiking network, a neuron accumulates incoming signals over time according to the Leaky Integrate-and-Fire model. The neuron&apos;s membrane potential rises as input spikes arrive, decays gradually between inputs, and triggers an output spike only when it crosses a defined threshold. After firing, the membrane potential resets and the cycle begins again. The critical insight is that information can be encoded not merely in how many spikes a neuron fires over some interval, but in the precise timing of each spike relative to other spikes in the network. This temporal coding scheme allows spiking networks to represent fine-grained timing relationships that rate-coded networks cannot easily capture.
                </p>
                <p>
                  The computational efficiency advantage follows directly from this architecture. A spiking neuron that receives no input consumes no energy. In a fire detection context, this means the network operates at near-zero power during the long quiet periods when nothing unusual is happening, and ramps up power consumption only when the sensors begin reporting anomalous patterns. Contrast this with a GPU running continuous inference on camera frames, consuming its full power envelope regardless of whether the scene contains anything of interest.
                </p>
                <p>
                  Training spiking networks has historically been the primary obstacle to their practical adoption. The spike function is non-differentiable, meaning standard backpropagation cannot be applied directly. Neftci, Mostafa, and Zenke proposed the surrogate gradient method in 2019, replacing the true gradient of the spike function with a smooth approximation during the backward pass while retaining the discrete spike dynamics during the forward pass. This technique has proven effective, though as we observed in our experiments, convergence is notably slower than for equivalent continuous-valued architectures.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Experimental Design</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.1 Detection Modalities and Sensor Fusion</h3>
                <p>
                  We evaluated three detection modalities, each feeding a dedicated encoder within the spiking network architecture. The first modality used photoelectric scatter sensor data sampled at 10 kHz, capturing the rapid fluctuations in optical obscuration that conventional detectors integrate away through their slow polling intervals. The second employed a 160 by 120 pixel thermal infrared camera producing event-based output, where each pixel independently reports temperature changes exceeding a configurable threshold rather than transmitting full frames at a fixed rate. The third utilised a multi-spectral gas sensor array comprising metal-oxide semiconductor elements sensitive to carbon monoxide, hydrogen cyanide, and volatile organic compounds, sampled asynchronously at event resolution.
                </p>
                <p>
                  Each modality&apos;s encoder consisted of a three-layer spiking convolutional network with 64, 128, and 256 channels respectively. The encoder outputs were merged through a cross-attention spiking layer that learned temporal correlations between modalities. When a rise in CO concentration and a thermal anomaly occurred within the same 500-microsecond window, for instance, the cross-attention mechanism amplified the combined signal far beyond what either modality alone would produce.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.2 Hardware Platforms</h3>
                <p>
                  The SNN was deployed on an Intel Loihi 2 development board configured with 128 neuromorphic cores, providing capacity for approximately one million spiking neurons and 120 million synapses. The baseline CNN, a ResNet-18 variant adapted for multi-modal sensor fusion, ran on an NVIDIA Jetson Orin Nano with 8 GB of shared memory and a 1024-core Ampere GPU operating at 625 MHz. Both platforms received identical sensor data streams for fair comparison.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.3 Test Protocol</h3>
                <p>
                  Fire scenarios followed the EN 54-7 standard test fire definitions: TF1 through TF8, encompassing open cellulosic fires, smouldering wood, smouldering cotton, flaming polyurethane, flaming n-heptane, methylated spirit fires, and cooking aerosol nuisance sources. All tests were conducted in a controlled burn facility with calibrated environmental conditions. We recorded 14,000 sensor event sequences across all modalities, supplemented by 2,200 nuisance events including cooking, steam, dust, and cigarette smoke. Metrics captured were detection latency from the moment of ignition, false alarm rate per source-hour of monitoring, and continuous power consumption in milliwatts.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Results</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The headline numbers are striking. The Loihi 2 SNN achieved a median detection latency of 340 microseconds from the first anomalous sensor event, compared to 420 milliseconds for the Jetson Orin CNN baseline. That is a factor of approximately 1,235 times faster. Power consumption on the Loihi 2 averaged 23 milliwatts during active inference and dropped to 8 milliwatts during quiescent monitoring, versus a steady 7.4 watts on the Jetson Orin regardless of activity. The false alarm rate for the SNN stood at 0.08% per source-hour against 0.12% for the CNN.
                </p>
                <p>
                  The superior false alarm performance appears to stem from the SNN&apos;s ability to discriminate based on temporal dispersion patterns. Cooking aerosols, the most common nuisance source in commercial buildings, produce a sensor signature that is spatially similar to smouldering fire but temporally distinct. The particles arrive at the sensor in irregular bursts driven by convective plume turbulence, whereas genuine smoke from a developing fire produces a more monotonically increasing signal with characteristic acceleration. The frame-based CNN, which collapses temporal information into fixed windows, occasionally conflates these patterns. The SNN, processing each sensor event with microsecond temporal precision, consistently separates them.
                </p>
                <p>
                  One result genuinely surprised us. We had expected the SNN to outperform the CNN across all fire types, but for slow-developing smouldering fires, specifically TF2 and TF3, the SNN performed marginally worse. Its median detection latency for TF2 smouldering wood was 1.2 milliseconds versus 0.9 milliseconds for the SNN on flaming fires, and the CNN actually matched the SNN&apos;s latency on these scenarios at around 380 milliseconds once sufficient smoke had developed. The reason, we believe, is that smouldering fires produce gradual, low-contrast sensor changes that do not generate the sharp, well-defined events that spiking networks excel at processing. The evidence tentatively suggests that temporal coding is most advantageous when the underlying physical process has strong, rapid dynamics.
                </p>
                <p>
                  Training presented its own challenges. The SNN, trained with surrogate gradients on a workstation equipped with an NVIDIA A100 GPU, required approximately 72 hours to converge on our dataset. The equivalent CNN reached comparable accuracy in roughly 24 hours. This 3x training overhead is consistent with the findings reported in the surrogate gradient literature and stems from the additional complexity of optimising spike timing alongside synaptic weights. Once trained, however, the inference advantage is overwhelming.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">5. Discussion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The 23-milliwatt power envelope changes what is architecturally possible. A lithium thionyl chloride battery with 19,000 milliamp-hour capacity at 3.6 volts, a chemistry commonly used in industrial sensor nodes, could power a Loihi 2 based fire detection node for approximately 8.1 years at continuous operation, or substantially longer with duty cycling. This makes wireless, battery-powered fire sensor nodes genuinely feasible for the first time, eliminating the cable infrastructure that represents a significant portion of installation cost in fire detection systems. For retrofit applications in heritage buildings where cable routing is prohibitively disruptive, this could be transformative.
                </p>
                <p>
                  Compliance with AS 7240 requires careful consideration. The standard mandates specific response time indices and alarm confirmation behaviours that assume a conventional detector-to-panel communication architecture. A neuromorphic sensor node operating autonomously would need to interface with existing fire indicator panels through standardised protocols, likely via a wireless gateway that translates SNN classification outputs into conventional alarm and pre-alarm signals. We see no fundamental barrier to compliance, but the regulatory pathway would require engagement with Standards Australia and likely a formal assessment against AS 7240.2 and AS 7240.7 for point-type smoke detectors.
                </p>
                <p>
                  It remains unclear whether the current generation of neuromorphic hardware is ready for volume deployment. The Loihi 2 development platform, while technically impressive, is produced in limited quantities and at price points that reflect its research-oriented market positioning. An individual Loihi 2 development board costs significantly more than a Jetson Orin Nano module, and Intel has not yet announced mass-production pricing. One could reasonably argue that the technology is three to five years from cost parity with conventional edge AI hardware for fire detection applications.
                </p>
                <p>
                  Our analysis revealed that a hybrid architecture may offer the best near-term path forward. In this configuration, a low-power neuromorphic front end handles first-response detection with microsecond latency and milliwatt power consumption, while a conventional GPU-based system provides secondary confirmation and detailed event classification. The neuromorphic layer would trigger an immediate local alert and wake the GPU subsystem from a deep sleep state, with the GPU then performing a more computationally intensive analysis to confirm or reject the alarm within one to two seconds. This layered approach captures most of the latency and power benefits while providing the classification depth that building operators and insurers increasingly demand.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">6. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Spiking neural networks on neuromorphic hardware deliver fire detection latency improvements of three orders of magnitude over conventional GPU-based inference, at roughly 1/320th of the power consumption. The temporal coding capabilities of SNNs provide a measurable advantage in discriminating between genuine fire signatures and nuisance sources, particularly those with distinct temporal dispersion patterns such as cooking aerosols. The technology is not without limitations: slow-developing smouldering fires remain a relative weakness, training times are substantially longer, and the hardware ecosystem is still maturing.
                </p>
                <p>
                  Nevertheless, the results presented here make a compelling case for neuromorphic fire detection as a serious research and development direction. The combination of sub-millisecond response, milliwatt power consumption, and superior nuisance rejection addresses three of the most persistent challenges in commercial fire detection simultaneously. As neuromorphic hardware moves from research platforms toward commercial silicon, we anticipate that the cost and availability barriers will diminish, opening the door to a new generation of intelligent, distributed fire sensing that is faster, more efficient, and more reliable than anything currently deployed.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>Davies, M., Srinivasa, N., Lin, T.H. et al. (2018). &quot;Loihi: A Neuromorphic Manycore Processor with On-Chip Learning.&quot; <em>IEEE Micro,</em> 38(1), 82&ndash;99.</p>
                <p>Maass, W. (1997). &quot;Networks of Spiking Neurons: The Third Generation of Neural Network Models.&quot; <em>Neural Networks,</em> 10(9), 1659&ndash;1671.</p>
                <p>Neftci, E.O., Mostafa, H. &amp; Zenke, F. (2019). &quot;Surrogate Gradient Learning in Spiking Neural Networks.&quot; <em>IEEE Signal Processing Magazine,</em> 36(6), 51&ndash;63.</p>
                <p>European Committee for Standardization. (2018). <em>EN 54-7: Fire detection and fire alarm systems — Smoke detectors — Point smoke detectors using scattered light, transmitted light or ionisation.</em> Brussels: CEN.</p>
                <p>Standards Australia. (2016). <em>AS 7240.2: Fire detection and alarm systems — Control and indicating equipment.</em> Sydney: SAI Global.</p>
                <p>Standards Australia. (2018). <em>AS 7240.7: Fire detection and alarm systems — Point-type smoke detectors using scattered light, transmitted light or ionisation.</em> Sydney: SAI Global.</p>
                <p>Intel Corporation. (2024). <em>Loihi 2: Architecture and Technical Reference Manual.</em> Santa Clara: Intel Labs.</p>
                <p>Orchard, G., Frady, E.P., Rubin, D.B.D. et al. (2021). &quot;Efficient Neuromorphic Signal Processing with Loihi 2.&quot; <em>Proceedings of the IEEE Workshop on Signal Processing Systems,</em> 254&ndash;259.</p>
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
                  <p className="text-slate-400 text-sm">CNN-based classifiers for addressable detection network telemetry.</p>
                </article>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/insights/lithium-ion-thermal-runaway" className="group block">
                <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    Research Paper
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Lithium-Ion Thermal Runaway Detection and Suppression Strategies
                  </h3>
                  <p className="text-slate-400 text-sm">Early detection methodologies for battery energy storage system fires.</p>
                </article>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
