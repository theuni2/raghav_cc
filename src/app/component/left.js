import React from "react";

export default function InterviewSection() {
  return (
    <section className="bg-[#0B1C2D] text-white body-font">
      <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center">

        {/* Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-2xl shadow-lg"
            alt="Carbon Count Interviews"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />
        </div>

        {/* Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          
          <span className="text-sm font-semibold tracking-wide text-green-600 uppercase mb-2">
            Carbon Count Interviews
          </span>

          <h2 className="title-font sm:text-4xl text-3xl mb-6 font-bold">
            Conversations <br/>
           <span className="text-cyan-400"> That Inspire Climate Action</span>
          </h2>

          <p className="mb-8 leading-relaxed text-gray-300 text-lg max-w-xl">
            We sit down with environmental leaders, sustainability advocates,
            and changemakers to explore real-world solutions for a healthier
            planet. Each interview is designed to educate, inspire, and spark
            meaningful action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="inline-flex items-center justify-center text-white bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg font-semibold transition">
              Watch Our Interview Series
            </button> */}
<a herf='/interview'>
            <button className="inline-flex items-center justify-center border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full text-lg transition">
              Explore All Interviews
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
