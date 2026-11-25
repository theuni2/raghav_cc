// import React from 'react'

// export default function Slider() {
//   return (
//     <div>

//     </div>
//   )
// }



'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  const slides = [
    {
      src: '/img/slider_1.jpg',
      tag: 'Education & Climate Action',
      title: 'Inspiring Young Minds for Climate Action',
      subtitle:
        'Interactive workshops and hands-on environmental education turning awareness into creative impact.',
      primaryBtn: { text: 'Read Carbon Count Paper', href: '/journal' },
      secondaryBtn: { text: 'Explore Interviews', href: '/interview' },
    },
    {
      src: '/img/slider_2.jpg',
      tag: 'Grassroots Mentorship',
      title: 'Empowering Communities from the Ground Up',
      subtitle:
        'Creating inclusive learning spaces where education, empathy, and sustainability grow together.',
      primaryBtn: { text: 'Explore Interviews', href: '/interview' },
      secondaryBtn: { text: 'Our Mission', href: '/journal' },
    },
    {
      src: '/img/slider_3.jpg',
      tag: 'Smiles Across Miles',
      title: 'Youth-Led Kindness & Sustainability Drives',
      subtitle:
        'Empowering youth to lead eco-friendly donation and awareness drives that support underprivileged communities.',
      primaryBtn: { text: 'Read Our Story', href: '/#smiles-across-miles' },
      secondaryBtn: { text: 'View Impact', href: '/#smiles-across-miles' },
    },
    {
      src: '/img/slider_4.jpg',
      tag: 'Mindful Living',
      title: 'Small Choices. Big Climate Impact.',
      subtitle:
        'Every mindful choice counts. Together, our everyday actions create lasting change for our planet.',
      primaryBtn: { text: 'Read Carbon Count Paper', href: '/journal' },
      secondaryBtn: { text: 'View Initiatives', href: '/interview' },
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center h-full"
          >
            {/* Slide Background Image */}
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay for optimal readability & smooth blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-black/50 to-black/40 pointer-events-none" />

            {/* Centered Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto z-10">
              {slide.tag && (
                <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-green-500/20 text-green-400 border border-green-500/30 mb-4 backdrop-blur-md">
                  {slide.tag}
                </span>
              )}

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-lg">
                {slide.title}
              </h2>

              <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow mb-8">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {slide.primaryBtn && (
                  <a
                    href={slide.primaryBtn.href}
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-[#0B1C2D] font-bold px-8 py-3 rounded-full text-base sm:text-lg transition-all shadow-xl hover:shadow-green-500/25 btn-shimmer hover:scale-105 active:scale-95"
                  >
                    {slide.primaryBtn.text}
                  </a>
                )}
                {slide.secondaryBtn && (
                  <a
                    href={slide.secondaryBtn.href}
                    className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0B1C2D] font-semibold px-8 py-3 rounded-full text-base sm:text-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                  >
                    {slide.secondaryBtn.text}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
