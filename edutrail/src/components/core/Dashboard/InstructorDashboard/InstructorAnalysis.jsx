// import React, { useState } from 'react'

// import {Chart, registerables } from 'chart.js';
// import {Pie} from "react-chartjs-2"


// Chart.register(...registerables)


// const InstructorAnalysis = ({courses}) => {

//     const [ currChart , setCurrChart] = useState("students");


//     //function to generate random colors
//     const getDiffColors = (nColors) =>{
//         const colors = [];
//         for(let i=0; i< nColors;i++){
//             const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},
//             ${Math.floor(Math.random()* 256)}
//             )`
//             colors.push(color);
//         }
//         return colors;
//     }

//     // data for chart student 
//     const studentChartData={
//         labels: courses.map((courses) => courses.courseName),
//         datasets: [
//             {
//                 data: courses.map((course) => course.totaStudentsEnrolled),
//                 backgroundColor: getDiffColors(courses.length),
//             }
//         ]
//     }
//     // data for chart amount 
//     const incomeChartData ={
//         labels: courses.map((course) => course.CourseName),
//         datasets: [
//             {
//                 data: courses.map((course) => course.totalAmountgenerated),
//                 backgroundColor: getDiffColors(courses.length),
//             }
//         ]
//     }

//     // chart options 
//     const options = {

//     }
//   return (
//     <div>
//      <p>Visualize</p>

//      <div>
//         <button
//         onClick={()=> setCurrChart("students")}>
//             Student
//         </button>
//         <button
//         onClick={()=> setCurrChart("income")}>
//             Income
//         </button>
//      </div>

//      <div>
//         <Pie
//          data={currChart === "students" ? studentChartData : incomeChartData}
//          options={options}
//         />
//      </div>
//     </div>
//   )
// }

// export default InstructorAnalysis

import React, { useState } from 'react'
import { Chart, registerables } from 'chart.js'
import { Pie } from 'react-chartjs-2'

Chart.register(...registerables)

const InstructorAnalysis = ({ courses }) => {
  const [currChart, setCurrChart] = useState("students")

  // Generate vibrant neon colors fitting the Cyberpunk glass aesthetic
  const getCyberNeonColors = (nColors) => {
    const neonPalette = [
      "rgba(0, 240, 255, 0.8)",   // Electric Cyan
      "rgba(139, 92, 246, 0.8)",  // Cyber Purple
      "rgba(244, 63, 94, 0.8)",   // Neon Rose
      "rgba(245, 158, 11, 0.8)",  // Amber Neon
      "rgba(16, 185, 129, 0.8)",  // Neon Emerald
      "rgba(59, 130, 246, 0.8)",  // Electric Blue
    ]
    const colors = []
    for (let i = 0; i < nColors; i++) {
      colors.push(neonPalette[i % neonPalette.length])
    }
    return colors
  }

  // Data for Students Chart
  const studentChartData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled || 0),
        backgroundColor: getCyberNeonColors(courses.length),
        borderColor: "#0B132B",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  }

  // Data for Income Chart
  const incomeChartData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated || 0),
        backgroundColor: getCyberNeonColors(courses.length),
        borderColor: "#0B132B",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  }

  // Chart options with customized dark-mode typography & legends
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#cbd5e1', // slate-300
          font: {
            size: 11,
            weight: '600',
            family: 'Inter, sans-serif',
          },
          padding: 16,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: '#030712',
        titleColor: '#00f0ff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(0, 240, 255, 0.3)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 12,
        boxPadding: 6,
      },
    },
  }

  return (
    <div className="relative flex-1 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden min-h-[450px]">
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Header and Filter Controls */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <p className="text-lg font-bold tracking-wide text-white">
          Visual Analytics
        </p>

        <div className="flex gap-2 rounded-xl bg-[#030712]/70 p-1 border border-slate-800/80">
          <button
            type="button"
            onClick={() => setCurrChart("students")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
              currChart === "students"
                ? "bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Students
          </button>
          <button
            type="button"
            onClick={() => setCurrChart("income")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
              currChart === "income"
                ? "bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Income
          </button>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative my-4 flex-1 w-full min-h-[300px] flex items-center justify-center">
        <Pie
          data={currChart === "students" ? studentChartData : incomeChartData}
          options={options}
        />
      </div>
    </div>
  )
}

export default InstructorAnalysis
