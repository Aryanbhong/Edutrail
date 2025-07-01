import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/opreations/authApis";

//
const ForgotPassword=()=>{
    const {loading} = useSelector((state)=> state.auth);
    const [email, setEmail] = useState("");
    const [emailSent, SetEmailSent] = useState(false);
    const dispatch = useDispatch()

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,SetEmailSent))
    }
    return(
        <div>
          {
            loading ? ( 
                <div> Loading........</div>
            ):(
                <div>
                    <h1>
                        {
                            !emailSent ? "Reset your Password" :" Check your mail"
                        }
                    </h1>
                    <p>
                        {
                            !emailSent ? "Have no fear. we'll email you instructions to reset your password if you don't have access to your email we can try account recovery"
                            :`We have sent the reset email to ${email}`
                        }
                    </p>
                    <form onSubmit={handleSubmit}>
                        {
                            !emailSent && (
                                <label>
                                    <p>Email Address</p>
                                    <input  required 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Enter your Email Address"/>
                                </label>
                            )
                        }
                        <button>
                            {
                                !emailSent? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>

                    <div>
                        <Link to="/login">
                        <p> Back To Login</p>
                        </Link>
                    </div>
                </div>
            )
          }
        </div>
    )
}


export default ForgotPassword