import React, { useState } from 'react'

import {Chart, registerables } from 'chart.js';
import {Pie} from "react-chartjs-2"


Chart.register(...registerables)


const InstructorAnalysis = ({courses}) => {

    const [ currChart , setCurrChart] = useState("students");


    //function to generate random colors
    const getDiffColors = (nColors) =>{
        const colors = [];
        for(let i=0; i< nColors;i++){
            const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},
            ${Math.floor(Math.random()* 256)}
            )`
            colors.push(color);
        }
        return colors;
    }

    // data for chart student 
    const studentChartData={
        labels: courses.map((courses) => courses.courseName),
        datasets: [
            {
                data: courses.map((course) => course.totaStudentsEnrolled),
                backgroundColor: getDiffColors(courses.length),
            }
        ]
    }
    // data for chart amount 
    const incomeChartData ={
        labels: courses.map((course) => course.CourseName),
        datasets: [
            {
                data: courses.map((course) => course.totalAmountgenerated),
                backgroundColor: getDiffColors(courses.length),
            }
        ]
    }

    // chart options 
    const options = {

    }
  return (
    <div>
     <p>Visualize</p>

     <div>
        <button
        onClick={()=> setCurrChart("students")}>
            Student
        </button>
        <button
        onClick={()=> setCurrChart("income")}>
            Income
        </button>
     </div>

     <div>
        <Pie
         data={currChart === "students" ? studentChartData : incomeChartData}
         options={options}
        />
     </div>
    </div>
  )
}

export default InstructorAnalysis
