// const User = require("../models/User");
// const mailSender = require("../utils/mailSender");
// const bcrypt = require("bcrypt");
// const crypto = require("crypto")

// // resetPasswordToken 
// exports.resetPasswordToken = async(req,res)=>{
//    try{
//      //get emaill
//      const email = req.body.email;
//      //check user for this email , verification
//      const user= await User.findOne({email:email});
//      if(!user){
//          return res.json({
//              success:false,
//              message:'Your Email is not registered with us'
//          });
//      }
//      // generate token
//      const token = crypto.randomBytes(20).toString("hex");
//      // update user by adding token nd expiratin time '
//      const updatedDetails = await User.findOneAndDelete(
//          {email:email},
//          {token:token,
//              resetPasswordExpires:Date.now() + 3600000,
//          },
//          {new:true}
//      );
//      console.log("DETAILS",updatedDetails);
//      // create url
//       const url =`http://localhost:3000/update-password/${token}`;
//      //send mail containing the url 
//      await mailSender(email,
//          "password Reset Link",
//          `password Reset Link: ${url}. Please click this url to reset your password.`
//      );
//      // return response
//      return res.json({
//          success:true,
//          message:'Email sent successfully, please check email and change pwd',
//      })
 
//    }catch(error){
//     console.log(error);
//     return res.status(500).json({
//         success:false,
//         message:"Something went wrong reset password",
//     });
//    }
    
// }


// ///    resetPassword 

// exports.resetPassword=async (req ,res)=>{
//     try{
//         //data fetch 
//     const {password, confirmPassword , token}=req.body; 
//     //validtion
//     if(password!== confirmPassword){
//         return res.json({
//             success:false,
//             message:'password and confirmPassword are  not matching',
//         });
//     }
//     //get userdetails from db using token
//     const userdetails = await User.findOne({token:token});
//     //if no entryy - invalid token
//     if(!userdetails){
//         return res.json({
//             success:false,
//             message:"Token is invalid",
//         });
//     }
//     //token time check 
//     if(!(userdetails.resetPasswordExpires < Date.now())){
//     return res.json({
//         success:false,
//         message:'Token is expired, please regenerate the token'
//     })
//     }
//     // hash pass
//     const hashedPassword = await bcrypt.hash(password,10);
//     //password update
//     await User.findOneAndUpdate(
//         {token:token},
//         {password:hashedPassword},
//         {new:true},
//     )
//     //return response
//     return res.status(200).json({
//         success:true,
//         message:'Password reset succesful',
//     });
//     }catch(error){
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Something went wrong reset password",
//         });
//     }
// }


const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
	try {
		const email = req.body.email;
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.json({
				success: false,
				message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
			});
		}
		const token = crypto.randomBytes(20).toString("hex");

		const updatedDetails = await User.findOneAndUpdate(
			{ email: email },
			{
				token: token,
				resetPasswordExpires: Date.now() + 3600000,
			},
			{ new: true }
		);
		console.log("DETAILS", updatedDetails);

		const url = `https://edutrail-2.onrender.com/update-password/${token}`;

		await mailSender(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);

		res.json({
			success: true,
			message:
				"Email Sent Successfully, Please Check Your Email to Continue Further",
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Sending the Reset Message`,
		});
	}
};

exports.resetPassword = async (req, res) => {
	try {
		const { password, confirmPassword, token } = req.body;

		if (confirmPassword !== password) {
			return res.json({
				success: false,
				message: "Password and Confirm Password Does not Match",
			});
		}
		const userDetails = await User.findOne({ token: token });
		if (!userDetails) {
			return res.json({
				success: false,
				message: "Token is Invalid",
			});
		}
		if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ token: token },
			{ password: encryptedPassword },
			{ new: true }
		);
		res.json({
			success: true,
			message: `Password Reset Successful`,
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Updating the Password`,
		});
	}
};