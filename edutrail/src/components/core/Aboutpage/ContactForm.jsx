// import React from "react";
// import ContactUsForm from "../../common/ContactPage/ContactForrmSection";

// const ContactForm = ()=>{
 
//     return (
//         <div className="mx-auto">
//           <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
//           <p className="text-center text-richblack-300 mt-3">We'd love to here for you, please fill out this form.</p>
           
//            <div className="mt-12 mx-auto">
//             <ContactUsForm/>
//            </div>
         
//         </div>
//     )
// }

// export default ContactForm

import React from "react";
import ContactUsForm from "../../common/ContactPage/ContactForrmSection";

const ContactForm = () => {
  return (
    <div className="relative mx-auto w-full max-w-[650px] rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Header */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        Get in Touch
      </h1>
      
      <p className="text-center text-sm sm:text-base text-cyan-200/80 mt-3 font-medium">
        We'd love to hear from you, please fill out this form.
      </p>

      {/* Form Container */}
      <div className="mt-10 mx-auto">
        <ContactUsForm />
      </div>

      {/* Ambient Bottom Glow Accent */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 bg-cyan-500/10 blur-2xl pointer-events-none" />
    </div>
  );
};

export default ContactForm;
