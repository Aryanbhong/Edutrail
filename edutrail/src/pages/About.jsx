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
            {/* section1 */}
            <section  className="bg-richblack-900">
                <div  className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                    <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
                        Driving Innovation in Online Education for a 
                        <br />
                        <span className="text-blue-400 font-semibold">Brighter Future</span>
                        <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veritatis dolor quasi, laudantium, omnis atque ducimus autem expedita distinctio minus veniam delectus numquam ut molestiae aperiam deserunt. Sequi, animi quae!
                        Dicta, aperiam, beatae repudiandae similique officia, amet dolore unde ipsam minima odit nostrum dolorum atque repellat iure eum voluptate distinctio? Tenetur molestias sit sint reiciendis placeat eveniet iste excepturi perspiciatis.</p>
                    </header>
                    <div className="sm:h-[70px] lg:h-[150px]"></div>
                    <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
                        <img src={Aboutimg1} />
                        <img src={Aboutimg2} />
                        <img src={Aboutimg3} />
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
            <section className="bg-white text-richblack-800 py-16 px-4 sm:px-6 lg:px-20">
  <div className="mx-auto max-w-maxContent flex flex-col gap-20">
    {/* How EduTrail Started */}
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-[55%] flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">
          How EduTrail Started
        </h2>
        <p className="text-base font-medium text-richblack-600 leading-relaxed">
          EduTrail began with a dream — a dream to break down the barriers of traditional education and bring meaningful, practical learning to everyone.
          As a developer and learner myself, I often found online courses either too theoretical or scattered. I wanted something structured, real-world focused, and community-driven — but it didn’t exist. So, I built it.
          <br /><br />
          EduTrail was born out of late nights, real struggles, and a deep belief that learning should feel empowering, not overwhelming. It started as a side project with the goal of helping just a few, but quickly grew into a platform that many learners now trust.
          <br /><br />
          We’re not just here to teach code or design or business. We’re here to help you build skills, gain confidence, and start your own journey, step by step — or as we say, trail by trail.
        </p>
      </div>
      <div className="lg:w-[40%] w-full">
        <img src={Visionimg} alt="Vision" className="w-full h-auto rounded-xl shadow-md" />
      </div>
    </div>

    {/* Vision & Mission */}
    <div className="flex flex-col lg:flex-row justify-between gap-12">
      {/* Vision */}
      <div className="lg:w-[48%] flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-transparent">
          Our Vision
        </h2>
        <p className="text-base font-medium text-richblack-600 leading-relaxed">
          At EduTrail, our vision is to make learning accessible, practical, and empowering for everyone.
          We believe that education should go beyond books and classrooms. Our goal is to create a space where anyone can learn real-world skills, explore their interests, and grow at their own pace—no matter where they come from.
          <br /><br />
          Through the power of technology, expert guidance, and a strong learning community, we want to help learners take control of their future and build a path toward success.
        </p>
      </div>

      {/* Mission */}
      <div className="lg:w-[48%] flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="text-base font-medium text-richblack-600 leading-relaxed">
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
           
          <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
      
        <h1 className="text-center text-4xl md:text-5xl font-bold mt-10 bg-gradient-to-r from-pure-greys-25 via-pure-greys-100 to-pure-greys-200 bg-clip-text text-transparent">
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


