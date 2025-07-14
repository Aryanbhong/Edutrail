import React from "react";
import { Link,Links } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CButton from "../components/core/Button";
import banner from "../pages/background.mp4";
import CodeBlock from "../components/core/CodeBlock";
import "../App.css";
import TimeLineSection from "../components/core/TimeLineSection";
import LanguageLearning from "../components/core/LanguageLearningSection";
import Instructor from "../components/core/InstructorSection";
import Footer from "../components/common/footer"
import Explore from "../components/core/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home =()=>{
   return (
    <div>
     

 {/* section 1 */}
 <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white
  justify-between">
    <Link to={"/signup"}>
    <div className=" mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
    transition-all duration-200 hover:scale-95 w-fit">
       <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 hover:bg-richblack-900">
        <p>Become an Instructor</p>
        <FaArrowAltCircleRight />
       </div>
    </div>
    </Link>
  <div className="text-center text-4xl font-semibold  mt-6">
    Empowering Minds, With One
     <span className="text-blue-400 font-bold">Trail</span> at a <span className="text-blue-400 font-bold">Time</span></div>
 <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300 ml-12">
    
  Whether you are a beginner exploring the basics or an experienced developer looking to expand your expertise, EduTrail offers a structured and engaging pathway to success. With interactive lessons, real-world projects, and expert mentorship

 </div>
  <div className="flex flex-row gap-7 mt-8">
    <CButton active={true} linkto={"/signup"}>
      Learn More
    </CButton>
    <CButton active={false} linkto={"/login"}>
      Book a Demo
    </CButton>
    
  </div>

   <div className=" mx-3 my-10 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
    <video muted loop autoPlay src={banner}
    className="shadow-[20px_20px_rgba(255,255,255)]">

    </video>
   </div>

   
</div>

<div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent">
    <CodeBlock position={"lg:flex-row"} 
    heading={ <div className="text-4xl font-semibold">
        Unlock Your 
        <span className="text-blue-400"> Coding Potential </span>
        with our online courses
    </div>}
    subheading={"Our courses are designed an taught bu industry experts who have years of experience an"}
    ctabtn1={{
        btnText:"try it yourself",
        linkto:"/signup",
        active:true,
    }}
    ctabtn2={{
        btnText:"learn more",
        linkto:"/login",
        active:false,
    }}
    codeblock={
        `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random HTML</title>
    </head>
    <body>
    <h1>Welcome to EduTrail!</h1>
    </body>
    </html>`
    }
    codeColor={"text-yellow-25"}/>

    {/* codeblock--section 2 */}
    <div>
          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <span className="text-blue-400"> coding in seconds</span>
               
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={
               `import {React} from "react"
                import {coding Lessons} from "EduTrail"
                import {success} from "EduTrail"
                useEffect(()=> console.log(" lets get started"))
                const [concentrate, setConcentrate]=useState(true)
                return (
                <div>
                <p classname="text-lg font-bold">
                 Be ready for an Learning adventure
                 <span> Let's go... </span>
                </p>
                </div> )`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>


<Explore/>
</div>
{/* <section-2>--------</section-2> */}

<div className="bg-pure-greys-5 mb-32 text-richblack-700">
    <div className="homepage_bg h-[333px]">
  
  <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
    <div className="h-[150px]"></div>
   <div className="flex flex-row gap-7 text-white">
  <CButton
  active={true} linkto={"/signup"}>
   <div className="flex items-center gap-3"> 
    Explore full catlog
    <FaArrowAltCircleRight/>
   </div>
   </CButton>
   <CButton active={false} linkto={"/signup"}>
   <div> Learn more</div>
   </CButton>
   </div>

  </div>
    </div>

  <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
  

<div className="flex flex-row gap-5 mb-10 mt-[95px]">
    <div className="text-4xl font-semibold w-[45%] ml-8">
        Get the Skills you need for a <span className="text-blue-400"> Job that is in demand</span>
    </div>

    <div className=" mr-8 flex flex-col gap-10 w-[40%] items-start">
    <div className="text-[16px]">
     The modern edutrail is the dictates its own terms. Today, to be a competetive
     specialist requires more than profesional Skills
    </div>
    <CButton active={true} linkto={"/signup"}>
        <div>
            Learn More
        </div>
    </CButton>
   </div >

</div>
   
<TimeLineSection/>

  </div>

  <LanguageLearning/>



</div>
{/* section 3 */}

<div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

<Instructor/>
 <h2 className="text-center text-4xl font-semibold mt-10">Review from other learners</h2>
 <ReviewSlider/>
</div>

<Footer/>
</div>

   )
}

export default Home



