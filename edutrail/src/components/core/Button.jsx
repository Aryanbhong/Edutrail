// import React from "react";
// import { Link,Links } from "react-router-dom";

// const Button =({children , active , linkto})=>{
//     return (
//         <Link to={linkto}>

//             <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
//                 ${active ?"bg-yellow-50 text-black":"bg-richblack-800 "} hover:scale-95
//                 transition-all duration-200`}
//            >
//                 {children}
//             </div>
//         </Link>
//     )
// }

// export default Button

import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-xs sm:text-sm px-6 py-3 rounded-2xl font-bold tracking-wide transition-all duration-300 ${
          active
            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105"
            : "bg-[#0B132B]/80 border border-cyan-500/30 text-slate-200 backdrop-blur-xl hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:scale-105"
        }`}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
