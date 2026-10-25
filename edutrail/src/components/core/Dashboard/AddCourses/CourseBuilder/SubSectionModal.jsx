// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux';
// import { data } from 'react-router-dom';
// import { createSubSection, updateSubSection } from '../../../../../services/opreations/courseDetails';
// import { setCourse } from '../../../../../slices/courseSlice';
// import { RxCross2 } from "react-icons/rx";
// import Upload from "../Upload"
// import IconBtn from "../../../../common/IconBtn"

// const SubSectionModal = ({
//     modalData,
//     setModalData,
//     add=false,
//     view=false,
//     edit=false,
// }) => {
//     console.log("modaldata ye raha", modalData);
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         formState: {errors},
//         getValues,
//     }= useForm();
   
//      const dispatch = useDispatch();
//      const [loading,setLoading] = useState(false);
//      const {course} = useSelector((state) => state.course);
//      const {token} = useSelector((state) => state.auth);

//      useEffect(() =>{
//         if(view || edit){
//             console.log("modaldata", modalData)
//             setValue("lectureTittle", modalData.title);
//             setValue("lectureDesc", modalData.description);
//             setValue("lectureVideo",modalData.videoUrl);
//         }
//      },[]);

//      const isFormUpdated=()=>{
//         const currentValues =  getValues();
//         if(currentValues.lectureTittle !== modalData.title ||
//             currentValues.lectureDesc !== modalData.description ||
//             currentValues.lectureVideo !== modalData.videoUrl
//         ){
//             return true;
//         }
//         else{
//             return false;
//         }
//      }
//      const handleEditSubSection=async()=>{
      
//         const currentValues = getValues();
//         console.log("changes after editing subsection" , currentValues)
//         const formData= new FormData();

//         formData.append("sectionId",modalData.sectionId);
//         formData.append("subSectionId",modalData._id);

//         if(currentValues.lectureTitle !== modalData.title){
//             formData.append("title", currentValues.lectureTitle);
//         }
//         if(currentValues.lectureDesc !== modalData.description){
//             formData.append("description", currentValues.lectureDesc);
//         }
//         if(currentValues.lectureVideo !== modalData.videoUrl){
//             formData.append("video",currentValues.lectureVideo);
//         }
//         setLoading(true);
//         //API call
//         const result = await updateSubSection(formData, token);
//         if(result){
//             //todo: same check 
//            const updatedCourseContent = course.courseContent.map((section)=>
//            section._id === modalData.sectionId ? result : section);
//            const updatedCourse={...course,courseContent: updatedCourseContent};
//            dispatch(setCourse(updatedCourse));
        
//         }
//         setModalData(null);
//         setLoading(false);
//      }
//      const onSubmit=async(data)=>{

//         if(view)
//             return

//         if(edit){
//             if(!isFormUpdated){
//                 toast.error("No changes made to the form")
//             }
//             else{
//                 //edit kkrdo store me
//                 handleEditSubSection();
//             }
//             return;
//         }

//         const formData = new FormData();
//         formData.append("sectionId", modalData);
//         formData.append("title",data.lectureTitle);
//         formData.append("description",data.lectureDesc);
//         formData.append("Video", data.Video);
    
//         console.log(" daata ka video data", data.Video);
//         setLoading(true);
//         //API CALL
//       console.log(" subsection ka form data", formData)
//         const result = await createSubSection(formData, token);

//         if(result){
//             //TODO: check for updation
//             const updatedCourseContent = course.courseContent.map((section) =>
//                 section._id === modalData ? result : section
//               );
//               const updatedCourse = { ...course, courseContent: updatedCourseContent }
//               dispatch(setCourse(updatedCourse))
//         }
//         setModalData(null);
//         setLoading(false);

        
       
//      }

//   return (
//     <div className='fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
//       <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
//         <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
//         <p className="text-xl font-semibold text-richblack-5">
//             {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture</p>
//         <button onClick={()=>{
//             !loading ? setModalData(null): {}
//         }}>
//         <RxCross2 />
//         </button>

//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" 
//         className="space-y-8 px-8 py-10"
//         >
//           <Upload
//           name="Video"
//           label="Lecture Video"
//           register={register}
//           setValue={setValue}
//           errors={errors}
//           video={true}
//           viewData={view ? modalData.videoUrl: null}
//           editData={edit ? modalData.videoUrl: null}
//           />
//           <div  className="flex flex-col space-y-2">
//             <label className="text-sm text-richblack-5" htmlFor="lectureTitle">
//                 Lecture Title
//                 {!view && <sup className="text-pink-200">*</sup>}
//                 </label>
//             <input 
//              disabled={view || loading}
//             id='lectureTitle'
//             placeholder='Enter Lecture Title'
//             {...register("lectureTitle",{required:true})}
//             className="form-style w-full  px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"/>
//              {errors.lectureTitle && (
//                 <span className="ml-2 text-xs tracking-wide text-pink-200">
//                     Lecture Title is required
//                 </span>
//              )}
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label className="text-sm text-richblack-5" htmlFor="lectureDesc">
//             Lecture Description{" "}
//             {!view && <sup className="text-pink-200">*</sup>}
//             </label>
//             <textarea 
//             id='lectureDesc'
//             placeholder='Enter Lecture Description'
//             {...register("lectureDesc",{required:true})}
//             className="form-style resize-x-none min-h-[130px] w-full  px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
//             />
//             {
//                 errors.lectureDesc && (
//                     <span className="ml-2 text-xs tracking-wide text-pink-200">
//                         Lecture Description is required
//                     </span>
//                 )
//             }
//           </div>
//           {
//             !view && (
//                 <div className="flex justify-end">
//                  <IconBtn 
//                  text={loading ? "Loading...": edit ? "Save Changes" : "Save"}
//                  />
//                 </div>
//             )
//           }
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SubSectionModal



// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import { createSubSection, updateSubSection } from '../../../../../services/opreations/courseDetails'
// import { setCourse } from '../../../../../slices/courseSlice'
// import { RxCross2 } from "react-icons/rx"
// import toast from 'react-hot-toast'
// import Upload from "../Upload"
// import IconBtn from "../../../../common/IconBtn"

// const SubSectionModal = ({
//   modalData,
//   setModalData,
//   add = false,
//   view = false,
//   edit = false,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//     getValues,
//   } = useForm()

//   const dispatch = useDispatch()
//   const [loading, setLoading] = useState(false)
//   const { course } = useSelector((state) => state.course)
//   const { token } = useSelector((state) => state.auth)

//   useEffect(() => {
//     if (view || edit) {
//       setValue("lectureTitle", modalData.title)
//       setValue("lectureDesc", modalData.description)
//       setValue("lectureVideo", modalData.videoUrl)
//     }
//   }, [view, edit, modalData, setValue])

//   const isFormUpdated = () => {
//     const currentValues = getValues()
//     return (
//       currentValues.lectureTitle !== modalData.title ||
//       currentValues.lectureDesc !== modalData.description ||
//       currentValues.lectureVideo !== modalData.videoUrl
//     )
//   }

//   const handleEditSubSection = async () => {
//     const currentValues = getValues()
//     const formData = new FormData()

//     formData.append("sectionId", modalData.sectionId)
//     formData.append("subSectionId", modalData._id)

//     if (currentValues.lectureTitle !== modalData.title) {
//       formData.append("title", currentValues.lectureTitle)
//     }
//     if (currentValues.lectureDesc !== modalData.description) {
//       formData.append("description", currentValues.lectureDesc)
//     }
//     if (currentValues.lectureVideo !== modalData.videoUrl) {
//       formData.append("video", currentValues.lectureVideo)
//     }

//     setLoading(true)
//     const result = await updateSubSection(formData, token)
//     if (result) {
//       const updatedCourseContent = course.courseContent.map((section) =>
//         section._id === modalData.sectionId ? result : section
//       )
//       const updatedCourse = { ...course, courseContent: updatedCourseContent }
//       dispatch(setCourse(updatedCourse))
//     }
//     setModalData(null)
//     setLoading(false)
//   }

//   const onSubmit = async (data) => {
//     if (view) return

//     if (edit) {
//       if (!isFormUpdated()) {
//         toast.error("No changes made to the form")
//       } else {
//         handleEditSubSection()
//       }
//       return
//     }

//     const formData = new FormData()
//     formData.append("sectionId", modalData)
//     formData.append("title", data.lectureTitle)
//     formData.append("description", data.lectureDesc)
//     formData.append("Video", data.Video)

//     setLoading(true)
//     const result = await createSubSection(formData, token)

//     if (result) {
//       const updatedCourseContent = course.courseContent.map((section) =>
//         section._id === modalData ? result : section
//       )
//       const updatedCourse = { ...course, courseContent: updatedCourseContent }
//       dispatch(setCourse(updatedCourse))
//     }
//     setModalData(null)
//     setLoading(false)
//   }

//   return (
//     <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-[#030712]/80 backdrop-blur-md p-4">
//       <div className="relative my-8 w-full max-w-[700px] overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0B132B]/95 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         {/* Modal Header */}
//         <div className="flex items-center justify-between border-b border-cyan-500/20 bg-[#030712]/70 px-6 py-4">
//           <p className="text-lg font-bold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
//             {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
//           </p>
//           <button
//             onClick={() => (!loading ? setModalData(null) : {})}
//             className="p-1 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all duration-200 cursor-pointer"
//           >
//             <RxCross2 className="text-xl" />
//           </button>
//         </div>

//         {/* Modal Form */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           encType="multipart/form-data"
//           className="space-y-6 px-6 sm:px-8 py-6"
//         >
//           {/* Video Upload Field */}
//           <Upload
//             name="Video"
//             label="Lecture Video"
//             register={register}
//             setValue={setValue}
//             errors={errors}
//             video={true}
//             viewData={view ? modalData.videoUrl : null}
//             editData={edit ? modalData.videoUrl : null}
//           />

//           {/* Title Field */}
//           <div className="flex flex-col space-y-2">
//             <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="lectureTitle">
//               Lecture Title {!view && <sup className="text-rose-400">*</sup>}
//             </label>
//             <input
//               disabled={view || loading}
//               id="lectureTitle"
//               placeholder="Enter Lecture Title"
//               {...register("lectureTitle", { required: true })}
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] disabled:opacity-50"
//             />
//             {errors.lectureTitle && (
//               <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//                 Lecture Title is required
//               </span>
//             )}
//           </div>

//           {/* Description Field */}
//           <div className="flex flex-col space-y-2">
//             <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="lectureDesc">
//               Lecture Description {!view && <sup className="text-rose-400">*</sup>}
//             </label>
//             <textarea
//               disabled={view || loading}
//               id="lectureDesc"
//               placeholder="Enter Lecture Description"
//               {...register("lectureDesc", { required: true })}
//               className="resize-none min-h-[120px] w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] disabled:opacity-50"
//             />
//             {errors.lectureDesc && (
//               <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//                 Lecture Description is required
//               </span>
//             )}
//           </div>

//           {/* Save Button */}
//           {!view && (
//             <div className="flex justify-end pt-2 border-t border-slate-800/80">
//               <IconBtn
//                 text={loading ? "Loading..." : edit ? "Save Changes" : "Save"}
//                 type="submit"
//                 disabled={loading}
//               />
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SubSectionModal



import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createSubSection, updateSubSection } from '../../../../../services/opreations/courseDetails'
import { setCourse } from '../../../../../slices/courseSlice'
import { RxCross2 } from "react-icons/rx"
import toast from 'react-hot-toast'
import Upload from "../Upload"
import IconBtn from "../../../../common/IconBtn"

const SubSectionModal = ({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm()

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title)
      setValue("lectureDesc", modalData.description)
      setValue("lectureVideo", modalData.videoUrl)
    }
  }, [view, edit, modalData, setValue])

  const isFormUpdated = () => {
    const currentValues = getValues()
    return (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl
    )
  }

  const handleEditSubSection = async () => {
    const currentValues = getValues()
    const formData = new FormData()

    formData.append("sectionId", modalData.sectionId)
    formData.append("subSectionId", modalData._id)

    if (currentValues.lectureTitle !== modalData.title) {
      formData.append("title", currentValues.lectureTitle)
    }
    if (currentValues.lectureDesc !== modalData.description) {
      formData.append("description", currentValues.lectureDesc)
    }
    if (currentValues.lectureVideo !== modalData.videoUrl) {
      formData.append("video", currentValues.lectureVideo)
    }

    setLoading(true)
    const result = await updateSubSection(formData, token)
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData.sectionId ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setModalData(null)
    setLoading(false)
  }

  const onSubmit = async (data) => {
    if (view) return

    if (edit) {
      if (!isFormUpdated()) {
        toast.error("No changes made to the form")
      } else {
        handleEditSubSection()
      }
      return
    }

    const formData = new FormData()
    formData.append("sectionId", modalData)
    formData.append("title", data.lectureTitle)
    formData.append("description", data.lectureDesc)
    formData.append("Video", data.Video)

    setLoading(true)
    const result = await createSubSection(formData, token)

    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setModalData(null)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-[#0B0B0C]/80 backdrop-blur-md p-4 font-sans">
      <div className="relative my-8 w-full max-w-[700px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121216]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        
        {/* Top Hairline Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0B0B0C]/70 px-6 py-4">
          <p className="text-lg font-bold tracking-tight text-white">
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
          </p>
          <button
            onClick={() => (!loading ? setModalData(null) : {})}
            className="p-1 rounded-xl text-[#9A9A9E] hover:text-white hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
          >
            <RxCross2 className="text-xl" />
          </button>
        </div>

        {/* Modal Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="space-y-6 px-6 sm:px-8 py-6"
        >
          {/* Video Upload Field */}
          <Upload
            name="Video"
            label="Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />

          {/* Title Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="lectureTitle">
              Lecture Title {!view && <sup className="text-white">*</sup>}
            </label>
            <input
              disabled={view || loading}
              id="lectureTitle"
              placeholder="Enter Lecture Title"
              {...register("lectureTitle", { required: true })}
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c] disabled:opacity-50"
            />
            {errors.lectureTitle && (
              <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
                Lecture Title is required
              </span>
            )}
          </div>

          {/* Description Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300" htmlFor="lectureDesc">
              Lecture Description {!view && <sup className="text-white">*</sup>}
            </label>
            <textarea
              disabled={view || loading}
              id="lectureDesc"
              placeholder="Enter Lecture Description"
              {...register("lectureDesc", { required: true })}
              className="resize-none min-h-[120px] w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c] disabled:opacity-50"
            />
            {errors.lectureDesc && (
              <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
                Lecture Description is required
              </span>
            )}
          </div>

          {/* Save Button */}
          {!view && (
            <div className="flex justify-end pt-2 border-t border-white/[0.08]">
              <IconBtn
                text={loading ? "Loading..." : edit ? "Save Changes" : "Save"}
                type="submit"
                disabled={loading}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default SubSectionModal
