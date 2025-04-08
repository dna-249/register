import React, { useState,lazy } from 'react'
import { Route,Routes } from 'react-router-dom'
const Admission  = lazy(()=>import( './components/admission'))
const Secret  = lazy(()=>import( './components/secret'))
const SignUp =lazy(()=>import('./components/signup'))
const Login =lazy(()=>import('./components/login'))
const User =lazy(()=>import('./components/user'))
const ManagementSignup =lazy(()=>import('./components/managementSignup'))
const ManagementLogin =lazy(()=>import('./components/managementLogin'))
const StaffSignup =lazy(()=>import('./components/staffSignup'))
const StaffLogin =lazy(()=>import('./components/staffLogin'))
const StudentSignup =lazy(()=>import('./components/studentSignup'))
const StudentLogin =lazy(()=>import('./components/studentLogin'))
const Staff =lazy(()=>import('./components/staff'))
const Student =lazy(()=>import('./components/student'))
const Profile =lazy(()=>import('./components/profile'))
const Register =lazy(()=>import('./components/register'))
const Activity =lazy(()=>import('./components/activity'))

const App = () => {
  const [login, setLogin]= useState(false)
  const [data, setData]= useState(true)



return (<div>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/user/:id' element={<User />}/>
      <Route path='/studentSignup' element={<StudentSignup />}/>
      <Route path='/studentLogin' element={<StudentLogin />}/>
      <Route path='/staffSignup' element={<StaffSignup />}/>
      <Route path='/staffLogin' element={<StaffLogin />}/>
      <Route path='/managementSignup'element={<ManagementSignup />}/>
      <Route path='/managementLogin'element={<ManagementLogin />}/>
      <Route path='/staff/:id' element={<Staff />}/>
      <Route path='/student/:id' element={<Student />}/>
      <Route path='/secret' element={<Secret />}/>
      <Route path='/admission' element={<Admission />}/>
      <Route path='/activity' element={<Activity />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </div>)
}

export default App