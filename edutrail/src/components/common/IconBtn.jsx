// export default function IconBtn({
//     text,
//     onclick,
//     children,
//     disabled,
//     outline = false,
//     customClasses,
//     type,
//   }) {
//     return (
//       <button
//         disabled={disabled}
//         onClick={onclick}
//         className={`flex items-center ${
//           outline ? "border border-blue-300 bg-transparent" : "bg-blue-300"
//         } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
//         type={type}
//       >
//         {children ? (
//           <>
//             <span className={`${outline && "text-yellow-50"}`}>{text}</span>
//             {children}
//           </>
//         ) : (
//           text
//         )}
//       </button>
//     )
//   }


// // export default function IconBtn({
// //   text,
// //   onclick,
// //   children,
// //   disabled,
// //   outline = false,
// //   customClasses = "",
// //   type = "button",
// // }) {
// //   return (
// //     <button
// //       disabled={disabled}
// //       onClick={onclick}
// //       type={type}
// //       className={`flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition-all duration-200
// //         ${
// //           outline
// //             ? "bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/20"
// //             : "bg-blue-400 text-white hover:bg-blue-500"
// //         }
// //         disabled:opacity-50 disabled:cursor-not-allowed
// //         ${customClasses}`}
// //     >
// //       {children ? (
// //         <>
// //           <span>{text}</span>
// //           {children}
// //         </>
// //       ) : (
// //         text
// //       )}
// //     </button>
// //   );
// // }


import React from 'react'

export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses = "",
  type = "button",
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`relative inline-flex items-center justify-center gap-x-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-40 ${
        outline
          ? "border border-cyan-400/60 bg-cyan-950/30 text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:border-cyan-300 hover:bg-cyan-900/50 hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,240,255,0.75)]"
      } ${customClasses}`}
    >
      {children ? (
        <>
          <span className="flex items-center gap-x-1.5">{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
