// import React from 'react'

// export default function Hero() {
//   return (
//     <div>
//         <section class=" body-font bg-white">
//            <section class="text-gray-600 body-font">
//   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Small Choices. Big Climate Impact.
//       </h1>
//       <p class="mb-8 leading-relaxed">Carbon Count is a community-driven platform inspiring sustainable lifestyles through education, interviews, and hands-on climate action. Because change grows when people act together.</p>
//       <div class="flex justify-center">
//         <button class="inline-flex text-white bg-green-500  border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Carbon Count Interviews</button>
//         <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Take the First Step</button>
//       </div>
//     </div>
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
//     </div>
//   </div>
// </section>
//         </section>
//     </div>
//   )
// }



import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#0B1C2D] text-white body-font">
      <div className="container mx-auto flex px-6 py-28 md:flex-row flex-col items-center">
        
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-12 flex flex-col md:items-start md:text-left items-center text-center">
          
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold leading-tight">
            Small Choices. <br />
            <span className="text-cyan-400">Big Climate Impact.</span>
          </h1>

          <p className="mb-10 text-gray-300 text-lg max-w-xl">
            Carbon Count is a community-driven platform inspiring sustainable
            lifestyles through education, interviews, and hands-on climate action.
            Because real change grows when people act together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href='/journal'>
            <button className="inline-flex items-center justify-center text-[#0B1C2D] bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg font-semibold transition">
              Read Carbon Count Paper
            </button>
            </a>
{/* 
            <button className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0B1C2D] px-8 py-3 rounded-full text-lg transition">
              Take the First Step
            </button> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-12 md:mt-0">
          <img
            className="object-cover object-center rounded-2xl shadow-xl"
            alt="Carbon Count sustainability"
            src="/img/hero.jpg"
          />
        </div>
      </div>
    </section>
  );
}
