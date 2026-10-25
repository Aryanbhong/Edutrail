// // import { useEffect, useState } from "react"
// // import { useForm } from "react-hook-form"
// // import { toast } from "react-hot-toast"
// // import { HiOutlineCurrencyRupee } from "react-icons/hi"
// // import { MdOutlineNavigateNext } from "react-icons/md";
// // import { useDispatch, useSelector } from "react-redux"
// // import { setCourse, setStep } from "../../../../../slices/courseSlice"
// // import { COURSE_STATUS } from "../../../../../utils/Permanents"
// // import {fetchCourseCategories, addCourseDetails, editCourseDetails} from "../../../../../services/opreations/courseDetails"
// // import IconBtn from "../../../../common/IconBtn"
// // import Upload from "../Upload"
// // import ChipInput from "./Chipinput"
// // import RequirementsField from "./RequirementField"


// // export default function CourseInformationForm() {
// //   const {
// //     register,
// //     handleSubmit,
// //     setValue,
// //     getValues,
// //     formState: { errors },
// //   } = useForm()

// //   const dispatch = useDispatch()
// //   const { token } = useSelector((state) => state.auth)
// //   const { course, editCourse } = useSelector((state) => state.course)
// //   const [loading, setLoading] = useState(false)
// //   const [courseCategories, setCourseCategories] = useState([])

// //   // const { addCourseDetails} = addCourseDetails

 
// //   useEffect(() => {
// //     const getCategories = async () => {
// //       setLoading(true)
// //       const categories = await fetchCourseCategories()
// //       if (categories.length > 0) {
// //         // console.log("categories", categories)
// //         setCourseCategories(categories)
// //       }
// //       setLoading(false)
// //     }
// //     // if form is in edit mode
// //     if (editCourse) {
// //       // console.log("data populated", editCourse)
// //       setValue("courseTitle", course.courseName)
// //       setValue("courseShortDesc", course.courseDescription)
// //       setValue("coursePrice", course.price)
// //       setValue("courseTags", course.tag)
// //       setValue("courseBenefits", course.whatYouWillLearn)
// //       setValue("courseCategory", course.category)
// //       setValue("courseRequirements", course.instructions)
// //       setValue("courseImage", course.thumbnail)
// //     }
// //     getCategories()

// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [])

// //   const isFormUpdated = () => {
// //     const currentValues = getValues()
// //     // console.log("changes after editing form values:", currentValues)
// //     if (
// //       currentValues.courseTitle !== course.courseName ||
// //       currentValues.courseShortDesc !== course.courseDescription ||
// //       currentValues.coursePrice !== course.price ||
// //       currentValues.courseTags.toString() !== course.tag.toString() ||
// //       currentValues.courseBenefits !== course.whatYouWillLearn ||
// //       currentValues.courseCategory._id !== course.category._id ||
// //       currentValues.courseRequirements.toString() !==
// //         course.instructions.toString() ||
// //       currentValues.courseImage !== course.thumbnail
// //     ) {
// //       return true
// //     }
// //     return false
// //   }

// //   //   handle next button click
// //   const onSubmit = async (data) => {
// //     console.log("printing onsubmit data",data)

// //     if (editCourse) {
// //       // const currentValues = getValues()
// //       // console.log("changes after editing form values:", currentValues)
// //       // console.log("now course:", course)
// //       // console.log("Has Form Changed:", isFormUpdated())
// //       if (isFormUpdated()) {
// //         const currentValues = getValues()
// //         const formData = new FormData()
// //         // console.log(data)
// //         formData.append("courseId", course._id)
// //         if (currentValues.courseTitle !== course.courseName) {
// //           formData.append("courseName", data.courseTitle)
// //         }
// //         if (currentValues.courseShortDesc !== course.courseDescription) {
// //           formData.append("courseDescription", data.courseShortDesc)
// //         }
// //         if (currentValues.coursePrice !== course.price) {
// //           formData.append("price", data.coursePrice)
// //         }
// //         if (currentValues.courseTags.toString() !== course.tag.toString()) {
// //           formData.append("tag", JSON.stringify(data.courseTags))
// //         }
// //         if (currentValues.courseBenefits !== course.whatYouWillLearn) {
// //           formData.append("whatYouWillLearn", data.courseBenefits)
// //         }
// //         if (currentValues.courseCategory._id !== course.category._id) {
// //           formData.append("category", data.courseCategory)
// //         }
// //         if (
// //           currentValues.courseRequirements.toString() !==
// //           course.instructions.toString()
// //         ) {
// //           formData.append(
// //             "instructions",
// //             JSON.stringify(data.courseRequirements)
// //           )
// //         }
// //         if (currentValues.courseImage !== course.thumbnail) {
// //           formData.append("thumbnailImage", data.courseImage)
// //         }
// //         // console.log("Edit Form data: ", formData)
// //         setLoading(true)
// //         const result = await editCourseDetails(formData, token)
// //         setLoading(false)
// //         if (result) {
// //           dispatch(setStep(2))
// //           dispatch(setCourse(result))
// //         }
// //       } else {
// //         toast.error("No changes made to the form")
// //       }
// //       return
// //     }

// //     const formData = new FormData()
// //     console.log(data)
// //     formData.append("courseName",data.courseTitle)
// //     formData.append("courseDescription", data.courseShortDesc )
// //     formData.append("price", data.coursePrice)
// //     formData.append("tag", JSON.stringify(data.courseTags
// //     ))
// //     formData.append("whatYouWillLearn", data.courseBenefits)
// //     formData.append("category", data.courseCategory)
// //     formData.append("status", COURSE_STATUS.DRAFT)
// //     formData.append("instructions", JSON.stringify(data.courseRequirements
// //     ))
// //     formData.append("thumbnailImage", data.courseImage
// //     )
// //     setLoading(true)
// //     console.log("before calling add course api")
// //     console.log("printing form data ", formData)
// //     const result = await addCourseDetails(formData, token)
// //     if (result) {
// //       dispatch(setStep(2))
// //       dispatch(setCourse(result))
// //     }
// //     setLoading(false)
// //     console.log("Printing formdata",formData)
// //     console.log('printing result',result)
// //   }

// //   return (
// //     <form
// //      onSubmit={handleSubmit(onSubmit)}
// //       className="space-y-8 text-black rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
// //     >
// //       {/* Course Title */}
// //       <div className="flex flex-col space-y-2">
// //         <label className="text-sm text-richblack-5" htmlFor="courseTitle">
// //           Course Title <sup className="text-pink-200">*</sup>
// //         </label>
// //         <input
// //           id="courseTitle"
// //           placeholder="Enter Course Title"
// //           {...register("courseTitle", { required: true })}
// //           className="form-style w-full px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
// //         />
// //         {errors.courseTitle && (
// //           <span className="ml-2 text-xs tracking-wide text-pink-200">
// //             Course title is required
// //           </span>
// //         )}
// //       </div>
// //       {/* Course Short Description */}
// //       <div className="flex flex-col space-y-2">
// //         <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
// //           Course Short Description <sup className="text-pink-200">*</sup>
// //         </label>
// //         <textarea
// //           id="courseShortDesc"
// //           placeholder="Enter Description"
// //           {...register("courseShortDesc", { required: true })}
// //           className="form-style resize-x-none min-h-[130px] w-full px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"/>
// //         {errors.courseShortDesc && (
// //           <span className="ml-2 text-xs tracking-wide text-pink-200">
// //             Course Description is required
// //           </span>
// //         )}
// //       </div>
// //       {/* Course Price */}
// //       <div className="flex flex-col space-y-2">
// //         <label className="text-sm text-richblack-5" htmlFor="coursePrice">
// //           Course Price <sup className="text-pink-200">*</sup>
// //         </label>
// //         <div className="relative">
// //           <input
// //             id="coursePrice"
// //             placeholder="Enter Course Price"
// //             {...register("coursePrice", {
// //               required: true,
// //               valueAsNumber: true,
// //               pattern: {
// //                 value: /^(0|[1-9]\d*)(\.\d+)?$/,
// //               },
// //             })}
// //             className="form-style w-full !pl-12 px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
// //           />
// //           <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
// //         </div>
// //         {errors.coursePrice && (
// //           <span className="ml-2 text-xs tracking-wide text-pink-200">
// //             Course Price is required
// //           </span>
// //         )}
// //       </div>
// //       {/* Course Category */}
// //       <div className="flex flex-col space-y-2">
// //         <label className="text-sm text-richblack-5" htmlFor="courseCategory">
// //           Course Category <sup className="text-pink-200">*</sup>
// //         </label>
// //         <select
// //         // , { required: true }
// //           {...register("courseCategory", { required: true })}
// //           defaultValue=""
// //           id="courseCategory"
// //           className="form-style w-full px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
// //         >
// //           <option value="" disabled>
// //             Choose a Category
// //           </option>
// //           {!loading &&
// //             courseCategories?.map((category, indx) => (
// //               <option key={indx} value={category?._id}>
// //                 {category?.name}
// //               </option>
// //             ))}
// //         </select>
// //         {errors.courseCategory && (
// //           <span className="ml-2 text-xs tracking-wide text-pink-200">
// //             Course Category is required
// //           </span>
// //         )}
// //       </div>
// //       {/* Course Tags */}
// //       <ChipInput
// //         label="Tags"
// //         name="courseTags"
// //         placeholder="Enter Tags and press Enter"
// //         register={register}
// //         errors={errors}
// //         setValue={setValue}
// //         getValues={getValues}
// //       />
// //       {/* Course Thumbnail Image */}
// //       <Upload
// //         name="courseImage"
// //         label="Course Thumbnail"
// //         register={register}
// //         setValue={setValue}
// //         video={false}
// //         errors={errors}
// //         editData={editCourse ? course?.thumbnail : null}
// //       />
// //       {/* Benefits of the course */}
// //       <div className="flex flex-col space-y-2">
// //         <label className="text-sm text-richblack-5" htmlFor="courseBenefits">
// //           Benefits of the course <sup className="text-pink-200">*</sup>
// //         </label>
// //         <textarea
// //           id="courseBenefits"
// //           placeholder="Enter benefits of the course"
// //           {...register("courseBenefits", { required: true })}
// //           className="form-style resize-x-none min-h-[130px] w-full px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
// //         />
// //         {errors.courseBenefits && (
// //           <span className="ml-2 text-xs tracking-wide text-pink-200">
// //             Benefits of the course is required
// //           </span>
// //         )}
// //       </div>
// //       {/* Requirements/Instructions */}
// //       <RequirementsField
// //         name="courseRequirements"
// //         label="Requirements/Instructions"
// //         register={register}
// //         setValue={setValue}
// //         errors={errors}
// //         getValues={getValues}
// //       />
// //       {/* Next Button */}
// //       <div className="flex justify-end gap-x-2">
// //         {editCourse && (
// //           <button
// //             onClick={() => dispatch(setStep(2))}
// //             disabled={loading}
// //             className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
// //           >
// //             Continue Wihout Saving
// //           </button>
// //         )}
// //         <IconBtn
         
// //           text={!editCourse ? "Next" : "Save Changes"}
// //         >
// //         < MdOutlineNavigateNext/>
// //         </IconBtn>
// //       </div>
// //     </form>
// //   )
// // }

// import { useEffect, useState } from "react"
// import { useForm } from "react-hook-form"
// import { toast } from "react-hot-toast"
// import { HiOutlineCurrencyRupee } from "react-icons/hi"
// import { MdOutlineNavigateNext } from "react-icons/md"
// import { useDispatch, useSelector } from "react-redux"
// import { setCourse, setStep } from "../../../../../slices/courseSlice"
// import { COURSE_STATUS } from "../../../../../utils/Permanents"
// import { fetchCourseCategories, addCourseDetails, editCourseDetails } from "../../../../../services/opreations/courseDetails"
// import IconBtn from "../../../../common/IconBtn"
// import Upload from "../Upload"
// import ChipInput from "./Chipinput"
// import RequirementsField from "./RequirementField"

// export default function CourseInformationForm() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm()

//   const dispatch = useDispatch()
//   const { token } = useSelector((state) => state.auth)
//   const { course, editCourse } = useSelector((state) => state.course)
//   const [loading, setLoading] = useState(false)
//   const [courseCategories, setCourseCategories] = useState([])

//   useEffect(() => {
//     const getCategories = async () => {
//       setLoading(true)
//       const categories = await fetchCourseCategories()
//       if (categories?.length > 0) {
//         setCourseCategories(categories)
//       }
//       setLoading(false)
//     }

//     if (editCourse) {
//       setValue("courseTitle", course.courseName)
//       setValue("courseShortDesc", course.courseDescription)
//       setValue("coursePrice", course.price)
//       setValue("courseTags", course.tag)
//       setValue("courseBenefits", course.whatYouWillLearn)
//       setValue("courseCategory", course.category?._id || course.category)
//       setValue("courseRequirements", course.instructions)
//       setValue("courseImage", course.thumbnail)
//     }

//     getCategories()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const isFormUpdated = () => {
//     const currentValues = getValues()
//     const categoryId = course.category?._id || course.category

//     if (
//       currentValues.courseTitle !== course.courseName ||
//       currentValues.courseShortDesc !== course.courseDescription ||
//       currentValues.coursePrice !== course.price ||
//       currentValues.courseTags.toString() !== course.tag.toString() ||
//       currentValues.courseBenefits !== course.whatYouWillLearn ||
//       currentValues.courseCategory !== categoryId ||
//       currentValues.courseRequirements.toString() !== course.instructions.toString() ||
//       currentValues.courseImage !== course.thumbnail
//     ) {
//       return true
//     }
//     return false
//   }

//   const onSubmit = async (data) => {
//     if (editCourse) {
//       if (isFormUpdated()) {
//         const currentValues = getValues()
//         const formData = new FormData()
//         formData.append("courseId", course._id)

//         if (currentValues.courseTitle !== course.courseName) {
//           formData.append("courseName", data.courseTitle)
//         }
//         if (currentValues.courseShortDesc !== course.courseDescription) {
//           formData.append("courseDescription", data.courseShortDesc)
//         }
//         if (currentValues.coursePrice !== course.price) {
//           formData.append("price", data.coursePrice)
//         }
//         if (currentValues.courseTags.toString() !== course.tag.toString()) {
//           formData.append("tag", JSON.stringify(data.courseTags))
//         }
//         if (currentValues.courseBenefits !== course.whatYouWillLearn) {
//           formData.append("whatYouWillLearn", data.courseBenefits)
//         }
//         if (currentValues.courseCategory !== (course.category?._id || course.category)) {
//           formData.append("category", data.courseCategory)
//         }
//         if (
//           currentValues.courseRequirements.toString() !==
//           course.instructions.toString()
//         ) {
//           formData.append(
//             "instructions",
//             JSON.stringify(data.courseRequirements)
//           )
//         }
//         if (currentValues.courseImage !== course.thumbnail) {
//           formData.append("thumbnailImage", data.courseImage)
//         }

//         setLoading(true)
//         const result = await editCourseDetails(formData, token)
//         setLoading(false)
//         if (result) {
//           dispatch(setStep(2))
//           dispatch(setCourse(result))
//         }
//       } else {
//         toast.error("No changes made to the form")
//       }
//       return
//     }

//     const formData = new FormData()
//     formData.append("courseName", data.courseTitle)
//     formData.append("courseDescription", data.courseShortDesc)
//     formData.append("price", data.coursePrice)
//     formData.append("tag", JSON.stringify(data.courseTags))
//     formData.append("whatYouWillLearn", data.courseBenefits)
//     formData.append("category", data.courseCategory)
//     formData.append("status", COURSE_STATUS.DRAFT)
//     formData.append("instructions", JSON.stringify(data.courseRequirements))
//     formData.append("thumbnailImage", data.courseImage)

//     setLoading(true)
//     const result = await addCourseDetails(formData, token)
//     if (result) {
//       dispatch(setStep(2))
//       dispatch(setCourse(result))
//     }
//     setLoading(false)
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="relative space-y-8 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden"
//     >
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//       {/* Course Title */}
//       <div className="flex flex-col space-y-2">
//         <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="courseTitle">
//           Course Title <sup className="text-rose-400">*</sup>
//         </label>
//         <input
//           id="courseTitle"
//           placeholder="Enter Course Title"
//           {...register("courseTitle", { required: true })}
//           className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//         />
//         {errors.courseTitle && (
//           <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//             Course title is required
//           </span>
//         )}
//       </div>

//       {/* Course Short Description */}
//       <div className="flex flex-col space-y-2">
//         <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="courseShortDesc">
//           Course Short Description <sup className="text-rose-400">*</sup>
//         </label>
//         <textarea
//           id="courseShortDesc"
//           placeholder="Enter Description"
//           {...register("courseShortDesc", { required: true })}
//           className="resize-none min-h-[130px] w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//         />
//         {errors.courseShortDesc && (
//           <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//             Course Description is required
//           </span>
//         )}
//       </div>

//       {/* Course Price */}
//       <div className="flex flex-col space-y-2">
//         <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="coursePrice">
//           Course Price <sup className="text-rose-400">*</sup>
//         </label>
//         <div className="relative">
//           <input
//             id="coursePrice"
//             placeholder="Enter Course Price"
//             {...register("coursePrice", {
//               required: true,
//               valueAsNumber: true,
//               pattern: {
//                 value: /^(0|[1-9]\d*)(\.\d+)?$/,
//               },
//             })}
//             className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 pl-11 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//           />
//           <HiOutlineCurrencyRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-cyan-400 drop-shadow-[0_0_6px_#00f0ff]" />
//         </div>
//         {errors.coursePrice && (
//           <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//             Course Price is required
//           </span>
//         )}
//       </div>

//       {/* Course Category */}
//       <div className="flex flex-col space-y-2">
//         <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="courseCategory">
//           Course Category <sup className="text-rose-400">*</sup>
//         </label>
//         <select
//           {...register("courseCategory", { required: true })}
//           defaultValue=""
//           id="courseCategory"
//           className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
//         >
//           <option value="" disabled className="bg-[#0B132B] text-slate-400">
//             Choose a Category
//           </option>
//           {!loading &&
//             courseCategories?.map((category, indx) => (
//               <option key={indx} value={category?._id} className="bg-[#0B132B] text-slate-100">
//                 {category?.name}
//               </option>
//             ))}
//         </select>
//         {errors.courseCategory && (
//           <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//             Course Category is required
//           </span>
//         )}
//       </div>

//       {/* Course Tags */}
//       <ChipInput
//         label="Tags"
//         name="courseTags"
//         placeholder="Enter Tags and press Enter"
//         register={register}
//         errors={errors}
//         setValue={setValue}
//         getValues={getValues}
//       />

//       {/* Course Thumbnail Image */}
//       <Upload
//         name="courseImage"
//         label="Course Thumbnail"
//         register={register}
//         setValue={setValue}
//         video={false}
//         errors={errors}
//         editData={editCourse ? course?.thumbnail : null}
//       />

//       {/* Benefits of the course */}
//       <div className="flex flex-col space-y-2">
//         <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="courseBenefits">
//           Benefits of the course <sup className="text-rose-400">*</sup>
//         </label>
//         <textarea
//           id="courseBenefits"
//           placeholder="Enter benefits of the course"
//           {...register("courseBenefits", { required: true })}
//           className="resize-none min-h-[130px] w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//         />
//         {errors.courseBenefits && (
//           <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//             Benefits of the course is required
//           </span>
//         )}
//       </div>

//       {/* Requirements/Instructions */}
//       <RequirementsField
//         name="courseRequirements"
//         label="Requirements/Instructions"
//         register={register}
//         setValue={setValue}
//         errors={errors}
//         getValues={getValues}
//       />

//       {/* Action Navigation */}
//       <div className="flex justify-end gap-x-3 pt-4 border-t border-slate-800/80">
//         {editCourse && (
//           <button
//             type="button"
//             onClick={() => dispatch(setStep(2))}
//             disabled={loading}
//             className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95 disabled:opacity-50"
//           >
//             Continue Without Saving
//           </button>
//         )}
//         <IconBtn disabled={loading} type="submit" text={!editCourse ? "Next" : "Save Changes"}>
//           <MdOutlineNavigateNext className="text-xl" />
//         </IconBtn>
//       </div>
//     </form>
//   )
// }



import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdOutlineNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { setCourse, setStep } from "../../../../../slices/courseSlice"
import { COURSE_STATUS } from "../../../../../utils/Permanents"
import { fetchCourseCategories, addCourseDetails, editCourseDetails } from "../../../../../services/opreations/courseDetails"
import IconBtn from "../../../../common/IconBtn"
import Upload from "../Upload"
import ChipInput from "./Chipinput"
import RequirementsField from "./RequirementField"

export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { course, editCourse } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const [courseCategories, setCourseCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      const categories = await fetchCourseCategories()
      if (categories?.length > 0) {
        setCourseCategories(categories)
      }
      setLoading(false)
    }

    if (editCourse) {
      setValue("courseTitle", course.courseName)
      setValue("courseShortDesc", course.courseDescription)
      setValue("coursePrice", course.price)
      setValue("courseTags", course.tag)
      setValue("courseBenefits", course.whatYouWillLearn)
      setValue("courseCategory", course.category?._id || course.category)
      setValue("courseRequirements", course.instructions)
      setValue("courseImage", course.thumbnail)
    }

    getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    const categoryId = course.category?._id || course.category

    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory !== categoryId ||
      currentValues.courseRequirements.toString() !== course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true
    }
    return false
  }

  const onSubmit = async (data) => {
    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        formData.append("courseId", course._id)

        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle)
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc)
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice)
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags))
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits)
        }
        if (currentValues.courseCategory !== (course.category?._id || course.category)) {
          formData.append("category", data.courseCategory)
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          )
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage)
        }

        setLoading(true)
        const result = await editCourseDetails(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(2))
          dispatch(setCourse(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("courseName", data.courseTitle)
    formData.append("courseDescription", data.courseShortDesc)
    formData.append("price", data.coursePrice)
    formData.append("tag", JSON.stringify(data.courseTags))
    formData.append("whatYouWillLearn", data.courseBenefits)
    formData.append("category", data.courseCategory)
    formData.append("status", COURSE_STATUS.DRAFT)
    formData.append("instructions", JSON.stringify(data.courseRequirements))
    formData.append("thumbnailImage", data.courseImage)

    setLoading(true)
    const result = await addCourseDetails(formData, token)
    if (result) {
      dispatch(setStep(2))
      dispatch(setCourse(result))
    }
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-8 rounded-2xl border border-white/[0.08] bg-[#121216]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-sans"
    >
      {/* Top Hairline Accent */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="courseTitle">
          Course Title <sup className="text-white">*</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
        />
        {errors.courseTitle && (
          <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
            Course title is required
          </span>
        )}
      </div>

      {/* Course Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="courseShortDesc">
          Course Short Description <sup className="text-white">*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="resize-none min-h-[130px] w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
        />
        {errors.courseShortDesc && (
          <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
            Course Description is required
          </span>
        )}
      </div>

      {/* Course Price */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="coursePrice">
          Course Price <sup className="text-white">*</sup>
        </label>
        <div className="relative">
          <input
            id="coursePrice"
            placeholder="Enter Course Price"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
            className="w-full rounded-xl border border-white/[0.08] bg-[#121216] pl-11 pr-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
          />
          <HiOutlineCurrencyRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-slate-300" />
        </div>
        {errors.coursePrice && (
          <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
            Course Price is required
          </span>
        )}
      </div>

      {/* Course Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="courseCategory">
          Course Category <sup className="text-white">*</sup>
        </label>
        <select
          {...register("courseCategory", { required: true })}
          defaultValue=""
          id="courseCategory"
          className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c] cursor-pointer"
        >
          <option value="" disabled className="bg-[#0B0B0C] text-[#9A9A9E]">
            Choose a Category
          </option>
          {!loading &&
            courseCategories?.map((category, indx) => (
              <option key={indx} value={category?._id} className="bg-[#0B0B0C] text-white">
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && (
          <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
            Course Category is required
          </span>
        )}
      </div>

      {/* Course Tags */}
      <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />

      {/* Course Thumbnail Image */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        video={false}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />

      {/* Benefits of the course */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="courseBenefits">
          Benefits of the course <sup className="text-white">*</sup>
        </label>
        <textarea
          id="courseBenefits"
          placeholder="Enter benefits of the course"
          {...register("courseBenefits", { required: true })}
          className="resize-none min-h-[130px] w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
        />
        {errors.courseBenefits && (
          <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
            Benefits of the course is required
          </span>
        )}
      </div>

      {/* Requirements/Instructions */}
      <RequirementsField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValues={getValues}
      />

      {/* Action Navigation */}
      <div className="flex justify-end gap-x-3 pt-4 border-t border-white/[0.08]">
        {editCourse && (
          <button
            type="button"
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className="cursor-pointer rounded-xl border border-white/[0.08] bg-[#0B0B0C] px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-[#16161c] hover:text-white active:scale-95 disabled:opacity-50"
          >
            Continue Without Saving
          </button>
        )}
        <IconBtn disabled={loading} type="submit" text={!editCourse ? "Next" : "Save Changes"}>
          <MdOutlineNavigateNext className="text-xl text-slate-950" />
        </IconBtn>
      </div>
    </form>
  )
}
