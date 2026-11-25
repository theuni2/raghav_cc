// import React from 'react'

// export default function Gallery() {
//   return (
//     <div>
//       <section className="text-gray-600 body-font bg-green-50">
//         <div className="container px-5 py-24 mx-auto flex flex-wrap">
//           <div className="flex w-full mb-20 flex-wrap">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-700 lg:w-1/3 lg:mb-0 mb-4">
//               Green Harmony Collection
//             </h1>
//             <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
//               Explore nature’s beauty through shades of green — fresh, calm, and full of life.
//               Each frame captures the serene essence of our planet’s heartbeat.
//             </p>
//           </div>

//           <div className="flex flex-wrap md:-m-2 -m-1">
//             {/* Left Column */}
//             <div className="flex flex-wrap w-1/2">
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition duration-300"
//                   src="/img/img_1.png"
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition duration-300"
//                   src="/img/img_2.png"
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-full">
//                 <img
//                   alt="gallery"
//                   className="w-full h-full object-cover object-center block rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition duration-300"
//                   src="https://dummyimage.com/600x360/4ade80/ffffff"
//                 />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-wrap w-1/2">
//               <div className="md:p-2 p-1 w-full">
//                 <img
//                   alt="gallery"
//                   className="w-full h-full object-cover object-center block rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition duration-300"
//                   src="https://dummyimage.com/601x361/86efac/333333"
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition duration-300"
//                   src="https://dummyimage.com/502x302/22c55e/ffffff"
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition duration-300"
//                   src="https://dummyimage.com/503x303/16a34a/ffffff"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




import React from "react";

export default function Gallery() {
  return (
    <section className="bg-[#0B1C2D] body-font">
      <div className="container mx-auto px-6 py-24">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white lg:w-2/5 mb-6 lg:mb-0 tracking-tight leading-tight">
            Life at <span className="text-cyan-400 animate-cyan-glow">Carbon Count</span>
          </h2>
          <p className="lg:pl-8 lg:w-3/5 text-slate-200 text-lg sm:text-xl leading-relaxed">
            From climate conversations to community outreach, these moments capture
            how action, empathy, and sustainability come together. Every image reflects
            our belief that change is built through people and purpose.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap -m-2">

          {/* Left Column */}
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div className="p-2 w-1/2 reveal-scale hover-lift stagger-1">
              <img
                alt="Carbon Count community action"
                className="w-full h-full object-cover rounded-2xl transition duration-500 hover:scale-[1.03]"
                src="/img/gallery/img1.png"
              />
            </div>
            <div className="p-2 w-1/2 reveal-scale hover-lift stagger-2">
              <img
                alt="Environmental awareness activity"
                className="w-full h-full object-cover rounded-2xl transition duration-500 hover:scale-[1.03]"
                src="/img/gallery/img2.png"
              />
            </div>
            <div className="p-2 w-full reveal-scale hover-lift stagger-3">
              <img
                alt="Smiles Across Miles donation drive"
                className="w-full h-full object-cover rounded-2xl transition duration-500 hover:scale-[1.03]"
                src="/img/gallery/img3.png"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div className="p-2 w-full reveal-scale hover-lift stagger-4">
              <img
                alt="Youth-led sustainability initiative"
                className="w-full h-full object-cover rounded-2xl transition duration-500 hover:scale-[1.03]"
                src="/img/gallery/img4.jpg"
              />
            </div>
            <div className="p-2 w-1/2 reveal-scale hover-lift stagger-5">
              <img
                alt="Climate action workshop"
                className="w-full h-full object-cover rounded-2xl transition duration-500 hover:scale-[1.03]"
                src="/img/gallery/img5.jpg"
              />
            </div>
            <div className="p-2 w-1/2 reveal-scale hover-lift stagger-6">
              <img
                alt="Community engagement"
                className="w-full h-full object-cover rounded-2xl transition duration-500 hover:scale-[1.03]"
                src="/img/gallery/img6.jpg"
              />
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-[#0B1C2D] font-semibold px-10 py-3 rounded-full text-lg transition">
            See More Stories
          </button>
        </div> */}

      </div>
    </section>
  );
}
