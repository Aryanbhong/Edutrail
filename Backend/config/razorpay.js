// const Razorpay = require("razorpay");
// const dotenv =require("dotenv")
// dotenv.config();

// exports.instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY,
//     key_secret:process.env.RAZORPAY_SECRET,
// });

const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config();

// console.log("RAZORPAY_KEY:", process.env.RAZORPAY_KEY );  // 🔍 Debug line

exports.instance = new Razorpay({
  key_id:  process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});
