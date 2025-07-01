import React, { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/opreations/authApis";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "../slices/authSlice";
import {ACCOUNT_TYPE} from  "../utils/Permanents"
import Tab from "../components/common/Tab";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"



const Signupform=()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

    const[formData,setFormData]=useState({
        firstName:"",lastName:"",
        email:"",password:"",
        confirmpassword:""
    })
  

   
    function ChangeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
      
    const[showPassword,SetShowPassword]=useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const {password,confirmpassword} = formData
     
    const submitHandler = (e) => {
        e.preventDefault()
    
        if (password !== confirmpassword) {
          toast.error("Passwords Do Not Match")
          return
        }
        const signupData = {
          ...formData,
          accountType,
        }
        
        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignupData(signupData))
        // Send OTP to user for verification
        dispatch(sendOtp(formData.email,navigate))
    
        // Reset
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmpassword: "",
        })
        setAccountType(ACCOUNT_TYPE.STUDENT);
       
      }
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
      ]
    return(
        <div>
       
        {/* Tab */}
      <Tab tabData={tabData} field={accountType} setField={ setAccountType} />

        <form onSubmit={submitHandler}  className="flex w-full flex-col gap-y-4">
            <div  className="flex gap-x-4">
            <label >
                <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    First Name <sup className="text-pink-200">*</sup></p>
                <input type="text" required 
                name="firstName"
                onChange={ChangeHandler} 
                placeholder="Enter your Firstname"
                value={formData.firstName}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                  />
            </label>

            <label >
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Last Name <sup>*</sup></p>
                <input type="text" required 
                name="lastName"
                onChange={ChangeHandler} 
                placeholder="Enter your Lastname"
                value={formData.lastName}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
            </label>
            </div>
       

            <label className="w-full" >
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address<sup className="text-pink-200">*</sup></p>
                <input type="email" required 
                name="email"
                onChange={ChangeHandler} 
                placeholder="Enter your email Address"
                value={formData.email}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
            </label>
            
            <div className="flex gap-x-4">
            <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Create Password<sup className="text-pink-200">*</sup></p>
                <input type={showPassword?("text"):("password")} required 
                name="password"
                onChange={ChangeHandler} 
                placeholder="new password"
                value={formData.password} 
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"/>
                <span onClick={()=>SetShowPassword((prev)=>!prev)}
                     className="absolute right-3 top-[38px] z-[10] cursor-pointer"> 
                {showPassword?(<FaEye fontSize={24} fill="#AFB2BF" />):(<FaEyeSlash fontSize={24} fill="#AFB2BF" />)}
                        </span>
            </label>
            <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input type="password" required 
                name="confirmpassword"
                onChange={ChangeHandler} 
                placeholder="confirm password"
                value={formData.confirmpassword}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"/>
                 <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                     className="absolute right-3 top-[38px] z-[10] cursor-pointer"> 
                            {showConfirmPassword?(<FaEye fontSize={24} fill="#AFB2BF"/>):(<FaEyeSlash fontSize={24} fill="#AFB2BF" />)}
                        </span>
            </label>
            </div>
          
          <button 
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
          >
            Create button</button>
         
        </form>
        
        </div>




  // new wala

  // 
    )
}

export default Signupform