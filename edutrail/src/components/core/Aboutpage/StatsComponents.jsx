// import React from "react";
// import { DiVim } from "react-icons/di";

// const Stats = [
//     {count: "4K", label: " Active Students"},
//     {count: "10+", label:"Mentors"},
//     {count: "200+", label:"Courses"},
//     {count:"50+" , label:"Awards"},
// ];

// const StatsComponents =()=>{
//     return(
//        <div className="bg-richblack-700">
//         <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
//             <div className="grid grid-cols-2 md:grid-cols-4 text-center">
//                 {
//                     Stats.map( (data,index) => {
//                         return (
//                             <div className="flex flex-col py-10" key={index}>
//                                 <h1  className="text-[30px] font-bold text-richblack-5">
//                                     {data.count}
//                                     </h1>
//                                 <h2 className="font-semibold text-[16px] text-richblack-500">
//                                     {data.label}
//                                     </h2>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//        </div>
//     )
// }

// export default StatsComponents

import React from "react";

const Stats = [
  { count: "4K+", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponents = () => {
  return (
    <div className="bg-gradient-to-r from-richblack-800 to-richblack-900 py-14">
      <div className="w-11/12 max-w-maxContent mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Stats.map((data, index) => (
            <div
              key={index}
              className="rounded-xl border border-richblack-600 shadow-md p-6 hover:scale-105 transition-all duration-300 bg-richblack-900"
            >
              <h1 className="text-4xl font-bold text-pure-greys-50">{data.count}</h1>
              <h2 className="mt-2 text-blue-25 text-sm font-medium">
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponents;
