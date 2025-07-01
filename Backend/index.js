const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT|| 5000;
app.use(express.json());



const cookieParser = require('cookie-parser');
const cors = require("cors");
// Configure allowed origins

app.use(cors());
const {cloudinaryConnect}= require("./config/cloudinary");
const fileUpload = require("express-fileupload");


const userRoutes = require("../Backend/routes/User");
const profileRoutes = require("../Backend/routes/Profile");
const paymentRoutes = require("../Backend/routes/Payment");
const courseRoutes = require("../Backend/routes/Course")
const ContactRoute = require("../Backend/routes/Contact")
const connectDb = require("./config/database");

connectDb();

app.use(cookieParser());
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// )
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
        limits: { fileSize: 1000 * 1024 * 1024 },  // 100MB file size limit
    })
)
//cloudinary connect  
cloudinaryConnect();

//routes 
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/reach", ContactRoute);

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'Your server is up running......',
    })
})

app.listen(PORT, ()=>{
    console.log("server is running on port ",PORT);
})

// const express = require("express");
// const app = express();

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payment");
// const courseRoutes = require("./routes/Course");
// // const contactUsRoute = require("./routes/Contact");
// const connectDb = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const {cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");

// dotenv.config();
// const PORT = process.env.PORT || 4000;

// //database connect
// connectDb();
// //middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
// 	cors({
// 		origin:"http://localhost:3000",
// 		credentials:true,
// 	})
// )

// app.use(
// 	fileUpload({
// 		useTempFiles:true,
// 		tempFileDir:"/tmp",
// 	})
// )
// //cloudinary connection
// cloudinaryConnect();

// //routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// //def route

// app.get("/", (req, res) => {
// 	return res.json({
// 		success:true,
// 		message:'Your server is up and running....'
// 	});
// });

// app.listen(PORT, () => {
// 	console.log(`App is running at ${PORT}`)
// })