// // import React, { useEffect, useState } from 'react'
// // import Footer from "../components/common/footer"
// // import apiConnector from '../services/apiConnector';
// // import { categories } from '../services/apis';
// // import getCatalogPageData from '../services/opreations/PageAndComponent';
// // import { useParams } from 'react-router-dom';
// // import { fetchCourseCategories } from '../services/opreations/courseDetails';
// // import CourseSlider from '../components/core/catalog.jsx/CourseSlider';
// // import Course_Card from '../components/core/catalog.jsx/Course_Card';

// // const Catalog = () => {

// //   const { catalogName} = useParams();
// //   const [catalogPageData, setCatalogPageData] = useState(null);
// //   const [categoryId, setCategoryId] = useState("");
// //   const [active, setActive] = useState(1)

// //   // FETCH ALL CATEGORIES
// //   useEffect(() => {
// //     const getCategoryDetails = async() =>{
// //       // const res = await apiConnector("GET", categories.CATEGORIES_API);
// //       // console.log(" res aa gaya categorie ska ", res);
// //       const res = await fetchCourseCategories();
// //       console.log(" api call ke bad toh aa gaya mein",res)
    

// //       // const category_id=
// //       //  res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
// //       const category_id = 
// //       res.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
// //        console.log("data catalog ka", category_id)
// //        setCategoryId(category_id);
// //       }
// //       getCategoryDetails();
// //   },[catalogName]);
// //  console.log("setcatalogpagedata save  hua hai kya ", catalogPageData?.data?.selectedCategory?.courses.length)

// //   console.log(" usstate wala scene se category id", categoryId)
// //   // useEffect(()=>{
// //   //     const  getCategoryDetails = async()=>{
// //   //       try{
// //   //          const res = await getCatalogPageData({categoryId});
// //   //          console.log(" res ctalogpagedata", res)
// //   //          setCatalogPageData(res);
// //   //       }catch(error){
// //   //        console.log(error)
// //   //       }
// //   //     }
// //   //     if(categoryId){
// //   //       getCategoryDetails();
// //   //     }
      
// //   // },[categoryId]);

// //   useEffect(() => {
// //     const getCategoryDetails = async() => {
// //         try{
// //             const res = await getCatalogPageData(categoryId);
// //             console.log("PRinting res: ", res);
// //             console.log(" printing courses", res?.data?.selectedCategory?.courses.length)
// //             setCatalogPageData(res);
// //         }
// //         catch(error) {
// //             console.log(error)
// //         }
// //     }
// //     if(categoryId) {
// //         getCategoryDetails();
// //     }
    
// // },[categoryId]);

// //   return (
// //     <div className=" box-content bg-richblack-800 px-4">
      
// //       <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
// //         <p className="text-sm text-richblack-300">{`Home/ Catalog`}</p>
// //         <span className="text-yellow-25">
// //           {catalogPageData?.data?.selectedCategory?.name}
// //         </span>
// //         <p className="text-3xl text-richblack-5">{catalogPageData?.data?.selectedCategory?.name}</p>
// //         <p className="max-w-[870px] text-richblack-200">{catalogPageData?.data?.selectedCategory?.description}</p>
// //       </div>
  
// //         <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
// //           <div>Courses to get you started</div>
// //           <div  className="my-4 flex border-b border-b-richblack-600 text-sm">
// //           <p
// //                 className={`px-4 py-2 ${
// //                   active === 1
// //                     ? "border-b border-b-yellow-25 text-yellow-25"
// //                     : "text-richblack-50"
// //                 } cursor-pointer`}
// //                 onClick={() => setActive(1)}
// //               >Most Popular </p>
// //            <p
// //              className={`px-4 py-2 ${
// //               active === 2
// //                 ? "border-b border-b-yellow-25 text-yellow-25"
// //                 : "text-richblack-50"
// //             } cursor-pointer`}
// //             onClick={() => setActive(2)}
// //            > new </p>
// //           </div>


// //           <div>
            
// //           <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses}/>
// //           </div>
         
// //         </div>
          
// //            {/* {section--2} */}
// //            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
// //             <div>Top Courses in {catalogPageData?.data?.selectedCategory?.name}</div>
// //             <div className="py-8">
// //               <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses}/>
// //             </div>
// //            </div>

// //            {/* {sectionn 3} */}

// //            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
// //             <div>Frequently Bought </div>
// //             <div className='py-8'>
// //               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
// //               {
// //                 catalogPageData?.data?.mostSellingCourses?.slice(0,4).map(
// //                   (course, index) => (
// //                     <Course_Card course={course} key={index} Height={"h-[400px]"}/>
// //                     // <div>{course.name}</div>
// //                   )
// //                 )
// //               }
// //               </div>
// //             </div>

// //            </div>

// //            {/* <FileReaderooter/> */}


// //     </div>
// //   )
// // }

// // export default Catalog


// import React, { useEffect, useState } from 'react'
// import Footer from "../components/common/footer"
// import getCatalogPageData from '../services/opreations/PageAndComponent';
// import { useParams } from 'react-router-dom';
// import { fetchCourseCategories } from '../services/opreations/courseDetails';
// import CourseSlider from '../components/core/catalog.jsx/CourseSlider';
// import Course_Card from '../components/core/catalog.jsx/Course_Card';

// const Catalog = () => {
//   const { catalogName } = useParams();
//   const [catalogPageData, setCatalogPageData] = useState(null);
//   const [categoryId, setCategoryId] = useState("");
//   const [active, setActive] = useState(1);

//   useEffect(() => {
//     let cancelled = false;

//     const getCategoryDetails = async () => {
//       try {
//         const categories = await fetchCourseCategories();
//         const selectedCategory = categories?.find(
//           (category) =>
//             category.name.split(" ").join("-").toLowerCase() === catalogName
//         );

//         if (!selectedCategory) {
//           if (!cancelled) {
//             setCategoryId("");
//             setCatalogPageData(null);
//           }
//           return;
//         }

//         if (!cancelled) setCategoryId(selectedCategory._id);
//       } catch (error) {
//         console.error("Unable to fetch course categories:", error);
//         if (!cancelled) {
//           setCategoryId("");
//           setCatalogPageData(null);
//         }
//       }
//     };

//     getCategoryDetails();
//     return () => {
//       cancelled = true;
//     };
//   }, [catalogName]);

//   useEffect(() => {
//     if (!categoryId) return;

//     let cancelled = false;

//     const getCategoryDetails = async () => {
//       try {
//         const response = await getCatalogPageData(categoryId);
//         if (!cancelled) setCatalogPageData(response);
//       } catch (error) {
//         console.error("Unable to fetch catalog page data:", error);
//         if (!cancelled) setCatalogPageData(null);
//       }
//     };

//     getCategoryDetails();
//     return () => {
//       cancelled = true;
//     };
//   }, [categoryId]);

//   const selectedCategory = catalogPageData?.data?.selectedCategory;
//   const differentCategory = catalogPageData?.data?.differentCategory;
//   const mostSellingCourses = catalogPageData?.data?.mostSellingCourses ?? [];

//   return (
//     <main className="relative isolate min-h-screen overflow-hidden bg-[#060B18] text-white">
//       {/* Ambient neon background */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-48 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
//         <div className="absolute left-[-12rem] top-[35rem] h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
//         <div className="absolute right-[-12rem] top-[75rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
//         <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(125,211,252,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.3)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
//       </div>

//       {/* Catalog hero */}
//       <section className="relative border-b border-cyan-200/10">
//         <div className="mx-auto flex w-11/12 max-w-maxContentTab flex-col justify-center gap-5 py-16 sm:py-20 lg:max-w-maxContent lg:py-24">
//           <div className="flex items-center gap-2 text-sm text-slate-400">
//             <span className="transition-colors hover:text-cyan-200">Home</span>
//             <span className="text-cyan-500/60">/</span>
//             <span className="text-cyan-200">Catalog</span>
//           </div>

//           <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
//             <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
//             Explore your next skill
//           </div>

//           <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
//             {selectedCategory?.name || "Explore courses"}
//             <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Build skills. Shape your future.
//             </span>
//           </h1>

//           <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
//             {selectedCategory?.description ||
//               "Discover practical courses, learn at your own pace, and take the next step in your learning journey."}
//           </p>

//           <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-300">
//             <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Learn at your pace</span>
//             <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Practical skills</span>
//             <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">Your next chapter</span>
//           </div>
//         </div>
//       </section>

//       {/* Courses to get you started */}
//       <section className="mx-auto w-11/12 max-w-maxContentTab py-12 sm:py-16 lg:max-w-maxContent">
//         <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Curated for you</p>
//             <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Courses to get you started</h2>
//             <p className="mt-2 text-sm text-slate-400">Find a course that matches your curiosity and goals.</p>
//           </div>
//           <div className="inline-flex w-fit rounded-xl border border-white/10 bg-white/[0.04] p-1 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl">
//             <button
//               type="button"
//               className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
//                 active === 1
//                   ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
//                   : "text-slate-400 hover:text-white"
//               }`}
//               onClick={() => setActive(1)}
//             >
//               Most Popular
//             </button>
//             <button
//               type="button"
//               className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
//                 active === 2
//                   ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
//                   : "text-slate-400 hover:text-white"
//               }`}
//               onClick={() => setActive(2)}
//             >
//               New
//             </button>
//           </div>
//         </div>

//         <div className="rounded-2xl border border-cyan-200/10 bg-white/[0.025] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-5">
//           <CourseSlider Courses={selectedCategory?.courses} />
//         </div>
//       </section>

//       {/* Top courses in related categories */}
//       <section className="mx-auto w-11/12 max-w-maxContentTab py-8 sm:py-12 lg:max-w-maxContent">
//         <div className="mb-6">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Keep exploring</p>
//           <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
//             Top Courses in {selectedCategory?.name || "Other Categories"}
//           </h2>
//         </div>
//         <div className="rounded-2xl border border-blue-200/10 bg-white/[0.025] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-5">
//           <CourseSlider Courses={differentCategory?.courses} />
//         </div>
//       </section>

//       {/* Frequently bought */}
//       <section className="mx-auto w-11/12 max-w-maxContentTab pb-20 pt-8 sm:pb-28 sm:pt-12 lg:max-w-maxContent">
//         <div className="mb-6">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">Learner favourites</p>
//           <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Frequently Bought</h2>
//           <p className="mt-2 text-sm text-slate-400">Popular picks to help you level up your skills.</p>
//         </div>

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
//           {mostSellingCourses.slice(0, 4).map((course, index) => (
//             <div
//               key={course?._id || course?.id || index}
//               className="group rounded-2xl border border-cyan-200/10 bg-white/[0.035] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
//             >
//               <Course_Card course={course} Height={"h-[400px]"} />
//             </div>
//           ))}
//           {mostSellingCourses.length === 0 && (
//             <p className="col-span-full rounded-xl border border-white/10 bg-white/[0.03] p-6 text-slate-400">
//               No featured courses are available right now.
//             </p>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// };

// export default Catalog;



import React, { useEffect, useState } from "react";
import Footer from "../components/common/footer";
import getCatalogPageData from "../services/opreations/PageAndComponent";
import { useParams, Link } from "react-router-dom";
import { fetchCourseCategories } from "../services/opreations/courseDetails";
import CourseSlider from "../components/core/catalog.jsx/CourseSlider";
import Course_Card from "../components/core/catalog.jsx/Course_Card";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

const Catalog = () => {
  const { catalogName } = useParams();

  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the selected category
  useEffect(() => {
    let cancelled = false;

    const getCategoryDetails = async () => {
      setLoading(true);
      setError("");
      setCatalogPageData(null);
      setCategoryId("");

      try {
        const categories = await fetchCourseCategories();

        const selectedCategory = categories?.find(
          (category) =>
            category.name.split(" ").join("-").toLowerCase() === catalogName
        );

        if (!selectedCategory) {
          if (!cancelled) {
            setError("We couldn't find this course category.");
            setLoading(false);
          }
          return;
        }

        if (!cancelled) {
          setCategoryId(selectedCategory._id);
        }
      } catch (err) {
        console.error("Unable to fetch course categories:", err);

        if (!cancelled) {
          setError("Unable to load course categories. Please try again.");
          setLoading(false);
        }
      }
    };

    getCategoryDetails();

    return () => {
      cancelled = true;
    };
  }, [catalogName]);

  // Fetch data for the selected category
  useEffect(() => {
    if (!categoryId) return;

    let cancelled = false;

    const getCategoryData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getCatalogPageData(categoryId);

        if (!cancelled) {
          setCatalogPageData(response);
          setLoading(false);
        }
      } catch (err) {
        console.error("Unable to fetch catalog page data:", err);

        if (!cancelled) {
          setError("Unable to load courses. Please try again later.");
          setCatalogPageData(null);
          setLoading(false);
        }
      }
    };

    getCategoryData();

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  const selectedCategory = catalogPageData?.data?.selectedCategory;
  const differentCategory = catalogPageData?.data?.differentCategory;

  const mostSellingCourses =
    catalogPageData?.data?.mostSellingCourses ?? [];

  const selectedCourses = selectedCategory?.courses ?? [];
  const relatedCourses = differentCategory?.courses ?? [];

  // Sort by date when the backend provides date fields.
  // Falls back to the original list when dates aren't available.
  const displayedCourses =
    active === 2 &&
    selectedCourses.some((course) => course.createdAt || course.updatedAt)
      ? [...selectedCourses].sort((a, b) => {
          const dateA = new Date(
            a.createdAt || a.updatedAt || 0
          ).getTime();

          const dateB = new Date(
            b.createdAt || b.updatedAt || 0
          ).getTime();

          return dateB - dateA;
        })
      : selectedCourses;

  const sectionHeading =
    active === 1 ? "Courses to get you started" : "Recently Added Courses";

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070B18] text-slate-100">

      {/* Ambient neon background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.10] blur-[140px]" />

        <div className="absolute left-[-12rem] top-[35rem] h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[120px]" />

        <div className="absolute right-[-12rem] top-[75rem] h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(125,211,252,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.4)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-600/[0.10] blur-[120px]" />

        <div className="mx-auto flex w-11/12 max-w-maxContentTab flex-col gap-6 py-16 sm:py-20 lg:max-w-maxContent lg:py-28">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              to="/"
              className="transition-colors hover:text-cyan-300"
            >
              Home
            </Link>

            <span className="text-cyan-500/60">/</span>

            <span className="text-cyan-300">Catalog</span>
          </nav>

          {/* Category badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />

            Explore your next skill
          </div>

          {/* Heading */}
          <div className="max-w-5xl">
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {selectedCategory?.name || "Explore Courses"}

              <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Learn today. Lead tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {selectedCategory?.description ||
                "Discover practical courses, sharpen your skills, and turn your curiosity into real-world expertise."}
            </p>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Expert-led learning",
              "Practical projects",
              "Learn at your pace",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm text-slate-300 shadow-lg shadow-black/10 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Quick stats */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                title: "Explore",
                description: "Discover new topics",
                icon: <FaGraduationCap />,
              },
              {
                title: "Practice",
                description: "Build real-world skills",
                icon: <FaArrowRight />,
              },
              {
                title: "Grow",
                description: "Take the next step",
                icon: <span>✦</span>,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:bg-blue-500/[0.04]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-lg text-cyan-300 transition group-hover:bg-cyan-300/[0.12]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-100">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Loading state */}
      {loading && (
        <section className="mx-auto w-11/12 max-w-maxContentTab py-16 lg:max-w-maxContent">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center backdrop-blur-xl">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-300/20 border-t-cyan-300" />

            <h2 className="mt-6 text-lg font-semibold text-white">
              Preparing your learning space
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Finding courses for your next adventure...
            </p>
          </div>
        </section>
      )}

      {/* Error state */}
      {!loading && error && (
        <section className="mx-auto w-11/12 max-w-maxContentTab py-16 lg:max-w-maxContent">
          <div className="rounded-3xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-12 text-center">
            <h2 className="text-xl font-semibold text-white">
              Something went wrong
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              {error}
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/[0.14]"
            >
              Back to Home
              <FaArrowRight />
            </Link>
          </div>
        </section>
      )}

      {/* Course sections */}
      {!loading && !error && (
        <>
          {/* Featured courses */}
          <section className="mx-auto w-11/12 max-w-maxContentTab py-12 sm:py-16 lg:max-w-maxContent">

            <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Curated for you
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {sectionHeading}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Find a course that matches your curiosity and goals.
                </p>
              </div>

              {/* Tabs */}
              <div
                className="inline-flex w-fit rounded-xl border border-white/[0.08] bg-[#0B1326]/80 p-1.5 shadow-lg shadow-black/20 backdrop-blur-xl"
                role="tablist"
                aria-label="Course sorting"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === 1}
                  onClick={() => setActive(1)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    active === 1
                      ? "border border-cyan-300/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  Most Popular
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={active === 2}
                  onClick={() => setActive(2)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    active === 2
                      ? "border border-cyan-300/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  Newest
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#101A31]/80 via-[#0B1326]/90 to-[#080E1D]/90 p-3 shadow-2xl shadow-blue-950/20 backdrop-blur-2xl sm:p-6">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-[80px]" />

              <div className="relative">
                <CourseSlider Courses={displayedCourses} />
              </div>
            </div>

            {selectedCourses.length === 0 && (
              <p className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-6 text-center text-sm text-slate-400">
                No courses are available in this category yet.
              </p>
            )}
          </section>

          {/* Related category courses */}
          <section className="mx-auto w-11/12 max-w-maxContentTab py-8 sm:py-12 lg:max-w-maxContent">

            <div className="mb-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Keep exploring
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Top Courses in{" "}
                {selectedCategory?.name || "Other Categories"}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Expand your knowledge with related learning paths.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#10182F]/80 to-[#090F20]/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-6">
              <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[80px]" />

              <div className="relative">
                <CourseSlider Courses={relatedCourses} />
              </div>
            </div>

            {relatedCourses.length === 0 && (
              <p className="mt-5 text-sm text-slate-500">
                No related courses are available right now.
              </p>
            )}
          </section>

          {/* Frequently bought */}
          <section className="mx-auto w-11/12 max-w-maxContentTab pb-20 pt-8 sm:pb-28 sm:pt-12 lg:max-w-maxContent">

            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                Learner favourites
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Frequently Bought
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Popular picks to help you level up your skills.
              </p>
            </div>

            {mostSellingCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
                {mostSellingCourses.slice(0, 4).map((course, index) => (
                  <div
                    key={course?._id || course?.id || index}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D162B]/80 p-3 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-cyan-950/30"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-blue-500/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <Course_Card
                        course={course}
                        Height="h-[400px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-12 text-center backdrop-blur-xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-2xl text-cyan-300">
                  <FaGraduationCap />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  More courses are on the way
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                  There aren't any featured courses available right now.
                  Check back soon for more learning opportunities.
                </p>
              </div>
            )}
          </section>
        </>
      )}

      <Footer />
    </main>
  );
};

export default Catalog;
