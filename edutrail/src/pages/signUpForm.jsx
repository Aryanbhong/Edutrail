// import React, { useState } from "react";
// import { FaEye,FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { sendOtp, signUp } from "../services/opreations/authApis";
// import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { setSignupData } from "../slices/authSlice";
// import {ACCOUNT_TYPE} from  "../utils/Permanents"
// import Tab from "../components/common/Tab";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"



// const Signupform=()=>{
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

//     const[formData,setFormData]=useState({
//         firstName:"",lastName:"",
//         email:"",password:"",
//         confirmpassword:""
//     })
  

   
//     function ChangeHandler(event){
//         setFormData((prevData)=>({
//             ...prevData,
//             [event.target.name]:event.target.value
//         }))
//     }
      
//     const[showPassword,SetShowPassword]=useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//     const {password,confirmpassword} = formData
     
//     const submitHandler = (e) => {
//         e.preventDefault()
    
//         if (password !== confirmpassword) {
//           toast.error("Passwords Do Not Match")
//           return
//         }
//         const signupData = {
//           ...formData,
//           accountType,
//         }
        
//         // Setting signup data to state
//         // To be used after otp verification
//         dispatch(setSignupData(signupData))
//         // Send OTP to user for verification
//         dispatch(sendOtp(formData.email,navigate))
    
//         // Reset
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           confirmpassword: "",
//         })
//         setAccountType(ACCOUNT_TYPE.STUDENT);
       
//       }
//       const tabData = [
//         {
//           id: 1,
//           tabName: "Student",
//           type: ACCOUNT_TYPE.STUDENT,
//         },
//         {
//           id: 2,
//           tabName: "Instructor",
//           type: ACCOUNT_TYPE.INSTRUCTOR,
//         },
//       ]
//     return(
//         <div>
       
//         {/* Tab */}
//       <Tab tabData={tabData} field={accountType} setField={ setAccountType} />

//         <form onSubmit={submitHandler}  className="flex w-full flex-col gap-y-4">
//             <div  className="flex gap-x-4">
//             <label >
//                 <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                     First Name <sup className="text-pink-200">*</sup></p>
//                 <input type="text" required 
//                 name="firstName"
//                 onChange={ChangeHandler} 
//                 placeholder="Enter your Firstname"
//                 value={formData.firstName}
//                 style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//                   />
//             </label>

//             <label >
//                 <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Last Name <sup>*</sup></p>
//                 <input type="text" required 
//                 name="lastName"
//                 onChange={ChangeHandler} 
//                 placeholder="Enter your Lastname"
//                 value={formData.lastName}
//                 style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
//             </label>
//             </div>
       

//             <label className="w-full" >
//                 <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address<sup className="text-pink-200">*</sup></p>
//                 <input type="email" required 
//                 name="email"
//                 onChange={ChangeHandler} 
//                 placeholder="Enter your email Address"
//                 value={formData.email}
//                 style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
//             </label>
            
//             <div className="flex gap-x-4">
//             <label className="relative">
//                 <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Create Password<sup className="text-pink-200">*</sup></p>
//                 <input type={showPassword?("text"):("password")} required 
//                 name="password"
//                 onChange={ChangeHandler} 
//                 placeholder="new password"
//                 value={formData.password} 
//                 style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"/>
//                 <span onClick={()=>SetShowPassword((prev)=>!prev)}
//                      className="absolute right-3 top-[38px] z-[10] cursor-pointer"> 
//                 {showPassword?(<FaEye fontSize={24} fill="#AFB2BF" />):(<FaEyeSlash fontSize={24} fill="#AFB2BF" />)}
//                         </span>
//             </label>
//             <label className="relative">
//                 <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Confirm Password<sup className="text-pink-200">*</sup></p>
//                 <input type="password" required 
//                 name="confirmpassword"
//                 onChange={ChangeHandler} 
//                 placeholder="confirm password"
//                 value={formData.confirmpassword}
//                 style={{
//                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                   }}
//                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"/>
//                  <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}
//                      className="absolute right-3 top-[38px] z-[10] cursor-pointer"> 
//                             {showConfirmPassword?(<FaEye fontSize={24} fill="#AFB2BF"/>):(<FaEyeSlash fontSize={24} fill="#AFB2BF" />)}
//                         </span>
//             </label>
//             </div>
          
//           <button 
//           type="submit"
//           className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//           >
//             Create button</button>
         
//         </form>
        
//         </div>




//   // new wala

//   // 
//     )
// }

// export default Signupform


import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../services/opreations/authApis";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSignupData } from "../slices/authSlice";
import { ACCOUNT_TYPE } from "../utils/Permanents";
import Tab from "../components/common/Tab";

const Signupform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmpassword } = formData;

  const ChangeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    const signupData = {
      ...formData,
      accountType,
    };

    // Save signup details for use after OTP verification.
    dispatch(setSignupData(signupData));

    // Preserve the existing OTP verification flow.
    dispatch(sendOtp(formData.email, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    });

    setShowPassword(false);
    setShowConfirmPassword(false);
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#080F20]/80 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-400/60 focus:bg-[#0B1630] focus:ring-2 focus:ring-cyan-400/10";

  const labelClass =
    "mb-2 block text-sm font-medium text-slate-200";

  const EyeButton = ({ visible, onClick, label }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={visible ? `Hide ${label}` : `Show ${label}`}
      className="absolute right-3 top-[39px] rounded-lg p-1.5 text-slate-400 transition hover:bg-white/[0.06] hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
    >
      {visible ? <FaEye /> : <FaEyeSlash />}
    </button>
  );

  return (
    <div className="relative w-full text-white">
      {/* Subtle glass-panel lighting */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/[0.08] blur-[70px]" />

      <div className="relative">
        {/* Heading */}
        <div className="mb-7">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/[0.08] shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            {accountType === ACCOUNT_TYPE.STUDENT ? (
              <FaUserGraduate className="text-xl text-cyan-300" />
            ) : (
              <FaChalkboardTeacher className="text-xl text-cyan-300" />
            )}
          </div>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Create your account
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Join EduTrail and take the next step in your learning journey.
          </p>
        </div>

        {/* Account type selector */}
        <div className="mb-7 rounded-xl border border-white/[0.08] bg-white/[0.025] p-1.5">
          <Tab
            tabData={tabData}
            field={accountType}
            setField={setAccountType}
          />
        </div>

        <form onSubmit={submitHandler} className="flex w-full flex-col gap-5">
          {/* Names */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block min-w-0">
              <span className={labelClass}>
                First name <span className="text-cyan-300">*</span>
              </span>

              <div className="relative">
                <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />

                <input
                  type="text"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={ChangeHandler}
                  placeholder="Aryan"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </label>

            <label className="block min-w-0">
              <span className={labelClass}>
                Last name <span className="text-cyan-300">*</span>
              </span>

              <div className="relative">
                <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />

                <input
                  type="text"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={ChangeHandler}
                  placeholder="Bhong"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </label>
          </div>

          {/* Email */}
          <label className="block">
            <span className={labelClass}>
              Email address <span className="text-cyan-300">*</span>
            </span>

            <div className="relative">
              <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-slate-500" />

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

          {/* Passwords */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="relative block min-w-0">
              <span className={labelClass}>
                Create password <span className="text-cyan-300">*</span>
              </span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                autoComplete="new-password"
                value={formData.password}
                onChange={ChangeHandler}
                placeholder="Create a password"
                className={`${inputClass} pr-12`}
              />

              <EyeButton
                visible={showPassword}
                onClick={() => setShowPassword((previous) => !previous)}
                label="password"
              />
            </label>

            <label className="relative block min-w-0">
              <span className={labelClass}>
                Confirm password <span className="text-cyan-300">*</span>
              </span>

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                required
                autoComplete="new-password"
                value={formData.confirmpassword}
                onChange={ChangeHandler}
                placeholder="Confirm your password"
                className={`${inputClass} pr-12`}
              />

              <EyeButton
                visible={showConfirmPassword}
                onClick={() =>
                  setShowConfirmPassword((previous) => !previous)
                }
                label="confirm password"
              />
            </label>
          </div>

          {/* Password match hint */}
          {confirmpassword.length > 0 && (
            <p
              className={`-mt-2 text-xs ${
                password === confirmpassword
                  ? "text-emerald-300"
                  : "text-rose-300"
              }`}
            >
              {password === confirmpassword
                ? "✓ Passwords match"
                : "Passwords do not match yet"}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-[#0B1224]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Create account</span>
            <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="text-center text-xs leading-5 text-slate-500">
            By creating an account, you can start exploring learning
            opportunities on EduTrail.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
