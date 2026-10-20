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
    "w-full rounded-xl border border-white/10 bg-[#060a17]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"

  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-[#050816] px-4 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
          <p className="text-sm font-semibold text-cyan-300">Updating credentials...</p>
        </div>
      ) : (
        <div className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_8px_#00f0ff]" />

          <h1 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            Choose New Password
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
            Almost done. Enter and confirm your new password below.
          </p>

          <form onSubmit={handleOnSubmit} className="mt-6 space-y-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                New Password <span className="text-cyan-400">*</span>
              </span>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Enter new password"
                  onChange={handleonChange}
                  className={`${inputStyles} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-300 p-1.5"
                >
                  {showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
                </button>
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Confirm New Password <span className="text-cyan-400">*</span>
              </span>
              <div className="relative">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm your password"
                  onChange={handleonChange}
                  className={`${inputStyles} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-300 p-1.5"
                >
                  {showConfirmPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
                </button>
              </div>
            </label>

            <button
              type="submit"
              className="w-full mt-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Reset Password
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

export default UpdatePassword
