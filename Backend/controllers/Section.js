const Course = require("../models/Course");
const section = require("../models/section");
const SubSection = require("../models/SubSection");



exports.createSection = async (req ,res)=>{
    try {
		// Extract the required properties from the request body
		const { sectionName, courseId } = req.body;
          console.log("start ho rha hai ");
		// Validate the input
		if (!sectionName || !courseId) {
			return res.status(400).json({
				success: false,
				message: "Missing required properties",
			});
		}
        // Create a new section with the given name
        const newSection = await section.create({sectionName});
         // Add the new section to the course's content array
         // Check if course exists
         const course = await Course.findById(courseId);
         if (!course) {
             return res.status(404).json({
                 success: false,
                 message: "Course not found",
             });
         }
 
         console.log("Course found:", course);


		const updatedCourse = await Course.findByIdAndUpdate(
			courseId,
			{
				$push: {
					courseContent: newSection._id,
				},
			},
			{ new: true }
		)
			.populate({
				path: "courseContent",
				populate: {
					path: "subSection",
				},
			})
			.exec();
         
		// Return the updated course object in the response
		res.status(200).json({
			success: true,
			message: "Section created successfully",
			updatedCourse,
		});
	} catch (error) {
		// Handle errors
		res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
}

exports.updateSection = async(req, res)=>{
    try{
        console.log("yaha tak toh aaa gaya ")
        //data input 
        const {sectionName, sectionId , courseId} = req.body;
        console.log("allooo parataha");
        // data validate 
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:'Missing Properties',
            });
        }
        //update data
        console.log(" validation ho gaya");
        const Section = await section.findByIdAndUpdate(sectionId,
            {sectionName},
            {new:true}
        );
        // const section = await section.findByIdAndUpdate(sectionId,
        //     {sectionName},
        //      {new:true}
        //     );
        
            const course = await Course.findById(courseId)
            .populate({
                path:"courseContent",
                populate:{
                    path:"subSection",
                }
            })
            .exec();
        //return res
        console.log(" end error nahi aya ")
        return res.status(200).json({
            success:true,
            message:Section,
            data:course,

        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message,
         });
    }
}

//delete a section 

exports.deleteSection = async (req ,res)=>{
    try{
    //get id - assuming that we are sending id in params 
    const {sectionId,courseId} = req.body;
    // .params comment kiya hai 
    //use findbyid and delete
    await Course.findByIdAndUpdate(courseId, {
        $pull:{
            courseContent:sectionId,
        }
    })
    const Section =await section.findById(sectionId);

    console.log(sectionId , courseId);

    if(!Section){
        return res.status(404).json({
            success:false,
            message:"Section not found",
        })
    }
    //return response 
   // delete sun section
   await SubSection.deleteMany({_id: {$in: section.subSection}});

		await section.findByIdAndDelete(sectionId);

		//find the updated course and return 
		const course = await Course.findById(courseId).populate({
			path:"courseContent",
			populate: {
				path: "subSection"
			}
		})
		.exec();


    return res.status(200).json({
        success:true,
        message:"Section Deleted Successfully",
        data:course,
    })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"unable to delete section , please try again ",
            error:error.message,
         });
    }


// try{
//     const {sectionId} = req.params;
//     await section.findByIdAndDelete(sectionId);

//     res.status(200).json({
//         success: true,
//         message: "Section deleted ",
//     });
// }catch(error){
//     console.error("Error deleting section:", error);
//     res.status(500).json({
//         success: false,
//         message: "Internal server error",
//     });
// }
}



