// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getPasswordResetToken } from "../services/opreations/authApis";

// //
// const ForgotPassword=()=>{
//     const {loading} = useSelector((state)=> state.auth);
//     const [email, setEmail] = useState("");
//     const [emailSent, SetEmailSent] = useState(false);
//     const dispatch = useDispatch()

//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         dispatch(getPasswordResetToken(email,SetEmailSent))
//     }
//     return(
//         <div>
//           {
//             loading ? ( 
//                 <div> Loading........</div>
//             ):(
//                 <div>
//                     <h1>
//                         {
//                             !emailSent ? "Reset your Password" :" Check your mail"
//                         }
//                     </h1>
//                     <p>
//                         {
//                             !emailSent ? "Have no fear. we'll email you instructions to reset your password if you don't have access to your email we can try account recovery"
//                             :`We have sent the reset email to ${email}`
//                         }
//                     </p>
//                     <form onSubmit={handleSubmit}>
//                         {
//                             !emailSent && (
//                                 <label>
//                                     <p>Email Address</p>
//                                     <input  required 
//                                     type="email"
//                                     name="email"
//                                     value={email}
//                                     onChange={(e)=>setEmail(e.target.value)}
//                                     placeholder="Enter your Email Address"/>
//                                 </label>
//                             )
//                         }
//                         <button>
//                             {
//                                 !emailSent? "Reset Password" : "Resend Email"
//                             }
//                         </button>
//                     </form>

//                     <div>
//                         <Link to="/login">
//                         <p> Back To Login</p>
//                         </Link>
//                     </div>
//                 </div>
//             )
//           }
//         </div>
//     )
// }


// export default ForgotPassword


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/opreations/authApis";

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-richblack-900 px-4">
      {loading ? (
        <div className="text-white text-xl">Loading...</div>
      ) : (
        <div className="w-full max-w-md bg-richblack-800 p-8 rounded-lg shadow-md shadow-blue-500/10">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            {emailSent ? "Check Your Mail" : "Reset Your Password"}
          </h1>
          <p className="text-sm text-richblack-300 mb-6 text-center">
            {emailSent
              ? `We’ve sent a password reset email to ${email}`
              : "We'll send you a link to reset your password. If you don’t have access to your email, try account recovery."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!emailSent && (
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-richblack-200 text-sm">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-md bg-richblack-700 px-4 py-2 text-white placeholder:text-richblack-400 outline-none ring-1 ring-richblack-600 focus:ring-yellow-50"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-yellow-50 text-richblack-900 font-semibold hover:bg-yellow-100 transition duration-200"
            >
              {emailSent ? "Resend Email" : "Reset Password"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-blue-400 hover:underline text-sm">
              &larr; Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
