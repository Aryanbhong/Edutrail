import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPasswordResetToken } from "../services/opreations/authApis"
import { HiOutlineMail } from "react-icons/hi"
import { FaArrowLeft } from "react-icons/fa"

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
    <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-[#050816] px-4 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
          <p className="text-sm font-semibold text-cyan-300">Sending instructions...</p>
        </div>
      ) : (
        <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
          {/* Top Hairline Glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_#00f0ff]" />

          <h1 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            {emailSent ? "Check Your Mail" : "Reset Your Password"}
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
            {emailSent
              ? `We have dispatched password recovery instructions to ${email}`
              : "Enter your registered email address and we'll send you a secure link to reset your account credentials."}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {!emailSent && (
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Email Address <span className="text-cyan-400">*</span>
                </span>
                <div className="relative">
                  <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#060a17]/90 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </label>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              {emailSent ? "Resend Recovery Email" : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <FaArrowLeft className="text-xs" />
              Back to Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword
