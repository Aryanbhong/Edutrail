// import React from "react";
// import { Link,Links } from "react-router-dom";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import CButton from "../components/core/Button";
// import banner from "../pages/background.mp4";
// import CodeBlock from "../components/core/CodeBlock";
// import "../App.css";
// import TimeLineSection from "../components/core/TimeLineSection";
// import LanguageLearning from "../components/core/LanguageLearningSection";
// import Instructor from "../components/core/InstructorSection";
// import Footer from "../components/common/footer"
// import Explore from "../components/core/ExploreMore";
// import ReviewSlider from "../components/common/ReviewSlider";

// const Home =()=>{
//    return (
//     <div>
     

//  {/* section 1 */}
//  <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white
//   justify-between">
//     <Link to={"/signup"}>
//     <div className=" mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
//     transition-all duration-200 hover:scale-95 w-fit">
//        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 hover:bg-richblack-900">
//         <p>Become an Instructor</p>
//         <FaArrowAltCircleRight />
//        </div>
//     </div>
//     </Link>
//   <div className="text-center text-4xl font-semibold  mt-6">
//     Empowering Minds, With One
//      <span className="text-blue-400 font-bold">Trail</span> at a <span className="text-blue-400 font-bold">Time</span></div>
//  <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300 ml-12">
    
//   Whether you are a beginner exploring the basics or an experienced developer looking to expand your expertise, EduTrail offers a structured and engaging pathway to success. With interactive lessons, real-world projects, and expert mentorship

//  </div>
//   <div className="flex flex-row gap-7 mt-8">
//     <CButton active={true} linkto={"/signup"}>
//       Learn More
//     </CButton>
//     <CButton active={false} linkto={"/login"}>
//       Book a Demo
//     </CButton>
    
//   </div>

//    <div className=" mx-3 my-10 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
//     <video muted loop autoPlay src={banner}
//     className="shadow-[20px_20px_rgba(255,255,255)]">

//     </video>
//    </div>

   
// </div>

// <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent">
//     <CodeBlock position={"lg:flex-row"} 
//     heading={ <div className="text-4xl font-semibold">
//         Unlock Your 
//         <span className="text-blue-400"> Coding Potential </span>
//         with our online courses
//     </div>}
//     subheading={"Our courses are designed an taught bu industry experts who have years of experience an"}
//     ctabtn1={{
//         btnText:"try it yourself",
//         linkto:"/signup",
//         active:true,
//     }}
//     ctabtn2={{
//         btnText:"learn more",
//         linkto:"/login",
//         active:false,
//     }}
//     codeblock={
//         `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Random HTML</title>
//     </head>
//     <body>
//     <h1>Welcome to EduTrail!</h1>
//     </body>
//     </html>`
//     }
//     codeColor={"text-yellow-25"}/>

//     {/* codeblock--section 2 */}
//     <div>
//           <CodeBlock
//             position={"lg:flex-row-reverse"}
//             heading={
//               <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
//                 Start
//                 <span className="text-blue-400"> coding in seconds</span>
               
//               </div>
//             }
//             subheading={
//               "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
//             }
//             ctabtn1={{
//               btnText: "Continue Lesson",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/signup",
//               active: false,
//             }}
//             codeColor={"text-yellow-25"}
//             codeblock={
//                `import {React} from "react"
//                 import {coding Lessons} from "EduTrail"
//                 import {success} from "EduTrail"
//                 useEffect(()=> console.log(" lets get started"))
//                 const [concentrate, setConcentrate]=useState(true)
//                 return (
//                 <div>
//                 <p classname="text-lg font-bold">
//                  Be ready for an Learning adventure
//                  <span> Let's go... </span>
//                 </p>
//                 </div> )`}
//             backgroundGradient={<div className="codeblock2 absolute"></div>}
//           />
//         </div>


// <Explore/>
// </div>
// {/* <section-2>--------</section-2> */}

// {/* <div className="bg-pure-greys-5 mb-32 text-richblack-700">
//     <div className="homepage_bg h-[333px]">
  
//   <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
//     <div className="h-[150px]"></div>
//    <div className="flex flex-row gap-7 text-white">
//   <CButton
//   active={true} linkto={"/signup"}>
//    <div className="flex items-center gap-3"> 
//     Explore full catlog
//     <FaArrowAltCircleRight/>
//    </div>
//    </CButton>
//    <CButton active={false} linkto={"/signup"}>
//    <div> Learn more</div>
//    </CButton>
//    </div>

//   </div>
//     </div>

//   <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
  

// <div className="flex flex-row gap-5 mb-10 mt-[95px]">
//     <div className="text-4xl font-semibold w-[45%] ml-8">
//         Get the Skills you need for a <span className="text-blue-400"> Job that is in demand</span>
//     </div>

//     <div className=" mr-8 flex flex-col gap-10 w-[40%] items-start">
//     <div className="text-[16px]">
//      The modern edutrail is the dictates its own terms. Today, to be a competetive
//      specialist requires more than profesional Skills
//     </div>
//     <CButton active={true} linkto={"/signup"}>
//         <div>
//             Learn More
//         </div>
//     </CButton>
//    </div >

// </div>
   
// <TimeLineSection/>

//   </div>

//   <LanguageLearning/>



// </div> */}
// <div className="bg-gradient-to-b from-white via-blue-50 to-green-50 text-richblack-800 py-10">
//   {/* Hero Section */}
//   <div className="homepage_bg h-[333px] flex items-center">
//     <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-6">
//       <div className="flex flex-row gap-5 text-white">
//         <CButton active={true} linkto={"/signup"}>
//           <div className="flex items-center gap-2"> 
//             Explore Full Catalog
//             <FaArrowAltCircleRight className="text-lg" />
//           </div>
//         </CButton>
//         <CButton active={false} linkto={"/signup"}>
//           <div>Learn More</div>
//         </CButton>
//       </div>
//     </div>
//   </div>

//   {/* Skills Section */}
//   <div className="mx-auto w-11/12 max-w-maxContent mt-20 mb-20">
//     <div className="flex flex-col md:flex-row justify-between items-center gap-10">
//       <div className="w-full md:w-[48%] text-center md:text-left">
//         <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
//           Get the <span className="text-blue-600">Skills</span> you need for a <span className="text-green-600">Job that is in demand</span>
//         </h2>
//       </div>
//       <div className="w-full md:w-[45%] flex flex-col gap-6 items-start">
//         <p className="text-base text-richblack-600">
//           The modern EduTrail sets its own path. Today, being a competitive professional requires more than just textbook knowledge.
//         </p>
//         <CButton active={true} linkto={"/signup"}>
//           <span className="px-4 py-2 text-white font-medium">Learn More</span>
//         </CButton>
//       </div>
//     </div>
//   </div>

//   {/* Timeline Section */}
//   <TimeLineSection />

//   {/* Language Learning Section */}
//   <LanguageLearning />
// </div>

// {/* section 3 */}

// <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

// <Instructor/>
//  <h2 className="text-center text-4xl font-semibold mt-10">Review from other learners</h2>
//  <ReviewSlider/>
// </div>

// <Footer/>
// </div>

//    )
// }

// export default Home



import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

import CButton from "../components/core/Button";
import banner from "../pages/background.mp4";
import CodeBlock from "../components/core/CodeBlock";
import "../App.css";
import TimeLineSection from "../components/core/TimeLineSection";
import LanguageLearning from "../components/core/LanguageLearningSection";
import Instructor from "../components/core/InstructorSection";
import Footer from "../components/common/footer";
import Explore from "../components/core/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070B18] text-slate-100">

      {/* HERO SECTION */}
      <section className="relative isolate px-4 pb-20 pt-8 sm:px-6 lg:pt-16">

        {/* Ambient neon glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-48 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">

          {/* Announcement pill */}
          <Link
            to="/signup"
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 shadow-lg shadow-blue-950/20 backdrop-blur-xl transition duration-300 hover:border-cyan-300/60 hover:bg-blue-500/10 sm:mt-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            Become an Instructor

            <FaArrowAltCircleRight className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Main headline */}
          <div className="mt-10 max-w-5xl text-center sm:mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
              Your journey. Your future.
            </p>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Empowering Minds,
              <br />
              With One{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Trail
              </span>{" "}
              at a{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Time.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:text-lg">
              Whether you're exploring the basics or mastering advanced
              development, EduTrail gives you a structured path to success
              through interactive lessons, real-world projects, and expert
              mentorship.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
            <div className="transition duration-300 hover:-translate-y-1">
              <CButton active={true} linkto="/signup">
                Get Started
              </CButton>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
              <CButton active={false} linkto="/login">
                Explore Learning
              </CButton>
            </div>
          </div>

          {/* Video preview */}
          <div className="group relative mt-16 w-full max-w-6xl sm:mt-20">

            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/40 via-cyan-400/30 to-violet-600/40 opacity-70 blur-lg transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1224]/90 p-2 shadow-2xl shadow-blue-950/50 backdrop-blur-2xl sm:rounded-3xl sm:p-3">

              {/* Browser-style top bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-3 sm:px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                <div className="mx-auto flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs text-slate-500">
                  <span className="text-cyan-400">✦</span>
                  edutrail.dev
                </div>
              </div>

              <video
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                src={banner}
                className="aspect-video w-full rounded-xl object-cover"
              />

            </div>
          </div>

          {/* Feature highlights */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">

            {[
              {
                icon: "⌘",
                title: "Hands-on Learning",
                text: "Build while you learn",
              },
              {
                icon: "↗",
                title: "Real-world Projects",
                text: "Turn ideas into skills",
              },
              {
                icon: "✦",
                title: "Learn at Your Pace",
                text: "Grow on your terms",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-blue-500/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-xl text-cyan-300 transition group-hover:bg-cyan-400/[0.15]">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CODING EXPERIENCE */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24">

        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[110px]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 lg:gap-28">

          <CodeBlock
            position="lg:flex-row"
            heading={
              <div className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Unlock Your
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Coding Potential{" "}
                </span>
                with Online Courses
              </div>
            }
            subheading="Learn from industry experts, strengthen your fundamentals, and build practical skills through structured online courses designed for your growth."
            ctabtn1={{
              btnText: "Try It Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random HTML</title>
</head>
<body>
  <h1>Welcome to EduTrail!</h1>
</body>
</html>`}
            codeColor="text-yellow-25"
          />

          <CodeBlock
            position="lg:flex-row-reverse"
            heading={
              <div className="w-full text-3xl font-bold leading-tight text-white sm:text-4xl">
                Start
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {" "}Coding in Seconds
                </span>
              </div>
            }
            subheading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/signup",
              active: false,
            }}
            codeColor="text-yellow-25"
            codeblock={`import React, { useState, useEffect } from "react";

function EduTrail() {
  const [learning, setLearning] = useState(true);

  useEffect(() => {
    console.log("Your learning journey starts here!");
  }, []);

  return (
    <div>
      <h1>Welcome to EduTrail</h1>
      <p>Be ready for a learning adventure.</p>
    </div>
  );
}`}
            backgroundGradient={
              <div className="codeblock2 absolute" />
            }
          />

          <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0D1730] via-[#0A1022] to-[#0B1830] p-4 sm:p-8 lg:p-10">
            <Explore />
          </div>

        </div>
      </section>

      {/* SKILLS & LEARNING PATH */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-[#0A1021] via-[#0D1730] to-[#070B18] px-4 py-16 sm:px-6 sm:py-24">

        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl">

          {/* Section header */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Learn. Build. Advance.
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Get the Skills You Need for a
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Career in Demand
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Building a competitive career takes more than textbook knowledge.
              Follow your path, develop practical expertise, and prepare for
              opportunities in the technology industry.
            </p>

            <div className="mt-8 flex justify-center">
              <CButton active={true} linkto="/signup">
                <span className="inline-flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowAltCircleRight />
                </span>
              </CButton>
            </div>
          </div>

          {/* Existing learning components */}
          <div className="relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-4 backdrop-blur-xl sm:p-8 lg:p-10">
            <TimeLineSection />
          </div>

          <div className="mt-12 rounded-3xl border border-white/[0.07] bg-[#0B1327]/70 p-4 backdrop-blur-xl sm:mt-16 sm:p-8 lg:p-10">
            <LanguageLearning />
          </div>

        </div>
      </section>

      {/* INSTRUCTORS & REVIEWS */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">

        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[110px]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16">

          <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#101B35]/90 to-[#0A1021]/90 p-4 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-8 lg:p-12">
            <Instructor />
          </div>

          <div>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Community Voices
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Reviews from
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Our Learners
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Discover what learners have to say about their EduTrail journey.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-3 backdrop-blur-xl sm:p-6">
              <ReviewSlider />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
};

export default Home;



