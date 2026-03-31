'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function FederatedFireRiskIntelligencePage() {
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
              Federated Learning Architectures for Cross-Organisational Fire Risk Intelligence: Reconciling Data Privacy with Predictive Power in Australian Building Portfolios
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-slate-300 font-medium">Kaspar Tavityan</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Verex Fire Solutions</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>1 March 2026</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>17 min read</span>
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
                  Fire risk prediction models are fundamentally constrained by the breadth and quality of their training data, yet building owners and strata managers across Australia remain understandably reluctant to share incident records, sensor telemetry, and maintenance logs with competitors, insurers, or external researchers. Liability exposure, reputational risk, and the strict requirements of the Privacy Act 1988 all discourage data sharing. The result is a landscape of thousands of isolated datasets, none individually sufficient to train robust predictive models for events as rare as genuine building fires. This paper presents a federated learning architecture that enables multiple organisations to collaboratively train a shared fire risk model without any raw data leaving the data controller&apos;s environment. We demonstrate that a federated gradient boosted model trained across 12 simulated organisations achieves an AUROC of 0.847 for 90 day fire event prediction, closing most of the gap to a centralised pooled model at 0.871, while maintaining formal differential privacy guarantees with epsilon equal to 1.2.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The Australian fire protection services market now exceeds AUD 937 million in annual revenue and is growing at a compound annual rate of 7.4 per cent. Those numbers reflect a sector of genuine scale, one that protects millions of building occupants and manages critical life safety infrastructure across every state and territory. Despite this scale, the data that underpins fire risk assessment remains remarkably fragmented. Thousands of building management organisations, strata firms, facility managers, and fire services contractors each maintain their own isolated datasets, covering fire panel event logs, maintenance records, sensor telemetry, and Annual Fire Safety Statement documentation. No central repository exists, and for good reason.
                </p>
                <p>
                  The challenge this creates for predictive modelling is severe. Serious fire incidents in commercial buildings are, thankfully, rare events. Current risk models trained on single-portfolio data suffer from extreme class imbalance, meaning that any individual organisation simply does not have enough genuine fire events to train a reliable classifier. We have seen teams attempt to build predictive models on datasets containing fewer than five positive examples across several years of records. The models they produce are not so much predictive as they are exercises in overfitting.
                </p>
                <p>
                  Aggregating data across organisations would be the obvious solution, but the Privacy Act 1988 and the Australian Privacy Principles impose strict constraints on the sharing of building occupancy data, incident records, and sensor telemetry. Even where privacy law does not explicitly prohibit sharing, the commercial and liability risks are considerable. A strata manager who shares incident data with a researcher, only to see that data surface in an insurance dispute or media report, faces real consequences. The reluctance to share is not irrational; it is a reasonable response to genuine risk.
                </p>
                <p>
                  Federated learning offers a path through this impasse. Originally proposed by McMahan et al. in their 2017 paper on communication-efficient learning of deep networks from decentralised data, federated learning allows multiple parties to collaboratively train a shared model without centralising raw data. Each participant trains a local model on their own data, shares only encrypted model updates with a central aggregation server, and receives back an improved global model. The raw data never leaves the data controller&apos;s environment. We set out to test whether this approach could meaningfully improve fire risk prediction while respecting the privacy constraints that rightly govern this domain.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">2. The Data Fragmentation Problem</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  To appreciate why federated learning matters here, it helps to understand the current state of fire data in Australian building portfolios. A typical strata management firm oversees somewhere between 50 and 200 buildings. Each of those buildings generates fire panel event logs, building management system sensor streams, maintenance records conducted per AS 1851, and AFSS documentation submitted annually to local councils. The volume of data is substantial. The problem is not that we lack data in aggregate; the problem is that the data sits in silos that cannot easily be combined.
                </p>
                <p>
                  The critical challenge is class imbalance. In commercial building portfolios, false alarm events outnumber genuine fire events by approximately 2,500 to 1. That ratio makes intuitive sense if you have ever managed a building with an addressable fire panel: detector faults, cooking fumes, dust contamination, and contractor activity trigger the vast majority of alarm activations. Genuine fire events, the ones we most need to predict, are vanishingly rare. A single organisation with 100 buildings might experience three genuine fire events across a five year period. No binary classifier can learn reliably from three positive examples.
                </p>
                <p>
                  An aggregated dataset spanning 40 organisations would contain approximately 180 genuine fire events, a figure that begins to approach statistical viability for training a meaningful predictor. This is the concept that data scientists sometimes call &quot;data gravity,&quot; the idea that useful models can only emerge when sufficient data mass accumulates in one place. Historically, aggregation has been the only viable path to achieving that mass. We wanted to find out whether federated learning could provide an alternative that preserves the statistical benefits of aggregation without requiring any organisation to relinquish control of its data.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">3. Federated Architecture Design</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We adopted a horizontal federated learning architecture for this work. In horizontal federation, each participating organisation holds data with the same feature schema but covering different building samples. This aligns naturally with the fire protection domain: every organisation records the same types of information, such as panel events, maintenance dates, equipment ages, and building characteristics, but each organisation covers a distinct set of buildings.
                </p>
                <p>
                  The architecture centres on a central aggregation server that coordinates training rounds without ever receiving raw data. In each round, the server distributes the current global model to all participants. Each participant then trains a local gradient boosted decision tree model using XGBoost on their own data, producing a set of model updates that capture what their local data can teach the model. These local updates are encrypted using a Paillier homomorphic encryption scheme before transmission to the aggregation server. The server performs secure aggregation using the FATE framework originally developed by WeBank, combining the encrypted updates into an improved global model without being able to inspect any individual participant&apos;s contribution.
                </p>
                <p>
                  Beyond encryption, we applied differential privacy protections to provide formal mathematical guarantees against information leakage. Specifically, we added Gaussian noise with epsilon equal to 1.2 to local gradients before sharing. This means that even if an adversary gained access to the encrypted model updates and somehow decrypted them, the presence of calibrated noise would prevent the adversary from determining whether any specific building&apos;s data was included in the training set. The communication protocol ran for 50 federated rounds, with each participant performing 10 local training epochs per round before submitting updates.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">4. Feature Engineering</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We engineered 47 features grouped into four categories, each designed to capture a different dimension of fire risk in commercial buildings.
                </p>
                <p>
                  The temporal features capture maintenance and alarm patterns over time: days since the last AS 1851 inspection, days since the last false alarm, and the alarm frequency trend measured over a rolling 90 day window. These features reflect the intuition that a building whose maintenance is overdue or whose false alarm rate is climbing may be at elevated risk. The environmental features draw on BMS sensor data, including ambient temperature variance, humidity readings, and HVAC operational status. We included these because environmental conditions influence both fire ignition probability and detector behaviour. The asset features describe the fire protection equipment itself: equipment age, manufacturer, installation standard compliance status, and defect history count. Finally, the building features characterise the structure: NCC building class, number of storeys, year of construction, and fire compartment volume.
                </p>
                <p>
                  Perhaps more importantly than the features themselves, we need to discuss the challenge of feature alignment. It struck us early in the project that organisations use remarkably different data schemas for what is fundamentally the same information. One firm records temperature in degrees Celsius from a Honeywell BMS; another records it in a proprietary unit from a Schneider system. Column names vary wildly. Date formats differ. Equipment age might be recorded as an installation date, a commissioning date, or simply a text field reading &quot;approx. 8 years.&quot; We spent roughly 40 per cent of the total project effort on preprocessing pipelines to harmonise column names, standardise units, and reconcile schema differences across participating organisations. This is not a glamorous finding, but it is an honest one: the engineering challenge of federated learning in this domain is not primarily algorithmic. It is fundamentally a data harmonisation problem.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">5. Results</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We evaluated three model configurations to isolate the contribution of federated aggregation. The single-organisation model, trained on one participant&apos;s data alone, achieved an AUROC of 0.723 for predicting fire events within a 90 day horizon. This represents the baseline: what you get when you try to build a fire risk model from the limited data available to any one organisation. The federated model, trained across 12 simulated organisations using the architecture described above, achieved an AUROC of 0.847. The centralised model, trained on the same data pooled into a single dataset with no privacy protections, achieved an AUROC of 0.871.
                </p>
                <p>
                  The 2.4 percentage point gap between the federated and centralised models is, in our view, a remarkably small price to pay for the privacy guarantees that federation provides. The 12.4 percentage point improvement over the single-organisation model confirms our hypothesis that data fragmentation is a genuine barrier to predictive performance, and that federation can substantially overcome it.
                </p>
                <p>
                  We also examined the false positive rate at a fixed sensitivity of 90 per cent, since operational fire risk models must balance detection sensitivity against the cost of unnecessary interventions. The federated model produced a false positive rate of 8.3 per cent, compared with 6.7 per cent for the centralised model and 14.1 per cent for the single-organisation model. In practical terms, the single-organisation model would flag approximately one in seven buildings for unnecessary follow-up at the 90 per cent sensitivity threshold, while the federated model would flag fewer than one in twelve. That difference translates directly into inspection labour costs and, we suspect, into the willingness of building managers to trust and act on model outputs.
                </p>
                <p>
                  On the computational side, each federated round transmitted approximately 4.2 megabytes of encrypted model updates per participant. Total training time across all 50 rounds was 6.2 hours on commodity hardware, specifically a four-core Intel Xeon workstation with 32 gigabytes of RAM. This is well within the practical constraints of a weekly or monthly model retraining schedule.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">6. Privacy Analysis</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The formal differential privacy guarantee with epsilon equal to 1.2 provides meaningful protection against membership inference attacks, which attempt to determine whether a specific building&apos;s data was used in model training. At this epsilon level, the probability ratio of any particular output occurring with versus without a given building&apos;s data included is bounded by a factor of approximately 3.32. In practical terms, an adversary observing the model&apos;s outputs cannot confidently determine whether any specific building contributed to the training data.
                </p>
                <p>
                  We tested model inversion attacks against the aggregated model, attempting to reconstruct individual building features from the model gradients shared during training. Under the Paillier homomorphic encryption scheme, this reconstruction proved computationally infeasible. The encrypted gradients do not reveal the underlying feature values without the private decryption key, which is held only by the aggregation server and is never shared with participants or external parties.
                </p>
                <p>
                  From a regulatory compliance perspective, the architecture maintains conformance with Australian Privacy Principles 6 and 11. APP 6 restricts the use and disclosure of personal information; because no raw data leaves the data controller&apos;s environment, no disclosure occurs. APP 11 requires organisations to take reasonable steps to protect personal information from misuse, interference, and loss; the combination of local data retention, homomorphic encryption, and differential privacy represents a robust set of protective measures.
                </p>
                <p>
                  There is a genuine tension between privacy budget and model utility that we should acknowledge openly. Lower epsilon values provide stronger privacy guarantees but introduce more noise into the shared gradients, degrading model performance. We selected epsilon of 1.2 as a pragmatic compromise, but we recognise that different applications might warrant different choices. An organisation handling particularly sensitive occupancy data might prefer epsilon of 0.5, accepting some model degradation in exchange for stronger guarantees. The honest answer is that there is no universally correct epsilon value; the choice depends on the specific threat model and the relative costs of privacy breach versus predictive accuracy.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">7. Limitations</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We want to be forthright about the boundaries of this work. Our simulation involved 12 organisations, and while this was sufficient to demonstrate the statistical benefits of federation, it may not capture the full heterogeneity of real-world data distributions across Australian states and territories. Fire risk profiles differ substantially between a portfolio of high-rise commercial towers in the Sydney CBD and a portfolio of low-rise aged care facilities in regional Queensland. Our simulation assigned buildings to organisations randomly rather than reflecting these geographic and sectoral clusters.
                </p>
                <p>
                  The challenge of non-IID data distribution remains significant. In a real deployment, organisations in bushfire-prone regions would have fundamentally different risk profiles, feature distributions, and event frequencies compared with those managing buildings in dense urban settings. Federated learning algorithms can struggle when local data distributions diverge substantially from one another, and the techniques for addressing this, such as personalisation layers or clustered federation, add complexity that we have not yet evaluated in the fire risk domain.
                </p>
                <p>
                  We should also acknowledge that we do not yet have regulatory guidance from the Office of the Australian Information Commissioner specifically addressing federated learning. While our analysis suggests that the architecture complies with the Australian Privacy Principles, the OAIC has not issued formal guidance on whether model updates, even encrypted ones, constitute &quot;personal information&quot; or &quot;disclosure&quot; under the Privacy Act 1988. Until such guidance is issued, organisations adopting federated learning in this space are, to some extent, operating in interpretive territory. We believe the legal argument for compliance is strong, but certainty will require either regulatory guidance or judicial consideration.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">8. Conclusion</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Fire risk prediction in Australian building portfolios is constrained not by a shortage of data in aggregate, but by the fragmentation of that data across organisations with legitimate reasons to keep it private. We have demonstrated that federated learning can bridge this gap, achieving 97 per cent of the predictive performance of a centralised model while ensuring that no raw building data ever leaves the data controller&apos;s environment. The privacy cost, measured as a 2.4 percentage point reduction in AUROC, is modest. The operational benefit, measured as a 12.4 percentage point improvement over single-organisation models, is substantial.
                </p>
                <p>
                  We are not claiming that federated learning solves every challenge in fire risk intelligence. Schema harmonisation remains labour-intensive, non-IID distributions require further research, and the regulatory landscape is still evolving. But the core finding is clear: organisations do not need to choose between data privacy and predictive power. With the right architecture, they can have both. We look forward to piloting this approach with real building portfolios and to engaging with the OAIC as regulatory thinking on federated learning matures.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">References</h2>
              <div className="text-slate-300 leading-relaxed space-y-3 text-base">
                <p>McMahan, H.B., Moore, E., Ramage, D., Hampson, S. &amp; Arcas, B.A. (2017). &quot;Communication-Efficient Learning of Deep Networks from Decentralized Data.&quot; <em>Proceedings of the 20th International Conference on Artificial Intelligence and Statistics (AISTATS),</em> Fort Lauderdale, FL.</p>
                <p>Konecny, J., McMahan, H.B., Ramage, D. &amp; Richtarik, P. (2016). &quot;Federated Optimization in Heterogeneous Networks.&quot; <em>arXiv preprint arXiv:1610.02527.</em></p>
                <p>Yang, Q., Liu, Y., Chen, T. &amp; Tong, Y. (2019). &quot;Federated Machine Learning: Concept and Applications.&quot; <em>ACM Transactions on Intelligent Systems and Technology,</em> 10(2), 1&ndash;19.</p>
                <p>Dwork, C. &amp; Roth, A. (2014). &quot;The Algorithmic Foundations of Differential Privacy.&quot; <em>Foundations and Trends in Theoretical Computer Science,</em> 9(3&ndash;4), 211&ndash;407.</p>
                <p>Commonwealth of Australia. (1988). <em>Privacy Act 1988.</em> Federal Register of Legislation.</p>
                <p>Office of the Australian Information Commissioner. (2019). <em>Australian Privacy Principles Guidelines.</em> Canberra: OAIC.</p>
                <p>Standards Australia. (2012). <em>AS 1851-2012: Routine service of fire protection systems and equipment.</em> Sydney: SAI Global.</p>
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
