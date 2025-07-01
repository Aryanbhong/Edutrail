import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contactus'
import About from './pages/About'
import "./App.css"
import Navbar from './components/common/Navbar'
import Login from './pages/login'
import Signup from './pages/signup'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
import EmailVerify from './pages/verifyEmail'
import MyProfile from './components/core/Dashboard/MyProfile'
import VipRoute from './components/core/Auth/VipRoute'
import Dashboard from './pages/Dashboard'
import Sorry from './pages/Error'
import Settings from './components/core/Dashboard/settings'
import EnrolledCourses from './components/core/Dashboard/settings/EnrolledCourses'
import Cart from './components/core/Dashboard/Cart'
import { ACCOUNT_TYPE } from '../../edutrail/src/utils/Permanents'
import AddCourse from './components/core/Dashboard/AddCourses'
import { useSelector } from 'react-redux'
import MyCourses from './components/core/Dashboard/MyCourses'
import EditCourse from './components/core/Dashboard/EditCourse'
import Catalog from './pages/Catalog'
import CourseDetails from './pages/CourseDetails'
import ViewCourse from './pages/ViewCourse'
import VideoDetails from './components/core/ViewCourse/videoDetails'
import Instructor from './components/core/Dashboard/InstructorDashboard/Instructor'

function App() {
  
  const { user } = useSelector((state) => state.profile)
  return (
    <div className='w-screen min-h-screen text-white bg-richblack-900 flex flex-col font-inter'>
       <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalog/:catalogName' element={<Catalog/>}/>
      <Route path="courses/:courseId" element={<CourseDetails/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword'  element={<ForgotPassword/>}/>
      <Route path='/update-password/:id'  element={< UpdatePassword/>}/>
      <Route path='/verify-email' element={<EmailVerify/>}/>
      <Route path='*' element={<Sorry/>} />

      <Route  element={
        <VipRoute>
          <Dashboard/>
        </VipRoute>
      } >
        <Route path='/dashboard/my-profile' element={<MyProfile/>}/>
        <Route path='/dashboard/settings' element={<Settings/>} />
          {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }
        {
          user?.accountType===ACCOUNT_TYPE.INSTRUCTOR && (
            <>
             <Route path='/dashboard/instructor' element={<Instructor/>}/>
            <Route path='/dashboard/add-course' element={<AddCourse/>}/>
            <Route path='/dashboard/my-courses' element={<MyCourses/>}/>
            <Route path='/dashboard/edit-course/:courseId' element={<EditCourse/>}/>
            </>
          )
        }
      </Route>
      <Route element={
        <VipRoute>
          <ViewCourse/>
        </VipRoute>
      }>
        {
         user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route
          path='/view-course/:courseId/section/:sectionId/sub-section/:subSectionId'
        
          element={<VideoDetails/>}
          />
          </>
         )
        }
      </Route>
      </Routes>
    </div>
  )
}

export default App
