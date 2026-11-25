import React from "react";

export default function InterviewSection() {
  return (
    <section className="bg-[#0B1C2D] text-white body-font">
      <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center">

        {/* Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 reveal-scale hover-lift">
          <img
            className="object-cover object-center rounded-2xl shadow-2xl border border-white/10 w-full"
            alt="Carbon Count Interviews — Raghav Agarwal in conversation"
            src="/img/podcast_interview.jpg"
          />
        </div>

        {/* Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center reveal">
          
          <span className="text-sm sm:text-base font-bold tracking-wider text-green-400 uppercase mb-2">
            Carbon Count Interviews
          </span>

          <h2 className="title-font text-3xl sm:text-5xl lg:text-6xl mb-6 font-black leading-tight tracking-tight text-white">
            Conversations <br/>
            <span className="text-cyan-400 animate-cyan-glow">That Inspire Climate Action</span>
          </h2>

          <p className="mb-8 leading-relaxed text-slate-200 text-lg sm:text-xl max-w-xl">
            We sit down with environmental leaders, sustainability advocates,
            and changemakers to explore real-world solutions for a healthier
            planet. Each interview is designed to educate, inspire, and spark
            meaningful action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href='/interview'>
              <button className="inline-flex items-center justify-center border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-[#0B1C2D] px-8 py-3 rounded-full text-lg font-semibold transition-all btn-shimmer hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20">
                Explore All Interviews
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
