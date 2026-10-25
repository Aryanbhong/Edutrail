// import React, { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import OTPInput from "react-otp-input"
// import { Link, useNavigate } from "react-router-dom"
// import { sendOtp, signUp } from "../services/opreations/authApis"
// import { BiArrowBack } from "react-icons/bi"
// import { RxCountdownTimer } from "react-icons/rx"

// const VerifyEmail = () => {
//   const navigate = useNavigate()
//   const [otp, setOtp] = useState("")
//   const dispatch = useDispatch()
//   const { signupData, loading } = useSelector((state) => state.auth)

//   const handleOnSubmit = (e) => {
//     e.preventDefault()

//     const {
//       firstName,
//       lastName,
//       accountType,
//       email,
//       password,
//       confirmpassword,
//     } = signupData || {}

//     dispatch(
//       signUp(
//         accountType,
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmpassword,
//         otp,
//         navigate
//       )
//     )
//   }

//   return (
//     <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#050816] px-4 overflow-hidden">
//       <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

//       {loading ? (
//         <div className="flex flex-col items-center justify-center gap-3">
//           <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
//           <p className="text-sm font-semibold text-cyan-300">Verifying security token...</p>
//         </div>
//       ) : (
//         <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
//           <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_#00f0ff]" />

//           <h1 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//             Verify Email
//           </h1>

//           <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
//             A 6-digit verification code has been dispatched to your email. Enter the code below to activate your account.
//           </p>

//           <form onSubmit={handleOnSubmit} className="mt-8">
//             <OTPInput
//               value={otp}
//               onChange={setOtp}
//               numInputs={6}
//               renderSeparator={<span className="text-slate-600 font-bold">-</span>}
//               renderInput={(props) => (
//                 <input
//                   {...props}
//                   placeholder="•"
//                   className="w-[42px] sm:w-[50px] aspect-square rounded-xl border border-white/10 bg-[#060a17]/90 text-center text-lg sm:text-xl font-bold text-cyan-300 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/25"
//                 />
//               )}
//               containerStyle={{
//                 justifyContent: "space-between",
//                 gap: "0 6px",
//               }}
//             />

//             <button
//               type="submit"
//               className="w-full mt-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
//             >
//               Verify & Complete Registration
//             </button>
//           </form>

//           <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
//             <Link
//               to="/signup"
//               className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
//             >
//               <BiArrowBack /> Back to Signup
//             </Link>

//             <button
//               type="button"
//               className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
//               onClick={() => dispatch(sendOtp(signupData?.email, navigate))}
//             >
//               <RxCountdownTimer />
//               Resend Code
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default VerifyEmail



import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OTPInput from "react-otp-input"
import { Link, useNavigate } from "react-router-dom"
import { sendOtp, signUp } from "../services/opreations/authApis"
import { BiArrowBack } from "react-icons/bi"
import { RxCountdownTimer } from "react-icons/rx"

const VerifyEmail = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const dispatch = useDispatch()
  const { signupData, loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const {
      firstName,
      lastName,
      accountType,
      email,
      password,
      confirmpassword,
    } = signupData || {}

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        otp,
        navigate
      )
    )
  }

  const otpInputClass =
    "aspect-square w-[38px] rounded-lg border border-white/10 bg-white/[0.03] text-center text-base font-semibold text-white outline-none transition-[border-color,background-color,box-shadow] duration-200 hover:border-white/20 focus:border-violet-400/70 focus:bg-violet-400/[0.04] focus:ring-2 focus:ring-violet-400/15 sm:w-[46px] sm:text-lg"

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-[#09090b] px-4 py-12 font-sans text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[110px]"
      />

      {loading ? (
        <div
          role="status"
          className="relative flex flex-col items-center justify-center gap-4"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-violet-400" />
          <p className="animate-pulse text-xs font-medium tracking-wide text-zinc-400">
            Verifying security token...
          </p>
        </div>
      ) : (
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111114]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9">
          {/* Accent line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[25%] top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
          />

          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-violet-300"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path
                  d="m4 7 8 6 8-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="18" cy="17" r="4" fill="#111114" />
                <path
                  d="m16.5 17 1 1 2-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
              Account verification
            </p>

            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Verify Email
            </h1>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-400">
              A 6-digit verification code has been dispatched to your email.
              Enter the code below to activate your account.
            </p>
          </div>

          {/* OTP form */}
          <form onSubmit={handleOnSubmit} className="mt-8">
            <div className="mb-3 text-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                Verification code
              </span>
            </div>

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={
                <span className="px-0.5 text-zinc-600"> </span>
              }
              renderInput={(props) => (
                <input
                  {...props}
                  aria-label={`Verification digit`}
                  placeholder="·"
                  className={otpInputClass}
                />
              )}
              containerStyle={{
                display: "flex",
                justifyContent: "space-between",
                gap: "4px",
                width: "100%",
              }}
            />

            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition-colors duration-300 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111114] active:scale-[0.99]"
            >
              <span>Verify & Complete Registration</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          {/* Navigation and resend */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <BiArrowBack className="transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Signup
            </Link>

            <button
              type="button"
              className="group inline-flex items-center gap-2 text-xs font-medium text-violet-300 transition-colors duration-200 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
              onClick={() => dispatch(sendOtp(signupData?.email, navigate))}
            >
              <RxCountdownTimer className="transition-transform duration-300 group-hover:rotate-[-30deg]" />
              Resend Code
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerifyEmail

