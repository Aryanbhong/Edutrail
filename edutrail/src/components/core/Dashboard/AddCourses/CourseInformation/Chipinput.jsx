// // Importing React hook for managing component state
// import { useEffect, useState } from "react"
// // Importing React icon component
// import { MdClose } from "react-icons/md"
// import { useSelector } from "react-redux"

// // Defining a functional component ChipInput
// export default function ChipInput({
//   // Props to be passed to the component
//   label,
//   name,
//   placeholder,
//   register,
//   errors,
//   setValue,
//   getValues,
// }) {
//   const { editCourse, course } = useSelector((state) => state.course)

//   // Setting up state for managing chips array
//   const [chips, setChips] = useState([])

//   useEffect(() => {
//     if (editCourse) {
//       // console.log(course)
//       setChips(course?.tag)
//     }
//     register(name, { required: true, validate: (value) => value.length > 0 })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   useEffect(() => {
//     setValue(name, chips)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [chips])

//   // Function to handle user input when chips are added
//   const handleKeyDown = (event) => {
//     // Check if user presses "Enter" or ","
//     if (event.key === "Enter" || event.key === ",") {
//       // Prevent the default behavior of the event
//       event.preventDefault()
//       // Get the input value and remove any leading/trailing spaces
//       const chipValue = event.target.value.trim()
//       // Check if the input value exists and is not already in the chips array
//       if (chipValue && !chips.includes(chipValue)) {
//         // Add the chip to the array and clear the input
//         const newChips = [...chips, chipValue]
//         setChips(newChips)
//         event.target.value = ""
//       }
//     }
//   }

//   // Function to handle deletion of a chip
//   const handleDeleteChip = (chipIndex) => {
//     // Filter the chips array to remove the chip with the given index
//     const newChips = chips.filter((_, index) => index !== chipIndex)
//     setChips(newChips)
//   }

//   // Render the component
//   return (
//     <div className="flex flex-col space-y-2">
//       {/* Render the label for the input */}
//       <label className="text-sm text-richblack-5" htmlFor={name}>
//         {label} <sup className="text-pink-200">*</sup>
//       </label>
//       {/* Render the chips and input */}
//       <div className="flex w-full flex-wrap gap-y-2">
//         {/* Map over the chips array and render each chip */}
//         {chips.map((chip, index) => (
//           <div
//             key={index}
//             className="m-1 flex items-center rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5"
//           >
//             {/* Render the chip value */}
//             {chip}
//             {/* Render the button to delete the chip */}
//             <button
//               type="button"
//               className="ml-2 focus:outline-none"
//               onClick={() => handleDeleteChip(index)}
//             >
//               <MdClose className="text-sm" />
//             </button>
//           </div>
//         ))}
//         {/* Render the input for adding new chips */}
//         <input
//           id={name}
//           name={name}
//           type="text"
//           placeholder={placeholder}
//           onKeyDown={handleKeyDown}
//           className="form-style w-full px-4 py-2 bg-richblack-700 text-white rounded-md border-spacing-2 border-richblack-100"
//         />
//       </div>
//       {/* Render an error message if the input is required and not filled */}
//       {errors[name] && (
//         <span className="ml-2 text-xs tracking-wide text-pink-200">
//           {label} is required
//         </span>
//       )}
//     </div>
//   )
// }


import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux"

export default function ChipInput({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [chips, setChips] = useState([])

  useEffect(() => {
    if (editCourse) {
      // Safely parse tags if they arrive as an array or JSON string
      const initialTags = Array.isArray(course?.tag)
        ? course?.tag
        : typeof course?.tag === "string"
        ? JSON.parse(course?.tag)
        : []
      setChips(initialTags)
    }
    register(name, { required: true, validate: (value) => value.length > 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue(name, chips)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chips])

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      const chipValue = event.target.value.trim()
      if (chipValue && !chips.includes(chipValue)) {
        const newChips = [...chips, chipValue]
        setChips(newChips)
        event.target.value = ""
      }
    }
  }

  const handleDeleteChip = (chipIndex) => {
    const newChips = chips.filter((_, index) => index !== chipIndex)
    setChips(newChips)
  }

  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor={name}>
        {label} <sup className="text-rose-400">*</sup>
      </label>

      {/* Chips Container */}
      <div className="flex w-full flex-wrap gap-2 rounded-xl border border-slate-700/80 bg-[#030712]/70 p-2 backdrop-blur-md focus-within:border-cyan-400 focus-within:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
        {/* Render Chips */}
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center gap-x-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)] animate-fadeIn"
          >
            <span>{chip}</span>
            <button
              type="button"
              className="p-0.5 rounded-full text-cyan-400 hover:text-rose-400 hover:bg-rose-950/40 transition-colors duration-200 focus:outline-none cursor-pointer"
              onClick={() => handleDeleteChip(index)}
            >
              <MdClose className="text-xs" />
            </button>
          </div>
        ))}

        {/* Input */}
        <input
          id={name}
          name={name}
          type="text"
          placeholder={chips.length === 0 ? placeholder : "Add tag..."}
          onKeyDown={handleKeyDown}
          className="flex-1 min-w-[140px] bg-transparent px-2 py-1 text-sm text-slate-100 placeholder-slate-500 outline-none"
        />
      </div>

      {/* Errors */}
      {errors[name] && (
        <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
          {label} is required
        </span>
      )}
    </div>
  )
}
