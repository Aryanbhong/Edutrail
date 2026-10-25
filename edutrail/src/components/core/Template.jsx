// import React from "react"
// import frameimage from "../../assets/images/frame.png"
// import Signupform from "../../pages/signUpForm"
// import LoginForm from "../../pages/LoginForm"
// import { FcGoogle } from "react-icons/fc"

// const Template = ({ tittle, desc1, desc2, image, formtype, setIsLoggedIn }) => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center text-slate-100 w-11/12 max-w-[1200px] py-12 mx-auto gap-12 lg:gap-16">
//       {/* Form Section */}
//       <div className="relative w-full max-w-[500px] rounded-3xl border border-white/[0.1] bg-[#0b1224]/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

//         <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//           {tittle}
//         </h1>

//         <p className="text-xs sm:text-sm mt-3 leading-relaxed">
//           <span className="text-slate-300 font-medium">{desc1}</span>{" "}
//           <span className="text-cyan-300 font-semibold italic">{desc2}</span>
//         </p>

//         <div className="mt-6">
//           {formtype === "signup" ? (
//             <Signupform setIsLoggedIn={setIsLoggedIn} />
//           ) : (
//             <LoginForm setIsLoggedIn={setIsLoggedIn} />
//           )}
//         </div>

//         {/* Divider */}
//         <div className="flex w-full items-center my-6 gap-x-4">
//           <div className="w-full h-[1px] bg-white/[0.08]" />
//           <p className="text-xs font-bold uppercase tracking-wider text-slate-400">OR</p>
//           <div className="w-full h-[1px] bg-white/[0.08]" />
//         </div>

//         {/* Google Auth Button */}
//         <button
//           type="button"
//           className="w-full flex justify-center items-center rounded-xl font-semibold text-slate-200 border border-white/[0.1] bg-white/[0.03] px-4 py-3 gap-x-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/25 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer"
//         >
//           <FcGoogle className="text-xl" />
//           <span className="text-sm">Sign {formtype === "signup" ? "Up" : "In"} with Google</span>
//         </button>
//       </div>

//       {/* Graphic Preview Section */}
//       <div className="relative w-full max-w-[480px] hidden lg:block">
//         <img
//           src={frameimage}
//           alt="pattern frame"
//           width={558}
//           height={504}
//           loading="lazy"
//           className="rounded-3xl opacity-75"
//         />

//         <img
//           src={image}
//           alt="auth preview"
//           width={558}
//           height={490}
//           loading="lazy"
//           className="absolute -top-4 right-4 rounded-3xl border border-cyan-400/30 object-cover shadow-[0_0_35px_rgba(0,240,255,0.25)]"
//         />
//       </div>
//     </div>
//   )
// }

// export default Template



import React from "react"
import frameimage from "../../assets/images/frame.png"
import Signupform from "../../pages/signUpForm"
import LoginForm from "../../pages/LoginForm"
import { FcGoogle } from "react-icons/fc"

const Template = ({
  tittle,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className="relative mx-auto flex min-h-screen w-11/12 max-w-[1200px] flex-col items-center justify-center gap-12 overflow-hidden py-12 font-sans text-slate-100 lg:flex-row lg:gap-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />

      {/* Form Section */}
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111114]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-violet-400/20 sm:p-10">
        {/* Top accent */}
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            {formtype === "signup" ? "Create your account" : "Welcome back"}
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {tittle}
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#9A9A9E]">
            {desc1}{" "}
            <span className="font-medium text-slate-300">{desc2}</span>
          </p>
        </div>

        {/* Existing Form */}
        <div>
          {formtype === "signup" ? (
            <Signupform setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>

        {/* Divider */}
        <div className="my-6 flex w-full items-center gap-x-4">
          <div className="h-px flex-1 bg-white/[0.08]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            or continue with
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        {/* Google Auth Button */}
        <button
          type="button"
          className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-medium text-slate-300 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.07] hover:text-white active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
        >
          <FcGoogle className="text-xl transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm">
            Sign {formtype === "signup" ? "Up" : "In"} with Google
          </span>
        </button>

        <p className="mt-6 text-center text-xs text-zinc-600">
          Secure access. Your journey starts here.
        </p>
      </div>

      {/* Graphic Preview Section */}
      <div className="relative hidden w-full max-w-[480px] lg:block">
        {/* Ambient glow */}
        <div className="absolute inset-8 rounded-3xl bg-violet-500/10 blur-3xl transition-all duration-700 hover:bg-violet-500/20" />

        <img
          src={frameimage}
          alt="Decorative pattern frame"
          width={558}
          height={504}
          loading="lazy"
          className="relative rounded-2xl opacity-40 transition-opacity duration-500 hover:opacity-60"
        />

        <div className="absolute -right-2 -top-3 w-[94%] overflow-hidden rounded-2xl border border-white/10 bg-[#121216] shadow-[0_25px_70px_rgba(0,0,0,0.65)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-violet-400/30 sm:right-3 sm:top-3">
          <img
            src={image}
            alt="Authentication preview"
            width={558}
            height={490}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/20 via-transparent to-white/[0.03]" />
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -left-1 top-1/4 h-12 w-px bg-gradient-to-b from-transparent via-violet-400/60 to-transparent" />
        <div className="absolute bottom-1/4 right-0 h-px w-16 bg-gradient-to-r from-transparent to-violet-400/60" />
      </div>
    </div>
  )
}

export default Template

