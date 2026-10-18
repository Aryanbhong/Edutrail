// import React from "react";

// const Quote = ()=>{
//     return (
//         <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
         
//          We are passionate about revolutionizing the way we learn. Our innovative platform 

//           <span className="text-blue-400"> combines technology </span>, <span className="text-brown-700"> expertise </span>,
//          and community to create an <span className="text-pink-500"> unparalleled educational experience</span>
//         </div>
//     )
// }

// export default Quote 

import React from "react";

const Quote = () => {
  return (
    <div className="relative max-w-4xl text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed tracking-wide mx-auto py-10 pb-20 text-center text-slate-200">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_8px_#00f0ff]" />

      We are passionate about revolutionizing the way we learn. Our innovative platform{" "}
      
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.6)] font-extrabold">
        combines technology
      </span>
      ,{" "}
      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] font-extrabold">
        expertise
      </span>
      , and community to create an{" "}
      <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_0_16px_rgba(0,240,255,0.8)] font-extrabold">
        unparalleled educational experience
      </span>
      .
    </div>
  );
};

export default Quote;


