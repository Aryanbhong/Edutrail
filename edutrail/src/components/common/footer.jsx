// // import React from "react";

// // import { Link } from "react-router-dom";
// // import { FooterLink2 } from "../../data/footer.links";
// // import { FaCopyright } from "react-icons/fa";



// // // Icons
// // import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// // const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
// // const Resources = [
// //   "Articles",
// //   "Blog",
// //   "Chart Sheet",
// //   "Code challenges",
// //   "Docs",
// //   "Projects",
// //   "Videos",
// //   "Workspaces",
// // ];
// // const Plans = ["Paid memberships", "For students", "Business solutions"];
// // const Community = ["Forums", "Chapters", "Events"];

// // const Footer = () => {
// //   return (
// //     <div className="bg-richblack-800">
// //       <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
// //         <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
// //           {/* Section 1 */}
// //           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
// //             <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
// //                <h1 className="text-xl font-semibold">Edu<span className="text-xl font-semibold text-richblack-100">Trail</span></h1>
// //               <h1 className="text-richblack-50 font-semibold text-[16px]">
// //                 Company
// //               </h1>
// //               <div className="flex flex-col gap-2">
// //                 {["About", "Careers", "Affiliates"].map((ele, i) => {
// //                   return (
// //                     <div
// //                       key={i}
// //                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
// //                     >
// //                       <Link to={ele.toLowerCase()}>{ele}</Link>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //               <div className="flex gap-3 text-lg">
// //                 <FaFacebook />
// //                 <FaGoogle />
// //                 <FaTwitter />
// //                 <FaYoutube />
// //               </div>
// //               <div></div>
// //             </div>

// //             <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
// //               <h1 className="text-richblack-50 font-semibold text-[16px]">
// //                 Resources
// //               </h1>

// //               <div className="flex flex-col gap-2 mt-2">
// //                 {Resources.map((ele, index) => {
// //                   return (
// //                     <div
// //                       key={index}
// //                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
// //                     >
// //                       <Link to={ele.split(" ").join("-").toLowerCase()}>
// //                         {ele}
// //                       </Link>
// //                     </div>
// //                   );
// //                 })}
// //               </div>

// //               <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
// //                 Support
// //               </h1>
// //               <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
// //                 <Link to={"/help-center"}>Help Center</Link>
// //               </div>
// //             </div>

// //             <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
// //               <h1 className="text-richblack-50 font-semibold text-[16px]">
// //                 Plans
// //               </h1>

// //               <div className="flex flex-col gap-2 mt-2">
// //                 {Plans.map((ele, index) => {
// //                   return (
// //                     <div
// //                       key={index}
// //                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
// //                     >
// //                       <Link to={ele.split(" ").join("-").toLowerCase()}>
// //                         {ele}
// //                       </Link>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //               <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
// //                 Community
// //               </h1>

// //               <div className="flex flex-col gap-2 mt-2">
// //                 {Community.map((ele, index) => {
// //                   return (
// //                     <div
// //                       key={index}
// //                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
// //                     >
// //                       <Link to={ele.split(" ").join("-").toLowerCase()}>
// //                         {ele}
// //                       </Link>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Section 2 */}
// //           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
// //             {FooterLink2.map((ele, i) => {
// //               return (
// //                 <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
// //                   <h1 className="text-richblack-50 font-semibold text-[16px]">
// //                     {ele.title}
// //                   </h1>
// //                   <div className="flex flex-col gap-2 mt-2">
// //                     {ele.links.map((link, index) => {
// //                       return (
// //                         <div
// //                           key={index}
// //                           className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
// //                         >
// //                           <Link to={link.link}>{link.title}</Link>
// //                         </div>
// //                       );
// //                     })}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
// //         {/* Section 1 */}
// //         <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
// //           <div className="flex flex-row">
// //             {BottomFooter.map((ele, i) => {
// //               return (
// //                 <div
// //                   key={i}
// //                   className={` ${
// //                     BottomFooter.length - 1 === i
// //                       ? ""
// //                       : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
// //                   } px-3 `}
// //                 >
// //                   <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
// //                     {ele}
// //                   </Link>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           <div className=" items-center flex fleax-row gap-2">  <FaCopyright />2025 EduTrail</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // export default Footer


// import React from "react";
// import { Link } from "react-router-dom";
// import { FooterLink2 } from "../../data/footer.links";
// import { FaCopyright, FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
// const Resources = [
//   "Articles", "Blog", "Chart Sheet", "Code challenges",
//   "Docs", "Projects", "Videos", "Workspaces"
// ];
// const Plans = ["Paid memberships", "For students", "Business solutions"];
// const Community = ["Forums", "Chapters", "Events"];

// const Footer = () => {
//   return (
//     <footer className="bg-richblack-800 text-richblack-300">
//       <div className="w-11/12 max-w-maxContent mx-auto py-16 px-4 lg:px-0">
//         <div className="flex flex-col lg:flex-row justify-between border-b border-richblack-700 pb-10 gap-10">
          
//           {/* Left Column */}
//           <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div>
//               <h1 className="text-xl font-bold text-richblack-50 mb-3">
//                 Edu<span className="text-pure-greys-100">Trail</span>
//               </h1>
//               <h2 className="font-semibold text-richblack-50 mb-2">Company</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {["About", "Careers", "Affiliates"].map((item, i) => (
//                   <Link key={i} to={`/${item.toLowerCase()}`} className="hover:text-richblack-50 transition-all">
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//               <div className="flex gap-4 mt-4 text-lg text-richblack-300">
//                 <FaFacebook className="hover:text-white transition" />
//                 <FaGoogle className="hover:text-white transition" />
//                 <FaTwitter className="hover:text-white transition" />
//                 <FaYoutube className="hover:text-white transition" />
//               </div>
//             </div>

//             <div>
//               <h2 className="font-semibold text-richblack-50 mb-2">Resources</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {Resources.map((item, i) => (
//                   <Link key={i} to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-richblack-50 transition-all">
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               <h2 className="font-semibold text-richblack-50 mt-6 mb-2">Support</h2>
//               <Link to="/help-center" className="text-sm hover:text-richblack-50 transition-all">
//                 Help Center
//               </Link>
//             </div>

//             <div>
//               <h2 className="font-semibold text-richblack-50 mb-2">Plans</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {Plans.map((item, i) => (
//                   <Link key={i} to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-richblack-50 transition-all">
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               <h2 className="font-semibold text-richblack-50 mt-6 mb-2">Community</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {Community.map((item, i) => (
//                   <Link key={i} to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-richblack-50 transition-all">
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column (FooterLink2) */}
//           <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
//             {FooterLink2.map((section, i) => (
//               <div key={i}>
//                 <h2 className="font-semibold text-richblack-50 mb-2">{section.title}</h2>
//                 <div className="flex flex-col gap-2 text-sm">
//                   {section.links.map((link, index) => (
//                     <Link key={index} to={link.link} className="hover:text-richblack-50 transition-all">
//                       {link.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Strip */}
//         <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-richblack-400 pt-6">
//           <div className="flex gap-4">
//             {BottomFooter.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
//                 className="hover:text-richblack-50 transition-all"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center gap-2 mt-4 sm:mt-0">
//             <FaCopyright />
//             <span>2025 EduTrail. All rights reserved.</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { FooterLink2 } from "../../data/footer.links";
import { FaCopyright, FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles", "Blog", "Chart Sheet", "Code challenges",
  "Docs", "Projects", "Videos", "Workspaces"
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <footer className="relative bg-[#030712] border-t border-cyan-500/20 text-slate-400 overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="w-11/12 max-w-maxContent mx-auto py-16 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between border-b border-slate-800/80 pb-12 gap-10">
          
          {/* Left Column */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h1 className="text-2xl font-bold font-mono tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] mb-4">
                Edu<span className="text-cyan-400">Trail</span>
              </h1>
              <h2 className="font-semibold text-slate-100 tracking-wide mb-3">Company</h2>
              <div className="flex flex-col gap-2 text-sm">
                {["About", "Careers", "Affiliates"].map((item, i) => (
                  <Link key={i} to={`/${item.toLowerCase()}`} className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1">
                    {item}
                  </Link>
                ))}
              </div>

              {/* Social Icons with Neon Glass Pill styling */}
              <div className="flex gap-3 mt-5 text-base">
                {[
                  { Icon: FaFacebook, href: "#" },
                  { Icon: FaGoogle, href: "#" },
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaYoutube, href: "#" },
                ].map(({ Icon }, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:shadow-[0_0_12px_#00f0ff] transition-all duration-300 cursor-pointer"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-slate-100 tracking-wide mb-3">Resources</h2>
              <div className="flex flex-col gap-2 text-sm">
                {Resources.map((item, i) => (
                  <Link key={i} to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1">
                    {item}
                  </Link>
                ))}
              </div>

              <h2 className="font-semibold text-slate-100 tracking-wide mt-6 mb-3">Support</h2>
              <Link to="/help-center" className="text-sm hover:text-cyan-300 transition-all duration-200 block hover:translate-x-1">
                Help Center
              </Link>
            </div>

            <div>
              <h2 className="font-semibold text-slate-100 tracking-wide mb-3">Plans</h2>
              <div className="flex flex-col gap-2 text-sm">
                {Plans.map((item, i) => (
                  <Link key={i} to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1">
                    {item}
                  </Link>
                ))}
              </div>

              <h2 className="font-semibold text-slate-100 tracking-wide mt-6 mb-3">Community</h2>
              <div className="flex flex-col gap-2 text-sm">
                {Community.map((item, i) => (
                  <Link key={i} to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (FooterLink2) */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FooterLink2.map((section, i) => (
              <div key={i}>
                <h2 className="font-semibold text-slate-100 tracking-wide mb-3">{section.title}</h2>
                <div className="flex flex-col gap-2 text-sm">
                  {section.links.map((link, index) => (
                    <Link key={index} to={link.link} className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 pt-8">
          <div className="flex gap-6">
            {BottomFooter.map((item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-cyan-300 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0 text-slate-400">
            <FaCopyright className="text-cyan-400" />
            <span>{new Date().getFullYear()} EduTrail. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
