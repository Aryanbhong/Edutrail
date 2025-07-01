import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  courseSectionData: [],
  courseEntireData: [],
  completedLectures: [],
  totalNoOfLectures: 0,
}

const viewCourseSlice = createSlice({
  name: "viewCourse",
  initialState,
  reducers: {
    setCourseSectionData: (state, action) => {
      state.courseSectionData = action.payload
    },
    setEntireCourseData: (state, action) => {
      state.courseEntireData = action.payload
    },
    setTotalNoOfLectures: (state, action) => {
      state.totalNoOfLectures = action.payload
    },
    // setCompletedLectures: (state, action) => {
    //   state.completedLectures = action.payload
    // },
    // updateCompletedLectures: (state, action) => {
    //   state.completedLectures = [...state.completedLectures, action.payload]
    // },
    setCompletedLectures: (state, action) => {
      // Ensure that the payload is always an array
      state.completedLectures = Array.isArray(action.payload) ? action.payload : [];
    },
    updateCompletedLectures: (state, action) => {
      // Debugging: Check the state before the update
      console.log("Before update, completedLectures:", state.completedLectures);

      // Ensure completedLectures is an array
      if (!Array.isArray(state.completedLectures)) {
        state.completedLectures = [];
      }
      
      // Add the completed lecture to the array
      state.completedLectures.push(action.payload);
      
      // Debugging: Check the state after the update
      console.log("After update, completedLectures:", state.completedLectures);
  },
},
})

export const {
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
  setCompletedLectures,
  updateCompletedLectures,
} = viewCourseSlice.actions

export default viewCourseSlice.reducer