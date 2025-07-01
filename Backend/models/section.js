const {Schema,mongoose, model} = require("mongoose");



const sectionSchema = new Schema({
    sectionName:{
        type:String,
    },
    subSection: [
        {
            type:Schema.Types.ObjectId,
            required:true,
            ref:"SubSection",
        }
    ]
});

module.exports = model("Section",sectionSchema);
