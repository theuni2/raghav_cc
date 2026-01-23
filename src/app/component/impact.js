import React from "react";

export default function ImpactSection() {
  return (
    <section className="bg-[#0B1C2D] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Creating <span className="text-cyan-400">Impact</span> Where It Matters Most
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-16">
          Carbon Count believes real change happens when awareness turns into action.
          Through environmental advocacy and community-driven kindness, we are building
          a future that cares for both people and the planet.
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition">
            <div className="text-green-400 text-3xl mb-4">🌱</div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Environmental Awareness
            </h3>
            <p className="text-gray-300 text-sm">
              Carbon Count Interviews and blogs amplify voices of environmental leaders,
              inspiring sustainable thinking and conscious lifestyle choices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition">
            <div className="text-cyan-400 text-3xl mb-4">📊</div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Action-Oriented Sustainability
            </h3>
            <p className="text-gray-300 text-sm">
              Interactive tools help individuals measure, track, and reduce their carbon
              footprint, turning responsibility into daily action.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition">
            <div className="text-green-400 text-3xl mb-4">🤝</div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Community Kindness
            </h3>
            <p className="text-gray-300 text-sm">
              Through Smiles Across Miles, students have led 10+ donation drives,
              supporting underprivileged communities with care and empathy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition">
            <div className="text-cyan-400 text-3xl mb-4">🎒</div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Youth-Led Change
            </h3>
            <p className="text-gray-300 text-sm">
              Powered by young changemakers and 50+ contributors, Carbon Count proves
              that collective effort creates lasting impact.
            </p>
          </div>
        </div>

        {/* Highlight Strip */}
        <div className="mt-16 py-6 px-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl">
          <p className="text-white text-lg font-medium">
            Sustainability isn’t just about saving the planet — it’s about uplifting
            people along the way.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-[#0B1C2D] font-semibold px-8 py-3 rounded-full transition">
            Be Part of the Impact
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0B1C2D] px-8 py-3 rounded-full transition">
            View Our Initiatives
          </button>
        </div>
      </div>
    </section>
  );
}
