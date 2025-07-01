import React, { useEffect, useState } from 'react'
import Footer from "../components/common/footer"
import apiConnector from '../services/apiConnector';
import { categories } from '../services/apis';
import getCatalogPageData from '../services/opreations/PageAndComponent';
import { useParams } from 'react-router-dom';
import { fetchCourseCategories } from '../services/opreations/courseDetails';
import CourseSlider from '../components/core/catalog.jsx/CourseSlider';
import Course_Card from '../components/core/catalog.jsx/Course_Card';

const Catalog = () => {

  const { catalogName} = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [active, setActive] = useState(1)

  // FETCH ALL CATEGORIES
  useEffect(() => {
    const getCategoryDetails = async() =>{
      // const res = await apiConnector("GET", categories.CATEGORIES_API);
      // console.log(" res aa gaya categorie ska ", res);
      const res = await fetchCourseCategories();
      console.log(" api call ke bad toh aa gaya mein",res)
    

      // const category_id=
      //  res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
      const category_id = 
      res.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
       console.log("data catalog ka", category_id)
       setCategoryId(category_id);
      }
      getCategoryDetails();
  },[catalogName]);
 console.log("setcatalogpagedata save  hua hai kya ", catalogPageData?.data?.selectedCategory?.courses.length)

  console.log(" usstate wala scene se category id", categoryId)
  // useEffect(()=>{
  //     const  getCategoryDetails = async()=>{
  //       try{
  //          const res = await getCatalogPageData({categoryId});
  //          console.log(" res ctalogpagedata", res)
  //          setCatalogPageData(res);
  //       }catch(error){
  //        console.log(error)
  //       }
  //     }
  //     if(categoryId){
  //       getCategoryDetails();
  //     }
      
  // },[categoryId]);

  useEffect(() => {
    const getCategoryDetails = async() => {
        try{
            const res = await getCatalogPageData(categoryId);
            console.log("PRinting res: ", res);
            console.log(" printing courses", res?.data?.selectedCategory?.courses.length)
            setCatalogPageData(res);
        }
        catch(error) {
            console.log(error)
        }
    }
    if(categoryId) {
        getCategoryDetails();
    }
    
},[categoryId]);

  return (
    <div className=" box-content bg-richblack-800 px-4">
      
      <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
        <p className="text-sm text-richblack-300">{`Home/ Catalog`}</p>
        <span className="text-yellow-25">
          {catalogPageData?.data?.selectedCategory?.name}
        </span>
        <p className="text-3xl text-richblack-5">{catalogPageData?.data?.selectedCategory?.name}</p>
        <p className="max-w-[870px] text-richblack-200">{catalogPageData?.data?.selectedCategory?.description}</p>
      </div>
  
        <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
          <div>Courses to get you started</div>
          <div  className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
                className={`px-4 py-2 ${
                  active === 1
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer`}
                onClick={() => setActive(1)}
              >Most Popular </p>
           <p
             className={`px-4 py-2 ${
              active === 2
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(2)}
           > new </p>
          </div>


          <div>
            
          <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses}/>
          </div>
         
        </div>
          
           {/* {section--2} */}
           <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div>Top Courses in {catalogPageData?.data?.selectedCategory?.name}</div>
            <div className="py-8">
              <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses}/>
            </div>
           </div>

           {/* {sectionn 3} */}

           <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div>Frequently Bought </div>
            <div className='py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {
                catalogPageData?.data?.mostSellingCourses?.slice(0,4).map(
                  (course, index) => (
                    <Course_Card course={course} key={index} Height={"h-[400px]"}/>
                    // <div>{course.name}</div>
                  )
                )
              }
              </div>
            </div>

           </div>

           {/* <FileReaderooter/> */}


    </div>
  )
}

export default Catalog
