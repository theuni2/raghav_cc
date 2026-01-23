import React from 'react'
import Nav from '../component/nav'
import Footer from '../component/footer'


export default function Page() {
  return (
  <>
  <Nav/>
<section className="mt-20 mb-20 px-6">
  <div className="relative flex w-full flex-col items-center justify-center rounded-3xl bg-[#0a192f] py-24 text-center shadow-2xl overflow-hidden">
    
    {/* Background Glow Effect */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22d3ee]/10 blur-3xl"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center gap-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-[#22d3ee]/30 backdrop-blur-md">
        <span className="text-4xl">🔒</span>
      </div>
      
      <div className="space-y-2">
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
          Research Papers <span className="text-[#22d3ee]">Coming Soon</span>
        </h2>
        <p className="max-w-lg text-slate-400">
          We are currently compiling the final data for the Q1 Carbon Audit and Youth Impact Analysis.
        </p>
      </div>

      <div className="mt-4 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#22d3ee]">
        Estimated Release: Feb 2026
      </div>
    </div>

  </div>
</section>
<Footer/>
</>
  )
}
