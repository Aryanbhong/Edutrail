// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { RxDropdownMenu } from "react-icons/rx";
// import { FaPlus } from "react-icons/fa"
// import { AiFillCaretDown } from "react-icons/ai"
// import { MdEdit } from "react-icons/md";
// import { RiDeleteBin6Line } from "react-icons/ri"
// import SubSectionModal from './SubSectionModal';
// import { deleteSection, deleteSubSection } from '../../../../../services/opreations/courseDetails';
// import { setCourse } from '../../../../../slices/courseSlice';
// import ConfirmationModal from '../../../../common/ConfirmationModal';

// const NestedView = ({handleChangeEditSectionName}) => {

//     const {course} = useSelector((state)=> state.course);
//     const {token} = useSelector((state)=> state.auth);
//     const dispatch = useDispatch();

//     const [addSubSection, setAddSubSection] = useState(null);
//     const [viewSubSection, setViewSubSection] = useState(null);
//     const [editSubSection, setEditSubSection] = useState(null);

//     const [confirmationModal , setConfirmationModal] = useState(null);
    
//     const handleDeleleSection= async (sectionId) =>{
//       const result = await deleteSection({
//         sectionId,
//         courseid: course._id,
//         token,
//       })
//       console.log(sectionId, course._id);


//       if(result){
//         dispatch(setCourse(result))
//       }
//       setConfirmationModal(null);
//     }



//     async function handleDeleteSubSection(subSectionId,sectionId){
//     const result = await deleteSubSection({subSectionId, sectionId, token});
//     if(result){
//     const updatedCourseContent = course.courseContent.map((section)=>
//     section._id === sectionId ? result : section);
//     const updatedCourse= {...course, courseContent: updatedCourseContent};
//     dispatch(setCourse(updatedCourse));
//     }
//     setConfirmationModal(null);
//     }

   
//   return (

// <>
//       <div
//         className="rounded-lg bg-richblack-700 p-6 px-8"
//         id="nestedViewContainer"
//       >
//         {course?.courseContent?.map((section) => (
//           // Section Dropdown
//           <details key={section._id} open>
//             {/* Section Dropdown Content */}
//             <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
//               <div className="flex items-center gap-x-3">
//                 <RxDropdownMenu className="text-2xl text-richblack-50" />
//                 <p className="font-semibold text-richblack-50">
//                   {section.sectionName}
//                 </p>
//               </div>
//               <div className="flex items-center gap-x-3">
//                 <button
//                   onClick={() =>
//                     handleChangeEditSectionName(
//                       section._id,
//                       section.sectionName
//                     )
//                   }
//                 >
//                   <MdEdit className="text-xl text-richblack-300" />
//                 </button>
//                 <button
//                   onClick={() =>
//                     setConfirmationModal({
//                       text1: "Delete this Section?",
//                       text2: "All the lectures in this section will be deleted",
//                       btn1Text: "Delete",
//                       btn2Text: "Cancel",
//                       btn1Handler: () => handleDeleleSection(section._id),
//                       btn2Handler: () => setConfirmationModal(null),
//                     })
//                   }
//                 >
//                   <RiDeleteBin6Line className="text-xl text-richblack-300" />
//                 </button>
//                 <span className="font-medium text-richblack-300">|</span>
//                 <AiFillCaretDown className={`text-xl text-richblack-300`} />
//               </div>
//             </summary>
//             <div className="px-6 pb-4">
//               {/* Render All Sub Sections Within a Section */}
//               {section.subSection.map((data) => (
//                 <div
//                   key={data?._id}
//                   onClick={() => setViewSubSection(data)}
//                   className="flex cursor-pointer items-center justify-between gap-x-3 border-b-2 border-b-richblack-600 py-2"
//                 >
//                   <div className="flex items-center gap-x-3 py-2 ">
//                     <RxDropdownMenu className="text-2xl text-richblack-50" />
//                     <p className="font-semibold text-richblack-50">
//                       {data.title}
//                     </p>
//                   </div>
//                   <div
//                     onClick={(e) => e.stopPropagation()}
//                     className="flex items-center gap-x-3"
//                   >
//                     <button
//                       onClick={() =>
//                         setEditSubSection({ ...data, sectionId: section._id })
//                       }
//                     >
//                       <MdEdit className="text-xl text-richblack-300" />
//                     </button>
//                     <button
//                       onClick={() =>
//                         setConfirmationModal({
//                           text1: "Delete this Sub-Section?",
//                           text2: "This lecture will be deleted",
//                           btn1Text: "Delete",
//                           btn2Text: "Cancel",
//                           btn1Handler: () =>
//                             handleDeleteSubSection(data._id, section._id),
//                           btn2Handler: () => setConfirmationModal(null),
//                         })
//                       }
//                     >
//                       <RiDeleteBin6Line className="text-xl text-richblack-300" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               {/* Add New Lecture to Section */}
//               <button
//                 onClick={() => setAddSubSection(section._id)}
//                 className="mt-3 flex items-center gap-x-1 text-yellow-50"
//               >
//                 <FaPlus className="text-lg" />
//                 <p>Add Lecture</p>
//               </button>
//             </div>
//           </details>
//         ))}
//       </div>
//       {/* Modal Display */}
//       {addSubSection ? (
//         <SubSectionModal
//           modalData={addSubSection}
//           setModalData={setAddSubSection}
//           add={true}
//         />
//       ) : viewSubSection ? (
//         <SubSectionModal
//           modalData={viewSubSection}
//           setModalData={setViewSubSection}
//           view={true}
//         />
//       ) : editSubSection ? (
//         <SubSectionModal
//           modalData={editSubSection}
//           setModalData={setEditSubSection}
//           edit={true}
//         />
//       ) : (
//         <></>
//       )}
//       {/* Confirmation Modal */}
//       {confirmationModal ? (
//         <ConfirmationModal modalData={confirmationModal} />
//       ) : (
//         <></>
//       )}
//     </>
//   )
// }

// export default NestedView

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxDropdownMenu } from "react-icons/rx"
import { FaPlus } from "react-icons/fa"
import { AiFillCaretDown } from "react-icons/ai"
import { MdEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"

import SubSectionModal from './SubSectionModal'
import { deleteSection, deleteSubSection } from '../../../../../services/opreations/courseDetails'
import { setCourse } from '../../../../../slices/courseSlice'
import ConfirmationModal from '../../../../common/ConfirmationModal'

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [addSubSection, setAddSubSection] = useState(null)
  const [viewSubSection, setViewSubSection] = useState(null)
  const [editSubSection, setEditSubSection] = useState(null)

  const [confirmationModal, setConfirmationModal] = useState(null)

  const handleDeleleSection = async (sectionId) => {
    const result = await deleteSection({
      sectionId,
      courseid: course._id,
      token,
    })

    if (result) {
      dispatch(setCourse(result))
    }
    setConfirmationModal(null)
  }

  async function handleDeleteSubSection(subSectionId, sectionId) {
    const result = await deleteSubSection({ subSectionId, sectionId, token })
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setConfirmationModal(null)
  }

  return (
    <>
      <div
        className="rounded-2xl border border-cyan-500/20 bg-[#0B132B]/60 p-6 sm:px-8 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
        id="nestedViewContainer"
      >
        {course?.courseContent?.map((section) => (
          /* Section Accordion Details */
          <details key={section._id} open className="group my-2">
            {/* Section Summary Header */}
            <summary className="flex cursor-pointer items-center justify-between rounded-xl border border-cyan-500/20 bg-[#030712]/60 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-950/20">
              <div className="flex items-center gap-x-3">
                <RxDropdownMenu className="text-2xl text-cyan-400 drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]" />
                <p className="font-bold text-sm sm:text-base text-slate-100 tracking-wide">
                  {section.sectionName}
                </p>
              </div>

              <div className="flex items-center gap-x-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleChangeEditSectionName(section._id, section.sectionName)
                  }}
                  className="p-1 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 hover:drop-shadow-[0_0_6px_#00f0ff] transition-all duration-200"
                >
                  <MdEdit className="text-lg sm:text-xl" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setConfirmationModal({
                      text1: "Delete this Section?",
                      text2: "All the lectures in this section will be deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => handleDeleleSection(section._id),
                      btn2Handler: () => setConfirmationModal(null),
                    })
                  }}
                  className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 hover:drop-shadow-[0_0_6px_rgba(244,63,94,0.6)] transition-all duration-200"
                >
                  <RiDeleteBin6Line className="text-lg sm:text-xl" />
                </button>

                <span className="font-medium text-slate-700">|</span>

                <AiFillCaretDown className="text-lg text-cyan-400 transition-transform duration-300 group-open:rotate-180" />
              </div>
            </summary>

            {/* Sub-sections Container */}
            <div className="px-2 sm:px-6 py-3 space-y-2">
              {section?.subSection?.map((data) => (
                <div
                  key={data?._id}
                  onClick={() => setViewSubSection(data)}
                  className="flex cursor-pointer items-center justify-between gap-x-3 rounded-xl border border-cyan-500/10 bg-slate-900/50 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                >
                  <div className="flex items-center gap-x-3">
                    <RxDropdownMenu className="text-xl text-cyan-400/80" />
                    <p className="font-medium text-xs sm:text-sm text-slate-200 tracking-wide">
                      {data.title}
                    </p>
                  </div>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-x-2"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setEditSubSection({ ...data, sectionId: section._id })
                      }
                      className="p-1 text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      <MdEdit className="text-lg" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setConfirmationModal({
                          text1: "Delete this Sub-Section?",
                          text2: "This lecture will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () =>
                            handleDeleteSubSection(data._id, section._id),
                          btn2Handler: () => setConfirmationModal(null),
                        })
                      }
                      className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      <RiDeleteBin6Line className="text-lg" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Lecture Button */}
              <button
                type="button"
                onClick={() => setAddSubSection(section._id)}
                className="mt-3 flex items-center gap-x-2 rounded-xl border border-cyan-500/30 bg-cyan-950/30 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.15)] transition-all duration-300 hover:bg-cyan-900/50 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95 cursor-pointer"
              >
                <FaPlus className="text-xs text-cyan-400 drop-shadow-[0_0_6px_#00f0ff]" />
                <span>Add Lecture</span>
              </button>
            </div>
          </details>
        ))}
      </div>

      {/* SubSection Modals */}
      {addSubSection ? (
        <SubSectionModal
          modalData={addSubSection}
          setModalData={setAddSubSection}
          add={true}
        />
      ) : viewSubSection ? (
        <SubSectionModal
          modalData={viewSubSection}
          setModalData={setViewSubSection}
          view={true}
        />
      ) : editSubSection ? (
        <SubSectionModal
          modalData={editSubSection}
          setModalData={setEditSubSection}
          edit={true}
        />
      ) : null}

      {/* Confirmation Modal */}
      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </>
  )
}

export default NestedView
