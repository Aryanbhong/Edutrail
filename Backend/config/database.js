const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGODB_URL)

const connectDb = async ()=>{
   try{
    await  mongoose.connect(process.env.MONGODB_URL)
    console.log(process.env.MONGODB_URL)

    console.log("db connected succesfully...");
   }catch(error){
    
    console.error(error.message);
    console.log(" connect nahi ho rha bhai")
    process.exit(1);
        
   }
};


module.exports = connectDb;