'use client';

import React, { useState } from 'react';
import AnimatedCounter from './counter';

export default function SmilesAcrossMiles() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const stats = [
    { label: 'Textile Waste Repurposed', value: '100+', unit: 'Tonnes', icon: '♻️' },
    { label: 'Clothing Items Mobilized', value: '3,000+', unit: 'in 6 Weeks', icon: '👕' },
    { label: 'Upcycled Products Crafted', value: '1,200+', unit: 'Handmade Items', icon: '🧵' },
    { label: 'Women Artisans Supported', value: '50+', unit: 'Benefiting 80+ Families', icon: '👩‍🎨' },
    { label: 'Community Lives Impacted', value: '2,000+', unit: 'Individuals', icon: '🤝' },
    { label: 'Partner SBI Branches', value: '12', unit: 'Collection Centres', icon: '🏛️' },
  ];

  const partners = [
    {
      name: 'State Bank of India (SBI)',
      detail: '12 Branches across Kolkata & WB',
      role: 'Collection Centres & Awareness Workshops',
      badge: 'Banking Partner',
      logo: '/img/logos/sbi_logo.svg',
    },
    {
      name: 'Twirl.Store',
      detail: 'Upscale Fashion Pvt. Ltd.',
      role: 'Circular Fashion & 100t Waste Repurposing',
      badge: 'Upcycling Partner',
      logo: '/img/logos/twirl_logo.jpg',
    },
    {
      name: 'Mysa Jaipur',
      detail: 'Jagota Village Artisan Cluster',
      role: 'Women Artisan Livelihoods & Bag Crafting',
      badge: 'Craft Partner',
      logo: '/img/logos/mysa_logo.jpg',
    },
    {
      name: 'Beejum & WICCI',
      detail: "Organic Farming Council (West Bengal)",
      role: 'Citywide Drives & Carbon Footprint Reduction',
      badge: 'Sustainability Council',
      logo: '/img/logos/beejum_logo.jpg',
      secondLogo: '/img/logos/wicci_logo.jpg',
    },
  ];

  const galleryItems = [
    {
      src: '/img/smiles/stall_twirl.jpg',
      category: 'outreach',
      title: 'Community Collection & Exhibition Drive',
      description: 'Twirl.Store collaboration showcasing student-led circular fashion and upcycled collections.',
    },
    {
      src: '/img/smiles/upcycled_exhibition.jpg',
      category: 'products',
      title: 'Handcrafted Upcycled Product Showcase',
      description: 'Quilts, totes, utility pouches, and stationery items created from repurposed textiles.',
    },
    {
      src: '/img/smiles/women_artisans.jpg',
      category: 'artisans',
      title: 'Rural Women Artisan Clusters',
      description: 'Partnering with local craftswomen in Jagota Village & Bengal, providing dignified livelihoods.',
    },
    {
      src: '/img/smiles/block_printing.jpg',
      category: 'artisans',
      title: 'Heritage Craft & Block Printing',
      description: 'Master craftsmen integrating traditional Indian textile techniques into sustainable fashion.',
    },
    {
      src: '/img/smiles/community_stall.jpg',
      category: 'outreach',
      title: 'Artisan Fair & Upcycled Marketplace',
      description: 'Direct sales channels empowering women creators and promoting mindful everyday consumption.',
    },
    {
      src: '/img/smiles/denim_bags_masks.jpg',
      category: 'products',
      title: 'Repurposed Denim & Utility Goods',
      description: 'Turning discarded jeans and fabrics into high-utility bags, cases, and everyday essentials.',
    },
    {
      src: '/img/smiles/upcycled_pouch.jpg',
      category: 'products',
      title: 'Ikat & Handloom Cosmetic Pouches',
      description: 'Zero-waste pouches with intricate heritage fabric detailing and sturdy zip closures.',
    },
    {
      src: '/img/smiles/rabbit_toy.jpg',
      category: 'products',
      title: 'Upcycled Soft Toys & Accessories',
      description: 'Charming handcrafted fabric toys made from upcycled traditional textile remnants.',
    },
    {
      src: '/img/smiles/mobile_sling.jpg',
      category: 'products',
      title: 'Hand-Braided Mobile Crossbody Slings',
      description: 'Contemporary zero-waste phone slings crafted with braided cotton cord and block prints.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Smiles Across Miles collaborated with 12 branches of the State Bank of India to set up collection centres for old clothes and unused fabrics. The team also organised interactive and engaging workshops on sustainability across different SBI branches, creatively involving staff and customers.',
      name: 'Sreya Goswami Ray',
      title: 'Assistant General Manager',
      org: 'State Bank of India (Sakherbazar Branch, Kolkata)',
      date: 'September 2025',
      letterLink: '/docs/sbi_letter.pdf',
      logo: '/img/logos/sbi_logo.svg',
    },
    {
      quote:
        'Through this collaboration, his initiative has not only supported nearly 50 women artisans directly associated with Twirl but also impacted over 2,000 individuals and helped repurpose nearly 100 tonnes of fabric material. His understanding of circular fashion and sustainable impact at such a young age is inspiring.',
      name: 'Sujata Chatterjee',
      title: 'Founder',
      org: 'Twirl.Store (Upscale Fashion Pvt. Ltd.)',
      date: 'October 2025',
      letterLink: '/docs/appreciation_letters.pdf',
      logo: '/img/logos/twirl_logo.jpg',
    },
    {
      quote:
        'During the 6 weeks which your team collected and donated over 3,000 pieces of clothing for upcycling, your personal visit to Jagota Village in Jaipur and interaction with 25 local women artisans showed a depth of sincerity rarely seen. Repurposing into 1,200+ upcycled products directly benefited more than 80 individuals.',
      name: 'Pinky Jain',
      title: 'Co-Founder',
      org: 'Mysa Jaipur',
      date: 'October 2025',
      letterLink: '/docs/appreciation_letters.pdf',
      logo: '/img/logos/mysa_logo.jpg',
    },
    {
      quote:
        'Raghav and his team have worked closely with Beejum under the Organic Farming Council, WICCI, West Bengal. Through their citywide collection drives, Smiles Across Miles has gathered clothes for upcycling, giving new life to old fabrics and turning ideas into meaningful on-ground impact.',
      name: 'Miss Shital Bavishi',
      title: 'Founder & President, Beejum',
      org: "Organic Farming Council, WICCI West Bengal",
      date: 'September 2025',
      letterLink: '/docs/appreciation_letters.pdf',
      logo: '/img/logos/beejum_logo.jpg',
      secondLogo: '/img/logos/wicci_logo.jpg',
    },
  ];

  const filteredGallery =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="smiles-across-miles" className="relative bg-[#081524] text-white py-24 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-ambient-orb" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none animate-ambient-orb-reverse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 animate-float">
            <span>✨</span> Student-Driven Circular Economy & Sustainability
          </div>

          {/* Official Smiles Across Miles Emblem */}
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-green-400 to-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-500 hover:scale-105">
                <img
                  src="/img/logos/smiles_across_miles_logo.jpg"
                  alt="Smiles Across Miles Logo - Spreading Smiles, One Mile at a Time"
                  className="w-full h-full object-cover rounded-full bg-white shadow-inner"
                />
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3 text-white">
            Smiles Across <span className="text-cyan-400 animate-cyan-glow">Miles</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-green-400 font-bold mb-6">
            “Spreading Smiles, One Mile at a Time”
          </p>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
            Founded and led a student-driven sustainability initiative, partnering with organizations
            including <span className="text-cyan-300 font-medium">12 SBI branches</span>,{' '}
            <span className="text-green-300 font-medium">Twirl.Store</span>,{' '}
            <span className="text-cyan-300 font-medium">Mysa Jaipur</span>,{' '}
            <span className="text-green-300 font-medium">Beejum</span>, and{' '}
            <span className="text-cyan-300 font-medium">
              WICCI&apos;s Organic Farming Council (West Bengal)
            </span>.
          </p>

          {/* Founder Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 text-sm text-gray-300 backdrop-blur-sm">
            <img
              src="/img/logos/smiles_across_miles_logo.jpg"
              alt="Smiles Across Miles Icon"
              className="w-6 h-6 rounded-full object-cover border border-cyan-400/40"
            />
            <span className="text-green-400 font-semibold">Raghav Agarwal</span>
            <span className="text-gray-500">•</span>
            <span>President & Founder, Smiles Across Miles</span>
            <span className="text-gray-500">•</span>
            <span className="text-cyan-400">Founder, THS Finance Society, The Heritage School, Kolkata</span>
          </div>
        </div>

        {/* Impact Numbers Grid with Animated Counter & Cascade Reveal */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white/5 border border-white/10 rounded-2xl p-5 text-center transition-all duration-300 group hover-lift reveal stagger-${(idx % 6) + 1}`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs font-semibold text-green-400 mt-0.5">{stat.unit}</div>
              <div className="text-xs text-gray-400 mt-2 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3 Core Initiative Pillars (exact user text preserved and highlighted) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-300 group hover-lift reveal stagger-1">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
              🏛️
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Collection Centres & Staff Workshops
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Collaborated with <strong className="text-white">12 State Bank of India (SBI) branches</strong> to establish dedicated clothing collection centres and conduct sustainability workshops for bank staff and customers.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-green-400 font-medium">
              <span>✓</span> Community mobilization across 12 branch hubs
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover-lift reveal stagger-2">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
              🧵
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Textile Upcycling & Artisan Livelihoods
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Mobilized <strong className="text-white">3,000+ clothing items in 6 weeks</strong> and helped repurpose nearly <strong className="text-white">100 tonnes of textile waste into 1,200+ upcycled products</strong>, supporting 50+ women artisans and benefiting 80+ individuals and their families.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <span>✓</span> Diverting landfill waste into sustainable income
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-300 group hover-lift reveal stagger-3">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
              🤝
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Community Outreach & Circular Fashion
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Built and managed community partnerships and volunteer-led outreach initiatives that <strong className="text-white">impacted 2,000+ individuals</strong>, connecting urban donors with rural artisan communities to promote circular fashion and mindful consumption.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-green-400 font-medium">
              <span>✓</span> Bridging urban kindness with rural empowerment
            </div>
          </div>
        </div>

        {/* Partner Organizations Row */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Trusted Institutional Collaborations
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white mt-2">
              Partners in <span className="text-cyan-400">Impact & Sustainability</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className={`bg-white/5 border border-white/10 rounded-2xl p-5 hover-lift transition flex flex-col justify-between reveal stagger-${(i % 4) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      {partner.badge}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="h-8 px-2 py-0.5 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          className="h-5 w-auto object-contain max-w-[80px]"
                        />
                      </div>
                      {partner.secondLogo && (
                        <div className="h-8 px-2 py-0.5 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <img
                            src={partner.secondLogo}
                            alt="WICCI Logo"
                            className="h-5 w-auto object-contain max-w-[70px]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-base mb-1">{partner.name}</h4>
                  <p className="text-xs text-gray-400 mb-2">{partner.detail}</p>
                </div>
                <p className="text-xs text-gray-300 font-medium pt-3 border-t border-white/10">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smiles Across Miles Video Spotlight */}
        <div className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Video Player (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/20 group">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/img/smiles/upcycled_exhibition.jpg"
                  className="w-full h-auto aspect-video object-cover"
                >
                  <source src="/videos/sam_video.mp4" type="video/mp4" />
                  <source src="/videos/sam_video_source.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
                <span>📍 Jagota Village & Urban Collection Centres</span>
                <span>⏱️ Video Reel: ~27s</span>
              </div>
            </div>

            {/* Right: Narrative & Highlights (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 w-fit">
                🎬 Initiative Documentary
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                Smiles Across Miles <span className="text-cyan-400">In Motion</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Experience the on-ground journey behind Smiles Across Miles. Watch how cloth donation drives, artisan workshops in Jagota Village, and sustainable upcycling bring dignity, livelihoods, and circular fashion together.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-xl">🧵</span>
                  <div>
                    <h4 className="text-white text-xs font-bold">Circular Fashion & Upcycling</h4>
                    <p className="text-[11px] text-slate-400">Repurposing discarded textiles into utility pouches, bags, and lifestyle essentials.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-xl">👭</span>
                  <div>
                    <h4 className="text-white text-xs font-bold">Empowering Women Artisans</h4>
                    <p className="text-[11px] text-slate-400">Providing direct income to 50+ women craftswomen and benefiting 80+ families.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-xl">🏛️</span>
                  <div>
                    <h4 className="text-white text-xs font-bold">Grassroots Partnerships</h4>
                    <p className="text-[11px] text-slate-400">Collaborating with 12 SBI branches, Twirl.Store, and Mysa Jaipur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product & Artisan Visual Gallery */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-green-400 font-semibold">
                Ground Reality & Finished Goods
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white mt-1">
                From Donated Fabrics to <span className="text-cyan-400">Upcycled Art</span>
              </h3>
              <p className="text-gray-400 text-sm mt-2 max-w-xl">
                Explore authentic images of the upcycled bags, lifestyle products, artisan workshops in Jagota Village, and bank awareness drives.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'products', label: 'Upcycled Products' },
                { id: 'artisans', label: 'Artisan Workshops' },
                { id: 'outreach', label: 'Drives & Exhibitions' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-[#081524]'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-400/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-black/40">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white">
                    🔍 View
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-base mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Letters of Appreciation / Endorsements */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Partner Testimonials & Endorsements
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white mt-1">
              Voices of Appreciation & Verification
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Recognized and certified by banking leaders, social enterprises, and state councils.
            </p>
          </div>

          {/* Featured Video Testimonial Card */}
          <div className="bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-cyan-400/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Video Column (7 cols) */}
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/20">
                  <iframe
                    src="https://drive.google.com/file/d/1DZzQBjENyNUbwW7_PROSbvMP77Ctlqk-/preview"
                    title="Smiles Across Miles Partner Video Testimonial"
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>📍 Verified Partner Testimonial</span>
                  <span className="text-cyan-400">Smiles Across Miles Initiative</span>
                </div>
              </div>

              {/* Description Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 w-fit">
                  🎥 Video Testimonial
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                  Partner Endorsement <span className="text-cyan-400">& Ground Impact</span>
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Hear firsthand reflections on collaborating with Smiles Across Miles. Our partner organizations share how student-led mobilization turned unused fabrics into circular fashion, diverted landfill waste, and provided stable income for rural women artisans.
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>Direct partner testimonial validating on-ground change</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Empowering 50+ craftswomen across artisan clusters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>Collaboration with 12 SBI branches and sustainable fashion brands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover-lift transition reveal stagger-${(i % 2) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="h-10 px-2.5 py-1 rounded-xl bg-white flex items-center justify-center shadow-md border border-white/20">
                        <img
                          src={item.logo}
                          alt={`${item.org} Logo`}
                          className="h-7 w-auto object-contain max-w-[120px]"
                        />
                      </div>
                      {item.secondLogo && (
                        <div className="h-10 px-2.5 py-1 rounded-xl bg-white flex items-center justify-center shadow-md border border-white/20">
                          <img
                            src={item.secondLogo}
                            alt="WICCI Logo"
                            className="h-7 w-auto object-contain max-w-[105px]"
                          />
                        </div>
                      )}
                      <span className="text-cyan-400 text-2xl font-serif leading-none">“</span>
                    </div>
                    <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 font-mono shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h5 className="text-white font-bold text-sm">{item.name}</h5>
                    <p className="text-xs text-cyan-300 font-medium">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.org}</p>
                  </div>
                  <a
                    href={item.letterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs text-green-400 hover:text-green-300 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full transition shrink-0 self-start sm:self-center"
                  >
                    <span>📄</span> View Letter
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Download Center for Appreciation Letters */}
          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/30 via-[#0B1C2D] to-green-900/30 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-base">Official Documentation Available</h4>
              <p className="text-xs text-gray-300 mt-1">
                Review the certified letters of appreciation from State Bank of India, Twirl.Store, Mysa Jaipur, and Beejum / WICCI.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/docs/appreciation_letters.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-[#0B1C2D] font-semibold text-xs px-4 py-2.5 rounded-full transition"
              >
                Download Partner Letters (PDF)
              </a>
              <a
                href="/docs/sbi_letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-[#0B1C2D] font-semibold text-xs px-4 py-2.5 rounded-full transition"
              >
                SBI Sakherbazar Letter (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Modal for viewing image close-up */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-[#0B1C2D] border border-white/20 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">{selectedImage.title}</h4>
                <p className="text-sm text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
