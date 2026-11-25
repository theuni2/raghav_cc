'use client';

import React, { useState } from 'react';
import Nav from '../component/nav';
import Footer from '../component/footer';

export default function JournalPage() {
  const [activeTab, setActiveTab] = useState('abstract');

  const methodologies = [
    { name: 'Adaptive Market Hypothesis (AMH)', desc: 'Validates time-varying market efficiency and evolutionary market dynamics over static equilibrium.' },
    { name: 'Efficient Market Hypothesis (EMH)', desc: 'Tests weak-form and semi-strong efficiency regarding asset price predictability and information incorporation.' },
    { name: 'Hurst Exponent (H)', desc: 'Measures long-range statistical memory and trend persistence vs. mean reversion in return time series.' },
    { name: 'Ljung–Box Q-Test', desc: 'Evaluates autocorrelation across multiple lags to test for randomness in return residuals.' },
    { name: 'Runs Test', desc: 'Non-parametric testing for serial independence and non-random price sequence behavior.' },
    { name: 'Welfare Cost Optimization', desc: 'Economic modeling showing mechanisms capable of achieving a 94% reduction in systemic waste.' },
  ];

  const takeaways = [
    {
      title: 'Adaptive vs. Efficient Markets',
      desc: 'Cryptocurrencies fail classic EMH tests due to investor herding and trend-chasing, but efficiency fluctuates dynamically over time, strongly validating the Adaptive Market Hypothesis (AMH).',
      stat: 'AMH Validated',
      badge: 'Market Structure',
      icon: '📈',
    },
    {
      title: 'Bitcoin Market Maturity',
      desc: 'Bitcoin exhibits markedly higher informational efficiency and lower autocorrelation than smaller cap altcoins, indicating progressive institutionalization as trading liquidity deepens.',
      stat: 'BTC > Altcoins',
      badge: 'Empirical Findings',
      icon: '🪙',
    },
    {
      title: '94% Welfare Waste Reduction',
      desc: 'Legacy crypto mechanisms consume ~1.4% of aggregate market value annually in deadweight costs. Quantitative models show next-gen architecture could curtail welfare waste by up to 94%.',
      stat: '94% Cost Cut',
      badge: 'Mechanism Design',
      icon: '⚡',
    },
    {
      title: 'Retail Micro vs. Enterprise Settlement',
      desc: 'Empirical transaction velocity and fee structures demonstrate that digital assets function substantially better for everyday micro-purchases than for high-value enterprise payment rails.',
      stat: 'Micro-Payments',
      badge: 'Macroeconomics',
      icon: '💳',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071320] text-slate-100 flex flex-col justify-between">
      <Nav />

      {/* Main Journal Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Breadcrumb & Badge */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <span>🎓</span> Economics & Quantitative Finance Research Journal
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Academic Research <span className="text-cyan-400 animate-cyan-glow">& Publications</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal">
            Independent research exploring cryptocurrency market efficiency, behavioral economics,
            and systemic welfare implications conducted under the supervision of leading academic faculty.
          </p>
        </div>

        {/* Featured Paper Hero Card */}
        <article className="relative bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-green-500/15 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500 text-[#071320]">
                  Published 2025
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Supervised 8-Week Academic Research
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/docs/iit_delhi_research_certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-[#071320] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full transition shadow-lg shadow-green-500/20"
                >
                  <span>📜</span> View IIT Delhi Certificate (PDF)
                </a>
              </div>
            </div>

            {/* Paper Title & Authors */}
            <div className="mt-8 mb-8">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-snug tracking-tight mb-4">
                &ldquo;Market Efficiency and Economic Implications of Cryptocurrency&rdquo;
              </h2>

              {/* Author & Supervision Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xl font-bold">
                    RA
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Raghav Aggarwal</h3>
                    <p className="text-xs text-cyan-300">Research Author</p>
                    <p className="text-xs text-slate-400">
                      The Heritage School (ISC) • Founder, THS Finance Society
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 text-green-300 flex items-center justify-center text-xl font-bold">
                    SM
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Dr. Saptarshi Mukherjee</h3>
                    <p className="text-xs text-green-300">Research Supervisor & Mentor</p>
                    <p className="text-xs text-slate-400">
                      Professor, Indian Institute of Technology (IIT) Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metric Highlights Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {takeaways.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-400/40 transition group"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {item.stat}
                  </div>
                  <div className="text-[11px] font-semibold text-green-400 uppercase tracking-wider mt-0.5">
                    {item.badge}
                  </div>
                  <div className="text-xs text-slate-300 font-semibold mt-2">{item.title}</div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Navigation Tabs for Deep Dive */}
            <div className="border-b border-white/10 flex flex-wrap gap-2 mb-8">
              {[
                { id: 'abstract', label: '1. Abstract & Scope' },
                { id: 'methodology', label: '2. Methodology & Tests' },
                { id: 'critique', label: '3. Promise vs. Reality' },
                { id: 'taxonomy', label: '4. Contemporary Role' },
                { id: 'certificate', label: '5. Academic Certification' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-cyan-400 text-cyan-300 bg-white/5'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Abstract & Core Scope */}
            {activeTab === 'abstract' && (
              <div className="space-y-6 animate-fadeIn text-slate-300 leading-relaxed text-sm sm:text-base">
                <div className="bg-white/5 border-l-4 border-cyan-400 p-6 rounded-r-2xl">
                  <h4 className="text-white font-bold text-lg mb-2">Research Overview</h4>
                  <p>
                    This paper examines how efficiently cryptocurrency markets work and what this means for the broader economy.
                    We studied <strong className="text-white">12 major cryptocurrencies including Bitcoin and Ethereum</strong> from their
                    start dates through 2021.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <h5 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                      <span className="text-cyan-400">⚖️</span> Theoretical Framework
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Our research empirically benchmarks two core market paradigms:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span><strong className="text-white">Efficient Market Hypothesis (EMH):</strong> Posits that asset prices instantly and accurately reflect all available information.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span><strong className="text-white">Adaptive Market Hypothesis (AMH):</strong> Proposes that market efficiency is an evolutionary process that fluctuates over time driven by behavioral factors.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <h5 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                      <span className="text-green-400">📊</span> Core Empirical Findings
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span><strong className="text-white">Sub-Optimal Efficiency:</strong> Most cryptocurrencies do not operate efficiently—they exhibit persistent patterns of investor herding, trend chasing, and feedback loops.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span><strong className="text-white">AMH Confirmed:</strong> Efficiency parameters shift dynamically across market cycles, strongly confirming AMH dynamics over static EMH.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span><strong className="text-white">Bitcoin Relative Maturity:</strong> Bitcoin exhibits measurably higher informational efficiency than altcoins.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span><strong className="text-white">Micro-Payment Efficacy:</strong> Current payment architectures function far better for everyday micro-purchases than for large-scale enterprise transactions.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Methodology & Tests */}
            {activeTab === 'methodology' && (
              <div className="space-y-6 animate-fadeIn">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Conducted an in-depth Economics and Finance research project examining cryptocurrency market efficiency and its wider economic implications. Analysed historical data on major digital assets, applying statistical and econometric models to measure price predictability, autocorrelation, and volatility dynamics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {methodologies.map((m, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition">
                      <div className="text-cyan-400 font-mono text-xs font-bold uppercase mb-1">Methodology #{idx + 1}</div>
                      <h5 className="text-white font-bold text-sm mb-2">{m.name}</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-950/40 via-white/5 to-green-950/40 border border-white/10 rounded-2xl p-6 mt-6">
                  <h5 className="text-white font-bold text-base mb-2">Behavioral Finance & Investor Psychology</h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Investigated how investor herding, social sentiment, FOMO cycles, and speculative trading volumes influence return distributions and non-linear volatility clustering. Explored systemic mining overhead and mechanism design, highlighting mathematical models that demonstrate a potential <strong>94% reduction in deadweight welfare costs</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Promise vs Reality */}
            {activeTab === 'critique' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold text-lg mb-2">Genuine Innovation vs. Current Shortfalls</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Cryptocurrencies represent a genuine innovation in how we conceptualize money and payment networks. The blockchain technology underlying them has authentic potential. However, current implementations fall short of their revolutionary promise in three critical ways:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
                      <div className="text-2xl mb-2">📉</div>
                      <h5 className="text-white font-bold text-sm mb-1">Market Inefficiency</h5>
                      <p className="text-xs text-slate-300">
                        Markets do not operate with sufficient informational efficiency to function as dependable stores of value or stable units of account.
                      </p>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5">
                      <div className="text-2xl mb-2">⚙️</div>
                      <h5 className="text-white font-bold text-sm mb-1">Resource Misallocation</h5>
                      <p className="text-xs text-slate-300">
                        Current Proof-of-Work systems waste significant resources (~1.4% of market cap annually) through unoptimized consensus designs.
                      </p>
                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5">
                      <div className="text-2xl mb-2">🐑</div>
                      <h5 className="text-white font-bold text-sm mb-1">Herding Over Fundamentals</h5>
                      <p className="text-xs text-slate-300">
                        Speculative trading volumes, sentiment loops, and copycat behavior overwhelm fundamental utility and price discovery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                  <h5 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                    <span>💡</span> The Good News: These Challenges are Solvable
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Better mechanism design can reduce systemic costs by <strong className="text-green-300">94%</strong>. As institutional participation and market maturation continue, informational efficiency will steadily improve, while modern layer-2 protocols and alternative consensus engines help resolve foundational scalability constraints.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 4: Contemporary Role */}
            {activeTab === 'taxonomy' && (
              <div className="space-y-6 animate-fadeIn">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Whether cryptocurrencies eventually transform global finance or remain primarily speculative assets depends on resolving the structural inefficiencies documented in this paper. Today, cryptocurrencies are most accurately characterized under four pragmatic dimensions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-cyan-400 font-bold text-sm mb-1">01. Speculative High-Risk Assets</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Assets exhibiting elevated volatility with significant potential upside alongside substantial downside risk profile.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-green-400 font-bold text-sm mb-1">02. Experimental Payment Systems</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Novel transactional rails with genuine promise for small retail transfers, yet constrained by latency, throughput, and settlement friction.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-cyan-400 font-bold text-sm mb-1">03. Sophisticated Diversification Tools</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Uncorrelated alternative return drivers suitable for risk-tolerant institutional portfolios and sophisticated quantitative strategies.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-green-400 font-bold text-sm mb-1">04. Promising Emerging Technologies</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Groundbreaking distributed ledger foundations that still require foundational economic and design optimization.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-cyan-500/10 border border-cyan-400/30 rounded-2xl text-center">
                  <blockquote className="text-base sm:text-lg font-serif italic text-white max-w-2xl mx-auto">
                    &ldquo;The cryptocurrency revolution may still happen, but it requires getting the economics right, not just the technology.&rdquo;
                  </blockquote>
                  <p className="text-xs text-cyan-300 mt-2 font-mono">
                    — Raghav Aggarwal, &ldquo;Market Efficiency and Economic Implications of Cryptocurrency&rdquo; (2025)
                  </p>
                </div>
              </div>
            )}

            {/* Tab 5: Academic Certification */}
            {activeTab === 'certificate' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                        Official Academic Verification
                      </span>
                      <h4 className="text-xl font-bold text-white mt-1">
                        Indian Institute of Technology, Delhi (IIT Delhi)
                      </h4>
                      <p className="text-xs text-slate-400">
                        Supervision Certificate • Dated 19th November 2025
                      </p>
                    </div>

                    <a
                      href="/docs/iit_delhi_research_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-[#071320] font-bold text-xs px-5 py-2.5 rounded-full transition shadow-md"
                    >
                      Download Original PDF
                    </a>
                  </div>

                  {/* Certificate Transcript Display */}
                  <div className="my-8 p-8 bg-[#0B1C2D] border border-cyan-500/20 rounded-2xl text-slate-200 font-serif relative">
                    <div className="text-center mb-8">
                      <h5 className="text-lg font-bold uppercase tracking-widest text-white">To Whomsoever It May Concern</h5>
                      <p className="text-xs text-slate-400 font-sans mt-1">19th November 2025</p>
                    </div>

                    <p className="text-base leading-relaxed mb-8 indent-8">
                      This is to certify that <strong className="text-white underline decoration-cyan-400">Raghav Aggarwal</strong>, a student of The Heritage School (ISC), successfully completed an eight-week research under my supervision. During this period, Raghav worked on the topic <strong className="text-cyan-300">&ldquo;Market Efficiency and Economic Implications of Cryptocurrency&rdquo;</strong>.
                    </p>

                    <div className="pt-6 border-t border-white/10 font-sans not-italic flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                      <div>
                        <div className="font-serif italic text-xl text-cyan-300 mb-1">Dr. Saptarshi Mukherjee</div>
                        <p className="text-sm font-bold text-white">Dr. Saptarshi Mukherjee</p>
                        <p className="text-xs text-slate-400">Professor</p>
                        <p className="text-xs text-slate-400">Indian Institute of Technology, Delhi</p>
                        <p className="text-xs text-cyan-400 mt-1 font-mono">saptarshi.isi@gmail.com</p>
                      </div>

                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-sans">
                        🏛️ Verified IIT Delhi Mentorship
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
