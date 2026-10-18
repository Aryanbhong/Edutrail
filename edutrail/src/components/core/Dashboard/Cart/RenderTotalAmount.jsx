
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import IconBtn from "../../../common/IconBtn"
// import { buyCourse } from "../../../../services/opreations/featuresStudentApi";


// export default function RenderTotalAmount() {
//   const { total, cart } = useSelector((state) => state.cart);
//   const { token } = useSelector((state) => state.auth);
//   const {user} = useSelector((state) => state.profile)
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
 
//   const handleBuyCourse = () => {
//     const courses = cart.map((course) => course._id)
//     buyCourse(token, courses, user, navigate, dispatch)
//     // buyCourse(token, courses, user, navigate, dispatch);
//     console.log(" user details", user)
//   }

//   return (
//     <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
//       <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
//       <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
//       <IconBtn
//         text="Buy Now"
//         onclick={handleBuyCourse}
//         customClasses="w-full justify-center"
//       />
//     </div>
//   )
// }

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import IconBtn from "../../../common/IconBtn"
import { buyCourse } from "../../../../services/opreations/featuresStudentApi"

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id)
    buyCourse(token, courses, user, navigate, dispatch)
  }

  return (
    <div className="relative min-w-[280px] rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Label */}
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Total Amount:
      </p>

      {/* Electric Price Header */}
      <p className="mb-6 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        ₹ {total}
      </p>

      {/* Primary Action Button */}
      <IconBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full justify-center text-center font-semibold"
      />
    </div>
  )
}
