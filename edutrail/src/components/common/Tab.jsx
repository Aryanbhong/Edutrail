// const Tab=({ tabData, field, setField }) =>{
//     return (
//       <div
//         style={{
//           boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//         }}
//         className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
//       >
//         {tabData.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setField(tab.type)}
//             className={`${
//               field === tab.type
//                 ? "bg-richblack-900 text-richblack-5"
//                 : "bg-transparent text-richblack-200"
//             } py-2 px-5 rounded-full transition-all duration-200`}
//           >
//             {tab?.tabName}
//           </button>
//         ))}
//       </div>
//     );
//   }

//   export default Tab

const Tab = ({ tabData, field, setField }) => {
  return (
    <div
      className="flex bg-richblack-800/50 backdrop-blur-md p-1 gap-x-2 my-6 rounded-full max-w-max shadow-inner shadow-white/10 border border-white/10"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`py-2 px-5 rounded-full transition-all duration-200 text-sm font-semibold
            ${
              field === tab.type
                ? "bg-yellow-50 text-richblack-900 shadow-md scale-[1.03]"
                : "text-richblack-200 hover:bg-richblack-700/40 hover:text-white"
            }`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
};

export default Tab;
