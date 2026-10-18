// import React from "react";
// import Aboutimg1 from "../assets/images/aboutus1.webp";
// import Aboutimg2 from "../assets/images/aboutus2.webp";
// import Aboutimg3 from "../assets/images/aboutus3.webp";
// import Quote from "../components/core/Aboutpage/Quote";
// import Visionimg from "../assets/images/FoundingStory.png"
// import StatsComponents from "../components/core/Aboutpage/StatsComponents";
// import GridLearning from "../components/core/Aboutpage/GridLearn";
// import ContactForm from "../components/core/Aboutpage/ContactForm";
// import Footer from  "../components/common/footer";
// import ReviewSlider from "../components/common/ReviewSlider";

// const About=()=>{
//     return(
//         <div>
//             {/* section1 */}
//             <section  className="bg-richblack-900">
//                 <div  className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
//                     <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
//                         Driving Innovation in Online Education for a 
//                         <br />
//                         <span className="text-blue-400 font-semibold">Brighter Future</span>
//                         <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veritatis dolor quasi, laudantium, omnis atque ducimus autem expedita distinctio minus veniam delectus numquam ut molestiae aperiam deserunt. Sequi, animi quae!
//                         Dicta, aperiam, beatae repudiandae similique officia, amet dolore unde ipsam minima odit nostrum dolorum atque repellat iure eum voluptate distinctio? Tenetur molestias sit sint reiciendis placeat eveniet iste excepturi perspiciatis.</p>
//                     </header>
//                     <div className="sm:h-[70px] lg:h-[150px]"></div>
//                     <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
//                         <img src={Aboutimg1} />
//                         <img src={Aboutimg2} />
//                         <img src={Aboutimg3} />
//                     </div>
//                 </div>
//             </section>

//             {/* section 2 */}

//             <section  className="border-b border-richblack-700">
//               <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//               <div className="h-[100px]"> </div>
//                     <Quote/>
//                 </div>
             
//             </section>

//             {/* section 3 */}

//             {/* <section>
//                 <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500" >
//                     <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                       
//                         <div className="my-24 flex lg:w-[50%] flex-col gap-10">
//                             <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> 
//                                 How EduTrail Started
//                             </h1>

//                             <p  className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                             EduTrail began with a dream — a dream to break down the barriers of traditional education and bring meaningful, practical learning to everyone.
//                             As a developer and learner myself, I often found online courses either too theoretical or scattered. I wanted something structured, real-world focused, and community-driven — but it didn’t exist. So, I built it.
//                             EduTrail was born out of late nights, real struggles, and a deep belief that learning should feel empowering, not overwhelming. It started as a side project with the goal of helping just a few, but quickly grew into a platform that many learners now trust.
//                             We’re not just here to teach code or design or business. We’re here to help you build skills, gain confidence, and start your own journey, step by step — or as we say, trail by trail.
//                              </p>
                            
                           
                       
//                         </div>
//                         <div>
//                             <img src={Visionimg} />
//                         </div>
//                     </div>

                 
//                      <div  className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
//                      <div  className="my-24 flex lg:w-[40%] flex-col gap-10">
//                     <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                         Our Vision
//                     </h1>
//                     <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                         At EduTrail, our vision is to make learning accessible, practical, and empowering for everyone.
//                         We believe that education should go beyond books and classrooms. Our goal is to create a space where anyone can learn real-world skills, explore their interests, and grow at their own pace—no matter where they come from.
//                         Through the power of technology, expert guidance, and a strong learning community, we want to help learners take control of their future and build a path toward success.
//                     </p>
//                     </div>

                    
//                     <div className="my-24 flex lg:w-[40%] flex-col gap-10">

//                     <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
//                         Our Mission
//                     </h1>
//                     <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
//                     To revolutionize learning by making it flexible, affordable, and real-world focused.
//                     Whether you're a student preparing for your next big step, a professional looking to upskill, or simply a curious learner, EduTrail is here to support you every step of the way.
//                     We believe that learning should adapt to your life—not the other way around. That’s why we design courses and tools that fit your schedule, budget, and goals.
//                     At EduTrail, we focus on practical knowledge and hands-on experience, so what you learn today can be used in the real world tomorrow.
//                     Together</p>
//                 </div>
//                      </div>
//                     </div>
                    
//             </section>  */}
//             <section className="bg-white text-richblack-800 py-16 px-4 sm:px-6 lg:px-20">
//   <div className="mx-auto max-w-maxContent flex flex-col gap-20">
//     {/* How EduTrail Started */}
//     <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
//       <div className="lg:w-[55%] flex flex-col gap-6">
//         <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">
//           How EduTrail Started
//         </h2>
//         <p className="text-base font-medium text-richblack-600 leading-relaxed">
//           EduTrail began with a dream — a dream to break down the barriers of traditional education and bring meaningful, practical learning to everyone.
//           As a developer and learner myself, I often found online courses either too theoretical or scattered. I wanted something structured, real-world focused, and community-driven — but it didn’t exist. So, I built it.
//           <br /><br />
//           EduTrail was born out of late nights, real struggles, and a deep belief that learning should feel empowering, not overwhelming. It started as a side project with the goal of helping just a few, but quickly grew into a platform that many learners now trust.
//           <br /><br />
//           We’re not just here to teach code or design or business. We’re here to help you build skills, gain confidence, and start your own journey, step by step — or as we say, trail by trail.
//         </p>
//       </div>
//       <div className="lg:w-[40%] w-full">
//         <img src={Visionimg} alt="Vision" className="w-full h-auto rounded-xl shadow-md" />
//       </div>
//     </div>

//     {/* Vision & Mission */}
//     <div className="flex flex-col lg:flex-row justify-between gap-12">
//       {/* Vision */}
//       <div className="lg:w-[48%] flex flex-col gap-6">
//         <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-transparent">
//           Our Vision
//         </h2>
//         <p className="text-base font-medium text-richblack-600 leading-relaxed">
//           At EduTrail, our vision is to make learning accessible, practical, and empowering for everyone.
//           We believe that education should go beyond books and classrooms. Our goal is to create a space where anyone can learn real-world skills, explore their interests, and grow at their own pace—no matter where they come from.
//           <br /><br />
//           Through the power of technology, expert guidance, and a strong learning community, we want to help learners take control of their future and build a path toward success.
//         </p>
//       </div>

//       {/* Mission */}
//       <div className="lg:w-[48%] flex flex-col gap-6">
//         <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
//           Our Mission
//         </h2>
//         <p className="text-base font-medium text-richblack-600 leading-relaxed">
//           To revolutionize learning by making it flexible, affordable, and real-world focused.
//           Whether you're a student preparing for your next big step, a professional looking to upskill, or simply a curious learner, EduTrail is here to support you every step of the way.
//           <br /><br />
//           We believe that learning should adapt to your life—not the other way around. That’s why we design courses and tools that fit your schedule, budget, and goals.
//           <br /><br />
//           At EduTrail, we focus on practical knowledge and hands-on experience, so what you learn today can be used in the real world tomorrow.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

           
//            {/* section-4 */}

//            <StatsComponents/>

//            {/* section--5 */}
//           <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
//           <GridLearning/>
//           <ContactForm/>

//           </section>
           
//           <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Reviws from Other Learner */}
      
//         <h1 className="text-center text-4xl md:text-5xl font-bold mt-10 bg-gradient-to-r from-pure-greys-25 via-pure-greys-100 to-pure-greys-200 bg-clip-text text-transparent">
//          Reviews from other learners
//         </h1>

//         {/* <ReviewSlider /> */}
//         <ReviewSlider/>
//       </div>
//       {/* <Footer /> */}
//       <Footer />
          

//         </div>
//     )
// }

// export default About

import React from "react";
import Aboutimg1 from "../assets/images/aboutus1.webp";
import Aboutimg2 from "../assets/images/aboutus2.webp";
import Aboutimg3 from "../assets/images/aboutus3.webp";
import Quote from "../components/core/Aboutpage/Quote";
import Visionimg from "../assets/images/FoundingStory.png"
import StatsComponents from "../components/core/Aboutpage/StatsComponents";
import GridLearning from "../components/core/Aboutpage/GridLearn";
import ContactForm from "../components/core/Aboutpage/ContactForm";
import Footer from  "../components/common/footer";
import ReviewSlider from "../components/common/ReviewSlider";

const About=()=>{
    return(
        <div>
            {/* section 1 — Neon glass hero */}
            <section className="relative isolate overflow-hidden bg-[#060B18] text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
                    <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blue-600/15 blur-[100px]" />
                    <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-[110px]" />
                    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(125,211,252,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.35)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                </div>
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center gap-10 pb-24 text-center sm:pb-32">
                    <header className="mx-auto flex flex-col items-center pt-20 sm:pt-28 lg:w-[82%]">
                        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
                            Learning without limits
                        </span>
                        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                            Driving Innovation in Online Education for a{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(34,211,238,0.2)]">
                                Brighter Future
                            </span>
                        </h1>
                        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veritatis dolor quasi, laudantium, omnis atque ducimus autem expedita distinctio minus veniam delectus numquam ut molestiae aperiam deserunt. Sequi, animi quae!
                            Dicta, aperiam, beatae repudiandae similique officia, amet dolore unde ipsam minima odit nostrum dolorum atque repellat iure eum voluptate distinctio? Tenetur molestias sit sint reiciendis placeat eveniet iste excepturi perspiciatis.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Practical learning</span>
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Built for your future</span>
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Learn at your pace</span>
                        </div>
                    </header>
                    <div className="h-24 sm:h-32" />
                    <div className="relative grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                        {[Aboutimg1, Aboutimg2, Aboutimg3].map((image, index) => (
                            <div key={index} className={`group relative overflow-hidden rounded-2xl border border-cyan-200/15 bg-white/[0.04] p-1 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.14)] ${index === 1 ? "sm:-translate-y-6" : ""}`}>
                                <img src={image} alt={`EduTrail learning ${index + 1}`} className="h-56 w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.04] sm:h-48 lg:h-64" />
                                <div className="pointer-events-none absolute inset-1 rounded-xl ring-1 ring-inset ring-white/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* section 2 */}

            <section  className="border-b border-richblack-700">
              <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
              <div className="h-[100px]"> </div>
                    <Quote/>
                </div>
             
            </section>

            {/* section 3 */}

            {/* <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500" >
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                       
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> 
                                How EduTrail Started
                            </h1>

                            <p  className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            EduTrail began with a dream — a dream to break down the barriers of traditional education and bring meaningful, practical learning to everyone.
                            As a developer and learner myself, I often found online courses either too theoretical or scattered. I wanted something structured, real-world focused, and community-driven — but it didn’t exist. So, I built it.
                            EduTrail was born out of late nights, real struggles, and a deep belief that learning should feel empowering, not overwhelming. It started as a side project with the goal of helping just a few, but quickly grew into a platform that many learners now trust.
                            We’re not just here to teach code or design or business. We’re here to help you build skills, gain confidence, and start your own journey, step by step — or as we say, trail by trail.
                             </p>
                            
                           
                       
                        </div>
                        <div>
                            <img src={Visionimg} />
                        </div>
                    </div>

                 
                     <div  className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                     <div  className="my-24 flex lg:w-[40%] flex-col gap-10">
                    <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                        Our Vision
                    </h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        At EduTrail, our vision is to make learning accessible, practical, and empowering for everyone.
                        We believe that education should go beyond books and classrooms. Our goal is to create a space where anyone can learn real-world skills, explore their interests, and grow at their own pace—no matter where they come from.
                        Through the power of technology, expert guidance, and a strong learning community, we want to help learners take control of their future and build a path toward success.
                    </p>
                    </div>

                    
                    <div className="my-24 flex lg:w-[40%] flex-col gap-10">

                    <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                        Our Mission
                    </h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                    To revolutionize learning by making it flexible, affordable, and real-world focused.
                    Whether you're a student preparing for your next big step, a professional looking to upskill, or simply a curious learner, EduTrail is here to support you every step of the way.
                    We believe that learning should adapt to your life—not the other way around. That’s why we design courses and tools that fit your schedule, budget, and goals.
                    At EduTrail, we focus on practical knowledge and hands-on experience, so what you learn today can be used in the real world tomorrow.
                    Together</p>
                </div>
                     </div>
                    </div>
                    
            </section>  */}
            <section className="relative overflow-hidden bg-[#060B18] px-4 py-20 text-white sm:px-6 lg:px-20 lg:py-28">
  <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[120px]" />
  <div className="relative mx-auto flex max-w-maxContent flex-col gap-20">
    {/* How EduTrail Started */}
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      <div className="flex flex-col gap-6 lg:w-[55%]">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Our origin</span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
          How EduTrail Started
        </h2>
        <p className="text-base font-medium leading-8 text-slate-300">
          EduTrail began with a dream — a dream to break down the barriers of traditional education and bring meaningful, practical learning to everyone.
          As a developer and learner myself, I often found online courses either too theoretical or scattered. I wanted something structured, real-world focused, and community-driven — but it didn’t exist. So, I built it.
          <br /><br />
          EduTrail was born out of late nights, real struggles, and a deep belief that learning should feel empowering, not overwhelming. It started as a side project with the goal of helping just a few, but quickly grew into a platform that many learners now trust.
          <br /><br />
          We’re not just here to teach code or design or business. We’re here to help you build skills, gain confidence, and start your own journey, step by step — or as we say, trail by trail.
        </p>
      </div>
      <div className="group relative w-full lg:w-[40%]">
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-indigo-500/20 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
        <div className="relative rounded-2xl border border-cyan-200/20 bg-white/[0.04] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <img src={Visionimg} alt="EduTrail founding story" className="h-auto w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.01]" />
        </div>
      </div>
    </div>

    {/* Vision & Mission */}
    <div className="flex flex-col lg:flex-row justify-between gap-12">
      {/* Vision */}
      <div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-cyan-300/15 bg-white/[0.035] p-7 shadow-[0_15px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055] sm:p-9 lg:w-[48%]">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-200 to-sky-400 bg-clip-text text-transparent sm:text-4xl">
          Our Vision
        </h2>
        <p className="text-base font-medium leading-8 text-slate-300">
          At EduTrail, our vision is to make learning accessible, practical, and empowering for everyone.
          We believe that education should go beyond books and classrooms. Our goal is to create a space where anyone can learn real-world skills, explore their interests, and grow at their own pace—no matter where they come from.
          <br /><br />
          Through the power of technology, expert guidance, and a strong learning community, we want to help learners take control of their future and build a path toward success.
        </p>
      </div>

      {/* Mission */}
      <div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-cyan-300/15 bg-white/[0.035] p-7 shadow-[0_15px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055] sm:p-9 lg:w-[48%]">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent sm:text-4xl">
          Our Mission
        </h2>
        <p className="text-base font-medium leading-8 text-slate-300">
          To revolutionize learning by making it flexible, affordable, and real-world focused.
          Whether you're a student preparing for your next big step, a professional looking to upskill, or simply a curious learner, EduTrail is here to support you every step of the way.
          <br /><br />
          We believe that learning should adapt to your life—not the other way around. That’s why we design courses and tools that fit your schedule, budget, and goals.
          <br /><br />
          At EduTrail, we focus on practical knowledge and hands-on experience, so what you learn today can be used in the real world tomorrow.
        </p>
      </div>
    </div>
  </div>
</section>

           
           {/* section-4 */}

           <StatsComponents/>

           {/* section--5 */}
          <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <GridLearning/>
          <ContactForm/>

          </section>
           
          <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-cyan-300/10 bg-[#080E1C] px-4 pb-10 text-white shadow-[0_0_80px_rgba(8,145,178,0.06)] sm:px-8">
        {/* Reviws from Other Learner */}
      
        <h1 className="mt-10 bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
         Reviews from other learners
        </h1>

        {/* <ReviewSlider /> */}
        <ReviewSlider/>
      </div>
      {/* <Footer /> */}
      <Footer />
          

        </div>
    )
}

export default About
