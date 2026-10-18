// import React from "react";
// import frameimage from "../../assets/images/frame.png";
// import { Link, NavLink } from "react-router-dom";
// import Signupform from "../../pages/signUpForm";
// import LoginForm from "../../pages/LoginForm";
// import { FcGoogle } from "react-icons/fc";

// const  Template=({tittle,desc1,desc2,image,formtype,setIsLoggedIn})=>{
// return (
//     <div className="flex  text-white w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 ">
//        <div className="w-11/12 max-w-[450px] mx-0 mr-20 ">
//         <h1 className="text-gray-50 font-semibold text-[1.875rem] leading-[2.375]">{tittle}</h1>
//         <p className="text-[1.125rem] leading[1.625rem] mt-4"> 
          
//             <span className="text-gray-100">{desc1}</span>
//             <br />
//             <span className="text-blue-100 italic">{desc2}</span>
//         </p>
//         {formtype=="signup" ? (<Signupform setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

//         <div className="flex w-full items-center my-4 gap-x-2">
//             <div className="w-full h-[1px] bg-gray-500"></div>
//             <p>OR</p>
//             <div className="w-full h-[1px] bg-gray-500"></div>
//         </div>

//         <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-gray-100 border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6">
//              <FcGoogle />
//             <p>Sign Up with Google</p>
//         </button>
//        </div>
//        <div className="relative w-11/12 max-w-[450px] ">
//         <img src={frameimage} alt="pattern"
//         width={558}
//         height={504} 
//         loading="lazy"/>

//         <img src={image} alt="pattern"
//         width={558}
//         height={490} 
//         loading="lazy"
//         className="absolute -top-4 right-4"/>
//        </div>
//     </div>
// )
// }

// export default Template

import React from "react"
import frameimage from "../../assets/images/frame.png"
import Signupform from "../../pages/signUpForm"
import LoginForm from "../../pages/LoginForm"
import { FcGoogle } from "react-icons/fc"

const Template = ({ tittle, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-slate-100 w-11/12 max-w-[1200px] py-16 mx-auto gap-12 lg:gap-20">
      
      {/* Form Section */}
      <div className="relative w-full max-w-[500px] rounded-3xl border border-cyan-500/30 bg-[#0B132B]/85 p-8 sm:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          {tittle}
        </h1>

        <p className="text-sm sm:text-base mt-3 leading-relaxed">
          <span className="text-slate-300 font-medium">{desc1}</span>
          <br />
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
          <div className="w-full h-[1px] bg-slate-700/80"></div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">OR</p>
          <div className="w-full h-[1px] bg-slate-700/80"></div>
        </div>

        {/* Google Auth Button */}
        <button
          type="button"
          className="w-full flex justify-center items-center rounded-2xl font-semibold text-slate-200 border border-slate-700/80 bg-slate-900/60 px-4 py-3 gap-x-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm">Sign {formtype === "signup" ? "Up" : "In"} with Google</span>
        </button>
      </div>

      {/* Graphic Preview Section */}
      <div className="relative w-full max-w-[500px] hidden lg:block">
        <img
          src={frameimage}
          alt="pattern frame"
          width={558}
          height={504}
          loading="lazy"
          className="rounded-3xl opacity-80"
        />

        <img
          src={image}
          alt="auth preview"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4 rounded-3xl border border-cyan-500/30 object-cover shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        />
      </div>
    </div>
  )
}

export default Template
