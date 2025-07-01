import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/opreations/authApis";
import { useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const UpdatePassword =()=>{
    const location = useLocation();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:"",
    })
    const {loading} = useSelector((state) => state.auth);
    const [showConfirmPassword, setShowConfirmPassword]=useState(false);
    const [showPassword,setShowPassword] = useState(false);
     
    const {password, confirmPassword} = formData;
    const handleonChange =(e) =>{
        setFormData( (prevdata) =>(
            {
                ...prevdata,
                [e.target.name]:e.target.value,
            }
        ))
    }

    const handleOnSubmit=(e)=>{
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password,confirmPassword,token));
    }
    return(
        <div>
          {
            loading ? (
           <div> Loading...</div>
            ) : ( 
                <div>
                    <h1>Choose new Password</h1>
                    <p>Almost done. Enter your new password and youre all set.</p>
                    <form onSubmit={handleOnSubmit}>
                        <label>
                          <p>New Password <sup>*</sup></p>
                          <input
                          required
                           type={showPassword? "text" : "password"} 
                          name="password"
                          value={password}
                          placeholder="new password"
                          onChange={handleonChange}/>
                          <span onClick={()=>setShowPassword((prev) => !prev)}>
                            {
                             showPassword? <FaEye fontSize={24} />: <FaEyeSlash fontSize={24}/>
                            }
                          </span>
                        </label>

                        <label>
                          <p>Confirm New Password <sup>*</sup></p>
                          <input
                          required
                           type={showConfirmPassword? "text" : "password"} 
                          name="confirmPassword"
                          value={confirmPassword}
                          placeholder="confirm new password"
                          onChange={handleonChange}/>
                          <span onClick={()=>setShowConfirmPassword((prev) => !prev)}>
                            {
                             showPassword? <FaEye fontSize={24} />: <FaEyeSlash fontSize={24}/>
                            }
                          </span>
                        </label>
                        <button type="submit">
                            Reset Password
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

export default UpdatePassword