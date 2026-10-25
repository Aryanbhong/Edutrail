// import React, { useState } from "react"
// import { FaEye, FaEyeSlash, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa"
// import { HiOutlineMail, HiOutlineUser } from "react-icons/hi"
// import { useNavigate } from "react-router-dom"
// import { sendOtp } from "../services/opreations/authApis"
// import { toast } from "react-hot-toast"
// import { useDispatch } from "react-redux"
// import { setSignupData } from "../slices/authSlice"
// import { ACCOUNT_TYPE } from "../utils/Permanents"
// import Tab from "../components/common/Tab"

// const Signupform = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const { password, confirmpassword } = formData

//   const ChangeHandler = (event) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [event.target.name]: event.target.value,
//     }))
//   }

//   const submitHandler = (event) => {
//     event.preventDefault()

//     if (password !== confirmpassword) {
//       toast.error("Passwords do not match")
//       return
//     }

//     const signupData = {
//       ...formData,
//       accountType,
//     }

//     // Save signup details for use after OTP verification
//     dispatch(setSignupData(signupData))

//     // Send OTP verification email
//     dispatch(sendOtp(formData.email, navigate))

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmpassword: "",
//     })

//     setShowPassword(false)
//     setShowConfirmPassword(false)
//   }

//   const tabData = [
//     {
//       id: 1,
//       tabName: "Student",
//       type: ACCOUNT_TYPE.STUDENT,
//     },
//     {
//       id: 2,
//       tabName: "Instructor",
//       type: ACCOUNT_TYPE.INSTRUCTOR,
//     },
//   ]

//   const inputClass =
//     "w-full rounded-xl border border-white/10 bg-[#060a17]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"

//   const labelClass =
//     "text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 block"

//   const EyeButton = ({ visible, onClick, label }) => (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={visible ? `Hide ${label}` : `Show ${label}`}
//       className="absolute right-3 top-[34px] rounded-lg p-1.5 text-slate-400 transition hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
//     >
//       {visible ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
//     </button>
//   )

//   return (
//     <div className="relative w-full text-white">
//       {/* Account type selector */}
//       <div className="mb-6 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1">
//         <Tab
//           tabData={tabData}
//           field={accountType}
//           setField={setAccountType}
//         />
//       </div>

//       <form onSubmit={submitHandler} className="flex w-full flex-col gap-4">
//         {/* Names */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <label className="block min-w-0">
//             <span className={labelClass}>
//               First Name <span className="text-cyan-400">*</span>
//             </span>
//             <div className="relative">
//               <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-slate-500" />
//               <input
//                 type="text"
//                 name="firstName"
//                 required
//                 autoComplete="given-name"
//                 value={formData.firstName}
//                 onChange={ChangeHandler}
//                 placeholder="John"
//                 className={`${inputClass} pl-10`}
//               />
//             </div>
//           </label>

//           <label className="block min-w-0">
//             <span className={labelClass}>
//               Last Name <span className="text-cyan-400">*</span>
//             </span>
//             <div className="relative">
//               <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-slate-500" />
//               <input
//                 type="text"
//                 name="lastName"
//                 required
//                 autoComplete="family-name"
//                 value={formData.lastName}
//                 onChange={ChangeHandler}
//                 placeholder="Doe"
//                 className={`${inputClass} pl-10`}
//               />
//             </div>
//           </label>
//         </div>

//         {/* Email */}
//         <label className="block">
//           <span className={labelClass}>
//             Email Address <span className="text-cyan-400">*</span>
//           </span>
//           <div className="relative">
//             <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />
//             <input
//               type="email"
//               name="email"
//               required
//               autoComplete="email"
//               value={formData.email}
//               onChange={ChangeHandler}
//               placeholder="you@example.com"
//               className={`${inputClass} pl-10`}
//             />
//           </div>
//         </label>

//         {/* Passwords */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <label className="relative block min-w-0">
//             <span className={labelClass}>
//               Password <span className="text-cyan-400">*</span>
//             </span>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               required
//               autoComplete="new-password"
//               value={formData.password}
//               onChange={ChangeHandler}
//               placeholder="Create password"
//               className={`${inputClass} pr-11`}
//             />
//             <EyeButton
//               visible={showPassword}
//               onClick={() => setShowPassword((prev) => !prev)}
//               label="password"
//             />
//           </label>

//           <label className="relative block min-w-0">
//             <span className={labelClass}>
//               Confirm <span className="text-cyan-400">*</span>
//             </span>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmpassword"
//               required
//               autoComplete="new-password"
//               value={formData.confirmpassword}
//               onChange={ChangeHandler}
//               placeholder="Confirm password"
//               className={`${inputClass} pr-11`}
//             />
//             <EyeButton
//               visible={showConfirmPassword}
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//               label="confirm password"
//             />
//           </label>
//         </div>

//         {/* Password match hint */}
//         {confirmpassword.length > 0 && (
//           <p
//             className={`text-xs ${
//               password === confirmpassword
//                 ? "text-emerald-300"
//                 : "text-rose-300"
//             }`}
//           >
//             {password === confirmpassword
//               ? "✓ Passwords match"
//               : "Passwords do not match yet"}
//           </p>
//         )}

//         {/* Submit */}
//         <button
//           type="submit"
//           className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
//         >
//           <span>Create Account</span>
//           <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
//             →
//           </span>
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Signupform



import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../services/opreations/authApis"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setSignupData } from "../slices/authSlice"
import { ACCOUNT_TYPE } from "../utils/Permanents"
import Tab from "../components/common/Tab"

const Signupform = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmpassword } = formData

  const ChangeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (password !== confirmpassword) {
      toast.error("Passwords do not match")
      return
    }

    const signupData = { ...formData, accountType }

    dispatch(setSignupData(signupData))
    dispatch(sendOtp(formData.email, navigate))

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    })

    setShowPassword(false)
    setShowConfirmPassword(false)
  }

  const tabData = [
    { id: 1, tabName: "Student", type: ACCOUNT_TYPE.STUDENT },
    { id: 2, tabName: "Instructor", type: ACCOUNT_TYPE.INSTRUCTOR },
  ]

  const inputClass =
    "w-full rounded-xl border border-white/[0.09] bg-[#0b0b0e] px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 ease-out hover:border-white/20 focus:border-violet-400/60 focus:bg-[#101014] focus:ring-4 focus:ring-violet-500/[0.08]"

  const labelClass =
    "mb-2.5 block text-xs font-medium tracking-wide text-zinc-400 transition-colors duration-200"

  const EyeButton = ({ visible, onClick, label }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={visible ? `Hide ${label}` : `Show ${label}`}
      className="absolute right-2.5 top-[31px] rounded-lg p-2.5 text-zinc-500 transition-all duration-200 hover:bg-white/[0.05] hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
    >
      {visible ? <FaEye size={14} /> : <FaEyeSlash size={14} />}
    </button>
  )

  return (
    <div className="relative w-full font-sans text-white">
      {/* Account type selector */}
      <div className="mb-7 rounded-xl border border-white/[0.08] bg-[#0b0b0e] p-1.5">
        <Tab
          tabData={tabData}
          field={accountType}
          setField={setAccountType}
        />
      </div>

      <form onSubmit={submitHandler} className="flex w-full flex-col gap-5">
        {/* First and last name */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className={labelClass}>
              First Name <span className="text-violet-300">*</span>
            </span>

            <div className="group relative">
              <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-zinc-500 transition-colors duration-200 group-focus-within:text-violet-300" />

              <input
                type="text"
                name="firstName"
                required
                autoComplete="given-name"
                value={formData.firstName}
                onChange={ChangeHandler}
                placeholder="John"
                className={`${inputClass} pl-11`}
              />
            </div>
          </label>

          <label className="block min-w-0">
            <span className={labelClass}>
              Last Name <span className="text-violet-300">*</span>
            </span>

            <div className="group relative">
              <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-zinc-500 transition-colors duration-200 group-focus-within:text-violet-300" />

              <input
                type="text"
                name="lastName"
                required
                autoComplete="family-name"
                value={formData.lastName}
                onChange={ChangeHandler}
                placeholder="Doe"
                className={`${inputClass} pl-11`}
              />
            </div>
          </label>
        </div>

        {/* Email */}
        <label className="block">
          <span className={labelClass}>
            Email Address <span className="text-violet-300">*</span>
          </span>

          <div className="group relative">
            <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-zinc-500 transition-colors duration-200 group-focus-within:text-violet-300" />

            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={ChangeHandler}
              placeholder="you@example.com"
              className={`${inputClass} pl-11`}
            />
          </div>
        </label>

        {/* Password fields */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="relative block min-w-0">
            <span className={labelClass}>
              Password <span className="text-violet-300">*</span>
            </span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              autoComplete="new-password"
              value={formData.password}
              onChange={ChangeHandler}
              placeholder="Create password"
              className={`${inputClass} pr-11`}
            />

            <EyeButton
              visible={showPassword}
              onClick={() => setShowPassword((prev) => !prev)}
              label="password"
            />
          </label>

          <label className="relative block min-w-0">
            <span className={labelClass}>
              Confirm Password <span className="text-violet-300">*</span>
            </span>

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmpassword"
              required
              autoComplete="new-password"
              value={formData.confirmpassword}
              onChange={ChangeHandler}
              placeholder="Confirm password"
              className={`${inputClass} pr-11`}
            />

            <EyeButton
              visible={showConfirmPassword}
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              label="confirm password"
            />
          </label>
        </div>

        {/* Password match feedback */}
        {confirmpassword.length > 0 && (
          <p
            aria-live="polite"
            className={`-mt-2 flex items-center gap-2 text-xs transition-colors duration-200 ${
              password === confirmpassword
                ? "text-emerald-400"
                : "text-rose-400"
            }`}
          >
            <span>
              {password === confirmpassword ? "✓" : "•"}
            </span>
            {password === confirmpassword
              ? "Passwords match"
              : "Passwords do not match yet"}
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="group relative mt-1 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-white px-5 py-4 text-sm font-semibold text-[#09090b] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet-100 hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] active:translate-y-0 active:scale-[0.99]"
        >
          <span>Create Account</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </button>

        <p className="text-center text-xs leading-5 text-zinc-600">
          By creating an account, you can start your learning journey.
        </p>
      </form>
    </div>
  )
}

export default Signupform

