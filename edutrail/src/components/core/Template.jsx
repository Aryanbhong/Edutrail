import React from "react"
import frameimage from "../../assets/images/frame.png"
import Signupform from "../../pages/signUpForm"
import LoginForm from "../../pages/LoginForm"
import { FcGoogle } from "react-icons/fc"

const Template = ({ tittle, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-slate-100 w-11/12 max-w-[1200px] py-12 mx-auto gap-12 lg:gap-16">
      {/* Form Section */}
      <div className="relative w-full max-w-[500px] rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
          {tittle}
        </h1>

        <p className="text-xs sm:text-sm mt-3 leading-relaxed">
          <span className="text-slate-300 font-medium">{desc1}</span>{" "}
          <span className="text-cyan-300 font-semibold italic">{desc2}</span>
        </p>

        <div className="mt-6">
          {formtype === "signup" ? (
            <Signupform setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>

        {/* Divider */}
        <div className="flex w-full items-center my-6 gap-x-4">
          <div className="w-full h-[1px] bg-white/[0.08]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">OR</p>
          <div className="w-full h-[1px] bg-white/[0.08]" />
        </div>

        {/* Google Auth Button */}
        <button
          type="button"
          className="w-full flex justify-center items-center rounded-xl font-semibold text-slate-200 border border-white/[0.1] bg-white/[0.03] px-4 py-3 gap-x-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/25 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm">Sign {formtype === "signup" ? "Up" : "In"} with Google</span>
        </button>
      </div>

      {/* Graphic Preview Section */}
      <div className="relative w-full max-w-[480px] hidden lg:block">
        <img
          src={frameimage}
          alt="pattern frame"
          width={558}
          height={504}
          loading="lazy"
          className="rounded-3xl opacity-75"
        />

        <img
          src={image}
          alt="auth preview"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4 rounded-3xl border border-cyan-400/30 object-cover shadow-[0_0_35px_rgba(0,240,255,0.25)]"
        />
      </div>
    </div>
  )
}

export default Template
