'use client';

import React, { useState } from 'react';

export default function BookSection() {
  const [selectedCover, setSelectedCover] = useState('front');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyThemes = [
    {
      title: 'Bridging Ecology & Finance',
      desc: 'Connecting scientific carbon accounting with financial systems, corporate capital allocation, and market reality.',
      icon: '🌿',
    },
    {
      title: 'Emissions in an Unequal World',
      desc: 'Examining how climate externalities and carbon burdens disproportionately impact emerging economies and vulnerable communities.',
      icon: '⚖️',
    },
    {
      title: 'Questioning Established Systems',
      desc: 'Bringing an honest, fresh perspective unconstrained by traditional dogmas to ask better questions about growth vs. sustainability.',
      icon: '💡',
    },
    {
      title: 'Actionable Economic Thought',
      desc: 'Viewing carbon not merely as distant environmental data, but as an active economic force shaping policy and consumer choice.',
      icon: '📊',
    },
  ];

  const currentCoverSrc =
    selectedCover === 'front'
      ? '/img/book/carbon_keeps_the_score_front.jpg'
      : '/img/book/carbon_keeps_the_score_back.jpg';

  return (
    <section id="book" className="relative bg-[#071320] text-white py-24 px-6 overflow-hidden border-t border-white/10">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-ambient-orb" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-ambient-orb-reverse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 animate-float">
            <span>📖</span> Published Book • Now Available
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            Carbon Keeps the Score: <br />
            <span className="text-cyan-400 animate-cyan-glow">
              Accounting for Emissions in an Unequal World
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            By <strong className="text-white">Raghav Agarwal</strong> • Published by <strong className="text-white">Quillscape Publication</strong>
          </p>
        </div>

        {/* Book Spotlight Feature */}
        <div className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl backdrop-blur-sm reveal-scale hover-lift">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Book Cover Showcase (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Cover View Toggle */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-full mb-6 text-xs font-semibold">
                <button
                  onClick={() => setSelectedCover('front')}
                  className={`px-4 py-1.5 rounded-full transition ${
                    selectedCover === 'front'
                      ? 'bg-cyan-500 text-[#071320] font-bold shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Front Cover
                </button>
                <button
                  onClick={() => setSelectedCover('back')}
                  className={`px-4 py-1.5 rounded-full transition ${
                    selectedCover === 'back'
                      ? 'bg-cyan-500 text-[#071320] font-bold shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Back Cover (Synopsis)
                </button>
              </div>

              {/* 3D-styled Book Container */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="group relative cursor-pointer max-w-xs w-full transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black aspect-[388/623]">
                  <img
                    src={currentCoverSrc}
                    alt={
                      selectedCover === 'front'
                        ? 'Carbon Keeps the Score Front Cover - Raghav Agarwal'
                        : 'Carbon Keeps the Score Back Cover'
                    }
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-cyan-400 text-[#071320] font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg">
                      🔍 Click to Inspect Full Cover
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-xs text-slate-400">
                    {selectedCover === 'front' ? 'Official Cover Artwork' : 'Author Blurb & Synopsis'} • Tap to enlarge
                  </span>
                </div>
              </div>

              {/* Quick Metadata Card */}
              <div className="mt-6 w-full max-w-xs bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Publisher:</span>
                  <span className="font-semibold text-white">Quillscape Publication</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ISBN-10:</span>
                  <span className="font-mono text-cyan-300">8199322780</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-white">Economics & Climate Finance</span>
                </div>
              </div>
            </div>

            {/* Right: Author Synopsis & Purchase CTA (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4 w-fit">
                Author&apos;s Note & Mission
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                Where Environmental Responsibility Meets Economic Reality
              </h3>

              {/* Full Synopsis from Back Cover */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0B1C2D]/60 border-l-4 border-cyan-400 p-6 rounded-r-2xl mb-8">
                <p>
                  &ldquo;This book began not as an academic obligation, but as a question that refused to leave my mind. How can something as abstract as carbon emissions shape something as concrete as economies, markets, and financial decisions? As a teenager trying to understand the world, I found myself drawn to the intersection where environmental responsibility meets economic reality.&rdquo;
                </p>
                <p>
                  &ldquo;Carbon footprints are usually discussed in scientific or environmental terms, while finance and economics follow their own language of growth, profit, and efficiency. This book is an attempt to bring these worlds together, to show that they are not just connected, but deeply dependent on one another.&rdquo;
                </p>
                <p>
                  &ldquo;I am not writing as a seasoned expert with decades of experience, but as someone who chose to engage with a complex problem early. That perspective matters. It brings honesty, openness, and a willingness to question established systems without being bound by them. This book reflects that spirit.&rdquo;
                </p>
                <p className="text-cyan-200 font-medium italic">
                  &ldquo;This is more than just a book. It is a reflection of a belief that age does not limit the ability to contribute to meaningful conversations. If anything, starting early allows us to build a deeper, more responsible understanding of the systems we will one day lead and influence.&rdquo;
                </p>
              </div>

              {/* Purchase & Action Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="https://www.amazon.in/Carbon-Keeps-Score-Accounting-Emissions/dp/8199322780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-[#071320] font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-xl shadow-amber-500/20 btn-shimmer hover:scale-105 active:scale-95"
                >
                  <span>🛒</span> Buy on Amazon India
                  <span>→</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedCover('back');
                    setIsModalOpen(true);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#071320] font-semibold text-sm px-6 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <span>📄</span> Read Back Cover
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Thematic Pillars of the Book */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyThemes.map((theme, i) => (
            <div
              key={i}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group reveal hover-lift stagger-${i + 1}`}
            >
              <div>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{theme.icon}</div>
                <h4 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors">
                  {theme.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing book cover in full detail */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-[#071320] border border-cyan-400/30 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition z-10"
            >
              ✕
            </button>

            {/* Toggle in modal */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedCover('front')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                  selectedCover === 'front' ? 'bg-cyan-400 text-[#071320]' : 'bg-white/10 text-white'
                }`}
              >
                Front Cover
              </button>
              <button
                onClick={() => setSelectedCover('back')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                  selectedCover === 'back' ? 'bg-cyan-400 text-[#071320]' : 'bg-white/10 text-white'
                }`}
              >
                Back Cover
              </button>
            </div>

            <img
              src={currentCoverSrc}
              alt="Carbon Keeps the Score"
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
            />

            <div className="mt-4 text-center">
              <a
                href="https://www.amazon.in/Carbon-Keeps-Score-Accounting-Emissions/dp/8199322780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 text-[#071320] font-bold text-xs px-5 py-2 rounded-full shadow"
              >
                <span>🛒</span> View on Amazon India
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
