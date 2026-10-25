// import React from "react"
// import { Link } from "react-router-dom"
// import { FaArrowLeft } from "react-icons/fa"

// const Sorry = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-[#050816] px-4 text-center overflow-hidden">
//       <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

//       <div className="relative z-10 max-w-md rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
//         <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
//           Error 404
//         </p>

//         <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
//           Lost Trail
//         </h1>

//         <p className="mt-4 text-sm leading-relaxed text-slate-300">
//           The page or course you are seeking has either moved or does not exist in the EduTrail repository.
//         </p>

//         <Link
//           to="/"
//           className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//         >
//           <FaArrowLeft className="text-xs" />
//           Return to Home
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Sorry


import React from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaCompass } from "react-icons/fa"

const Sorry = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-[#09090b] px-4 py-12 text-center font-sans text-white">

      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 -top-20 h-80 w-80 rounded-full bg-violet-500/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-32 h-80 w-80 rounded-full bg-indigo-500/[0.10] blur-[120px]" />

      {/* 404 card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/[0.08] bg-[#111114]/90 p-8 shadow-2xl shadow-black/30 sm:p-12">

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
          <FaCompass className="text-3xl" />
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
          Error 404
        </p>

        <h1 className="mt-3 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Lost Trail
        </h1>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400" />

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-zinc-400 sm:text-base">
          The page or course you are seeking has either moved or does not exist in the EduTrail repository.
        </p>

        <Link
          to="/"
          className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-violet-500/30 active:translate-y-0 active:scale-[0.98]"
        >
          <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
          Return to Home
        </Link>

        <p className="mt-6 text-xs text-zinc-600">
          EduTrail · Your learning journey continues
        </p>
      </div>
    </div>
  )
}

export default Sorry

