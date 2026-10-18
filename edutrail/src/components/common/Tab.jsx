// // const Tab=({ tabData, field, setField }) =>{
// //     return (
// //       <div
// //         style={{
// //           boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
// //         }}
// //         className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
// //       >
// //         {tabData.map((tab) => (
// //           <button
// //             key={tab.id}
// //             onClick={() => setField(tab.type)}
// //             className={`${
// //               field === tab.type
// //                 ? "bg-richblack-900 text-richblack-5"
// //                 : "bg-transparent text-richblack-200"
// //             } py-2 px-5 rounded-full transition-all duration-200`}
// //           >
// //             {tab?.tabName}
// //           </button>
// //         ))}
// //       </div>
// //     );
// //   }

// //   export default Tab

// const Tab = ({ tabData, field, setField }) => {
//   return (
//     <div
//       className="flex bg-richblack-800/50 backdrop-blur-md p-1 gap-x-2 my-6 rounded-full max-w-max shadow-inner shadow-white/10 border border-white/10"
//     >
//       {tabData.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => setField(tab.type)}
//           className={`py-2 px-5 rounded-full transition-all duration-200 text-sm font-semibold
//             ${
//               field === tab.type
//                 ? "bg-yellow-50 text-richblack-900 shadow-md scale-[1.03]"
//                 : "text-richblack-200 hover:bg-richblack-700/40 hover:text-white"
//             }`}
//         >
//           {tab?.tabName}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tab;

import React from 'react'

const Tab = ({ tabData, field, setField }) => {
  return (
    <div
      className="relative flex items-center gap-x-1.5 my-6 p-1 rounded-full bg-[#0B132B]/60 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-max"
    >
      {/* Ambient Inner Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {tabData.map((tab) => {
        const isActive = field === tab.type;
        return (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`relative py-2 px-6 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_18px_rgba(0,240,255,0.5)] scale-[1.03]"
                : "text-slate-300 border border-transparent hover:text-cyan-300 hover:bg-cyan-950/40 hover:border-cyan-500/30"
            }`}
          >
            {tab?.tabName}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
