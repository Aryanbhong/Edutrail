// // import React, { useEffect, useState } from "react"
// // import {
// //   TiStarFullOutline,
// //   TiStarHalfOutline,
// //   TiStarOutline,
// // } from "react-icons/ti"

// // export default function RatingStars({ Review_Count, Star_Size }) {
// //   const [starCount, SetStarCount] = useState({
// //     full: 0,
// //     half: 0,
// //     empty: 0,
// //   })

// //   useEffect(() => {
// //     const wholeStars = Math.floor(Review_Count) || 0
// //     SetStarCount({
// //       full: wholeStars,
// //       half: Number.isInteger(Review_Count) ? 0 : 1,
// //       empty: Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars,
// //     })
// //   }, [Review_Count])
// //   return (
// //     <div className="flex gap-1 text-yellow-100">
// //       {[...new Array(starCount.full)].map((_, i) => {
// //         return <TiStarFullOutline key={i} size={Star_Size || 20} />
// //       })}
// //       {[...new Array(starCount.half)].map((_, i) => {
// //         return <TiStarHalfOutline key={i} size={Star_Size || 20} />
// //       })}
// //       {[...new Array(starCount.empty)].map((_, i) => {
// //         return <TiStarOutline key={i} size={Star_Size || 20} />
// //       })}
// //     </div>
// //   )
// // }

// import React, { useState } from "react"
// import {
//   TiStarFullOutline,
//   TiStarHalfOutline,
//   TiStarOutline,
// } from "react-icons/ti"

// export default function RatingStars({ Star_Size = 20, onRatingChange }) {
//   const [rating, setRating] = useState(0)

//   const handleClick = (index) => {
//     setRating(index + 1) // 1-based index
//     if (onRatingChange) {
//       onRatingChange(index + 1)
//     }
//   }

//   return (
//     <div className="flex gap-1 text-yellow-100">
//       {[...Array(5)].map((_, i) => (
//         <span key={i} onClick={() => handleClick(i)} className="cursor-pointer">
//           {i < rating ? (
//             <TiStarFullOutline size={Star_Size} />
//           ) : (
//             <TiStarOutline size={Star_Size} />
//           )}
//         </span>
//       ))}
//     </div>
//   )
// }

import React, { useState } from "react"
import {
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti"

export default function RatingStars({ Star_Size = 22, onRatingChange, Review_Count }) {
  const [rating, setRating] = useState(Review_Count || 0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (index) => {
    const selectedRating = index + 1
    setRating(selectedRating)
    if (onRatingChange) {
      onRatingChange(selectedRating)
    }
  }

  const activeDisplayRating = hoverRating || rating

  return (
    <div className="inline-flex items-center gap-x-1.5 p-2 rounded-xl bg-[#0B132B]/50 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.3)]">
      {[...Array(5)].map((_, i) => {
        const isStarActive = i < activeDisplayRating

        return (
          <span
            key={i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHoverRating(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
            className="cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-95"
          >
            {isStarActive ? (
              <TiStarFullOutline
                size={Star_Size}
                className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-300"
              />
            ) : (
              <TiStarOutline
                size={Star_Size}
                className="text-slate-600 hover:text-cyan-400/60 transition-colors duration-200"
              />
            )}
          </span>
        )
      })}
    </div>
  )
}
