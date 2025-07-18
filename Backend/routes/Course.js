// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  editCourse,
  showAllCourses ,
  getCourseDetails,
  getFullCourseDetails,
  getInstructorCourses ,
  deleteCourse,
} = require("../controllers/Course");


const {
  createCategory,
  showAllCategories,
  categoryPageDetails,
} = require("../controllers/Category");
// Sections Controllers Import
// const {
//   createSection,
//   updateSection,
//   deleteSection,
// } = require("../controllers/Section")

const {
  createSection,
  updateSection,
  deleteSection
} = require("../controllers/Section");

// Sub-Sections Controllers Import


// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/ratingAndReview");

const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/subSection");
const {
  updateCourseProgress
} = require("../controllers/courseProgress");

// Importing Middlewares
const {auth , isAdmin, isStudent,isInstructor} = require("../middlewares/auth")

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors

router.post("/createCourse",auth,isInstructor,createCourse);
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection);

router.post("/updateSection", auth, isInstructor, updateSection);

// Delete a Section

router.post("/deletesection",auth,isInstructor,deleteSection);
// Edit Sub Section

router.post("/updateSubSection",auth,isInstructor,updateSubSection);
// Delete Sub Section

router.post("/deleteSubSection",auth,isInstructor,deleteSubSection);
// Add a Sub Section to a Section

router.post("/addSubSection",auth,isInstructor,createSubSection);
// Get all Registered Courses

router.get("/showAllCourses",showAllCourses);
// Get Details for a Specific Courses

router.post("/getCourseDetails",getCourseDetails);
// Get Details for a Specific Courses

router.post("/getFullCourseDetails",auth,getFullCourseDetails);
// Edit Course routes

router.post("/editCourse",auth, isInstructor, editCourse );
// Get all Courses Under a Specific Instructor

router.get("/getInstructorCourses",auth,isInstructor, getInstructorCourses);
// Delete a Course

router.delete("/deleteCourse",deleteCourse);

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here

router.post("/createCategory",auth,isAdmin,createCategory);

router.get("/showAllCategories",showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails)
// router.post("/getCategoryPageDetails",getCate)

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************

router.post("/createRating",auth,isStudent,createRating);

router.get("/getAverageRating",getAverageRating);

router.get("/getReviews",getAllRating);

module.exports = router;