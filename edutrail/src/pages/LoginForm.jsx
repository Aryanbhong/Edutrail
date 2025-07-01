import React from "react";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../services/opreations/authApis";




const LoginForm=()=>{
     
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const ChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }
    return(
     <form onSubmit={submitHandler}
     className="mt-6 flex w-full flex-col gap-y-4">
        <label className="w-full">
            <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address <sup>*</sup></p>
      
        <input  required type="email" 
        value={formData.email}
        onChange={ChangeHandler}
        placeholder="Enter email id"
        name="email"
        style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        
         </label>
       <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Password <sup className="text-pink-200">*</sup></p>
       
        <input  required 
        type={showPassword?("text"):("password")}
        value={formData.password}
        onChange={ChangeHandler}
        placeholder="Enter password"
        name="password"
        style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
          /> 
        
        <span onClick={()=>setShowPassword((prev)=>!prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"> 
            {showPassword?(<FaEye fontSize={24} fill="#AFB2BF" />):(<FaEyeSlash fontSize={24} fill="#AFB2BF" />)}
        </span>
        <Link to="/forgotpassword">
        <p className="mt-1 ml-auto max-w-max text-xs text-blue-100 " >Forgot Password</p></Link>
        <button type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
            Sign in</button>
         </label>
        
     </form>
    )
}

export default LoginForm