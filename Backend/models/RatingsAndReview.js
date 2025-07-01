// const {Schema, mongoose, model} = require("mongoose");
// const { schema } = require("./User");

// const RatingsAndReviewsSchema =new schema({
//     user:{
//         type:Schema.Types.ObjectId,
//         required:true,
//         ref:"User",
//     },
//     rating:{
//         type:Number,
//         required:true,
//     },
//     review:{
//        type:String,
//        required:true,
//     }
// });

// module.exports= model("RatingsAndReviews",RatingsAndReviewsSchema);

 const {Schema, mongoose, model} = require("mongoose");

// Define the RatingAndReview schema
const ratingAndReviewSchema = new Schema({
	user: {
		type:Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	rating: {
		type: Number,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	course: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Course",
		index: true,
	},
});

// Export the RatingAndReview model
module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);