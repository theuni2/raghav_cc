'use client';

import React, { useState } from 'react';

export default function ImpactSection() {
  const communityVideos = [
    {
      id: 'video-1',
      title: 'Citywide Collection & Community Drive',
      duration: '2:05 min',
      location: 'Kolkata & 12 SBI Hubs',
      src: '/videos/community_drive.mp4',
      poster: '/img/smiles/stall_twirl.jpg',
      badge: 'Main Documentary',
      desc: 'Watch student volunteers and community members in action during our citywide clothing collection and upcycling drive, mobilizing 3,000+ items.',
    },
    {
      id: 'video-2',
      title: 'On-Ground Volunteer Outreach & Engagement',
      duration: '0:40 min',
      location: 'Community Centres',
      src: '/videos/community_drive_2.mp4',
      poster: '/img/smiles/community_stall.jpg',
      badge: 'Field Reel #1',
      desc: 'Active field footage showing youth volunteers connecting directly with community members and donors during donation mobilization.',
    },
    {
      id: 'video-3',
      title: 'Fabric Sorting & Segregation in Action',
      duration: '0:22 min',
      location: 'Collection Hub',
      src: '/videos/community_drive_3.mp4',
      poster: '/img/smiles/upcycled_exhibition.jpg',
      badge: 'Field Reel #2',
      desc: 'Behind-the-scenes view of hands-on fabric segregation ensuring quality textiles are channeled directly to rural craft clusters.',
    },
  ];

  const [activeVideo, setActiveVideo] = useState(communityVideos[0]);

  return (
    <section id="community" className="relative bg-[#0B1C2D] py-24 px-6 overflow-hidden border-t border-white/10">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 animate-float">
            <span>🤝</span> Community Drives & Grassroots Action
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Community in <span className="text-cyan-400 animate-cyan-glow">Action</span>
          </h2>

          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed">
            Carbon Count believes real change happens when awareness turns into action.
            Through community-driven kindness, collection drives, and volunteer mobilization,
            we are building a future that cares for both people and the planet.
          </p>
        </div>

        {/* Video Spotlight Feature with Interactive Playlist */}
        <div className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl backdrop-blur-sm reveal-scale">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Video Player Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-black/80 shadow-2xl border border-cyan-400/30 group">
                <video
                  key={activeVideo.src}
                  controls
                  playsInline
                  autoPlay={false}
                  preload="metadata"
                  poster={activeVideo.poster}
                  className="w-full h-auto aspect-video object-cover"
                >
                  <source src={activeVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Active Video Info Bar */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-400 text-[#071320]">
                      {activeVideo.badge}
                    </span>
                    <h3 className="text-white text-sm sm:text-base font-bold">
                      {activeVideo.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{activeVideo.desc}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-cyan-300 font-mono whitespace-nowrap self-start sm:self-auto">
                  <span>⏱️ {activeVideo.duration}</span>
                </div>
              </div>
            </div>

            {/* Video Playlist Selector & Highlights (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold">
                  On-Ground Video Gallery
                </span>
                <span className="text-xs text-slate-400">3 Videos Available</span>
              </div>

              {/* Playlist Cards */}
              <div className="space-y-3 mb-6">
                {communityVideos.map((video) => {
                  const isActive = activeVideo.id === video.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 hover:scale-[1.02] active:scale-[0.98] ${
                        isActive
                          ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10'
                          : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
                            isActive
                              ? 'bg-cyan-400 text-[#071320]'
                              : 'bg-white/10 text-white'
                          }`}
                        >
                          {isActive ? '▶' : '🎬'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4
                              className={`text-xs sm:text-sm font-bold ${
                                isActive ? 'text-cyan-300' : 'text-white'
                              }`}
                            >
                              {video.title}
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {video.location} • {video.duration}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                          isActive
                            ? 'bg-cyan-400 text-[#071320]'
                            : 'bg-white/10 text-slate-300'
                        }`}
                      >
                        {isActive ? 'Now Playing' : 'Watch'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Key Impact Stats Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>3,000+ Items Collected</strong> and sorted by volunteers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span><strong>12 State Bank of India Hubs</strong> engaged across Kolkata</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Channeling to 50+ Women Artisans</strong> for zero-waste upcycling</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#smiles-across-miles"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-[#0B1C2D] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-lg shadow-green-500/20 btn-shimmer hover:scale-105 active:scale-95"
                >
                  <img
                    src="/img/logos/smiles_across_miles_logo.jpg"
                    alt="Smiles Across Miles Logo"
                    className="w-5 h-5 rounded-full object-cover border border-[#0B1C2D]/30"
                  />
                  <span>Explore Smiles Across Miles</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.08] hover:border-cyan-400/40 transition group reveal hover-lift stagger-1">
            <div className="text-green-400 text-3xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
            <h3 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
              Environmental Awareness
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Carbon Count Interviews and blogs amplify voices of environmental leaders,
              inspiring sustainable thinking and conscious lifestyle choices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.08] hover:border-cyan-400/40 transition group reveal hover-lift stagger-2">
            <div className="text-cyan-400 text-3xl mb-4 group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
              Action-Oriented Sustainability
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Interactive tools help individuals measure, track, and reduce their carbon
              footprint, turning responsibility into daily action.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.08] hover:border-cyan-400/40 transition group reveal hover-lift stagger-3">
            <div className="text-green-400 text-3xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
            <h3 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
              Community Kindness
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Through Smiles Across Miles, students have led 10+ donation drives,
              supporting underprivileged communities with care and empathy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.08] hover:border-cyan-400/40 transition group reveal hover-lift stagger-4">
            <div className="text-cyan-400 text-3xl mb-4 group-hover:scale-110 transition-transform">🎒</div>
            <h3 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
              Youth-Led Change
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Powered by young changemakers and 50+ contributors, Carbon Count proves
              that collective effort creates lasting impact.
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="py-6 px-6 bg-gradient-to-r from-cyan-500/20 via-green-500/10 to-cyan-500/20 border border-white/10 rounded-2xl text-center reveal hover-lift">
          <p className="text-white text-base sm:text-lg font-medium">
            &ldquo;Sustainability isn’t just about saving the planet — it’s about uplifting
            people along the way.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
