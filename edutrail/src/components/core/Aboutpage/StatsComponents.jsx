// // import React from "react";
// // import { DiVim } from "react-icons/di";

// // const Stats = [
// //     {count: "4K", label: " Active Students"},
// //     {count: "10+", label:"Mentors"},
// //     {count: "200+", label:"Courses"},
// //     {count:"50+" , label:"Awards"},
// // ];

// // const StatsComponents =()=>{
// //     return(
// //        <div className="bg-richblack-700">
// //         <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
// //             <div className="grid grid-cols-2 md:grid-cols-4 text-center">
// //                 {
// //                     Stats.map( (data,index) => {
// //                         return (
// //                             <div className="flex flex-col py-10" key={index}>
// //                                 <h1  className="text-[30px] font-bold text-richblack-5">
// //                                     {data.count}
// //                                     </h1>
// //                                 <h2 className="font-semibold text-[16px] text-richblack-500">
// //                                     {data.label}
// //                                     </h2>
// //                             </div>
// //                         )
// //                     })
// //                 }
// //             </div>
// //         </div>
// //        </div>
// //     )
// // }

// // export default StatsComponents

// import React from "react";

// const Stats = [
//   { count: "4K+", label: "Active Students" },
//   { count: "10+", label: "Mentors" },
//   { count: "200+", label: "Courses" },
//   { count: "50+", label: "Awards" },
// ];

// const StatsComponents = () => {
//   return (
//     <div className="bg-gradient-to-r from-richblack-800 to-richblack-900 py-14">
//       <div className="w-11/12 max-w-maxContent mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {Stats.map((data, index) => (
//             <div
//               key={index}
//               className="rounded-xl border border-richblack-600 shadow-md p-6 hover:scale-105 transition-all duration-300 bg-richblack-900"
//             >
//               <h1 className="text-4xl font-bold text-pure-greys-50">{data.count}</h1>
//               <h2 className="mt-2 text-blue-25 text-sm font-medium">
//                 {data.label}
//               </h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsComponents;


import React from "react";

const Stats = [
  { count: "4K+", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponents = () => {
  return (
    <section className="relative bg-[#030712]/90 border-y border-cyan-500/20 py-16 backdrop-blur-xl overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="w-11/12 max-w-maxContent mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
          {Stats.map((data, index) => (
            <div
              key={index}
              className="relative group rounded-2xl border border-cyan-500/20 bg-[#0B132B]/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]"
            >
              {/* Subtle Card Top Lighting Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all duration-300" />

              {/* Glowing Count */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                {data.count}
              </h1>

              {/* Label */}
              <h2 className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase group-hover:text-cyan-200 transition-colors duration-300">
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient Bottom Background Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 bg-cyan-500/10 blur-3xl pointer-events-none" />
    </section>
  );
};

export default StatsComponents;
