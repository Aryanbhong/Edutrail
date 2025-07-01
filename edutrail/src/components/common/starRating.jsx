// import React, { useEffect, useState } from "react"
// import {
//   TiStarFullOutline,
//   TiStarHalfOutline,
//   TiStarOutline,
// } from "react-icons/ti"

// export default function RatingStars({ Review_Count, Star_Size }) {
//   const [starCount, SetStarCount] = useState({
//     full: 0,
//     half: 0,
//     empty: 0,
//   })

//   useEffect(() => {
//     const wholeStars = Math.floor(Review_Count) || 0
//     SetStarCount({
//       full: wholeStars,
//       half: Number.isInteger(Review_Count) ? 0 : 1,
//       empty: Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars,
//     })
//   }, [Review_Count])
//   return (
//     <div className="flex gap-1 text-yellow-100">
//       {[...new Array(starCount.full)].map((_, i) => {
//         return <TiStarFullOutline key={i} size={Star_Size || 20} />
//       })}
//       {[...new Array(starCount.half)].map((_, i) => {
//         return <TiStarHalfOutline key={i} size={Star_Size || 20} />
//       })}
//       {[...new Array(starCount.empty)].map((_, i) => {
//         return <TiStarOutline key={i} size={Star_Size || 20} />
//       })}
//     </div>
//   )
// }

import React, { useState } from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

export default function RatingStars({ Star_Size = 20, onRatingChange }) {
  const [rating, setRating] = useState(0)

  const handleClick = (index) => {
    setRating(index + 1) // 1-based index
    if (onRatingChange) {
      onRatingChange(index + 1)
    }
  }

  return (
    <div className="flex gap-1 text-yellow-100">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleClick(i)} className="cursor-pointer">
          {i < rating ? (
            <TiStarFullOutline size={Star_Size} />
          ) : (
            <TiStarOutline size={Star_Size} />
          )}
        </span>
      ))}
    </div>
  )
}
