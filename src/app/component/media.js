'use client';

import React, { useState } from 'react';
import AnimatedCounter from './counter';

export default function MediaCoverage() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaItems = [
    {
      id: 'dainik-vishwamitra',
      type: 'Print Media',
      outlet: 'Dainik Vishwamitra (दैनिक विश्वमित्र)',
      date: 'November 29, 2025',
      headline: 'हेरिटेज स्कूल की बड़ी उपलब्धि: छात्र को कर्मवीर चक्र पुरस्कार',
      englishHeadline: 'The Heritage School Milestone: Raghav Agarwal Honored with Karmaveer Chakra Award',
      summary:
        'Featured for his outstanding contributions to environmental conservation, carbon footprint reduction, and circular textile upcycling through Smiles Across Miles. The article highlights how over 125 tons of discarded fabrics were repurposed into utility items while providing stable livelihoods to 80+ women artisans.',
      highlights: [
        'Over 125 tons of old clothes collected & repurposed',
        '80+ women provided with livelihoods and employment opportunities',
        'Upcycled doormats, bags, table mats, coasters, and rural mattresses',
        'Recognized by iCONGO in partnership with the United Nations (UN)',
      ],
      image: '/img/media/newspaper_dainik_vishwamitra.jpg',
      badge: 'Major Daily Feature',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: '📰',
    },
    {
      id: 'aaj-tak-bangla',
      type: 'Television Broadcast',
      outlet: 'Aaj Tak Bangla (আজ পর্যন্ত বাংলা)',
      date: 'Television Special Feature',
      headline: 'বাংলার নারী শিল্পীদের হস্তশিল্প ও বস্ত্র পুনর্ব্যবহার উদ্যোগ',
      englishHeadline: 'Aaj Tak Bangla Telecasts Women Artisans Weaving Upcycled Rugs & Essentials',
      summary:
        'Prime news broadcast coverage on Aaj Tak Bangla showcasing rural women artisans handcrafting circular braided doormats, utility bags, and lifestyle products from collected fabrics, highlighting the grassroots social empowerment driven by the initiative.',
      highlights: [
        'Live telecast on premier regional news channel Aaj Tak Bangla',
        'Spotlighting women artisans creating braided rugs and zero-waste items',
        'Showcasing economic self-reliance through sustainable craftsmanship',
        'Connecting urban textile donations to rural artisan workshops',
      ],
      image: '/img/media/aaj_tak_bangla_coverage.jpg',
      badge: 'National TV Broadcast',
      tagColor: 'bg-red-500/20 text-red-300 border-red-500/30',
      icon: '📺',
    },
  ];

  return (
    <section id="media" className="relative bg-[#071320] text-white py-24 px-6 overflow-hidden border-t border-white/10">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 animate-float">
            <span>📰</span> Press Highlights & Television Features
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Media <span className="text-cyan-400 animate-cyan-glow">Coverage</span>
          </h2>

          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed">
            Recognized across leading television channels and print publications for youth-led sustainability, women artisan empowerment, and circular fashion innovation.
          </p>
        </div>

        {/* Media Highlights Cards (Side-by-Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300 group shadow-2xl backdrop-blur-sm reveal-scale hover-lift stagger-${index + 1}`}
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
                        {item.type}
                      </span>
                      <h4 className="text-white font-bold text-sm sm:text-base">
                        {item.outlet}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Image Preview & Click to Enlarge */}
                <div
                  onClick={() => setSelectedMedia(item)}
                  className="relative rounded-2xl overflow-hidden bg-black/60 mb-6 cursor-pointer border border-white/10 group-hover:border-cyan-400/50 transition-all shadow-inner max-h-80 flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.headline}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 shadow">
                    <span>🔍</span> Click to Expand
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-mono text-cyan-300">{item.date}</p>
                    <p className="text-white font-bold text-sm line-clamp-1">{item.englishHeadline}</p>
                  </div>
                </div>

                {/* Headlines & Narrative */}
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  &ldquo;{item.headline}&rdquo;
                </h3>
                <p className="text-xs font-semibold text-cyan-300 mb-3">{item.englishHeadline}</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-green-400 font-bold shrink-0">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">Verified Press Record</span>
                <button
                  onClick={() => setSelectedMedia(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>View Original Clip</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Press Metric Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-cyan-950/40 via-white/5 to-amber-950/40 border border-white/10 rounded-2xl sm:rounded-3xl text-center reveal hover-lift">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              <AnimatedCounter value="125+" />
            </div>
            <div className="text-xs font-semibold text-green-400 uppercase mt-0.5">Tons Repurposed</div>
            <p className="text-[11px] text-slate-400 mt-1">Dainik Vishwamitra record</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              <AnimatedCounter value="80+" />
            </div>
            <div className="text-xs font-semibold text-cyan-400 uppercase mt-0.5">Women Artisans</div>
            <p className="text-[11px] text-slate-400 mt-1">Direct livelihood creation</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Aaj Tak</div>
            <div className="text-xs font-semibold text-red-400 uppercase mt-0.5">Bangla Broadcast</div>
            <p className="text-[11px] text-slate-400 mt-1">Prime regional television</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">UN & iCONGO</div>
            <div className="text-xs font-semibold text-amber-400 uppercase mt-0.5">Global Partner</div>
            <p className="text-[11px] text-slate-400 mt-1">Karmaveer Chakra Award</p>
          </div>
        </div>
      </div>

      {/* Modal for full resolution image view */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative bg-[#071320] border border-cyan-400/30 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-4 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center bg-black rounded-2xl overflow-hidden">
              <img
                src={selectedMedia.image}
                alt={selectedMedia.headline}
                className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-lg"
              />
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition z-10"
              >
                ✕
              </button>
            </div>
            <div className="p-4 mt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                {selectedMedia.outlet} • {selectedMedia.date}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                {selectedMedia.englishHeadline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{selectedMedia.summary}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
