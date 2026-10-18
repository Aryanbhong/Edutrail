// // import React, { useEffect, useState } from 'react'


// // const RequirementField = ({name, label ,register, errors, setValue, getvalues}) => {

// //     const [requirement, setRequirement] = useState("");
// //     const [requirementList, setRequirementList] = useState([]);

// //     const handleAddRequirement=()=>{
// //         if(requirement){
// //             setRequirementList([...requirementList,requirement]);
// //             setRequirement("");
// //         }
// //     }

// //     const handleRemoveRequirement=(index) =>{
// //         const updatedRequirements=[...requirementList];
// //         updatedRequirements.splice(index,1);
// //         setRequirementList(updatedRequirements)
// //     }
// //     useEffect(()=>{
// //         register(name, {
// //             required:true,
// //             validate:(value) => value.length > 0
// //         })
// //     },[])

// //     useEffect(()=>{
// //         setValue(value,requirementList);
// //     },[requirementList])


 
// //     return (
// //     <div>
// //       <label htmlFor={name}>{label}<sup>*</sup></label>
// //       <div>
// //         <input 
// //         type="text" 
// //         id={name}
// //         value={requirement}
// //         onChange={(e)=>setRequirement(e.target.value)}
// //         className='w-full'
// //         />

// //         <button 
// //         type='button'
// //         onClick={handleAddRequirement}
// //         className='font-semibold text-yellow-50'
// //         >
// //             Add
// //         </button>
// //       </div>
// //       {
// //        requirementList.length > 0 && (
// //         <ul>
// //             {
// //              requirementList.map((requiremnet,index)=>(
// //             <li key={index} className='flex items-center text-richblack-5'>
// //                 <span>{requirement}</span>
// //                 <button
// //                 type='button'
// //                 onClick={()=>handleRemoveRequirement(index)}
// //                 className='text-xs text-pure-greys-300'
// //                 >
// //                     clear
// //                 </button>
// //             </li>
// //         ))
// //     }
// //         </ul>
// //        )
// //       }
// //       {
// //         errors[name] && (
// //             <span>
// //                 {label} is required
// //             </span>
// //         )
// //       }
// //     </div>
// //   )
// // }

// // export default RequirementField


// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"

// export default function RequirementsField({
//   name,
//   label,
//   register,
//   setValue,
//   errors,
//   getValues,
// }) {
//   const { editCourse, course } = useSelector((state) => state.course)
//   const [requirement, setRequirement] = useState("")
//   const [requirementsList, setRequirementsList] = useState([])

//   useEffect(() => {
//     if (editCourse) {
//       setRequirementsList(course?.instructions)
//     }
//     register(name, { required: true, validate: (value) => value.length > 0 })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   useEffect(() => {
//     setValue(name, requirementsList)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [requirementsList])

//   const handleAddRequirement = () => {
//     if (requirement) {
//       setRequirementsList([...requirementsList, requirement])
//       setRequirement("")
//     }
//   }

//   const handleRemoveRequirement = (index) => {
//     const updatedRequirements = [...requirementsList]
//     updatedRequirements.splice(index, 1)
//     setRequirementsList(updatedRequirements)
//   }

//   return (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm text-richblack-5" htmlFor={name}>
//         {label} <sup className="text-pink-200">*</sup>
//       </label>
//       <div className="flex flex-col items-start space-y-2">
//         <input
//           type="text"
//           id={name}
//           value={requirement}
//           onChange={(e) => setRequirement(e.target.value)}
//           className="form-style w-full px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
//         />
//         <button
//           type="button"
//           onClick={handleAddRequirement}
//           className="font-semibold text-yellow-50"
//         >
//           Add
//         </button>
//       </div>
//       {requirementsList.length > 0 && (
//         <ul className="mt-2 list-inside list-disc">
//           {requirementsList.map((requirement, index) => (
//             <li key={index} className="flex items-center text-richblack-5">
//               <span>{requirement}</span>
//               <button
//                 type="button"
//                 className="ml-2 text-xs text-pure-greys-300 "
//                 onClick={() => handleRemoveRequirement(index)}
//               >
//                 clear
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {errors[name] && (
//         <span className="ml-2 text-xs tracking-wide text-pink-200">
//           {label} is required
//         </span>
//       )}
//     </div>
//   )
// }


import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function RequirementsField({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [requirement, setRequirement] = useState("")
  const [requirementsList, setRequirementsList] = useState([])

  useEffect(() => {
    if (editCourse) {
      setRequirementsList(course?.instructions || [])
    }
    register(name, { required: true, validate: (value) => value?.length > 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue(name, requirementsList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList])

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement])
      setRequirement("")
    }
  }

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirementsList]
    updatedRequirements.splice(index, 1)
    setRequirementsList(updatedRequirements)
  }

  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor={name}>
        {label} <sup className="text-rose-400">*</sup>
      </label>
      
      {/* Input Group */}
      <div className="flex flex-col items-start gap-3">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Enter a required tool, resource, or prerequisite"
          className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="cursor-pointer rounded-lg border border-cyan-500/30 bg-cyan-950/50 px-5 py-2 text-xs sm:text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:bg-cyan-900/60 active:scale-95"
        >
          Add
        </button>
      </div>

      {/* Item List */}
      {requirementsList?.length > 0 && (
        <ul className="mt-3 space-y-2 pl-2">
          {requirementsList.map((requirement, index) => (
            <li key={index} className="flex items-center gap-x-2 text-xs sm:text-sm font-medium tracking-wide text-slate-100 group animate-fadeIn">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#00f0ff]" />
              <span className="flex-1 truncate">{requirement}</span>
              <button
                type="button"
                className="p-1 rounded-full text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                onClick={() => handleRemoveRequirement(index)}
                title="Remove Requirement"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Errors */}
      {errors[name] && (
        <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
          {label} is required
        </span>
      )}
    </div>
  )
}
