import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-white body-font">
      <div className="container mx-auto px-6 py-16 border-t border-white/10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="md:w-1/3">
            <img
              src="/img/cc_logo.png"
              alt="Carbon Count"
              className="w-40 mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Carbon Count is a community-driven platform transforming environmental
              awareness into real-world climate action. Because caring for people and
              the planet go hand in hand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white transition cursor-pointer">Home</a></li>
              <li><a href="/#book" className="hover:text-white transition cursor-pointer">Book: Carbon Keeps the Score</a></li>
              <li><a href="/#leadership" className="hover:text-white transition cursor-pointer">Leadership</a></li>
              <li><a href="/journal" className="hover:text-white transition cursor-pointer">Journal</a></li>
              <li><a href="/interview" className="hover:text-white transition cursor-pointer">Interviews</a></li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Initiatives</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/#leadership" className="hover:text-white transition cursor-pointer">Student Council & ICT</a></li>
              <li><a href="/#smiles-across-miles" className="hover:text-white transition cursor-pointer">Smiles Across Miles</a></li>
              <li><a href="/#community" className="hover:text-white transition cursor-pointer">Community In Action</a></li>
              <li><a href="/#media" className="hover:text-white transition cursor-pointer">Media Coverage</a></li>
              <li><a href="/interview" className="hover:text-white transition cursor-pointer">Carbon Count Interviews</a></li>
              <li><a href="/journal" className="hover:text-white transition cursor-pointer">Climate & Market Research</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="md:w-1/4">
            <h3 className="text-cyan-400 font-semibold mb-4">Get Involved</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join us in creating a more compassionate and sustainable future through youth leadership, environmental research, and grassroots action.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className=" mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between">
          
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 Carbon Count. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a className="text-gray-400 hover:text-cyan-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-400 hover:text-cyan-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-400 hover:text-cyan-400 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="text-gray-400 hover:text-cyan-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
