'use client';

import React, { useState } from 'react';

export default function PodcastInterviewPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalVideo, setModalVideo] = useState(null);

  const episodes = [
    {
      id: 'episode-1',
      number: 'EPISODE 01 • FLAGSHIP DIALOGUE',
      category: 'circular',
      title: 'Architect of a Greener Future: Sustainable Systems & Organic Economy',
      guest: 'Miss Shital Bavishi',
      guestRole: 'Founder & President, Beejum • Organic Farming Council, WICCI West Bengal',
      host: 'Raghav Agarwal',
      hostRole: 'Founder, Smiles Across Miles • Author, Carbon Keeps the Score',
      duration: '14:20 min',
      date: 'October 2025',
      tag: 'Circular Economy & Agriculture',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/30',
      embedUrl: 'https://drive.google.com/file/d/155M0Xo9YA_vsbpsieExbNhx3I84l9s2g/preview',
      thumbnail: '/img/podcast_interview.jpg',
      featured: true,
      quote:
        '“True sustainability cannot remain an abstract statistic; it must translate into self-sustaining livelihoods for rural communities and measurable circularity on the ground.”',
      synopsis:
        'In this flagship in-depth studio conversation, Raghav Agarwal sits down with Miss Shital Bavishi to explore the intersection between grassroots organic agriculture, textile upcycling, and circular supply chains. They discuss the operational challenges of balancing growth with measurable environmental impact, and how youth-led initiatives can scale systemic change.',
      takeaways: [
        'Connecting urban textile collection hubs directly with rural artisan clusters',
        'How organic farming and regenerative models restore local soil ecosystems',
        'Overcoming greenwashing through transparent, verifiable carbon metrics',
        'Empowering over 80+ rural women craftswomen with economic self-reliance',
      ],
    },
    {
      id: 'episode-2',
      number: 'EPISODE 02 • YOUTH LEADERSHIP',
      category: 'grassroots',
      title: 'Anaika in Action: Empowering Communities Through Hands-on Climate Literacy',
      guest: 'Anaika',
      guestRole: 'Youth Climate Educator & Environmental Outreach Coordinator',
      host: 'Raghav Agarwal',
      hostRole: 'ICT Captain & Climate Changemaker',
      duration: '11:45 min',
      date: 'September 2025',
      tag: 'Grassroots Outreach & Education',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/30',
      embedUrl: 'https://drive.google.com/file/d/11oNADrZlfLfwde-N2xjNOSRweBJ2fmsi/preview',
      thumbnail: '/img/slider_1.jpg',
      quote:
        '“When young people see how everyday choices connect to climate data, awareness naturally evolves into community-wide action.”',
      synopsis:
        'A dynamic conversation focusing on student-driven environmental education. Anaika discusses spearheading interactive campus workshops that demystify carbon footprints and turn theoretical climate awareness into actionable habits.',
      takeaways: [
        'Interactive educational modules designed for high school and university students',
        'Turning passive climate anxiety into constructive grassroots mobilization',
        'Practical frameworks for establishing campus waste segregation and clothing drives',
        'The role of peer mentorship in sustaining long-term environmental habits',
      ],
    },
    {
      id: 'episode-3',
      number: 'EPISODE 03 • IMPACT SPECIAL',
      category: 'finance',
      title: 'Smiles Across Miles: On-Ground Upcycling & Field Testimonials',
      guest: 'Artisan Partners & SBI Hub Leads',
      guestRole: 'State Bank of India Kolkata Hubs & Jagota Village Artisans',
      host: 'Raghav Agarwal',
      hostRole: 'Founder, Smiles Across Miles',
      duration: '08:35 min',
      date: 'November 2025',
      tag: 'Field Reel & Social Impact',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-400/30',
      embedUrl: 'https://drive.google.com/file/d/1DZzQBjENyNUbwW7_PROSbvMP77Ctlqk-/preview',
      thumbnail: '/img/smiles/stall_twirl.jpg',
      quote:
        '“Repurposing over 125 tons of fabric is proof that institutional partnerships and community trust can rebuild circularity from scratch.”',
      synopsis:
        'An exclusive field-documentary episode documenting the direct testimonials of bank managers across 12 State Bank of India branches and women artisans in Jaipur and Kolkata. Demonstrates the complete journey from donor clothing box to finished braided rugs.',
      takeaways: [
        '12 SBI branch hubs activated as citywide donation collection points',
        'Over 3,000+ garments collected and catalogued in a 6-week operational window',
        'Zero-waste conversion into 1,200+ utility bags, coasters, and mattresses',
        'Dainik Vishwamitra and national press validation of circular metrics',
      ],
    },
  ];

  const filteredEpisodes =
    activeFilter === 'all'
      ? episodes
      : episodes.filter((ep) => ep.category === activeFilter);

  const featuredEpisode = episodes[0];

  return (
    <div className="bg-[#071320] text-white min-h-screen selection:bg-cyan-500 selection:text-[#071320]">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b border-white/10">
        {/* Ambient Floating Orbs */}
        <div className="pointer-events-none absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-ambient-orb" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-ambient-orb-reverse" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 animate-float">
            <span>🎙️</span> Carbon Count Conversations • Flagship Podcast Series
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-white">
            Conversations That <br />
            <span className="text-cyan-400 animate-cyan-glow">
              Inspire Climate Action
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Hosted by <strong className="text-white">Raghav Agarwal</strong> — sitting down with sustainability pioneers, environmental authors, grassroots leaders, and women artisans to bridge the gap between ecological data and tangible real-world solutions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-white/10 max-w-4xl mx-auto text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">●</span>
              <span><strong>3 In-Depth Episodes</strong> Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">●</span>
              <span><strong>80+ Women Artisans</strong> Empowered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">●</span>
              <span><strong>125+ Tons Fabric</strong> Diverted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">●</span>
              <span><strong>100% Youth-Led</strong> & Independent</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* --- FEATURED EPISODE CINEMATIC SPOTLIGHT --- */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                Featured Studio Episode
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Full Video & Discussion
            </span>
          </div>

          <div className="bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm reveal-scale hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Studio Thumbnail & Play Trigger (6 cols) */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div
                  onClick={() => setModalVideo(featuredEpisode)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-cyan-400/50 shadow-2xl w-full aspect-video bg-black/80 flex items-center justify-center"
                >
                  <img
                    src={featuredEpisode.thumbnail}
                    alt={featuredEpisode.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Pulsing Cinema Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-400 text-[#071320] flex items-center justify-center text-2xl sm:text-3xl pl-1 shadow-[0_0_30px_rgba(34,211,238,0.7)] group-hover:scale-110 group-active:scale-95 transition-all">
                      ▶
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-cyan-300 border border-white/20">
                      Studio Master Episode
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/20">
                      ⏱️ {featuredEpisode.duration}
                    </span>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-semibold text-white">Click to Watch Full Video Stream</span>
                    <span className="text-cyan-300 font-mono">1080p HD</span>
                  </div>
                </div>

                {/* Co-Interviewees Card */}
                <div className="mt-4 w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-lg">
                      🎙️
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Raghav Agarwal</div>
                      <div className="text-slate-400 text-[11px]">Host & Author, Carbon Keeps the Score</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cyan-300 text-sm">Miss Shital Bavishi</div>
                    <div className="text-slate-400 text-[11px]">President Beejum • WICCI</div>
                  </div>
                </div>
              </div>

              {/* Right: Narrative, Quote & Takeaways (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border ${featuredEpisode.tagColor}`}>
                    {featuredEpisode.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {featuredEpisode.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  {featuredEpisode.title}
                </h2>

                {/* Highlight Quote */}
                <blockquote className="bg-[#0B1C2D]/80 border-l-4 border-cyan-400 p-4 rounded-r-2xl mb-5 text-slate-200 text-sm sm:text-base italic leading-relaxed">
                  {featuredEpisode.quote}
                </blockquote>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {featuredEpisode.synopsis}
                </p>

                {/* Key Discussion Takeaways */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-1">
                    Key Discussion Points:
                  </div>
                  {featuredEpisode.takeaways.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setModalVideo(featuredEpisode)}
                    className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#071320] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-all btn-shimmer hover:scale-105 active:scale-95 shadow-lg shadow-cyan-400/20 cursor-pointer"
                  >
                    <span>▶</span> Watch Full Episode ({featuredEpisode.duration})
                  </button>

                  <a
                    href="#episodes"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-all hover:scale-105"
                  >
                    <span>📁</span> Browse All Episodes
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- ALL EPISODES DIRECTORY --- */}
        <section id="episodes" className="pt-8 mb-20">
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                Episode Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Explore All Interviews & Field Reels
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl leading-relaxed">
                Watch full conversations and field documentaries covering circular fashion, corporate climate accountability, and student community drives.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full self-start md:self-auto text-xs font-semibold">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === 'all'
                    ? 'bg-cyan-400 text-[#071320] font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                All ({episodes.length})
              </button>
              <button
                onClick={() => setActiveFilter('circular')}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === 'circular'
                    ? 'bg-cyan-400 text-[#071320] font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Circular Economy
              </button>
              <button
                onClick={() => setActiveFilter('grassroots')}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === 'grassroots'
                    ? 'bg-cyan-400 text-[#071320] font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Grassroots Action
              </button>
              <button
                onClick={() => setActiveFilter('finance')}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === 'finance'
                    ? 'bg-cyan-400 text-[#071320] font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Field Impact
              </button>
            </div>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredEpisodes.map((ep, idx) => (
              <div
                key={ep.id}
                className={`bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group reveal hover-lift stagger-${idx + 1}`}
              >
                <div>
                  {/* Card Video Embed / Thumbnail Header */}
                  <div className="relative aspect-video bg-black overflow-hidden group/thumb cursor-pointer" onClick={() => setModalVideo(ep)}>
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-80 group-hover/thumb:opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Small Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-400/90 text-[#071320] flex items-center justify-center text-lg pl-0.5 shadow-lg group-hover/thumb:scale-110 transition-transform">
                        ▶
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md bg-black/60 ${ep.tagColor}`}>
                        {ep.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="text-[11px] font-mono text-slate-200 bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-md">
                        ⏱️ {ep.duration}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {ep.number}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {ep.title}
                    </h3>

                    {/* Guest & Host Strip */}
                    <div className="bg-white/5 rounded-xl p-3 mb-4 text-xs space-y-1 border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Guest:</span>
                        <span className="font-semibold text-white">{ep.guest}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Host:</span>
                        <span className="font-semibold text-cyan-300">{ep.host}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {ep.synopsis}
                    </p>

                    {/* Key Bullets */}
                    <div className="space-y-1.5 pt-3 border-t border-white/10">
                      {ep.takeaways.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <span className="text-green-400 font-bold shrink-0">✓</span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-2">
                  <button
                    onClick={() => setModalVideo(ep)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-cyan-400 hover:text-[#071320] text-cyan-300 font-bold text-xs py-3 rounded-full transition-all cursor-pointer"
                  >
                    <span>▶</span> Watch Episode Stream
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- HOST SPOTLIGHT & BOOK CONNECTION BANNER --- */}
        <section className="bg-gradient-to-r from-cyan-950/40 via-white/5 to-emerald-950/40 border border-white/10 rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Host Avatar Frame (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl mb-4 p-1 bg-gradient-to-tr from-cyan-400 to-green-400">
                <img
                  src="/img/leadership/raghav_ict_captain.jpg"
                  alt="Raghav Agarwal - Podcast Host"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Raghav Agarwal</h3>
              <p className="text-xs text-cyan-300 font-medium">Founder, Host & Author</p>
              <span className="text-[11px] text-slate-400 font-mono mt-1">REX Karmaveer Chakra Awardee</span>
            </div>

            {/* Host Note & Publication Link (8 cols) */}
            <div className="md:col-span-8">
              <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold mb-2 block">
                Why We Record These Conversations
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                “Climate solutions shouldn&apos;t live in academic silos. They belong where curiosity challenges complacency.”
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Carbon Count was started to prove that young thinkers and grassroots communities can ask better questions about global emission accounting, circular economies, and economic justice. Each interview directly informs our published research and on-ground textile collection campaigns.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/#book"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-[#071320] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-lg hover:scale-105"
                >
                  <span>📖</span> Read Book: Carbon Keeps the Score
                </a>
                <a
                  href="/journal"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#071320] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  <span>📑</span> Read Journal Research Paper
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* --- CINEMATIC VIDEO PLAYER MODAL --- */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="relative bg-[#071320] border border-cyan-400/40 rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  {modalVideo.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {modalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={modalVideo.embedUrl}
                title={modalVideo.title}
                allow="autoplay; fullscreen"
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Video Details */}
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
                <div>
                  <span className="text-slate-400">Featured Guest: </span>
                  <span className="font-bold text-white">{modalVideo.guest}</span>
                  <span className="text-slate-400"> ({modalVideo.guestRole})</span>
                </div>
                <div className="text-cyan-300 font-mono">
                  Duration: {modalVideo.duration}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {modalVideo.synopsis}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-2">
                  Key Discussion Takeaways:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {modalVideo.takeaways.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
