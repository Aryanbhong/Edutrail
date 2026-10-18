// import React from "react";
// import { useState } from "react";
// import { FaEye,FaEyeSlash } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { login } from "../services/opreations/authApis";




// const LoginForm=()=>{
     
//   const navigate= useNavigate();
//   const dispatch = useDispatch();
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
//     return(
//      <form onSubmit={submitHandler}
//      className="mt-6 flex w-full flex-col gap-y-4">
//         <label className="w-full">
//             <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address <sup>*</sup></p>
      
//         <input  required type="email" 
//         value={formData.email}
//         onChange={ChangeHandler}
//         placeholder="Enter email id"
//         name="email"
//         style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//           />
        
//          </label>
//        <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Password <sup className="text-pink-200">*</sup></p>
       
//         <input  required 
//         type={showPassword?("text"):("password")}
//         value={formData.password}
//         onChange={ChangeHandler}
//         placeholder="Enter password"
//         name="password"
//         style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//           /> 
        
//         <span onClick={()=>setShowPassword((prev)=>!prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"> 
//             {showPassword?(<FaEye fontSize={24} fill="#AFB2BF" />):(<FaEyeSlash fontSize={24} fill="#AFB2BF" />)}
//         </span>
//         <Link to="/forgotpassword">
//         <p className="mt-1 ml-auto max-w-max text-xs text-blue-100 " >Forgot Password</p></Link>
//         <button type="submit"
//         className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
//             Sign in</button>
//          </label>
        
//      </form>
//     )
// }

// export default LoginForm


import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/opreations/authApis";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const ChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  const inputStyles =
    "w-full rounded-xl border border-white/10 bg-[#080F20]/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:bg-[#0B1630] focus:ring-2 focus:ring-cyan-400/10 hover:border-white/20";

  return (
    <form
      onSubmit={submitHandler}
      className="relative mt-7 flex w-full flex-col gap-y-5"
    >
      {/* Email */}
      <label className="flex w-full flex-col gap-2">
        <span className="text-sm font-medium text-slate-200">
          Email Address <span className="text-cyan-400">*</span>
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
          className="text-sm font-medium text-slate-200"
        >
          Password <span className="text-cyan-400">*</span>
        </label>

        <div className="relative">
          <input
            id="login-password"
            required
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={ChangeHandler}
            placeholder="Enter your password"
            name="password"
            className={`${inputStyles} pr-12`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {showPassword ? (
              <FaEye size={17} />
            ) : (
              <FaEyeSlash size={17} />
            )}
          </button>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end">
          <Link
            to="/forgotpassword"
            className="text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>

      {/* Sign in */}
      <button
        type="submit"
        className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080F20] active:translate-y-0"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/15 to-cyan-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="relative">Sign In to EduTrail</span>

        <FaArrowRight
          size={13}
          className="relative transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Bottom accent */}
      <p className="mt-1 text-center text-xs leading-6 text-slate-500">
        Your learning journey starts here.
        <span className="ml-1 text-cyan-400">✦</span>
      </p>
    </form>
  );
};

export default LoginForm;
