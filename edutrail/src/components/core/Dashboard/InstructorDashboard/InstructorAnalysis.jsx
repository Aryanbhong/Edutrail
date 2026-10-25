// // import React, { useState } from 'react'

// // import {Chart, registerables } from 'chart.js';
// // import {Pie} from "react-chartjs-2"


// // Chart.register(...registerables)


// // const InstructorAnalysis = ({courses}) => {

// //     const [ currChart , setCurrChart] = useState("students");


// //     //function to generate random colors
// //     const getDiffColors = (nColors) =>{
// //         const colors = [];
// //         for(let i=0; i< nColors;i++){
// //             const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},
// //             ${Math.floor(Math.random()* 256)}
// //             )`
// //             colors.push(color);
// //         }
// //         return colors;
// //     }

// //     // data for chart student 
// //     const studentChartData={
// //         labels: courses.map((courses) => courses.courseName),
// //         datasets: [
// //             {
// //                 data: courses.map((course) => course.totaStudentsEnrolled),
// //                 backgroundColor: getDiffColors(courses.length),
// //             }
// //         ]
// //     }
// //     // data for chart amount 
// //     const incomeChartData ={
// //         labels: courses.map((course) => course.CourseName),
// //         datasets: [
// //             {
// //                 data: courses.map((course) => course.totalAmountgenerated),
// //                 backgroundColor: getDiffColors(courses.length),
// //             }
// //         ]
// //     }

// //     // chart options 
// //     const options = {

// //     }
// //   return (
// //     <div>
// //      <p>Visualize</p>

// //      <div>
// //         <button
// //         onClick={()=> setCurrChart("students")}>
// //             Student
// //         </button>
// //         <button
// //         onClick={()=> setCurrChart("income")}>
// //             Income
// //         </button>
// //      </div>

// //      <div>
// //         <Pie
// //          data={currChart === "students" ? studentChartData : incomeChartData}
// //          options={options}
// //         />
// //      </div>
// //     </div>
// //   )
// // }

// // export default InstructorAnalysis

// import React, { useState } from 'react'
// import { Chart, registerables } from 'chart.js'
// import { Pie } from 'react-chartjs-2'

// Chart.register(...registerables)

// const InstructorAnalysis = ({ courses }) => {
//   const [currChart, setCurrChart] = useState("students")

//   // Generate vibrant neon colors fitting the Cyberpunk glass aesthetic
//   const getCyberNeonColors = (nColors) => {
//     const neonPalette = [
//       "rgba(0, 240, 255, 0.8)",   // Electric Cyan
//       "rgba(139, 92, 246, 0.8)",  // Cyber Purple
//       "rgba(244, 63, 94, 0.8)",   // Neon Rose
//       "rgba(245, 158, 11, 0.8)",  // Amber Neon
//       "rgba(16, 185, 129, 0.8)",  // Neon Emerald
//       "rgba(59, 130, 246, 0.8)",  // Electric Blue
//     ]
//     const colors = []
//     for (let i = 0; i < nColors; i++) {
//       colors.push(neonPalette[i % neonPalette.length])
//     }
//     return colors
//   }

//   // Data for Students Chart
//   const studentChartData = {
//     labels: courses.map((course) => course.courseName),
//     datasets: [
//       {
//         data: courses.map((course) => course.totalStudentsEnrolled || 0),
//         backgroundColor: getCyberNeonColors(courses.length),
//         borderColor: "#0B132B",
//         borderWidth: 3,
//         hoverOffset: 8,
//       },
//     ],
//   }

//   // Data for Income Chart
//   const incomeChartData = {
//     labels: courses.map((course) => course.courseName),
//     datasets: [
//       {
//         data: courses.map((course) => course.totalAmountGenerated || 0),
//         backgroundColor: getCyberNeonColors(courses.length),
//         borderColor: "#0B132B",
//         borderWidth: 3,
//         hoverOffset: 8,
//       },
//     ],
//   }

//   // Chart options with customized dark-mode typography & legends
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//         labels: {
//           color: '#cbd5e1', // slate-300
//           font: {
//             size: 11,
//             weight: '600',
//             family: 'Inter, sans-serif',
//           },
//           padding: 16,
//           usePointStyle: true,
//           pointStyle: 'circle',
//         },
//       },
//       tooltip: {
//         backgroundColor: '#030712',
//         titleColor: '#00f0ff',
//         bodyColor: '#ffffff',
//         borderColor: 'rgba(0, 240, 255, 0.3)',
//         borderWidth: 1,
//         padding: 12,
//         cornerRadius: 12,
//         boxPadding: 6,
//       },
//     },
//   }

//   return (
//     <div className="relative flex-1 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden min-h-[450px]">
      
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//       {/* Header and Filter Controls */}
//       <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
//         <p className="text-lg font-bold tracking-wide text-white">
//           Visual Analytics
//         </p>

//         <div className="flex gap-2 rounded-xl bg-[#030712]/70 p-1 border border-slate-800/80">
//           <button
//             type="button"
//             onClick={() => setCurrChart("students")}
//             className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
//               currChart === "students"
//                 ? "bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
//                 : "text-slate-400 hover:text-slate-200"
//             }`}
//           >
//             Students
//           </button>
//           <button
//             type="button"
//             onClick={() => setCurrChart("income")}
//             className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
//               currChart === "income"
//                 ? "bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
//                 : "text-slate-400 hover:text-slate-200"
//             }`}
//           >
//             Income
//           </button>
//         </div>
//       </div>

//       {/* Chart Canvas Area */}
//       <div className="relative my-4 flex-1 w-full min-h-[300px] flex items-center justify-center">
//         <Pie
//           data={currChart === "students" ? studentChartData : incomeChartData}
//           options={options}
//         />
//       </div>
//     </div>
//   )
// }

// export default InstructorAnalysis


import React, { useMemo, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import { FiBarChart2, FiUsers, FiDollarSign } from "react-icons/fi";

Chart.register(...registerables);

const InstructorAnalysis = ({ courses = [] }) => {
  const [currChart, setCurrChart] = useState("students");

  const palette = [
    "rgba(139, 92, 246, 0.9)",
    "rgba(99, 102, 241, 0.9)",
    "rgba(167, 139, 250, 0.85)",
    "rgba(129, 140, 248, 0.85)",
    "rgba(196, 181, 253, 0.85)",
    "rgba(79, 70, 229, 0.85)",
    "rgba(109, 40, 217, 0.85)",
    "rgba(165, 180, 252, 0.85)",
  ];

  const chartColors = useMemo(
    () => courses.map((_, index) => palette[index % palette.length]),
    [courses]
  );

  const studentChartData = useMemo(
    () => ({
      labels: courses.map((course) => course.courseName),
      datasets: [
        {
          label: "Students",
          data: courses.map(
            (course) => Number(course.totalStudentsEnrolled) || 0
          ),
          backgroundColor: chartColors,
          borderColor: "#111114",
          borderWidth: 3,
          hoverOffset: 8,
          spacing: 2,
        },
      ],
    }),
    [courses, chartColors]
  );

  const incomeChartData = useMemo(
    () => ({
      labels: courses.map((course) => course.courseName),
      datasets: [
        {
          label: "Income",
          data: courses.map(
            (course) => Number(course.totalAmountGenerated) || 0
          ),
          backgroundColor: chartColors,
          borderColor: "#111114",
          borderWidth: 3,
          hoverOffset: 8,
          spacing: 2,
        },
      ],
    }),
    [courses, chartColors]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 450,
      },
      layout: {
        padding: 12,
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#a1a1aa",
            font: {
              size: 11,
              weight: "500",
              family: "Inter, sans-serif",
            },
            padding: 18,
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 8,
            boxHeight: 8,
          },
        },
        tooltip: {
          backgroundColor: "#18181b",
          titleColor: "#fafafa",
          bodyColor: "#d4d4d8",
          borderColor: "rgba(139, 92, 246, 0.3)",
          borderWidth: 1,
          padding: 12,
          cornerRadius: 10,
          boxPadding: 5,
          callbacks: {
            label: (context) => {
              const label = context.label || "Course";
              const value = Number(context.raw) || 0;

              if (currChart === "income") {
                return ` ${label}: ₹${value.toLocaleString("en-IN")}`;
              }

              return ` ${label}: ${value.toLocaleString("en-IN")} students`;
            },
          },
        },
      },
    }),
    [currChart]
  );

  const isStudents = currChart === "students";
  const Icon = isStudents ? FiUsers : FiDollarSign;

  const total = courses.reduce((sum, course) => {
    const value = isStudents
      ? course.totalStudentsEnrolled
      : course.totalAmountGenerated;

    return sum + (Number(value) || 0);
  }, 0);

  return (
    <div className="relative flex min-h-[420px] w-full min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-4 font-sans shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:p-6">
      {/* Subtle accent */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-violet-600/[0.08] blur-[90px]" />
      <div className="pointer-events-none absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      {/* Header */}
      <div className="relative flex flex-col gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <FiBarChart2 size={19} />
          </div>

          <div>
            <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
              Visual Analytics
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Explore your course performance
            </p>
          </div>
        </div>

        {/* Chart selector */}
        <div
          className="flex w-full items-center gap-1 rounded-xl border border-white/[0.07] bg-black/20 p-1 sm:w-fit"
          role="group"
          aria-label="Choose chart metric"
        >
          <button
            type="button"
            onClick={() => setCurrChart("students")}
            aria-pressed={isStudents}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 sm:flex-none ${
              isStudents
                ? "border border-violet-400/20 bg-violet-500/15 text-violet-200 shadow-sm"
                : "border border-transparent text-zinc-500 hover:text-zinc-200"
            }`}
          >
            <FiUsers size={14} />
            Students
          </button>

          <button
            type="button"
            onClick={() => setCurrChart("income")}
            aria-pressed={!isStudents}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 sm:flex-none ${
              !isStudents
                ? "border border-violet-400/20 bg-violet-500/15 text-violet-200 shadow-sm"
                : "border border-transparent text-zinc-500 hover:text-zinc-200"
            }`}
          >
            <FiDollarSign size={14} />
            Income
          </button>
        </div>
      </div>

      {/* Chart summary */}
      <div className="relative mt-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-zinc-500">
            {isStudents ? "Total enrollments" : "Total income"}
          </p>

          <p className="mt-1 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {isStudents
              ? total.toLocaleString("en-IN")
              : `₹${total.toLocaleString("en-IN")}`}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
          <Icon size={18} />
        </div>
      </div>

      {/* Chart */}
      <div className="relative mt-5 min-h-[250px] flex-1 sm:min-h-[290px]">
        {courses.length > 0 && total > 0 ? (
          <Pie
            data={isStudents ? studentChartData : incomeChartData}
            options={options}
          />
        ) : (
          <div className="flex h-full min-h-[250px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.08] px-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
              <Icon size={21} />
            </div>

            <p className="mt-4 text-sm font-medium text-zinc-300">
              No {isStudents ? "enrollment" : "income"} data yet
            </p>

            <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-500">
              {isStudents
                ? "Student enrollment data will appear here as learners join your courses."
                : "Income data will appear here when your courses start generating revenue."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorAnalysis;

