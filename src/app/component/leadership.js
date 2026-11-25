'use client';

import React, { useState } from 'react';

export default function LeadershipSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portraitPhoto = {
    src: '/img/leadership/raghav_ict_captain.jpg',
    title: 'Raghav Agarwal — ICT Captain Badge',
    caption: 'Investiture ceremony wearing the official "CAPTAIN - ICT" badge, ceremonial turban, and council sash.',
    role: 'ICT Captain, Student Council',
  };

  const ceremonyPhotos = [
    {
      src: '/img/leadership/student_council_trio.jpg',
      title: 'Student Council Leadership Team',
      caption: 'Raghav Agarwal (ICT Captain) with fellow Student Council leaders in ceremonial turbans and sashes at the investiture.',
      role: 'ICT Captain & Council Leaders',
    },
    {
      src: '/img/leadership/student_council_stage.jpg',
      title: 'Student Council Investiture Ceremony',
      caption: 'The Heritage School Student Council 2026 leadership team on stage during the official pinning ceremony.',
      role: 'Student Council 2026',
    },
    {
      src: '/img/leadership/student_council_flags.jpg',
      title: 'Council Colors & National Honor',
      caption: 'Student Council leaders standing with the Indian National Flag and The Heritage School ceremonial flag.',
      role: 'Council Flag Bearers',
    },
  ];

  const interactBadges = [
    {
      src: '/img/leadership/interact_literacy_ambassador_badge.jpg',
      title: 'District Literacy Ambassador Pin',
      role: 'District Interact Council | Rotary International District 3291 (2025)',
      caption: 'Official enamel badge: "Interact Literacy Ambassador — Interact District 3291" with Rotary International gear emblem.',
    },
    {
      src: '/img/leadership/interact_jt_treasurer_badge.jpg',
      title: 'Executive Badge: Jt. Treasurer',
      role: 'Interact Club, The Heritage School',
      caption: 'Official enameled bar pin: "INTERACT CLUB THE HERITAGE SCHOOL — JT. TREASURER — RAGHAV AGARWAL".',
    },
    {
      src: '/img/leadership/interact_member_badge.jpg',
      title: 'Interact Club Member Pin',
      role: 'Interact Club, The Heritage School',
      caption: 'Official member lapel pin: "INTERACT CLUB MEMBER — THE HERITAGE SCHOOL" with Rotary International emblem.',
    },
  ];

  const leadershipRoles = [
    {
      title: 'ICT Captain, Student Council',
      tenure: '2026',
      org: 'The Heritage School, Kolkata',
      badge: 'Executive Council',
      icon: '💻',
      desc: 'Led the school’s ICT team, coordinating digital initiatives, supporting students and staff with technical troubleshooting, and promoting digital literacy across the school community.',
      highlights: [
        'Coordinated school-wide digital initiatives and events',
        'Supported students and faculty with technical troubleshooting',
        'Promoted digital literacy and responsible cyber citizenship',
      ],
      featured: true,
    },
    {
      title: 'District Literacy Ambassador, District Interact Council',
      tenure: '2025',
      org: 'Rotary International District 3291',
      badge: 'District Council',
      icon: '📚',
      desc: 'Served as District Literacy Ambassador, representing the District Interact Council in promoting literacy, educational outreach and community engagement initiatives.',
      highlights: [
        'Spearheaded district-wide literacy drives and book collection',
        'Represented District Interact Council in regional youth forums',
        'Promoted equal educational access for underserved children',
      ],
      badgeData: interactBadges[0],
      featured: true,
    },
    {
      title: 'Jt. Treasurer & Ambassador, Interact Club',
      tenure: '2024 – 2026',
      org: 'The Heritage School / Rotary International',
      badge: 'Executive Board',
      icon: '🤝',
      desc: 'Served as Joint Treasurer and Club Ambassador, managing philanthropic club finances, organizing humanitarian drives, and mobilizing student volunteers.',
      highlights: [
        'Managed financial allocation for charitable student initiatives',
        'Organized community service and outreach campaigns',
        'Official insignia: Jt. Treasurer and Member badges',
      ],
      badgeData: interactBadges[1],
    },
    {
      title: 'Head, Financial Literacy Club',
      tenure: '2024 – 2026',
      org: 'The Heritage School, Kolkata',
      badge: 'Academic Leadership',
      icon: '📈',
      desc: 'Heads the club curriculum, introducing peers to financial literacy, personal finance fundamentals, investment principles, and practical economic modeling.',
      highlights: [
        'Interactive personal finance & budgeting workshops',
        'Simulated investment and portfolio management challenges',
      ],
    },
    {
      title: 'Founder, THS Finance Society',
      tenure: '2024 – Present',
      org: 'The Heritage School, Kolkata',
      badge: 'Founder',
      icon: '📊',
      desc: 'Founded a student-driven finance society to explore macroeconomics, capital markets, cryptocurrency efficiency, and contemporary global trade trends.',
      highlights: [
        'Author of research on cryptocurrency market efficiency',
        'Student-led economic discussions and speaker sessions',
      ],
    },
    {
      title: 'Secretary, Cyber Club',
      tenure: '2024 – 2025',
      org: 'The Heritage School, Kolkata',
      badge: 'Technology',
      icon: '🛡️',
      desc: 'Served as Secretary inspiring peers to think critically, navigate digital ethics, practice responsible cybersecurity, and explore emerging tech innovations.',
      highlights: [
        'Organized coding and cyber ethics workshops',
        'Fostered technical innovation and peer learning',
      ],
    },
    {
      title: 'School Prefect & Student Council',
      tenure: '2023 – 2025',
      org: 'The Heritage School, Kolkata',
      badge: 'Student Council',
      icon: '🏛️',
      desc: 'Served with empathy and discipline across school assemblies, inter-house events, and peer mentorship, twice awarded the title of Most Disciplined Boy.',
      highlights: [
        'Two-time recipient of "Most Disciplined Boy" award',
        'Academic Distinction from Immerse Education',
      ],
    },
  ];

  return (
    <section id="leadership" className="relative bg-[#071320] text-white py-24 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 animate-float">
            <span>🏛️</span> Student Governance & School Leadership
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            Leadership & <span className="text-cyan-400 animate-cyan-glow">Student Council</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            Elected and appointed to key student leadership positions at <strong className="text-white">The Heritage School, Kolkata</strong>, driving digital transformation, academic enrichment, and community responsibility.
          </p>
        </div>

        {/* Featured Card: ICT Captain (2026) */}
        <div className="bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden backdrop-blur-sm reveal-scale hover-lift">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Role Details & Contributions (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-400 text-[#071320]">
                  Executive Appointment • 2026
                </span>
                <span className="text-xs font-mono text-cyan-300">
                  Student Council Investiture
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                ICT Captain, Student Council
              </h3>
              <p className="text-base font-semibold text-cyan-300 mb-6">
                The Heritage School, Kolkata • 2026
              </p>

              {/* Exact user text in high-visibility quote box */}
              <div className="bg-[#0B1C2D]/80 border-l-4 border-cyan-400 p-5 rounded-r-2xl mb-6 shadow-sm">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  &ldquo;Led the school’s ICT team, coordinating digital initiatives, supporting students and staff with technical troubleshooting, and promoting digital literacy across the school community.&rdquo;
                </p>
              </div>

              {/* 3 Core Responsibilities */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xl mb-1">🚀</div>
                  <h4 className="text-xs font-bold text-white mb-1">Digital Initiatives</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Coordinating school-wide digital projects, tech assemblies, and student events.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xl mb-1">🛠️</div>
                  <h4 className="text-xs font-bold text-white mb-1">Tech Troubleshooting</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Providing dedicated hands-on technical support for students and faculty.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xl mb-1">💡</div>
                  <h4 className="text-xs font-bold text-white mb-1">Digital Literacy</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Promoting responsible cyber habits, tech literacy, and safety across campus.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Raghav's Investiture Photo (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                onClick={() => setSelectedImage(portraitPhoto)}
                className="group relative cursor-pointer rounded-2xl p-2 bg-gradient-to-b from-cyan-400/40 via-white/10 to-cyan-500/10 border border-cyan-400/50 shadow-2xl hover:scale-[1.02] transition-all duration-300 max-w-sm w-full"
              >
                <div className="relative overflow-hidden rounded-xl bg-black aspect-[3/4]">
                  <img
                    src="/img/leadership/raghav_ict_captain.jpg"
                    alt="Raghav Agarwal - ICT Captain"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-400 text-[#071320] text-xs font-bold shadow-md">
                      Official Badge: CAPTAIN - ICT
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs text-slate-300">
                  🔍 Click to view investiture portrait
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Card 2: District Literacy Ambassador (2025) & Rotary Interact Council */}
        <div className="bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden backdrop-blur-sm reveal-scale hover-lift">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Role Details & Contributions (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-[#071320]">
                  District Appointment • 2025
                </span>
                <span className="text-xs font-mono text-amber-300">
                  Rotary International District 3291
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                District Literacy Ambassador, <br className="hidden sm:block" />
                <span className="text-amber-400 animate-amber-glow">District Interact Council</span>
              </h3>
              <p className="text-base font-semibold text-amber-300 mb-6">
                Rotary International District 3291 • 2025
              </p>

              {/* Exact user text in high-visibility quote box */}
              <div className="bg-[#0B1C2D]/80 border-l-4 border-amber-400 p-5 rounded-r-2xl mb-6 shadow-sm">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  &ldquo;Served as District Literacy Ambassador, representing the District Interact Council in promoting literacy, educational outreach and community engagement initiatives.&rdquo;
                </p>
              </div>

              {/* 3 Core Responsibilities */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xl mb-1">📖</div>
                  <h4 className="text-xs font-bold text-white mb-1">Promoting Literacy</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Driving foundational reading programs, book drives, and literacy access across communities.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xl mb-1">🎓</div>
                  <h4 className="text-xs font-bold text-white mb-1">Educational Outreach</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Representing District Interact Council in youth forums, assemblies, and learning workshops.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xl mb-1">🤝</div>
                  <h4 className="text-xs font-bold text-white mb-1">Community Engagement</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Mobilizing Interact clubs across District 3291 for grassroots civic and humanitarian initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Rotary & Interact Official Badges (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm space-y-3">
                {/* Main Blue Pin: District Literacy Ambassador */}
                <div
                  onClick={() => setSelectedImage(interactBadges[0])}
                  className="group relative cursor-pointer rounded-2xl p-3 bg-gradient-to-b from-blue-500/20 via-white/10 to-amber-500/10 border border-blue-400/40 shadow-xl hover:border-amber-400/60 hover:scale-[1.02] transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-black/60 shrink-0 border border-white/20 p-1 flex items-center justify-center">
                    <img
                      src="/img/leadership/interact_literacy_ambassador_badge.jpg"
                      alt="District Literacy Ambassador Pin"
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                      District Insignia
                    </span>
                    <h5 className="text-sm font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      District Literacy Ambassador
                    </h5>
                    <p className="text-xs text-slate-300">Interact District 3291 Pin</p>
                    <span className="text-[11px] text-cyan-400 mt-1 inline-block">🔍 Click to inspect pin</span>
                  </div>
                </div>

                {/* Sub Badges Grid: Jt. Treasurer & Member */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedImage(interactBadges[1])}
                    className="group relative cursor-pointer rounded-2xl p-3 bg-white/5 border border-white/10 shadow-lg hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-20 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10 mb-2 p-1 flex items-center justify-center">
                      <img
                        src="/img/leadership/interact_jt_treasurer_badge.jpg"
                        alt="Jt. Treasurer Badge"
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-cyan-300">Jt. Treasurer</span>
                    <h6 className="text-[11px] font-bold text-white leading-tight mt-0.5">Raghav Agarwal</h6>
                    <span className="text-[10px] text-slate-400 mt-1">🔍 View Pin</span>
                  </div>

                  <div
                    onClick={() => setSelectedImage(interactBadges[2])}
                    className="group relative cursor-pointer rounded-2xl p-3 bg-white/5 border border-white/10 shadow-lg hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-20 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10 mb-2 p-1 flex items-center justify-center">
                      <img
                        src="/img/leadership/interact_member_badge.jpg"
                        alt="Interact Member Badge"
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-green-300">Interact Club</span>
                    <h6 className="text-[11px] font-bold text-white leading-tight mt-0.5">Member Badge</h6>
                    <span className="text-[10px] text-slate-400 mt-1">🔍 View Pin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investiture Ceremony Photo Strip */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Ceremonial Moments
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Student Council Investiture Ceremony 2026
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 sm:mt-0">
              The Heritage School Student Council taking the ceremonial oath of office and donning the colors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ceremonyPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(photo)}
                className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-400/50 transition-all duration-300 flex flex-col reveal-scale hover-lift stagger-${i + 1}`}
              >
                <div className="relative h-64 overflow-hidden bg-black/40">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white">
                    🔍 View
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-semibold bg-cyan-500/80 text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {photo.role}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Leadership Portfolio Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Leadership Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Clubs, Governance & Campus Impact
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              A track record of responsible governance, student advocacy, and academic initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipRoles.map((role, idx) => (
              <div
                key={idx}
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group reveal hover-lift stagger-${(idx % 6) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{role.icon}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      {role.badge}
                    </span>
                  </div>

                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                    {role.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span>{role.org}</span>
                    <span>•</span>
                    <span className="text-green-400 font-medium">{role.tenure}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {role.desc}
                  </p>
                </div>

                {role.highlights && (
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {role.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="text-cyan-400">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {role.badgeData && (
                  <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-amber-300 font-mono">Official Insignia</span>
                    <button
                      onClick={() => setSelectedImage(role.badgeData)}
                      className="text-[11px] text-cyan-300 hover:text-white font-semibold inline-flex items-center gap-1 bg-cyan-500/20 hover:bg-cyan-500/40 px-3 py-1 rounded-full border border-cyan-400/30 transition cursor-pointer"
                    >
                      <span>🔍</span> View Badge Pin
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-[#071320] border border-cyan-400/30 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition z-10"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs uppercase font-mono text-cyan-400 font-semibold">{selectedImage.role}</span>
              <h4 className="text-lg font-bold text-white mt-0.5">{selectedImage.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
