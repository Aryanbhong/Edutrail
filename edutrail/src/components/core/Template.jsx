import React from "react";
import frameimage from "../../assets/images/frame.png";
import { Link, NavLink } from "react-router-dom";
import Signupform from "../../pages/signUpForm";
import LoginForm from "../../pages/LoginForm";
import { FcGoogle } from "react-icons/fc";

const  Template=({tittle,desc1,desc2,image,formtype,setIsLoggedIn})=>{
return (
    <div className="flex  text-white w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 ">
       <div className="w-11/12 max-w-[450px] mx-0 mr-20 ">
        <h1 className="text-gray-50 font-semibold text-[1.875rem] leading-[2.375]">{tittle}</h1>
        <p className="text-[1.125rem] leading[1.625rem] mt-4"> 
          
            <span className="text-gray-100">{desc1}</span>
            <br />
            <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formtype=="signup" ? (<Signupform setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p>OR</p>
            <div className="w-full h-[1px] bg-gray-500"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-gray-100 border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6">
             <FcGoogle />
            <p>Sign Up with Google</p>
        </button>
       </div>
       <div className="relative w-11/12 max-w-[450px] ">
        <img src={frameimage} alt="pattern"
        width={558}
        height={504} 
        loading="lazy"/>

        <img src={image} alt="pattern"
        width={558}
        height={490} 
        loading="lazy"
        className="absolute -top-4 right-4"/>
       </div>
    </div>
)
}

export default Template