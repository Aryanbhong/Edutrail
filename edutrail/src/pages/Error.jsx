import React from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Sorry = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-[#050816] px-4 text-center overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-md rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Error 404
        </p>

        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          Lost Trail
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          The page or course you are seeking has either moved or does not exist in the EduTrail repository.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <FaArrowLeft className="text-xs" />
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default Sorry
