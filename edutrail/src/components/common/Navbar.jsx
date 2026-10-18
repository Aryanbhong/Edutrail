// // import React, { useEffect, useState } from "react";
// // import { Link,Links, matchPath } from "react-router-dom";
// // import { MdSchool } from "react-icons/md";
// // import { IoCartOutline } from "react-icons/io5";
// // import { useLocation } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import ProfileDropDown from "../core/Auth/ProfileDropDown";
// // import { apiConnector } from "../../services/apiConnector";
// // import { NavbarLinks } from "../../data/navbar.links";
// // import { categories } from "../../services/apis";
// // import { IoIosArrowDropdown } from "react-icons/io";
// // import { fetchCourseCategories } from "../../services/opreations/courseDetails";

// // import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
// // import { BsChevronDown } from "react-icons/bs"
// // import ProfileDropdown from "../core/Auth/ProfileDropDown"


// // const Navbar = ()=>{
// //     const {token} = useSelector((state)=>state.auth);
// //     const {user} = useSelector((state)=>state.profile);
// //     const totalItems = useSelector((state) => state.cart?.totalItems);
// //     const location = useLocation()
// //     const [loading,setLoading] = useState(false);

// //    const [subLinks, setSubLinks] = useState([]);
    

// //     useEffect( ()=>{
// //         const getCategories = async () => {
// //             setLoading(true)
// //             const categories = await fetchCourseCategories()
// //             console.log(" sublinks data...", categories)
// //             if (categories.length > 0) {
// //               // console.log("categories", categories)
// //              setSubLinks(categories)
// //             }
// //             setLoading(false)
// //           }
// //           getCategories();
// //       // fetchsublinks();
// //     },[])
    
   
     
// //     const matchRoute =(route) =>{
// //         return  matchPath({path: route}, location.pathname)
// //     }
    
// //     return(
// //         <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
// //           location.pathname !== "/" ? "bg-richblack-800" : ""
// //         } transition-all duration-200`}>
// //           <div className="flex w-11/12 max-w-maxContent items-center justify-between">
// //          <Link to="/">
// //            <div className="flex flex-row items-start gap-1"><MdSchool /> <p className="font-mono font-semibold text-2xl  bg-gradient-to-bl from-pure-greys-400 to-white bg-clip-text text-transparent leading-normal">EduTrail</p></div>
// //          </Link>
         
    
// //         <nav className="hidden md:block">
// //           <ul className="flex gap-x-6 text-richblack-25">
// //             {NavbarLinks.map((link, index) => (
// //               <li key={index}>
// //                 {link.title === "Catalog" ? (
// //                   <>
// //                     <div
// //                       className={`group relative flex cursor-pointer items-center gap-1 ${
// //                         matchRoute("/catalog/:catalogName")
// //                           ? "text-yellow-25"
// //                           : "text-richblack-25"
// //                       }`}
// //                     >
// //                       <p>{link.title}</p>
// //                       <IoIosArrowDropdown />
// //                       <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
// //                         <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
// //                         {loading ? (
// //                           <p className="text-center">Loading...</p>
// //                         ) : (subLinks && subLinks.length) ? (
// //                           <>
// //                             {subLinks
// //                               ?.filter(
// //                                 (subLink) => subLink?.courses?.length > 0
// //                               )
// //                               ?.map((subLink, i) => (
// //                                 <Link
// //                                   to={`/catalog/${subLink.name
// //                                     .split(" ")
// //                                     .join("-")
// //                                     .toLowerCase()}`}
// //                                   className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
// //                                   key={i}
// //                                 >
// //                                   <p>{subLink.name}</p>
// //                                 </Link>
// //                               ))}
// //                           </>
// //                         ) : (
// //                           <p className="text-center">No Courses Found</p>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <Link to={link?.path}>
// //                     <p
// //                       className={`${
// //                         matchRoute(link?.path)
// //                           ? "text-yellow-25"
// //                           : "text-richblack-25"
// //                       }`}
// //                     >
// //                       {link.title}
// //                     </p>
// //                   </Link>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
         
// //          {/* login/signup/dashboard */}
// //          <div className="flex gap-x-4 items-center">
// //            {
// //             user && user?.accountType != "Instructor" && (
// //                <Link to={"/dashboard/cart"} className="relative">
// //                    <IoCartOutline  className="text-2xl text-richblack-100" />
// //                    {
// //                     totalItems> 0 && (
// //                         <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
// //                             {totalItems}
// //                         </span>
// //                    )
// //                    }
// //                 </Link>
// //             )
// //            }
// //            {
// //             token === null && (
// //                 <Link to="/login">
// //                     <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[6px] text-richblack-100 rounded-md">
// //                         Log in
// //                     </button>
// //                 </Link>
// //             )
// //            }
// //            {
// //             token=== null && (
// //                 <Link to="/signup">
// //                 <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[6px] text-richblack-100 rounded-md">
// //                     Sign Up
// //                 </button>
// //                 </Link>
// //             )
// //            }
// //            {
// //             token !== null && <ProfileDropDown/>
// //            }
// //          </div>

// //           </div>
// //         </div>


       
        
// //     )
// // }

// // export default Navbar

// import React, { useEffect, useState } from "react";
// import { Link, matchPath, useLocation } from "react-router-dom";
// import { MdSchool } from "react-icons/md";
// import { IoCartOutline } from "react-icons/io5";
// import { useSelector } from "react-redux";
// import { IoIosArrowDropdown } from "react-icons/io";

// import ProfileDropDown from "../core/Auth/ProfileDropDown";
// import { NavbarLinks } from "../../data/navbar.links";
// import { fetchCourseCategories } from "../../services/opreations/courseDetails";

// const Navbar = () => {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const totalItems = useSelector((state) => state.cart?.totalItems);
//   const location = useLocation();

//   const [subLinks, setSubLinks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getCategories = async () => {
//       setLoading(true);
//       const categories = await fetchCourseCategories();
//       if (categories.length > 0) setSubLinks(categories);
//       setLoading(false);
//     };
//     getCategories();
//   }, []);

//   const matchRoute = (route) => matchPath({ path: route }, location.pathname);

//   return (
//     <header className={`border-b border-richblack-700 z-[999] ${location.pathname !== "/" ? "bg-richblack-900" : "bg-transparent"} transition-all duration-200`}>
//       <div className="w-11/12 max-w-maxContent mx-auto flex justify-between items-center h-16">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-yellow-100">
//           <MdSchool className="text-2xl" />
//           <p className="text-2xl font-bold font-mono bg-gradient-to-br from-white to-richblack-100 text-transparent bg-clip-text">
//             EduTrail
//           </p>
//         </Link>

//         {/* Nav Links */}
//         <nav className="hidden md:block">
//           <ul className="flex gap-x-6 text-sm font-medium">
//             {NavbarLinks.map((link, index) => (
//               <li key={index} className="relative group">
//                 {link.title === "Catalog" ? (
//                   <div className={`flex items-center gap-1 cursor-pointer ${matchRoute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-100"} hover:text-yellow-25 transition`}>
//                     <p>{link.title}</p>
//                     <IoIosArrowDropdown />

//                     {/* Dropdown */}
//                     <div className="absolute top-8 left-0 w-56 lg:w-72 bg-richblack-800 border border-richblack-600 rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all z-50">
//                       {loading ? (
//                         <p className="text-center py-4 text-sm text-richblack-300">Loading...</p>
//                       ) : subLinks?.length > 0 ? (
//                         subLinks
//                           .filter((item) => item?.courses?.length > 0)
//                           .map((subLink, i) => (
//                             <Link
//                               to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
//                               key={i}
//                               className="block px-4 py-3 text-richblack-100 hover:bg-richblack-700 rounded-md transition-all"
//                             >
//                               {subLink.name}
//                             </Link>
//                           ))
//                       ) : (
//                         <p className="text-center py-4 text-sm text-richblack-300">No Courses Found</p>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     to={link?.path}
//                     className={`${matchRoute(link.path) ? "text-yellow-25" : "text-richblack-100"} hover:text-yellow-25 transition`}
//                   >
//                     {link.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Cart */}
//           {user?.accountType !== "Instructor" && (
//             <Link to="/dashboard/cart" className="relative">
//               <IoCartOutline className="text-2xl text-richblack-100" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-richblack-900">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           )}

//           {/* Auth Buttons */}
//           {!token && (
//             <>
//               <Link to="/login">
//                 <button className="px-4 py-1.5 text-sm text-richblack-100 bg-richblack-800 border border-richblack-700 rounded-md hover:bg-richblack-700 transition">
//                   Log in
//                 </button>
//               </Link>
//               <Link to="/signup">
//                 <button className="px-4 py-1.5 text-sm text-richblack-900 bg-yellow-50 rounded-md hover:bg-yellow-100 transition">
//                   Sign Up
//                 </button>
//               </Link>
//             </>
//           )}

//           {/* Profile */}
//           {token && <ProfileDropDown />}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { MdSchool } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { IoIosArrowDropdown } from "react-icons/io";

import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { NavbarLinks } from "../../data/navbar.links";
import { fetchCourseCategories } from "../../services/opreations/courseDetails";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const totalItems = useSelector((state) => state.cart?.totalItems);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories?.length > 0) setSubLinks(categories);
      setLoading(false);
    };
    getCategories();
  }, []);

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <header className="sticky top-0 z-[999] border-b border-cyan-500/20 bg-[#030712]/70 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="w-11/12 max-w-maxContent mx-auto flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300">
            <MdSchool className="text-2xl" />
          </div>
          <p className="text-2xl font-bold font-mono tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
            EduTrail
          </p>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 text-sm font-medium">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.title === "Catalog" ? (
                  <div className={`flex items-center gap-1.5 cursor-pointer py-1 transition-all duration-200 ${
                    matchRoute("/catalog/:catalogName") 
                      ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-semibold" 
                      : "text-slate-300 hover:text-cyan-300"
                  }`}>
                    <p>{link.title}</p>
                    <IoIosArrowDropdown className="transition-transform duration-300 group-hover:rotate-180 text-cyan-400" />

                    {/* Neon Glass Dropdown */}
                    <div className="absolute top-10 -left-4 w-60 lg:w-72 rounded-2xl border border-cyan-500/30 bg-[#0b132b]/90 p-2 shadow-[0_0_30px_rgba(0,240,255,0.2)] backdrop-blur-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      {/* Inner Top Lighting Accent */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-cyan-400/50 shadow-[0_0_8px_#00f0ff]" />
                      
                      {loading ? (
                        <p className="text-center py-4 text-sm text-cyan-300/60 animate-pulse">Loading Categories...</p>
                      ) : subLinks?.length > 0 ? (
                        subLinks
                          .filter((item) => item?.courses?.length > 0)
                          .map((subLink, i) => (
                            <Link
                              to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                              key={i}
                              className="block px-4 py-2.5 text-sm text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-xl border border-transparent hover:border-cyan-500/30 transition-all duration-200"
                            >
                              {subLink.name}
                            </Link>
                          ))
                      ) : (
                        <p className="text-center py-4 text-sm text-slate-400">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link?.path}
                    className={`relative py-1 transition-all duration-200 ${
                      matchRoute(link.path) 
                        ? "text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" 
                        : "text-slate-300 hover:text-cyan-300"
                    }`}
                  >
                    {link.title}
                    {matchRoute(link.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_#00f0ff] rounded-full" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          {user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative p-2 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all duration-300 group">
              <IoCartOutline className="text-2xl text-slate-300 group-hover:text-cyan-300 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center rounded-full bg-cyan-400 text-[10px] font-bold text-slate-950 shadow-[0_0_10px_#00f0ff] animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* Auth Buttons */}
          {!token && (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <button className="px-4 py-2 text-sm font-semibold text-cyan-300 border border-cyan-500/40 bg-cyan-950/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] active:scale-95">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] active:scale-95">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Profile */}
          {token && <ProfileDropDown />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
