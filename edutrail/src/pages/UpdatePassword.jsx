// import React, { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { resetPassword } from "../services/opreations/authApis"
// import { useLocation, Link } from "react-router-dom"
// import { FaEye, FaArrowLeft } from "react-icons/fa"
// import { FaEyeSlash } from "react-icons/fa6"

// const UpdatePassword = () => {
//   const location = useLocation()
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     password: "",
//     confirmPassword: "",
//   })
//   const { loading } = useSelector((state) => state.auth)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   const { password, confirmPassword } = formData
//   const handleonChange = (e) => {
//     setFormData((prevdata) => ({
//       ...prevdata,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     const token = location.pathname.split("/").at(-1)
//     dispatch(resetPassword(password, confirmPassword, token))
//   }

//   const inputStyles =
//     "w-full rounded-xl border border-white/10 bg-[#060a17]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"

//   return (
//     <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-[#050816] px-4 overflow-hidden">
//       <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

//       {loading ? (
//         <div className="flex flex-col items-center justify-center gap-3">
//           <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
//           <p className="text-sm font-semibold text-cyan-300">Updating credentials...</p>
//         </div>
//       ) : (
//         <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
//           <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_#00f0ff]" />

//           <h1 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//             Choose New Password
//           </h1>

//           <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
//             Almost done. Enter and confirm your new password below.
//           </p>

//           <form onSubmit={handleOnSubmit} className="mt-6 space-y-4">
//             <label className="flex flex-col gap-1.5">
//               <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//                 New Password <span className="text-cyan-400">*</span>
//               </span>
//               <div className="relative">
//                 <input
//                   required
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={password}
//                   placeholder="Enter new password"
//                   onChange={handleonChange}
//                   className={`${inputStyles} pr-11`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-300 p-1.5"
//                 >
//                   {showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
//                 </button>
//               </div>
//             </label>

//             <label className="flex flex-col gap-1.5">
//               <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//                 Confirm New Password <span className="text-cyan-400">*</span>
//               </span>
//               <div className="relative">
//                 <input
//                   required
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   placeholder="Confirm your password"
//                   onChange={handleonChange}
//                   className={`${inputStyles} pr-11`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword((prev) => !prev)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-300 p-1.5"
//                 >
//                   {showConfirmPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
//                 </button>
//               </div>
//             </label>

//             <button
//               type="submit"
//               className="w-full mt-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
//             >
//               Reset Password
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

// export default UpdatePassword


import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetPassword } from "../services/opreations/authApis"
import { useLocation, Link } from "react-router-dom"
import { FaEye, FaArrowLeft } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa6"

const UpdatePassword = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const { loading } = useSelector((state) => state.auth)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleonChange = (e) => {
    setFormData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token))
  }

  const inputStyles =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/20 focus:border-violet-400/70 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-400/10"

  const labelStyles =
    "mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400"

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-[#09090b] px-4 py-12 font-sans text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[110px]"
      />

      {loading ? (
        <div
          role="status"
          className="relative flex flex-col items-center justify-center gap-4"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-violet-400" />
          <p className="animate-pulse text-xs font-medium tracking-wide text-zinc-400">
            Updating credentials...
          </p>
        </div>
      ) : (
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111114]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9">
          {/* Accent line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[25%] top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
          />

          <div className="mb-7 text-center">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path
                  d="M8 10V7a4 4 0 0 1 8 0v3"
                  strokeLinecap="round"
                />
                <path d="M12 14v3" strokeLinecap="round" />
              </svg>
            </span>

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
              Account security
            </p>

            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Choose New Password
            </h1>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-400">
              Almost done. Enter and confirm your new password below.
            </p>
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-5">
            {/* New password */}
            <label className="block">
              <span className={labelStyles}>
                New Password <span className="text-violet-300">*</span>
              </span>

              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  placeholder="Enter new password"
                  onChange={handleonChange}
                  className={`${inputStyles} pr-12`}
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  {showPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <FaEyeSlash size={15} />
                  )}
                </button>
              </div>
            </label>

            {/* Confirm password */}
            <label className="block">
              <span className={labelStyles}>
                Confirm New Password{" "}
                <span className="text-violet-300">*</span>
              </span>

              <div className="relative">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  placeholder="Confirm your password"
                  onChange={handleonChange}
                  className={`${inputStyles} pr-12`}
                />

                <button
                  type="button"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  aria-pressed={showConfirmPassword}
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  {showConfirmPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <FaEyeSlash size={15} />
                  )}
                </button>
              </div>
            </label>

            <button
              type="submit"
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition-colors duration-300 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111114] active:scale-[0.99]"
            >
              <span>Reset Password</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <div className="mt-7 border-t border-white/[0.07] pt-5 text-center">
            <Link
              to="/login"
              className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword

