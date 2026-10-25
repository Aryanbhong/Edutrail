// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { Outlet } from "react-router-dom";
// // import Sidebar from "../components/core/Dashboard/Sidebar";
// // const Dashboard = () =>{

// //     const {loading: authLoading} = useSelector( (state) => state.auth);
// //     const {loading: profileLoading} = useSelector((state) => state.profile);

// //     if(profileLoading || authLoading){
// //         return(
// //             <div className="mt-10">
// //                 Loading.....
// //             </div>
// //         )
// //     }
// //     return(
// //         <div className="relative flex min-h-[calc(100vh-3.5rem)]">
// //             <Sidebar/>
// //             <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
// //         <div className="mx-auto w-11/12 max-w-[1000px] py-10">
// //           <Outlet />
// //         </div>
// //       </div>
// //         </div>
// //     )
// // }

// // export default Dashboard


// import React from "react";
// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import { FaGraduationCap } from "react-icons/fa";
// import Sidebar from "../components/core/Dashboard/Sidebar";

// const Dashboard = () => {
//   const { loading: authLoading } = useSelector((state) => state.auth);
//   const { loading: profileLoading } = useSelector((state) => state.profile);

//   if (profileLoading || authLoading) {
//     return (
//       <div className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden bg-[#070B18] px-4 text-white">
//         {/* Ambient glow */}
//         <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-[110px]" />
//         <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

//         <div className="relative flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
//           <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10">
//             <FaGraduationCap className="text-3xl text-cyan-300" />
//             <span className="absolute inset-0 animate-ping rounded-2xl border border-cyan-300/20" />
//           </div>

//           <h2 className="mt-6 text-xl font-bold tracking-wide">
//             Preparing your dashboard
//           </h2>

//           <p className="mt-2 text-sm leading-6 text-slate-400">
//             Getting everything ready for your learning journey.
//           </p>

//           <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
//             <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex min-h-[calc(100vh-3.5rem)] overflow-hidden bg-[#070B18] text-white">
//       {/* Background effects */}
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />
//         <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
//         <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/[0.06] blur-[120px]" />
//       </div>

//       {/* Existing sidebar and navigation */}
//       <div className="relative z-20 shrink-0">
//         <Sidebar />
//       </div>

//       {/* Dashboard content */}
//       <main className="relative z-10 h-[calc(100vh-3.5rem)] min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
//         <div className="mx-auto w-11/12 max-w-[1100px] py-6 sm:py-8 lg:py-10">
//           <div className="min-h-[calc(100vh-8rem)] rounded-2xl border border-white/[0.07] bg-white/[0.015] p-3 shadow-[0_15px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-5 lg:p-7">
//             <Outlet />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return (
      <div className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden bg-[#09090b] px-4 font-sans text-white">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/[0.08] blur-[100px]" />

        <div className="relative flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/[0.08] bg-[#111114] px-8 py-10 text-center shadow-2xl shadow-black/30">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08]">
            <FaGraduationCap className="text-3xl text-violet-300" />
            <div className="absolute inset-0 animate-ping rounded-2xl border border-violet-400/20" />
          </div>

          <h2 className="mt-6 text-xl font-bold tracking-tight text-white">
            Preparing your dashboard
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Getting everything ready for your learning journey.
          </p>

          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-violet-400" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] overflow-hidden bg-[#09090b] font-sans text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-80 w-80 rounded-full bg-violet-500/[0.04] blur-[120px]" />

      {/* Existing sidebar */}
      <aside className="relative z-20 shrink-0 border-r border-white/[0.06] bg-[#0d0d10]">
        <Sidebar />
      </aside>

      {/* Dashboard content */}
      <main className="relative z-10 h-[calc(100vh-3.5rem)] min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
        <div className="mx-auto w-full max-w-[1440px] px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
          {/* Content container */}
          <div className="min-h-[calc(100vh-8rem)] rounded-2xl border border-white/[0.07] bg-[#111114]/90 p-3 shadow-xl shadow-black/20 sm:rounded-3xl sm:p-5 lg:p-8">
            <Outlet />
          </div>

          {/* Footer note */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-2 pt-5 text-xs text-zinc-600">
            <span>Keep learning. Keep growing.</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Your learning space
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
