// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import IconBtn from '../../../../common/IconBtn';
// import { IoIosAddCircle } from "react-icons/io";
// import { useDispatch, useSelector } from 'react-redux';
// import { GrCaretNext } from "react-icons/gr";
// import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
// import toast from 'react-hot-toast';
// import { createSection, updateSection } from '../../../../../services/opreations/courseDetails';
// import NestedView from './NestedView';

// const CourseBuilderForm = () => {
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         formState:{errors}
//     } = useForm();
//     const [editSectionName, setEditSectionName]= useState(false);
//     const { course } = useSelector((state) => state.course)
//     const dispatch = useDispatch();
//     const {token} = useSelector((state) => state.auth);
//     const [loading, setLoading] = useState(false);
    

//     const onSubmit= async (data)=>{
//     setLoading(true)
//     let result

//     if(editSectionName){
//         // we are edititng section name
//         result = await updateSection(
//             {
//                 sectionName: data.sectionName,
//                 sectionId: editSectionName,
//                 courseId: course._id,
//             }, token
//         )
//     }else{
//         result = await createSection({
//             sectionName: data.sectionName,
//             courseId: course._id,
//         },token)
//     }
    
//     //update values
//     if(result){
//         dispatch(setCourse(result));
//         setEditSectionName(null);
//         setValue("sectionName","");
//     }
    
//     //loading false
//     setLoading(false);

//     }

//     // const handleChangeEditSectionName = (sectionId, sectionName) => {
//     //     if (editSectionName === sectionId) {
//     //       cancelEdit()
//     //       return
//     //     }
//     //     setEditSectionName(sectionId)
//     //     setValue("sectionName", sectionName)
//     //   }
    
   
//     const cancelEdit=() =>{
//         setEditSectionName(null);
//         setValue("sectionName","");
//     }
    
//     const goBack=()=>{
//       dispatch(setStep(1));
//       dispatch(setEditCourse(true));
//     }
    
//     const goToNext=()=>{
//     // if(course.courseContent.length === 0){
//     //     toast.error("Please add at least one Section");
//     //     return;
//     // }
//     // if(course.courseContent.some((section)=> section.sebSection.length === 0)){
//     //     toast.error("Please add atleast one lecture in each section");
//     //     return;
//     // }
//     //if sab kuch fine
//     dispatch(setStep(3));
//     }

//     const handleChangeEditSectionName=(sectionId, sectionName) =>{
//     if(editSectionName === sectionId){
//         cancelEdit();
//         return;
//     }
//         setEditSectionName(sectionId);
//         setValue("sectionName", sectionName);
//     }
 
//     console.log("printing coursecontent",course.courseContent);
//     console.log(course.courseContent);
    
//   return (
//  <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
// <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>
// <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//   <div className="flex flex-col space-y-2">
//     <label className="text-sm text-richblack-5" htmlFor="sectionName">
//       Section Name <sup className="text-pink-200">*</sup>
//     </label>
//     <input
//       id="sectionName"
//       disabled={loading}
//       placeholder="Add a section to build your course"
//       {...register("sectionName", { required: true })}
//       className="form-style w-full  px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
//         />
//     {errors.sectionName && (
//       <span className="ml-2 text-xs tracking-wide text-pink-200">
//         Section name is required
//       </span>
//     )}
//   </div>
//   <div className="flex items-end gap-x-4">
//     <IconBtn
//       type="submit"
//       disabled={loading}
//       text={editSectionName ? "Edit Section Name" : "Create Section"}
//       outline={true}
//     >
//       <IoIosAddCircle size={20} className="text-yellow-50" />
//     </IconBtn>
//     {editSectionName && (
//       <button
//         type="button"
//         onClick={cancelEdit}
//         className="text-sm text-richblack-300 underline"
//       >
//         Cancel Edit
//       </button>
//     )}
//   </div>
// </form>
// {course.courseContent.length > 0 && (
//   <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
// )}
// {/* Next Prev Button */}
// <div className="flex justify-end gap-x-3">
//   <button
//     onClick={goBack}
//     className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
//   >
//     Back
//   </button>
//   <IconBtn disabled={loading} text="Next" onclick={goToNext}>
//   <GrCaretNext />
//   </IconBtn>
// </div>
// </div>
//   )
// }

// export default CourseBuilderForm


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import IconBtn from '../../../../common/IconBtn';
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { GrCaretNext } from "react-icons/gr";
import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
import toast from 'react-hot-toast';
import { createSection, updateSection } from '../../../../../services/opreations/courseDetails';
import NestedView from './NestedView';

const CourseBuilderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  
  const [editSectionName, setEditSectionName] = useState(false);
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    let result;

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      );
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      );
    }

    if (result) {
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }

    setLoading(false);
  };

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };

  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  };

  const goToNext = () => {
    dispatch(setStep(3));
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  return (
    <div className="relative space-y-8 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Header */}
      <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        Course Builder
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="sectionName">
            Section Name <sup className="text-rose-400">*</sup>
          </label>
          <input
            id="sectionName"
            disabled={loading}
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] disabled:opacity-50"
          />
          {errors.sectionName && (
            <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
              Section name is required
            </span>
          )}
        </div>

        <div className="flex items-center gap-x-4 pt-2">
          <IconBtn
            type="submit"
            disabled={loading}
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
          >
            <IoIosAddCircle size={20} className="text-cyan-400 drop-shadow-[0_0_6px_#00f0ff]" />
          </IconBtn>

          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-xs font-semibold text-slate-400 underline hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Nested View */}
      {course?.courseContent?.length > 0 && (
        <div className="pt-4 border-t border-slate-800/80">
          <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
        </div>
      )}

      {/* Next / Prev Navigation */}
      <div className="flex justify-end gap-x-3 pt-4 border-t border-slate-800/80">
        <button
          onClick={goBack}
          className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
        >
          Back
        </button>
        <IconBtn disabled={loading} text="Next" onclick={goToNext}>
          <GrCaretNext className="text-sm" />
        </IconBtn>
      </div>
    </div>
  );
};

export default CourseBuilderForm;


