// const {Schema,mongoose, model} = require("mongoose");

// const profileSchema = new Schema({
//     gender: {
//         type:String,
//     },
//     dateOfBirth:{
//         type:String,
//     },
//     about: {
//         typr:String,
        
//     },
//     contactNumber: {
//         type:Number,
   
//     }
// });

// module.exports = model("profile" , profileSchema);


const {Schema,mongoose, model} = require("mongoose");

const profileSchema = new Schema({
    gender:{
        type:String,
    },
    dateOfBirth:{
        type:String,
    },
    about: {
        type:String,
    },
    contactNumber:{
        type:Number,
    }
});

module.exports = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
