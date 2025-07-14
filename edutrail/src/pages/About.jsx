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
            <section  className="bg-richblack-700">
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

            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500" >
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        {/* founding wala div */}
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> 
                                Our Founding Story
                            </h1>

                            <p  className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates excepturi corrupti quisquam iusto eum
                            unde quo sapiente, ipsam, saepe quod quaerat fuga rerum sint nihil harum officiis voluptatem tenetur?
                            Earum dolor ratione dolorem quis asperiores quam esse exercitationem beatae distinctio, nesciunt rerum sint suscipit sapiente magni accusamus
                             natus possimus! Saepe non voluptatum rerum libero culpa reiciendis. Eum, sint quae!
                             </p>
                            
                            <p  className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam corrupti molestias natus delectus
                            eveniet, repellendus doloribus, vitae voluptas odit dolor illo dolores dolorem, minus numquam aspernatur molestiae perspiciatis nulla!
                            Delectus, fugit autem fuga laboriosam modi veniam maxime dolor velit distinctio? Totam ipsum at quo nobis tempore voluptates excepturi necessitatibus
                             reiciendis! Provident veniam id commodi ab ipsa consequatur molestias dolor?</p>
                       
                        </div>
                        <div>
                            <img src={Visionimg} />
                        </div>
                    </div>

                    {/* vision and misiion wala parent <div></div> */}
                     <div  className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                     <div  className="my-24 flex lg:w-[40%] flex-col gap-10">
                    <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                        Our Vision
                    </h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas consequuntur maxime delectus voluptate perspiciatis reiciendis, nihil libero eum cupiditate odit suscipit debitis, distinctio deleniti aliquid quidem qui ullam voluptatum?
                       Qui repellendus saepe aperiam provident dolores vel ratione similique voluptatibus odio, nostrum quasi commodi rem et corporis. Esse eius rem sit, perspiciatis vel id accusantium similique ducimus, quis aperiam deleniti.
                    </p>
                    </div>

                    {/* right wala box */}
                    <div className="my-24 flex lg:w-[40%] flex-col gap-10">

                    <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                        Our Mission
                    </h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, ullam qui nulla dolorum doloribus libero explicabo voluptate excepturi, sed eligendi, ratione rem doloremque quia esse beatae commodi ducimus hic laudantium.
                    Possimus aliquam rem incidunt necessitatibus eos quisquam dicta repellendus nostrum voluptatem quos doloremque iste placeat asperiores voluptates tempora dolor laboriosam, qui labore mollitia ipsam quo vel magni laudantium. Aliquid, corrupti.
                    Dolore odio voluptatum minus, et aliquid obcaecati perferendis sunt dignissimos, repudiandae explicabo mollitia suscipit, labore fugiat dolores iure. Consequuntur culpa tempora, eos molestias quis perferendis fugiat inventore quae numquam maxime.</p>
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
        <h1 className="text-center text-4xl font-semibold mt-8">
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


