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

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#050816] px-4 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
          <p className="text-sm font-semibold text-cyan-300">Verifying security token...</p>
        </div>
      ) : (
        <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_#00f0ff]" />

          <h1 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            Verify Email
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
            A 6-digit verification code has been dispatched to your email. Enter the code below to activate your account.
          </p>

          <form onSubmit={handleOnSubmit} className="mt-8">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="text-slate-600 font-bold">-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="•"
                  className="w-[42px] sm:w-[50px] aspect-square rounded-xl border border-white/10 bg-[#060a17]/90 text-center text-lg sm:text-xl font-bold text-cyan-300 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/25"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />

            <button
              type="submit"
              className="w-full mt-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Verify & Complete Registration
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
            <Link
              to="/signup"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <BiArrowBack /> Back to Signup
            </Link>

            <button
              type="button"
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              onClick={() => dispatch(sendOtp(signupData?.email, navigate))}
            >
              <RxCountdownTimer />
              Resend Code
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerifyEmail
