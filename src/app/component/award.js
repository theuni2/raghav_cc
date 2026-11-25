'use client';

import React, { useState } from 'react';

export default function KarmaveerAward() {
  const [showModal, setShowModal] = useState(false);

  const accolades = [
    {
      title: 'REX Karmaveer Chakra Award',
      desc: 'Bronze Recipient (2025–2026) # Season 14, instituted by iCONGO in partnership with the United Nations.',
      icon: '🥉',
      tag: 'Global Honor',
    },
    {
      title: 'ICT Captain, Student Council',
      desc: 'Led school’s ICT team, coordinating digital initiatives and promoting digital literacy (The Heritage School, 2026).',
      icon: '💻',
      tag: 'Executive Council',
    },
    {
      title: 'School Prefect & Student Council',
      desc: 'Elected student leader serving with empathy, discipline, and peer representation.',
      icon: '🏛️',
      tag: 'Leadership',
    },
    {
      title: 'Head of Financial Literacy Club',
      desc: 'Empowering students with practical personal finance, economics, and investment knowledge.',
      icon: '📊',
      tag: 'Academic',
    },
    {
      title: 'District Literacy Ambassador, District Interact Council',
      desc: 'District Interact Council, Rotary International District 3291 (2025) — promoting literacy, educational outreach and community engagement initiatives.',
      icon: '📚',
      tag: 'District Council',
    },
    {
      title: 'Secretary, Cyber Club',
      desc: 'Inspiring peers to think critically, navigate digital ethics, and act responsibly online.',
      icon: '💻',
      tag: 'Technology',
    },
    {
      title: 'Academic Distinction, Immerse Education',
      desc: 'Earned distinction in international academic programs and 2x awarded title of Most Disciplined Boy.',
      icon: '🎓',
      tag: 'Merit',
    },
  ];

  return (
    <section id="recognition" className="relative bg-[#071526] text-white py-24 px-6 overflow-hidden border-t border-b border-white/10">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 animate-float">
            <span>🎖️</span> Global Recognition • In Partnership with the United Nations
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            REX Karmaveer Global Fellowship & <br className="hidden sm:block" />
            <span className="text-amber-400 animate-amber-glow">
              Karmaveer Chakra Award
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            Bronze Recipient (2025–2026) # Season 14 • Instituted by <strong className="text-white">iCONGO</strong> (International Confederation of NGOs) in partnership with the <strong className="text-white">United Nations</strong>, celebrating citizens who embody compassionate leadership and citizen action.
          </p>
        </div>

        {/* Certificate Feature & Bio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Certificate Image Frame (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setShowModal(true)}
              className="group relative cursor-pointer rounded-3xl p-3 bg-gradient-to-b from-amber-500/30 via-white/10 to-amber-500/10 border border-amber-400/40 shadow-2xl hover:border-amber-400 transition-all duration-300 reveal-scale hover-lift"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-inner">
                <img
                  src="/img/karmaveer_award.jpg"
                  alt="REX Karmaveer Chakra Award - Raghav Agarwal"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-amber-400 text-[#071526] font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg">
                    🔍 Click to View Certificate
                  </span>
                </div>
              </div>

              {/* Badge underneath certificate */}
              <div className="mt-3 text-center">
                <span className="text-xs font-mono text-amber-300 tracking-wider">
                  BRONZE RECIPIENT (2025–2026) • SEASON 14
                </span>
              </div>
            </div>
          </div>

          {/* Citation & Biography (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm reveal hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-lg font-bold">
                  🎖️
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Raghav Agarwal</h3>
                  <p className="text-xs text-amber-300 font-medium">
                    Student Leader, Environmentalist & Changemaker
                  </p>
                </div>
              </div>

              {/* Exact Citation Text from Award */}
              <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-white/10">
                <p>
                  &ldquo;Raghav Agarwal is a 15-year-old student leader, environmentalist, and changemaker who believes in creating impact through compassion and purpose. As the founder of <strong className="text-white">Smiles Across Miles</strong>, he leads an initiative that collects, upcycles, and redistributes clothes to reduce waste and support communities in need. His work reflects his deep commitment to sustainability and social responsibility.&rdquo;
                </p>
                <p>
                  &ldquo;Raghav has served as a <strong className="text-white">school prefect and student council member</strong>, leading with empathy and discipline. He heads the <strong className="text-white">Financial Literacy Club</strong>, promotes awareness as the Brand Ambassador of the <strong className="text-white">Interact Club</strong>, and serves as Secretary of the <strong className="text-white">Cyber Club</strong>, inspiring his peers to think critically and act responsibly.&rdquo;
                </p>
                <p>
                  &ldquo;He has been awarded the title of <strong className="text-white">Most Disciplined Boy twice</strong>, earned Academic Distinction from <strong className="text-white">Immerse Education</strong>, and represented his school in several business and leadership competitions. Beyond academics, he is a passionate writer and advocate for youth-led change.&rdquo;
                </p>
              </blockquote>

              {/* Guiding Mission Strip */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-transparent border border-amber-400/20">
                <p className="text-xs sm:text-sm text-amber-200 italic font-serif leading-relaxed">
                  &ldquo;Raghav&apos;s journey is guided by a simple belief that small actions, when done with purpose and consistency, can create meaningful change. His mission is to inspire young people to live consciously, lead responsibly, and leave the world better than they found it.&rdquo;
                </p>
              </div>

              {/* Signatories line */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div>
                  <span className="font-semibold text-slate-300">Signed by: </span>
                  Anurag Nirbhaya (Treasurer iCONGO), Eitu Vij Chopra, Jeroninio Almeida
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4"
                >
                  View Full Award Resolution
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accolades & Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accolades.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-amber-400/40 transition-all duration-300 group reveal hover-lift stagger-${(idx % 6) + 1}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-amber-300 border border-amber-400/20">
                  {item.tag}
                </span>
              </div>
              <h4 className="text-white font-bold text-base mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full certificate view */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-[#071526] border border-amber-400/30 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition"
            >
              ✕
            </button>
            <img
              src="/img/karmaveer_award.jpg"
              alt="REX Karmaveer Chakra Award Certificate"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="mt-4 text-center">
              <h4 className="text-base font-bold text-white">REX Karmaveer Chakra Award Certificate</h4>
              <p className="text-xs text-amber-300 mt-1">
                Bronze Recipient (2025–2026) # Season 14 • iCONGO & United Nations Partnership
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
