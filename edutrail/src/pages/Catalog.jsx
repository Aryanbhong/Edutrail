// import React, { useEffect, useState } from 'react'
// import Footer from "../components/common/footer"
// import apiConnector from '../services/apiConnector';
// import { categories } from '../services/apis';
// import getCatalogPageData from '../services/opreations/PageAndComponent';
// import { useParams } from 'react-router-dom';
// import { fetchCourseCategories } from '../services/opreations/courseDetails';
// import CourseSlider from '../components/core/catalog.jsx/CourseSlider';
// import Course_Card from '../components/core/catalog.jsx/Course_Card';

// const Catalog = () => {

//   const { catalogName} = useParams();
//   const [catalogPageData, setCatalogPageData] = useState(null);
//   const [categoryId, setCategoryId] = useState("");
//   const [active, setActive] = useState(1)

//   // FETCH ALL CATEGORIES
//   useEffect(() => {
//     const getCategoryDetails = async() =>{
//       // const res = await apiConnector("GET", categories.CATEGORIES_API);
//       // console.log(" res aa gaya categorie ska ", res);
//       const res = await fetchCourseCategories();
//       console.log(" api call ke bad toh aa gaya mein",res)
    

//       // const category_id=
//       //  res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
//       const category_id = 
//       res.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
//        console.log("data catalog ka", category_id)
//        setCategoryId(category_id);
//       }
//       getCategoryDetails();
//   },[catalogName]);
//  console.log("setcatalogpagedata save  hua hai kya ", catalogPageData?.data?.selectedCategory?.courses.length)

//   console.log(" usstate wala scene se category id", categoryId)
//   // useEffect(()=>{
//   //     const  getCategoryDetails = async()=>{
//   //       try{
//   //          const res = await getCatalogPageData({categoryId});
//   //          console.log(" res ctalogpagedata", res)
//   //          setCatalogPageData(res);
//   //       }catch(error){
//   //        console.log(error)
//   //       }
//   //     }
//   //     if(categoryId){
//   //       getCategoryDetails();
//   //     }
      
//   // },[categoryId]);

//   useEffect(() => {
//     const getCategoryDetails = async() => {
//         try{
//             const res = await getCatalogPageData(categoryId);
//             console.log("PRinting res: ", res);
//             console.log(" printing courses", res?.data?.selectedCategory?.courses.length)
//             setCatalogPageData(res);
//         }
//         catch(error) {
//             console.log(error)
//         }
//     }
//     if(categoryId) {
//         getCategoryDetails();
//     }
    
// },[categoryId]);

//   return (
//     <div className=" box-content bg-richblack-800 px-4">
      
//       <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
//         <p className="text-sm text-richblack-300">{`Home/ Catalog`}</p>
//         <span className="text-yellow-25">
//           {catalogPageData?.data?.selectedCategory?.name}
//         </span>
//         <p className="text-3xl text-richblack-5">{catalogPageData?.data?.selectedCategory?.name}</p>
//         <p className="max-w-[870px] text-richblack-200">{catalogPageData?.data?.selectedCategory?.description}</p>
//       </div>
  
//         <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//           <div>Courses to get you started</div>
//           <div  className="my-4 flex border-b border-b-richblack-600 text-sm">
//           <p
//                 className={`px-4 py-2 ${
//                   active === 1
//                     ? "border-b border-b-yellow-25 text-yellow-25"
//                     : "text-richblack-50"
//                 } cursor-pointer`}
//                 onClick={() => setActive(1)}
//               >Most Popular </p>
//            <p
//              className={`px-4 py-2 ${
//               active === 2
//                 ? "border-b border-b-yellow-25 text-yellow-25"
//                 : "text-richblack-50"
//             } cursor-pointer`}
//             onClick={() => setActive(2)}
//            > new </p>
//           </div>


//           <div>
            
//           <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses}/>
//           </div>
         
//         </div>
          
//            {/* {section--2} */}
//            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//             <div>Top Courses in {catalogPageData?.data?.selectedCategory?.name}</div>
//             <div className="py-8">
//               <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses}/>
//             </div>
//            </div>

//            {/* {sectionn 3} */}

//            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//             <div>Frequently Bought </div>
//             <div className='py-8'>
//               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
//               {
//                 catalogPageData?.data?.mostSellingCourses?.slice(0,4).map(
//                   (course, index) => (
//                     <Course_Card course={course} key={index} Height={"h-[400px]"}/>
//                     // <div>{course.name}</div>
//                   )
//                 )
//               }
//               </div>
//             </div>

//            </div>

//            {/* <FileReaderooter/> */}


//     </div>
//   )
// }

// export default Catalog


import React, { useEffect, useState } from 'react'
import Footer from "../components/common/footer"
import getCatalogPageData from '../services/opreations/PageAndComponent';
import { useParams } from 'react-router-dom';
import { fetchCourseCategories } from '../services/opreations/courseDetails';
import CourseSlider from '../components/core/catalog.jsx/CourseSlider';
import Course_Card from '../components/core/catalog.jsx/Course_Card';

const Catalog = () => {
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    let cancelled = false;

    const getCategoryDetails = async () => {
      try {
        const categories = await fetchCourseCategories();
        const selectedCategory = categories?.find(
          (category) =>
            category.name.split(" ").join("-").toLowerCase() === catalogName
        );

        if (!selectedCategory) {
          if (!cancelled) {
            setCategoryId("");
            setCatalogPageData(null);
          }
          return;
        }

        if (!cancelled) setCategoryId(selectedCategory._id);
      } catch (error) {
        console.error("Unable to fetch course categories:", error);
        if (!cancelled) {
          setCategoryId("");
          setCatalogPageData(null);
        }
      }
    };

    getCategoryDetails();
    return () => {
      cancelled = true;
    };
  }, [catalogName]);

  useEffect(() => {
    if (!categoryId) return;

    let cancelled = false;

    const getCategoryDetails = async () => {
      try {
        const response = await getCatalogPageData(categoryId);
        if (!cancelled) setCatalogPageData(response);
      } catch (error) {
        console.error("Unable to fetch catalog page data:", error);
        if (!cancelled) setCatalogPageData(null);
      }
    };

    getCategoryDetails();
    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  const selectedCategory = catalogPageData?.data?.selectedCategory;
  const differentCategory = catalogPageData?.data?.differentCategory;
  const mostSellingCourses = catalogPageData?.data?.mostSellingCourses ?? [];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#060B18] text-white">
      {/* Ambient neon background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute left-[-12rem] top-[35rem] h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-[-12rem] top-[75rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(125,211,252,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.3)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      {/* Catalog hero */}
      <section className="relative border-b border-cyan-200/10">
        <div className="mx-auto flex w-11/12 max-w-maxContentTab flex-col justify-center gap-5 py-16 sm:py-20 lg:max-w-maxContent lg:py-24">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="transition-colors hover:text-cyan-200">Home</span>
            <span className="text-cyan-500/60">/</span>
            <span className="text-cyan-200">Catalog</span>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
            Explore your next skill
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {selectedCategory?.name || "Explore courses"}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Build skills. Shape your future.
            </span>
          </h1>

          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {selectedCategory?.description ||
              "Discover practical courses, learn at your own pace, and take the next step in your learning journey."}
          </p>

          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Learn at your pace</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Practical skills</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Your next chapter</span>
          </div>
        </div>
      </section>

      {/* Courses to get you started */}
      <section className="mx-auto w-11/12 max-w-maxContentTab py-12 sm:py-16 lg:max-w-maxContent">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Curated for you</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Courses to get you started</h2>
            <p className="mt-2 text-sm text-slate-400">Find a course that matches your curiosity and goals.</p>
          </div>
          <div className="inline-flex w-fit rounded-xl border border-white/10 bg-white/[0.04] p-1 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl">
            <button
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active === 1
                  ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                  : "text-slate-400 hover:text-white"
              }`}
              onClick={() => setActive(1)}
            >
              Most Popular
            </button>
            <button
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active === 2
                  ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                  : "text-slate-400 hover:text-white"
              }`}
              onClick={() => setActive(2)}
            >
              New
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-200/10 bg-white/[0.025] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-5">
          <CourseSlider Courses={selectedCategory?.courses} />
        </div>
      </section>

      {/* Top courses in related categories */}
      <section className="mx-auto w-11/12 max-w-maxContentTab py-8 sm:py-12 lg:max-w-maxContent">
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Keep exploring</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Top Courses in {selectedCategory?.name || "Other Categories"}
          </h2>
        </div>
        <div className="rounded-2xl border border-blue-200/10 bg-white/[0.025] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-5">
          <CourseSlider Courses={differentCategory?.courses} />
        </div>
      </section>

      {/* Frequently bought */}
      <section className="mx-auto w-11/12 max-w-maxContentTab pb-20 pt-8 sm:pb-28 sm:pt-12 lg:max-w-maxContent">
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">Learner favourites</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Frequently Bought</h2>
          <p className="mt-2 text-sm text-slate-400">Popular picks to help you level up your skills.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {mostSellingCourses.slice(0, 4).map((course, index) => (
            <div
              key={course?._id || course?.id || index}
              className="group rounded-2xl border border-cyan-200/10 bg-white/[0.035] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
            >
              <Course_Card course={course} Height={"h-[400px]"} />
            </div>
          ))}
          {mostSellingCourses.length === 0 && (
            <p className="col-span-full rounded-xl border border-white/10 bg-white/[0.03] p-6 text-slate-400">
              No featured courses are available right now.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Catalog;
