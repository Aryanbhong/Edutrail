// const {Schema,mongoose} = require("mongoose");



// const CourseProgress = new Schema({
//     courseID:{
//         type:Schema.Types.ObjectId,
//         ref:"Course",
//     },
//     completedVideos:[
//         {
//            type:Schema.Types.ObjectId,
//            ref:"SubSection",
//         }
//     ]
// });

// module.exports = model("CourseProgress",CourseProgress)




const mongoose = require("mongoose")

const courseProgress = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
});


module.exports = mongoose.model("courseProgress",courseProgress)