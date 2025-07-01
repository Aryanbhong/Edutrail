import React from "react";
import Template from "../components/core/Template";
import loginimg from "../assets/images/login.png"

const Login=({setIsLoggedIn})=>{
    return(
        <Template
        tittle="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career"
        image={loginimg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        
        />
    )
}

export default Login