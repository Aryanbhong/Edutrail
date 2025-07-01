const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async ()=>{
   try{
    await  mongoose.connect('mongodb+srv://aryanbhong:Aryan1218@edutrail.mgcvv51.mongodb.net/edutrail')

    console.log("db connected succesfully...");
   }catch(error){
    
    console.error(error.message);
    process.exit(1);
        
   }
};


module.exports = connectDb;