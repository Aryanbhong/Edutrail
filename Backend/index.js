const express = require('express');
const app = express();
const path = require("path")
require("dotenv").config();
const PORT = process.env.PORT|| 5000;
app.use(express.json());



const cookieParser = require('cookie-parser');
const cors = require("cors");
// Configure allowed origins

app.use(cors());
const {cloudinaryConnect}= require("./config/cloudinary");
const fileUpload = require("express-fileupload");

const connectDb = require("./config/database");

connectDb();

const _dirname = path.resolve();

const userRoutes = require("../Backend/routes/User");
const profileRoutes = require("../Backend/routes/Profile");
const paymentRoutes = require("../Backend/routes/Payment");
const courseRoutes = require("../Backend/routes/Course")
const ContactRoute = require("../Backend/routes/Contact")

app.use(cookieParser());
app.use(
    cors({
        origin:"https://edutrail-2.onrender.com/",
        credentials:true,
    })
)
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

// app.get("/",(req,res)=>{
//     return res.json({
//         success:true,
//         message:'Your server is up running......',
//     })
// })


app.use(express.static(path.join(_dirname, "../edutrail/dist")))
app.get('*',(req,res) =>{
    res.sendFile(path.resolve(_dirname, "../edutrail/dist/index.html"));
})
app.listen(PORT, ()=>{
    console.log("server is running on port ",PORT);
})

