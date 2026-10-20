import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto} className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl">
      <div
        className={`text-center text-xs sm:text-sm px-6 py-3 rounded-xl font-bold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${
          active
            ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-[1.03]"
            : "bg-[#0b1224]/80 border border-white/[0.12] text-slate-200 backdrop-blur-xl hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:scale-[1.03]"
        }`}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
