// import React from 'react'

// export default function Nav() {
//   return (
//     <div>
//         <header class="text-gray-900 body-font bg-white">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">CarbronCount</span>
//     </a>
//     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-gray-900" className=''>Home</a>
//       <a class="mr-5 hover:text-gray-900">Journal</a>
//       <a class="mr-5 hover:text-gray-900"> three chnge</a>
//       <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//     <button class="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>
//     </div>
//   )
// }





// import React from 'react'

// export default function Nav() {
//   return (
//     <div>
//       <header className="text-gray-900 body-font bg-white">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//            <img src="/img/cc_logo.png" className="w-40 h-20 text-white p-2  "/>
//           </a>
//           <nav className="md:mx-auto flex flex-wrap items-center text-base justify-center">
//             <a className="mr-5 hover:text-green-600">Home</a>
//             <a className="mr-5 hover:text-green-600">Journal</a>
//             <a className="mr-5 hover:text-green-600">Services/Products</a>
//             <a className="mr-5 hover:text-green-600">Interviews</a>
//             <a className="mr-5 hover:text-green-600">About Us</a>
//           </nav>
//           <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
//             Contact Us
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>
//       </header>
//     </div>
//   )
// }

import React from "react";

export default function Nav() {
  return (
    <header className="bg-[#0B1C2D] text-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">

        {/* Logo */}
        <a className="flex items-center">
          <img
            src="/img/cc_logo.png"
            alt="Carbon Count"
            className="w-36 h-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/'>
            Home
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/journal'>
            Journal
          </a>
          {/* <a className="hover:text-cyan-400 transition cursor-pointer">
            Services / Products
          </a> */}
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/interview'>
            Interviews
          </a>
        
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-[#0B1C2D] font-semibold px-6 py-2 rounded-full transition">
            Contact Us
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Icon (optional placeholder) */}
        <button className="md:hidden text-cyan-400">
          ☰
        </button>
      </div>
    </header>
  );
}
