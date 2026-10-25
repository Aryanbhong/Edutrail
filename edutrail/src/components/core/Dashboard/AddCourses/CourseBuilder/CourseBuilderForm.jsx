// // import React, { useEffect, useState } from 'react'
// // import { useForm } from 'react-hook-form'
// // import IconBtn from '../../../../common/IconBtn';
// // import { IoIosAddCircle } from "react-icons/io";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { GrCaretNext } from "react-icons/gr";
// // import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
// // import toast from 'react-hot-toast';
// // import { createSection, updateSection } from '../../../../../services/opreations/courseDetails';
// // import NestedView from './NestedView';

// // const CourseBuilderForm = () => {
// //     const {
// //         register,
// //         handleSubmit,
// //         setValue,
// //         formState:{errors}
// //     } = useForm();
// //     const [editSectionName, setEditSectionName]= useState(false);
// //     const { course } = useSelector((state) => state.course)
// //     const dispatch = useDispatch();
// //     const {token} = useSelector((state) => state.auth);
// //     const [loading, setLoading] = useState(false);
    

// //     const onSubmit= async (data)=>{
// //     setLoading(true)
// //     let result

// //     if(editSectionName){
// //         // we are edititng section name
// //         result = await updateSection(
// //             {
// //                 sectionName: data.sectionName,
// //                 sectionId: editSectionName,
// //                 courseId: course._id,
// //             }, token
// //         )
// //     }else{
// //         result = await createSection({
// //             sectionName: data.sectionName,
// //             courseId: course._id,
// //         },token)
// //     }
    
// //     //update values
// //     if(result){
// //         dispatch(setCourse(result));
// //         setEditSectionName(null);
// //         setValue("sectionName","");
// //     }
    
// //     //loading false
// //     setLoading(false);

// //     }

// //     // const handleChangeEditSectionName = (sectionId, sectionName) => {
// //     //     if (editSectionName === sectionId) {
// //     //       cancelEdit()
// //     //       return
// //     //     }
// //     //     setEditSectionName(sectionId)
// //     //     setValue("sectionName", sectionName)
// //     //   }
    
   
// //     const cancelEdit=() =>{
// //         setEditSectionName(null);
// //         setValue("sectionName","");
// //     }
    
// //     const goBack=()=>{
// //       dispatch(setStep(1));
// //       dispatch(setEditCourse(true));
// //     }
    
// //     const goToNext=()=>{
// //     // if(course.courseContent.length === 0){
// //     //     toast.error("Please add at least one Section");
// //     //     return;
// //     // }
// //     // if(course.courseContent.some((section)=> section.sebSection.length === 0)){
// //     //     toast.error("Please add atleast one lecture in each section");
// //     //     return;
// //     // }
// //     //if sab kuch fine
// //     dispatch(setStep(3));
// //     }

// //     const handleChangeEditSectionName=(sectionId, sectionName) =>{
// //     if(editSectionName === sectionId){
// //         cancelEdit();
// //         return;
// //     }
// //         setEditSectionName(sectionId);
// //         setValue("sectionName", sectionName);
// //     }
 
// //     console.log("printing coursecontent",course.courseContent);
// //     console.log(course.courseContent);
    
// //   return (
// //  <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
// // <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>
// // <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //   <div className="flex flex-col space-y-2">
// //     <label className="text-sm text-richblack-5" htmlFor="sectionName">
// //       Section Name <sup className="text-pink-200">*</sup>
// //     </label>
// //     <input
// //       id="sectionName"
// //       disabled={loading}
// //       placeholder="Add a section to build your course"
// //       {...register("sectionName", { required: true })}
// //       className="form-style w-full  px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
// //         />
// //     {errors.sectionName && (
// //       <span className="ml-2 text-xs tracking-wide text-pink-200">
// //         Section name is required
// //       </span>
// //     )}
// //   </div>
// //   <div className="flex items-end gap-x-4">
// //     <IconBtn
// //       type="submit"
// //       disabled={loading}
// //       text={editSectionName ? "Edit Section Name" : "Create Section"}
// //       outline={true}
// //     >
// //       <IoIosAddCircle size={20} className="text-yellow-50" />
// //     </IconBtn>
// //     {editSectionName && (
// //       <button
// //         type="button"
// //         onClick={cancelEdit}
// //         className="text-sm text-richblack-300 underline"
// //       >
// //         Cancel Edit
// //       </button>
// //     )}
// //   </div>
// // </form>
// // {course.courseContent.length > 0 && (
// //   <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
// // )}
// // {/* Next Prev Button */}
// // <div className="flex justify-end gap-x-3">
// //   <button
// //     onClick={goBack}
// //     className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
// //   >
// //     Back
// //   </button>
// //   <IconBtn disabled={loading} text="Next" onclick={goToNext}>
// //   <GrCaretNext />
// //   </IconBtn>
// // </div>
// // </div>
// //   )
// // }

// // export default CourseBuilderForm


// import React, { useState } from 'react'
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
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors }
//   } = useForm();
  
//   const [editSectionName, setEditSectionName] = useState(false);
//   const { course } = useSelector((state) => state.course);
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     let result;

//     if (editSectionName) {
//       result = await updateSection(
//         {
//           sectionName: data.sectionName,
//           sectionId: editSectionName,
//           courseId: course._id,
//         },
//         token
//       );
//     } else {
//       result = await createSection(
//         {
//           sectionName: data.sectionName,
//           courseId: course._id,
//         },
//         token
//       );
//     }

//     if (result) {
//       dispatch(setCourse(result));
//       setEditSectionName(null);
//       setValue("sectionName", "");
//     }

//     setLoading(false);
//   };

//   const cancelEdit = () => {
//     setEditSectionName(null);
//     setValue("sectionName", "");
//   };

//   const goBack = () => {
//     dispatch(setStep(1));
//     dispatch(setEditCourse(true));
//   };

//   const goToNext = () => {
//     dispatch(setStep(3));
//   };

//   const handleChangeEditSectionName = (sectionId, sectionName) => {
//     if (editSectionName === sectionId) {
//       cancelEdit();
//       return;
//     }
//     setEditSectionName(sectionId);
//     setValue("sectionName", sectionName);
//   };

//   return (
//     <div className="relative space-y-8 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//       {/* Header */}
//       <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//         Course Builder
//       </p>

//       {/* Form */}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div className="flex flex-col space-y-2">
//           <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor="sectionName">
//             Section Name <sup className="text-rose-400">*</sup>
//           </label>
//           <input
//             id="sectionName"
//             disabled={loading}
//             placeholder="Add a section to build your course"
//             {...register("sectionName", { required: true })}
//             className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] disabled:opacity-50"
//           />
//           {errors.sectionName && (
//             <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//               Section name is required
//             </span>
//           )}
//         </div>

//         <div className="flex items-center gap-x-4 pt-2">
//           <IconBtn
//             type="submit"
//             disabled={loading}
//             text={editSectionName ? "Edit Section Name" : "Create Section"}
//             outline={true}
//           >
//             <IoIosAddCircle size={20} className="text-cyan-400 drop-shadow-[0_0_6px_#00f0ff]" />
//           </IconBtn>

//           {editSectionName && (
//             <button
//               type="button"
//               onClick={cancelEdit}
//               className="text-xs font-semibold text-slate-400 underline hover:text-cyan-300 transition-colors cursor-pointer"
//             >
//               Cancel Edit
//             </button>
//           )}
//         </div>
//       </form>

//       {/* Nested View */}
//       {course?.courseContent?.length > 0 && (
//         <div className="pt-4 border-t border-slate-800/80">
//           <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
//         </div>
//       )}

//       {/* Next / Prev Navigation */}
//       <div className="flex justify-end gap-x-3 pt-4 border-t border-slate-800/80">
//         <button
//           onClick={goBack}
//           className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
//         >
//           Back
//         </button>
//         <IconBtn disabled={loading} text="Next" onclick={goToNext}>
//           <GrCaretNext className="text-sm" />
//         </IconBtn>
//       </div>
//     </div>
//   );
// };

// export default CourseBuilderForm;



import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconBtn from "../../../../common/IconBtn";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { GrCaretNext } from "react-icons/gr";
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice";
import toast from "react-hot-toast";
import {
  createSection,
  updateSection,
} from "../../../../../services/opreations/courseDetails";
import NestedView from "./NestedView";

const CourseBuilderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [editSectionName, setEditSectionName] = useState(false);
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    let result;

    try {
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
    } catch (error) {
      toast.error("Unable to save the section. Please try again.");
    } finally {
      setLoading(false);
    }
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
    <div className="relative isolate space-y-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] p-5 font-sans text-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:p-7 lg:p-8">
      {/* Subtle top accent */}
      <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      {/* Header */}
      <div className="relative">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Course creation
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Course Builder
        </h2>

        <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">
          Organize your course into sections and build a clear learning
          experience for your students.
        </p>
      </div>

      {/* Section Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative space-y-4 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5"
      >
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="sectionName"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300"
          >
            Section Name <span className="text-violet-300">*</span>
          </label>

          <input
            id="sectionName"
            type="text"
            disabled={loading}
            placeholder="e.g. Introduction to React"
            {...register("sectionName", {
              required: "Section name is required",
              validate: (value) =>
                value.trim().length > 0 || "Section name is required",
            })}
            className={`w-full rounded-xl border bg-[#0c0c0f] px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-200 placeholder:text-zinc-600 disabled:cursor-not-allowed disabled:opacity-50 ${
              errors.sectionName
                ? "border-rose-400/50 focus:border-rose-400"
                : "border-white/[0.08] hover:border-white/[0.14] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
            }`}
          />

          {errors.sectionName && (
            <p className="text-xs font-medium text-rose-400">
              {errors.sectionName.message}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <IconBtn
            type="submit"
            disabled={loading}
            text={
              loading
                ? "Saving..."
                : editSectionName
                  ? "Update Section"
                  : "Create Section"
            }
            outline={true}
          >
            <IoIosAddCircle
              size={20}
              className="text-violet-300"
            />
          </IconBtn>

          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              disabled={loading}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-zinc-500 transition-colors duration-200 hover:bg-white/[0.04] hover:text-zinc-200 disabled:opacity-50"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Sections List */}
      {course?.courseContent?.length > 0 ? (
        <div className="relative border-t border-white/[0.07] pt-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-zinc-100">
                Course Sections
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Manage your sections and lectures below.
              </p>
            </div>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
              {course.courseContent.length}{" "}
              {course.courseContent.length === 1 ? "section" : "sections"}
            </span>
          </div>

          <NestedView
            handleChangeEditSectionName={handleChangeEditSectionName}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.10] bg-white/[0.015] px-5 py-8 text-center">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07]">
            <IoIosAddCircle className="text-2xl text-violet-300" />
          </div>

          <p className="text-sm font-medium text-zinc-300">
            No sections yet
          </p>

          <p className="mt-1 max-w-xs text-xs leading-5 text-zinc-500">
            Create your first section using the form above to start building
            your course.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          className="flex items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.02] px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white active:scale-[0.98]"
        >
          Back
        </button>

        <IconBtn
          disabled={loading}
          text="Next"
          onclick={goToNext}
        >
          <GrCaretNext className="text-sm text-white" />
        </IconBtn>
      </div>
    </div>
  );
};

export default CourseBuilderForm;


