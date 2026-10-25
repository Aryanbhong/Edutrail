// import React, { useState } from "react"
// import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa"
// import { useDispatch } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"
// import { login } from "../services/opreations/authApis"

// const LoginForm = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)

//   const { email, password } = formData

//   const ChangeHandler = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(login(email, password, navigate))
//   }

//   const inputStyles =
//     "w-full rounded-xl border border-white/10 bg-[#060a17]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20 hover:border-white/20"

//   return (
//     <form onSubmit={submitHandler} className="relative mt-6 flex w-full flex-col gap-y-4">
//       {/* Email */}
//       <label className="flex w-full flex-col gap-1.5">
//         <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//           Email Address <span className="text-cyan-400">*</span>
//         </span>
//         <input
//           required
//           type="email"
//           autoComplete="email"
//           value={email}
//           onChange={ChangeHandler}
//           placeholder="you@example.com"
//           name="email"
//           className={inputStyles}
//         />
//       </label>

//       {/* Password */}
//       <div className="flex w-full flex-col gap-1.5">
//         <label htmlFor="login-password" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
//           Password <span className="text-cyan-400">*</span>
//         </label>

//         <div className="relative">
//           <input
//             id="login-password"
//             required
//             type={showPassword ? "text" : "password"}
//             autoComplete="current-password"
//             value={password}
//             onChange={ChangeHandler}
//             placeholder="Enter your password"
//             name="password"
//             className={`${inputStyles} pr-12`}
//           />

//           <button
//             type="button"
//             onClick={() => setShowPassword((prev) => !prev)}
//             aria-label={showPassword ? "Hide password" : "Show password"}
//             className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
//           >
//             {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
//           </button>
//         </div>

//         {/* Forgot password */}
//         <div className="flex justify-end pt-1">
//           <Link
//             to="/forgotpassword"
//             className="text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200 hover:underline"
//           >
//             Forgot Password?
//           </Link>
//         </div>
//       </div>

//       {/* Sign in */}
//       <button
//         type="submit"
//         className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
//       >
//         <span>Sign In to EduTrail</span>
//         <FaArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
//       </button>
//     </form>
//   )
// }

// export default LoginForm


import React, { useState } from "react"
import { FaEye, FaEyeSlash, FaArrowRight, FaLock } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/opreations/authApis"

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const ChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  const inputStyles =
    "w-full rounded-xl border border-white/[0.08] bg-[#09090b] px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition duration-200 hover:border-white/[0.14] focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"

  return (
    <form
      onSubmit={submitHandler}
      className="relative mt-6 flex w-full flex-col gap-y-5 font-sans"
    >
      {/* Email */}
      <label className="flex w-full flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
          Email Address <span className="text-violet-400">*</span>
        </span>

        <input
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={ChangeHandler}
          placeholder="you@example.com"
          name="email"
          className={inputStyles}
        />
      </label>

      {/* Password */}
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor="login-password"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-300"
        >
          Password <span className="text-violet-400">*</span>
        </label>

        <div className="relative">
          <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-600" />

          <input
            id="login-password"
            required
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={ChangeHandler}
            placeholder="Enter your password"
            name="password"
            className={`${inputStyles} pl-10 pr-12`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-zinc-500 transition-colors hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
          >
            {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
          </button>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end pt-1">
          <Link
            to="/forgotpassword"
            className="text-xs font-medium text-zinc-500 transition-colors hover:text-violet-300"
          >
            Forgot Password?
          </Link>
        </div>
      </div>

      {/* Sign in */}
      <button
        type="submit"
        className="group mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-violet-500/30 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
      >
        <span>Sign In to EduTrail</span>
        <FaArrowRight
          size={13}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>

      {/* Security note */}
      <p className="mt-1 text-center text-xs leading-relaxed text-zinc-600">
        Your learning journey is just one step away.
      </p>
    </form>
  )
}

export default LoginForm

