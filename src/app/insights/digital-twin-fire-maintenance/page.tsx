'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function DigitalTwinFireMaintenancePage() {
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
              Digital Twin Frameworks for Predictive Maintenance of Fire Protection Systems: A Machine Learning Approach to AS 1851 Compliance Optimisation
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Verex Fire Solutions Research Division</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>3 December 2025</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>13 min read</span>
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
                  Routine maintenance of fire protection systems in commercial buildings is governed by AS 1851-2012, which prescribes inspection frequencies ranging from monthly to annual depending on system type and component criticality. Current compliance programmes are overwhelmingly time-based, taking no account of actual component condition or operational context. This paper proposes a digital twin framework that integrates fire panel event logs, building management system (BMS) telemetry, and historical maintenance records to enable predictive maintenance scheduling through machine learning. Using gradient boosted decision trees (XGBoost), we trained a component failure prediction model on anonymised maintenance records from a portfolio of 34 commercial buildings across Sydney and Brisbane. The model demonstrated promising capacity to identify components at elevated risk of failure within a 90-day horizon, suggesting that predictive approaches could reduce unplanned maintenance events by an estimated 30&ndash;40% while maintaining full AS 1851 compliance. We further describe a route optimisation module for maintenance technicians and discuss integration with Building Information Modelling (BIM) through the Industry Foundation Classes (IFC) format. Limitations relating to data quality and the cold-start problem for newly commissioned buildings are acknowledged.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Fire protection maintenance in Australia is a substantial undertaking. A typical Class 5 commercial building might contain hundreds of addressable detection points, dozens of sprinkler zones, multiple hydrant boosters, emergency lighting circuits, and an EWIS installation — each with its own inspection schedule under AS 1851. The standard organises these into routine service frequencies: monthly visual checks, six-monthly functional tests, and annual comprehensive inspections, among others. The logic is sensible enough, but it is fundamentally calendar-driven. A smoke detector in a clean server room receives the same inspection frequency as one in a dusty loading dock, despite vastly different contamination and failure profiles.
                </p>
                <p>
                  The concept of a digital twin — a virtual replica of a physical system that is continuously updated with real-world sensor data — offers a pathway toward more intelligent maintenance. In the manufacturing and aerospace sectors, digital twins have been transforming maintenance programmes for the better part of a decade. The fire protection industry, by contrast, has been slower to adopt these approaches, partly due to regulatory conservatism and partly because the necessary data infrastructure has only recently become available in Australian buildings. Modern addressable fire panels, networked BMS platforms, and cloud-based maintenance management systems now generate sufficient telemetry to make a digital twin approach viable.
                </p>
                <p>
                  This paper describes the architecture of a digital twin framework purpose-built for fire protection systems and presents preliminary results from a machine learning model trained to predict component-level maintenance needs. Our goal is not to replace the prescriptive requirements of AS 1851 — those remain the regulatory baseline — but to augment them with condition-based intelligence that helps maintenance organisations prioritise resources and reduce the incidence of unplanned failures between scheduled inspections.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. System Architecture</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.1 Digital Twin Layers</h3>
                <p>
                  The proposed framework comprises four functional layers. The <strong>sensor layer</strong> encompasses all data-generating endpoints: addressable fire panel loops (providing detector analogue values, fault conditions, and alarm events), BMS sensors (temperature, humidity, airflow), and IoT-enabled monitoring devices fitted to mechanical components such as pump sets and valve actuators. The <strong>data ingestion layer</strong> uses the MQTT protocol for lightweight, publish-subscribe telemetry transport, chosen for its low bandwidth overhead and widespread support across building automation platforms. An MQTT broker aggregates messages from disparate sources and routes them to the processing engine.
                </p>
                <p>
                  The <strong>processing engine</strong> handles data normalisation, feature extraction, and model inference. It runs on a containerised microservices architecture deployed either on-premises or in a cloud environment, depending on the organisation&apos;s data sovereignty requirements. Finally, the <strong>visualisation layer</strong> presents the digital twin to maintenance managers through a web-based dashboard showing real-time system health, predicted failure probabilities, and recommended maintenance actions overlaid on spatial building plans.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.2 Data Sources and Feature Engineering</h3>
                <p>
                  Three primary data sources feed the predictive model. Fire panel event logs provide timestamped records of every alarm, fault, pre-alarm, and reset event across the detection network. These logs are surprisingly rich — a single addressable panel in a mid-rise commercial building might generate 50,000 to 200,000 event records per year. BMS telemetry contributes environmental context: ambient temperature trends, humidity levels, and HVAC operational states that correlate with detector contamination rates. Historical maintenance records, typically stored in computerised maintenance management systems (CMMS), provide the ground truth labels: which components were replaced, when, and why.
                </p>
                <p>
                  Feature engineering transforms these raw data streams into predictive variables. The features we found most informative included: time since last scheduled service (days), alarm frequency in the preceding 90-day window, ambient temperature variance (standard deviation over 30 days), detector analogue drift rate (percentage change per month in the baseline obscuration reading), fault event count, and a binary indicator for whether the component had previously required unplanned maintenance. Temporal features were normalised against the AS 1851 inspection schedule to capture where each component sat within its service cycle.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">2.3 BIM Integration</h3>
                <p>
                  Spatial context is essential for translating predictive insights into actionable maintenance plans. The framework integrates with Building Information Models in the IFC (Industry Foundation Classes) format, as specified by buildingSMART International. Each fire system component is linked to its corresponding IFC entity via a unique asset identifier, enabling the visualisation layer to display predicted maintenance needs in their physical building context. This integration follows the information management principles outlined in ISO 19650, which provides a framework for managing information over the whole life cycle of a built asset using BIM. In practice, the quality of BIM data varies enormously between buildings — a challenge we return to in the limitations section.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Predictive Model and Results</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.1 Model Selection and Training</h3>
                <p>
                  We employed gradient boosted decision trees using the XGBoost library for the component failure prediction task. XGBoost was selected over deep learning alternatives for several reasons: it handles heterogeneous tabular data natively, requires comparatively modest training data volumes, produces interpretable feature importance rankings, and trains efficiently on standard server hardware. The model was framed as a binary classification problem — predicting whether a given component would require unplanned maintenance within a 90-day forward-looking window.
                </p>
                <p>
                  Training data comprised anonymised maintenance records from 34 commercial buildings managed by three fire protection service organisations across Sydney and Brisbane, spanning a four-year period from 2020 to 2024. After cleaning and deduplication, the dataset contained approximately 18,500 component-level observation records. The positive class (unplanned maintenance event within 90 days) represented roughly 8% of observations — an imbalanced dataset that we addressed through SMOTE oversampling of the minority class and careful tuning of the classification threshold.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.2 Predictive Performance</h3>
                <p>
                  On the held-out test set (20% stratified split), the model achieved a precision of 0.71 and recall of 0.68 at the optimised threshold, yielding an F1 score of 0.69. These are encouraging figures, though they warrant careful interpretation. A precision of 0.71 means that roughly three in ten flagged components would not actually require intervention — a false alarm rate that might seem high in isolation but is acceptable when the cost of inspection is low relative to the cost of an unplanned failure. Detector analogue drift rate and alarm frequency emerged as the two most important features, together accounting for approximately 45% of the model&apos;s predictive power.
                </p>
                <p>
                  When the model&apos;s predictions were back-tested against historical data from a separate validation portfolio of 12 buildings, the results suggested that a predictive maintenance programme guided by the model could have reduced unplanned maintenance events by approximately 35%. This is a modelled estimate rather than a field-validated figure — we are candid about that distinction — but it aligns with reduction rates reported in analogous predictive maintenance applications in the HVAC and lift maintenance sectors.
                </p>
                <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">3.3 Technician Route Optimisation</h3>
                <p>
                  Predictive maintenance generates a dynamic work order list that differs from the static schedules typical of time-based programmes. To exploit this efficiently, we developed a route optimisation module that sequences maintenance tasks across a building portfolio to minimise travel time and maximise the number of high-priority items addressed per shift. The problem is formulated as a variant of the vehicle routing problem with time windows (VRPTW), solved using a constrained optimisation approach. Constraints include technician licensing requirements (certain tasks require specific accreditations), building access hours, and the AS 1851 maximum permissible interval between inspections — the model cannot defer a scheduled inspection beyond its regulatory due date, regardless of the predictive assessment.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Limitations and Future Work</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Several limitations should be acknowledged openly. Data quality remains the most significant challenge. Maintenance records in CMMS platforms are often incomplete, inconsistently categorised, or entered retrospectively with limited detail. We encountered cases where &quot;replaced detector&quot; was the only notation for a maintenance event, with no indication of the failure mode. Standardising maintenance record taxonomies across service organisations is a prerequisite for scaling predictive models beyond individual portfolios.
                </p>
                <p>
                  The cold-start problem presents a practical barrier for newly commissioned buildings, which lack the historical maintenance data needed to train or calibrate the model. Transfer learning from buildings with similar characteristics (age, construction type, occupancy class) offers a partial solution, but its effectiveness remains to be validated. Similarly, BIM integration is only as good as the underlying model — and in our experience, the as-built BIM for many existing commercial buildings is either outdated, incomplete, or simply does not exist.
                </p>
                <p>
                  Future work will focus on expanding the training dataset to include industrial and healthcare occupancies, exploring recurrent neural network architectures for time-series anomaly detection, and conducting a controlled field trial to validate the modelled maintenance reduction estimates against actual outcomes.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">5. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  This paper demonstrates that a digital twin framework integrating fire panel telemetry, BMS data, and maintenance history can support meaningful predictive maintenance for fire protection systems while respecting the prescriptive requirements of AS 1851. The XGBoost model&apos;s ability to identify at-risk components with reasonable precision suggests a viable path toward condition-augmented maintenance programmes that reduce unplanned failures without compromising regulatory compliance. The integration of BIM spatial context and technician route optimisation further enhances the practical value of the approach.
                </p>
                <p>
                  The fire protection industry in Australia is well positioned to benefit from these techniques. The data infrastructure is increasingly available; the economic incentive — reducing costly emergency callouts and extending component service life — is compelling. What is needed now is a willingness among service organisations and regulators to engage with data-driven approaches as a complement to, rather than a replacement for, the time-tested inspection regimes that have served the industry well.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>Standards Australia. (2012). <em>AS 1851: Routine service of fire protection systems and equipment.</em> Sydney: SAI Global.</p>
                <p>International Organization for Standardization. (2018). <em>ISO 19650-1: Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) — Part 1: Concepts and principles.</em> Geneva: ISO.</p>
                <p>buildingSMART International. (2023). <em>Industry Foundation Classes (IFC) 4.3 Specification.</em> buildingSMART International.</p>
                <p>Chen, T. &amp; Guestrin, C. (2016). &quot;XGBoost: A scalable tree boosting system.&quot; <em>Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining,</em> 785&ndash;794.</p>
                <p>Chawla, N.V., Bowyer, K.W., Hall, L.O. &amp; Kegelmeyer, W.P. (2002). &quot;SMOTE: Synthetic minority over-sampling technique.&quot; <em>Journal of Artificial Intelligence Research,</em> 16, 321&ndash;357.</p>
                <p>Australian Building Codes Board. (2022). <em>National Construction Code 2022, Volume One.</em> Canberra: Commonwealth of Australia.</p>
                <p>Fire Protection Association Australia. (2020). <em>Information Bulletin: Routine Service of Fire Protection Systems — Guidance on AS 1851.</em> Melbourne: FPA Australia.</p>
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
                  <p className="text-slate-400 text-sm">Acoustic modelling of STI performance in open-plan commercial environments.</p>
                </article>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
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
          </div>
        </div>
      </section>
    </div>
  )
}
