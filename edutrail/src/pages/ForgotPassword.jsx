// import React, { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import { getPasswordResetToken } from "../services/opreations/authApis"
// import { HiOutlineMail } from "react-icons/hi"
// import { FaArrowLeft } from "react-icons/fa"

// const ForgotPassword = () => {
//   const { loading } = useSelector((state) => state.auth)
//   const [email, setEmail] = useState("")
//   const [emailSent, setEmailSent] = useState(false)
//   const dispatch = useDispatch()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(getPasswordResetToken(email, setEmailSent))
//   }

//   return (
//     <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-[#050816] px-4 overflow-hidden">
//       {/* Ambient background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

//       {loading ? (
//         <div className="flex flex-col items-center justify-center gap-3">
//           <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
//           <p className="text-sm font-semibold text-cyan-300">Sending instructions...</p>
//         </div>
//       ) : (
//         <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
//           {/* Top Hairline Glow */}
//           <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_#00f0ff]" />

//           <h1 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//             {emailSent ? "Check Your Mail" : "Reset Your Password"}
//           </h1>

//           <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
//             {emailSent
//               ? `We have dispatched password recovery instructions to ${email}`
//               : "Enter your registered email address and we'll send you a secure link to reset your account credentials."}
//           </p>

//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             {!emailSent && (
//               <label className="flex flex-col gap-1.5">
//                 <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//                   Email Address <span className="text-cyan-400">*</span>
//                 </span>
//                 <div className="relative">
//                   <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />
//                   <input
//                     required
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="you@example.com"
//                     className="w-full rounded-xl border border-white/10 bg-[#060a17]/90 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"
//                   />
//                 </div>
//               </label>
//             )}

//             <button
//               type="submit"
//               className="w-full rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
//             >
//               {emailSent ? "Resend Recovery Email" : "Send Reset Link"}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <Link
//               to="/login"
//               className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
//             >
//               <FaArrowLeft className="text-xs" />
//               Back to Sign In
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ForgotPassword



import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPasswordResetToken } from "../services/opreations/authApis"
import { HiOutlineMail } from "react-icons/hi"
import { FaArrowLeft, FaLock } from "react-icons/fa"

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth)
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-[#09090b] px-4 py-10 font-sans text-white">

      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-500/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-32 h-80 w-80 rounded-full bg-indigo-500/[0.10] blur-[120px]" />

      {loading ? (
        <div className="relative z-10 flex flex-col items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08]">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-400/20 border-t-violet-400" />
          </div>
          <p className="text-sm font-medium text-zinc-300">
            Sending recovery instructions...
          </p>
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111114]/95 p-6 shadow-2xl shadow-black/30 sm:p-9">

          {/* Top accent */}
          <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
            {emailSent ? (
              <HiOutlineMail className="text-3xl" />
            ) : (
              <FaLock className="text-xl" />
            )}
          </div>

          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            Account Recovery
          </p>

          <h1 className="mt-3 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-center text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
            {emailSent ? "Check Your Mail" : "Reset Your Password"}
          </h1>

          <p className="mt-3 text-center text-sm leading-7 text-zinc-400">
            {emailSent
              ? `We've sent password recovery instructions to ${email}. Please check your inbox.`
              : "Forgot your password? Enter your registered email address and we'll send you a secure link to reset it."}
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            {!emailSent && (
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Email Address <span className="text-violet-400">*</span>
                </span>

                <div className="relative">
                  <HiOutlineMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-500" />

                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/[0.08] bg-[#09090b] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition duration-200 placeholder:text-zinc-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>
              </label>
            )}

            <button
              type="submit"
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-violet-500/30 active:translate-y-0 active:scale-[0.98]"
            >
              {emailSent ? "Resend Recovery Email" : "Send Reset Link"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <div className="my-6 h-px bg-white/[0.06]" />

          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-300"
            >
              <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Sign In
            </Link>
          </div>

          <p className="mt-7 text-center text-xs text-zinc-600">
            EduTrail · Your learning journey continues
          </p>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword

