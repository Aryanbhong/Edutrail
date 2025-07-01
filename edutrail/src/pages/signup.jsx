import React from "react";
import signupImg from "../assets/images/signup.png"
import Template from "../components/core/Template";

const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        tittle="join the millions learning to code with us for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        
        />
    )
}

export default Signup