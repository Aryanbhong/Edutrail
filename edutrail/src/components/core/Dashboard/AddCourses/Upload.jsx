// import { useEffect, useRef, useState } from "react"
// import { useDropzone } from "react-dropzone"
// import { FiUploadCloud } from "react-icons/fi"
// import { useSelector } from "react-redux"
// import ReactPlayer from "react-player"


// const Upload = ({
//   name,
//   label,
//   register,
//   setValue,
//   errors,
//   video=false ,
//   viewData = null,
//   editData = null,
// }) => {
  
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewSource, setPreviewSource] = useState(
//     viewData ? viewData : editData ? editData : ""
//   );
//   const inputRef = useRef(null);

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     console.log("the reason merko...",file);
//     console.log(file.type)
//    const data =URL.createObjectURL(file);
//    console.log(" url ban raha hai yaha nahi ",data);
//     if (file) {
//       previewFile(file);
//       setSelectedFile(file);
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: !video
//       ? { "image/*": [".jpeg", ".jpg", ".png"] }
//       : { "video/*": [".mp4"] },
//     // accept: video ? '.mp4' : '.jpeg,.jpg,.png',
//     onDrop,
//   });
//  if(video){
//   console.log(" true video to hai",video)
//  }
//   const previewFile = (file) => {
   
//     const reader = new FileReader();
//     reader.readAsDataURL(file)
//     reader.onloadend=()=>{
//       console.log("the file url shayad ", reader.result);
//       setPreviewSource(reader.result)
//     }
    
//   };

//   useEffect(() => {
//     register(name, { required: true });
//   }, [register]);

//   useEffect(() => {
//     setValue(name, selectedFile);
    
//   }, [selectedFile, setValue]);
//  console.log("gaya sub section ke pass");
//   return (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm text-richblack-5" htmlFor={name}>
//         {label} {!viewData && <sup className="text-pink-200">*</sup>}
//       </label>
//       <div
//         className={`${
//           isDragActive ? "bg-richblack-600" : "bg-richblack-700"
//         } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
//       >
//         {previewSource ? (
//           <div className="flex w-full flex-col p-6">
//             {!video ? (
//               <img
//                 src={previewSource}
//                 alt="Preview"
//                 className="h-full w-full rounded-md object-cover"
//               />
//             ) : (
//               <ReactPlayer url={previewSource} controls width="100%" height="100%" />
//             )}
//             {!viewData && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setPreviewSource("");
//                   setSelectedFile(null);
//                   setValue(name, null);
//                 }}
//                 className="mt-3 text-richblack-400 underline"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         ) : (
//           <div
//             className="flex w-full flex-col items-center p-6"
//             {...getRootProps()}
//           >
//             <input {...getInputProps()} />
//             <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
//               <FiUploadCloud className="text-2xl text-yellow-50" />
//             </div>
//             <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
//               Drag and drop an {!video ? "image" : "video"}, or click to{" "}
//               <span className="font-semibold text-yellow-50">Browse</span> a file
//             </p>
//             <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
//               <li>Aspect ratio 16:9</li>
//               <li>Recommended size 1024x576</li>
//             </ul>
//           </div>
//         )}
//       </div>
//       {errors[name] && (
//         <span className="ml-2 text-xs tracking-wide text-pink-200">
//           {label} is required
//         </span>
//       )}
//     </div>
//   );
// };


// export default Upload


//  // if(video){
//     //  setPreviewSource(URL.createObjectURL(file));
    
//     // } else{
//     //   const reader = new FileReader();
//     //   reader.readAsDataURL(file);
//     //   reader.onloadend = () => {
//     //     setPreviewSource(reader.result);
//     //   };
//     //   setSelectedFile(file);
//     // }


import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import ReactPlayer from "react-player"

const Upload = ({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      previewFile(file)
      setSelectedFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: !video
      ? { "image/*": [".jpeg", ".jpg", ".png"] }
      : { "video/*": [".mp4"] },
    onDrop,
  })

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  useEffect(() => {
    register(name, { required: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register, name])

  useEffect(() => {
    setValue(name, selectedFile)
  }, [selectedFile, setValue, name])

  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor={name}>
        {label} {!viewData && <sup className="text-rose-400">*</sup>}
      </label>

      {/* Upload Box Container */}
      <div
        className={`relative flex min-h-[250px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 backdrop-blur-md ${
          isDragActive
            ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            : "border-cyan-500/30 bg-[#030712]/70 hover:border-cyan-500/60 hover:bg-[#0B132B]/60"
        }`}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6 items-center">
            <div className="relative w-full overflow-hidden rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              {!video ? (
                <img
                  src={previewSource}
                  alt="Preview"
                  className="max-h-[300px] w-full rounded-xl object-cover"
                />
              ) : (
                <div className="aspect-video w-full">
                  <ReactPlayer url={previewSource} controls width="100%" height="100%" />
                </div>
              )}
            </div>

            {!viewData && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setPreviewSource("")
                  setSelectedFile(null)
                  setValue(name, null)
                }}
                className="mt-4 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-1.5 text-xs font-semibold text-rose-300 transition-all duration-300 hover:bg-rose-900/60 hover:text-white hover:shadow-[0_0_12px_rgba(244,63,94,0.4)] cursor-pointer"
              >
                Cancel / Remove
              </button>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6 text-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            {/* Glowing Icon Badge */}
            <div className="grid aspect-square w-14 place-items-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-110">
              <FiUploadCloud className="text-2xl drop-shadow-[0_0_6px_#00f0ff]" />
            </div>

            <p className="mt-3 max-w-[220px] text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
              Drag and drop an {!video ? "image" : "video"}, or click to{" "}
              <span className="font-bold text-cyan-300 underline decoration-cyan-400">Browse</span> a file
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 text-center text-[11px] font-medium text-cyan-300/70">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>

      {/* Error Message */}
      {errors[name] && (
        <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
          {label} is required
        </span>
      )}
    </div>
  )
}

export default Upload
