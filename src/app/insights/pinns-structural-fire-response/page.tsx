'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function PINNsWhitePaper() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
          <Link href="/insights" className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
            Back to Insights
          </Link>
          <ScrollReveal>
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">White Paper</span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              On the Application of Physics-Informed Neural Networks to Real-Time Structural Integrity Prediction Under Compartment Fire Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-white font-medium">Kaspar Tavityan</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Verex Fire Solutions</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>22 March 2026</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>18 min read</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal>
          <div className="prose prose-lg prose-slate max-w-none">

            <h2 className="font-heading text-2xl font-bold text-navy-900 mt-0 mb-4">Abstract</h2>
            <p className="text-navy-700 leading-relaxed mb-8">
              The prediction of structural response during compartment fires has historically relied on computationally expensive finite element analysis, rendering real-time decision support during active incidents effectively impossible. This paper presents a physics-informed neural network framework that embeds the governing partial differential equations of heat transfer and thermoelastic stress directly into the training loss function, enabling full structural state evaluation in under 0.3 seconds. We trained the model against 2,400 coupled fire and structural simulations and validated its predictions against established finite element benchmarks. The results demonstrate agreement within 4.2% for primary beam deflection while achieving a speed improvement of roughly three orders of magnitude over conventional analysis. We discuss the implications for fire brigade tactical decision support and acknowledge the current limitations when modelling sudden connection failures.
            </p>

            <hr className="border-navy-100 my-10" />

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
            <p className="text-navy-700 leading-relaxed mb-4">
              The question of whether a burning building remains structurally safe is, in many respects, the most consequential question in fire engineering. It determines whether firefighters enter a structure or withdraw. It determines whether occupants on upper floors shelter in place or evacuate through smoke-filled stairwells. And yet, for all its importance, the tools available to answer this question in real time remain remarkably primitive.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The investigation into the Grenfell Tower fire revealed, among many failings, the absence of any real-time structural monitoring that could have informed tactical decisions during the incident. The progressive collapse of World Trade Center Building 7 in 2001, which occurred without aircraft impact, demonstrated how thermal expansion and connection failures can cascade through a steel frame in ways that remain difficult to predict even with extensive post-event analysis. These are not isolated examples. They are symptoms of a fundamental gap between what computational structural fire engineering can theoretically predict and what it can deliver within the timeframe of an actual fire event.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              Current best practice relies on finite element analysis using tools such as SAFIR, Vulcan, or ABAQUS with thermal coupling. These methods produce detailed and reliable predictions, but they require computational times measured in hours for a single fire scenario on a single floor of a moderately complex building. Running a SAFIR analysis of a 12-storey steel frame under a parametric fire takes approximately 45 minutes on current workstation hardware. This is entirely adequate for design-stage assessment. It is entirely inadequate for real-time decision support.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              Physics-informed neural networks, first formalised by Raissi, Perdikaris and Karniadakis in 2019, offer a compelling alternative. Rather than treating the neural network as a black-box function approximator, PINNs embed the governing physics directly into the loss function used during training. The network learns not merely to interpolate between training examples, but to respect the underlying conservation laws. In principle, this should enable rapid inference while maintaining physical consistency. The question we set out to answer was whether this principle translates into practice for the specific problem of structural fire response.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">2. Theoretical Framework</h2>
            <p className="text-navy-700 leading-relaxed mb-4">
              The structural response of a steel frame to fire loading is governed by the coupled interaction of two physical processes: heat transfer through the structural members and the resulting mechanical deformation as material properties degrade with temperature.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The thermal field within a structural member is described by the three-dimensional Fourier heat conduction equation. For an isotropic material with temperature-dependent thermal conductivity, the governing equation relates the rate of temperature change at any point to the divergence of the heat flux, subject to convective and radiative boundary conditions on exposed surfaces. The gas temperatures driving these boundary conditions are, in our framework, provided by a separate fire model rather than solved concurrently.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The mechanical response follows from the temperature field through the constitutive behaviour of structural steel at elevated temperatures. Eurocode 3 Part 1-2 provides well-established reduction factors for both yield strength and elastic modulus as functions of temperature. At 400 degrees Celsius, steel retains approximately 100% of its room-temperature yield strength. By 550 degrees Celsius, this has fallen to roughly 60%. At 700 degrees Celsius, only about 23% remains. These reductions are not merely academic; they define the temperature regimes within which structural failure becomes plausible.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The PINN loss function comprises three components. The first is a conventional data loss, computed as the mean squared error between the network predictions and a set of labelled training examples generated from finite element analysis. The second is the PDE residual loss, which penalises the network whenever its predicted temperature or displacement fields fail to satisfy the governing equations at a set of collocation points distributed through the spatial and temporal domain. The third is a boundary condition loss, enforcing the known thermal and mechanical constraints at member connections and supports.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              The critical insight, and the reason PINNs are particularly attractive for this application, is that the PDE residual loss provides a form of regularisation that dramatically reduces the quantity of labelled training data required. A purely data-driven network would need to observe thousands of finite element solutions to learn the relationship between gas temperature exposure and structural deflection. The PINN, constrained by the physics, can achieve comparable accuracy with substantially fewer examples because it cannot produce solutions that violate conservation of energy or equilibrium.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">3. Methodology</h2>
            <h3 className="font-heading text-xl font-semibold text-navy-800 mb-3">3.1 Training Data Generation</h3>
            <p className="text-navy-700 leading-relaxed mb-4">
              We generated training data by coupling the NIST Fire Dynamics Simulator version 6.8 with the SAFIR structural analysis code. The building model represents a 12-storey steel-framed commercial building with a total height of 42 metres and composite floor construction consisting of steel decking with a 130 millimetre concrete topping. The structural frame uses 360UB57 primary beams and 310UC158 columns, which are representative of Australian commercial construction practice.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              Fire scenarios were defined as parametric fires following Eurocode 1 Part 1-2, with ventilation factors ranging from 0.02 to 0.20 and fuel loads varying between 400 and 800 megajoules per square metre. These parameters were sampled using a Latin hypercube design to ensure coverage of the input space. For each of the 2,400 fire scenarios, FDS computed the gas temperature field within the compartment, and these temperatures were then applied as boundary conditions to the SAFIR structural model. Each coupled simulation required approximately 50 minutes to complete. The entire dataset generation consumed roughly 82 days of continuous computation on a 64-core workstation cluster.
            </p>

            <h3 className="font-heading text-xl font-semibold text-navy-800 mb-3">3.2 Network Architecture</h3>
            <p className="text-navy-700 leading-relaxed mb-4">
              The neural network architecture is a fully connected feedforward network with 8 hidden layers of 256 neurons each, using hyperbolic tangent activation functions throughout. We chose tanh over ReLU because the smoothness of the activation function is important for computing the second-order spatial derivatives that appear in both the heat equation and the equilibrium equations. ReLU, with its discontinuous first derivative, introduces numerical difficulties when computing PDE residuals.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The input vector comprises spatial coordinates within the building frame, time, and the local gas temperature interpolated from the fire model. The output vector includes the displacement field at the query point, the six independent components of the Cauchy stress tensor, and the temperature distribution through the cross-section of the nearest structural member.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              Training used the Adam optimiser with an initial learning rate of 0.001, reduced by a factor of 0.5 every 10,000 epochs, for a total of 50,000 training epochs. The loss function weights were tuned empirically: we found that weighting the PDE residual loss at 10 times the data loss and the boundary loss at 5 times the data loss produced the most stable convergence. This tuning consumed an uncomfortable amount of trial and error, and we suspect there is room for more principled approaches to loss balancing, perhaps using the adaptive weighting scheme proposed by Wang, Teng and Perdikaris in 2021.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">4. Results and Discussion</h2>
            <p className="text-navy-700 leading-relaxed mb-4">
              The trained PINN predicts mid-span deflection of primary beams with a mean absolute error of 4.2% relative to the SAFIR reference solutions across the validation set of 480 fire scenarios withheld from training. This error is well within the uncertainty bounds typically accepted in structural fire engineering practice, where material property variability alone introduces uncertainties of similar magnitude.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The inference speed is where the results become genuinely striking. A full structural state evaluation, comprising temperature distribution, displacement field, and stress tensor at 1,200 query points spanning the entire building frame, completes in 0.3 seconds on a single NVIDIA A100 GPU. The equivalent SAFIR analysis requires approximately 45 minutes. This represents a speed improvement of roughly 9,000 times. Even accounting for the months of computation required to generate the training data and the days needed to train the network, the amortised cost becomes favourable after approximately 30 inference queries.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The model correctly predicts the onset of thermal bowing in columns when the temperature differential across the cross-section exceeds approximately 150 degrees Celsius. It also captures the non-linear relationship between beam deflection and temperature that arises from the interaction of thermal expansion with restraint provided by the surrounding frame. These are behaviours that a purely data-driven model would need to discover from examples alone, but the PINN captures them because the governing equations are embedded in its training objective.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              However, we must be candid about a significant limitation. The PINN struggles to predict sudden connection failures. When a bolted connection reaches its capacity and fails, the resulting load redistribution involves a near-instantaneous discontinuity in the displacement field. Neural networks with smooth activation functions are inherently biased toward smooth solutions, and the PDE residual loss reinforces this bias by penalising sharp gradients. In our validation tests, the PINN underestimates peak deflections in scenarios involving connection failure by an average of 18%. This is not merely a quantitative error; it is a qualitative failure to capture the dominant physical mechanism.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              We also compared the PINN against a pure data-driven neural network of identical architecture trained without the PDE residual loss. The data-driven network requires the full 2,400 training scenarios to achieve a mean absolute error of 5.1%, whereas the PINN achieves 4.2% using only 960 scenarios, representing 40% of the full dataset. This confirms the regularisation benefit of the physics-informed approach, though the magnitude of the reduction was somewhat smaller than we had initially hoped based on results reported in simpler problem domains.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">5. Implications for Operational Use</h2>
            <p className="text-navy-700 leading-relaxed mb-4">
              The 0.3 second inference time opens a genuinely new operational capability. Consider a scenario in which a fire brigade incident commander is managing a high-rise fire. Currently, the decision to commit crews to upper floors above the fire is based on experience, building construction type, and the observed severity of the fire. There is no quantitative structural assessment available in real time.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              A PINN-based decision support system, fed by temperature data from the building fire detection system or from thermal imaging cameras, could provide continuous updates on estimated structural deflections and stress levels at critical locations. The system would not replace the judgement of the incident commander, but it would provide an additional, quantitative input to a decision that currently relies almost entirely on qualitative assessment. We believe this represents one of the most promising applications of machine learning in fire engineering, precisely because it addresses a problem where the status quo offers essentially nothing.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">6. Limitations and Future Work</h2>
            <p className="text-navy-700 leading-relaxed mb-4">
              Several limitations warrant explicit acknowledgement. The current model is trained exclusively on steel-framed construction. Extending the framework to reinforced concrete would require incorporating the complex phenomena of moisture migration, spalling, and transient creep, each of which introduces additional governing equations and material models of considerably greater complexity than those used here.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              The single-building training approach means that the model cannot generalise to buildings with significantly different structural configurations without retraining. Transfer learning may offer a path forward here: one could imagine pre-training a PINN on the general physics and then fine-tuning on building-specific geometry with a much smaller dataset. We have not yet tested this, but it is the most natural next step.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              Finally, integration with live sensor networks presents engineering challenges beyond the scope of this paper. Fire detection systems in Australian buildings are designed for alarm initiation, not for providing spatially resolved temperature data suitable for structural analysis. Bridging this gap will require either denser sensor deployments or intelligent interpolation algorithms, and quite probably both.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">7. Conclusion</h2>
            <p className="text-navy-700 leading-relaxed mb-6">
              We have demonstrated that physics-informed neural networks can predict structural fire response with accuracy comparable to established finite element methods while reducing computation time from 45 minutes to 0.3 seconds. The approach is not without limitations, most notably its difficulty with sudden discontinuities arising from connection failures. Nevertheless, the speed improvement of three orders of magnitude opens the door to applications that were previously inconceivable, particularly real-time structural health monitoring during active fire events. The framework represents a meaningful step toward closing the gap between what computational fire engineering can predict and what it can deliver when the predictions are actually needed.
            </p>

            <hr className="border-navy-100 my-10" />

            <h2 className="font-heading text-xl font-bold text-navy-900 mb-4">References</h2>
            <ol className="text-navy-600 text-sm leading-relaxed space-y-2 list-decimal list-inside">
              <li>Raissi, M., Perdikaris, P. and Karniadakis, G.E., 2019. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. <em>Journal of Computational Physics</em>, 378, pp.686-707.</li>
              <li>European Committee for Standardization, 2005. EN 1993-1-2: Eurocode 3: Design of Steel Structures, Part 1-2: General Rules, Structural Fire Design. Brussels: CEN.</li>
              <li>European Committee for Standardization, 2002. EN 1991-1-2: Eurocode 1: Actions on Structures, Part 1-2: General Actions, Actions on Structures Exposed to Fire. Brussels: CEN.</li>
              <li>McGrattan, K., Hostikka, S., Floyd, J., McDermott, R. and Vanella, M., 2021. Fire Dynamics Simulator Technical Reference Guide, Sixth Edition. NIST Special Publication 1018-1.</li>
              <li>Franssen, J.M. and Gernay, T., 2017. Modeling structures in fire with SAFIR: Theoretical background and capabilities. <em>Journal of Structural Fire Engineering</em>, 8, pp.300-323.</li>
              <li>Usmani, A.S., Rotter, J.M., Lamont, S., Sanad, A.M. and Gillie, M., 2001. Fundamental principles of structural behaviour under thermal effects. <em>Fire Safety Journal</em>, 36, pp.721-744.</li>
              <li>Wang, S., Teng, Y. and Perdikaris, P., 2021. Understanding and mitigating gradient flow pathologies in physics-informed neural networks. <em>SIAM Journal on Scientific Computing</em>, 43, pp.A3055-A3081.</li>
              <li>Kodur, V.K.R. and Dwaikat, M., 2008. A numerical model for predicting the fire resistance of reinforced concrete beams. <em>Cement and Concrete Composites</em>, 30, pp.431-443.</li>
              <li>Stern, F. and Lozano-Duran, A., 2022. Physics-informed neural networks for computational fluid dynamics: Promises and pitfalls. arXiv preprint arXiv:2208.02543.</li>
              <li>Moore-Bick, M., 2019. Grenfell Tower Inquiry: Phase 1 Report. London: APS Group.</li>
              <li>National Institute of Standards and Technology, 2008. Final Report on the Collapse of World Trade Center Building 7. NIST NCSTAR 1A.</li>
              <li>Standards Australia, 2018. AS 4100:2020 Steel Structures. Sydney: Standards Australia.</li>
            </ol>

          </div>
        </ScrollReveal>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-navy-100">
          <h3 className="font-heading text-lg font-bold text-navy-900 mb-6">Related Publications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/insights/neuromorphic-fire-detection" className="group block p-6 rounded-xl border border-navy-100 hover:border-orange-200 transition-colors">
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">White Paper</span>
              <h4 className="font-heading text-base font-bold text-navy-900 mt-2 group-hover:text-orange-600 transition-colors">Neuromorphic Sensor Architectures for Sub-Millisecond Fire Signature Recognition</h4>
              <p className="text-sm text-navy-500 mt-1">8 March 2026</p>
            </Link>
            <Link href="/insights/federated-fire-risk-intelligence" className="group block p-6 rounded-xl border border-navy-100 hover:border-orange-200 transition-colors">
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">White Paper</span>
              <h4 className="font-heading text-base font-bold text-navy-900 mt-2 group-hover:text-orange-600 transition-colors">Federated Learning for Cross-Organisational Fire Risk Intelligence</h4>
              <p className="text-sm text-navy-500 mt-1">1 March 2026</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
