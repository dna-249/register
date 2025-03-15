import React, { useState,lazy } from 'react'
import { Route,Routes } from 'react-router-dom'
const SignUp =lazy(()=>import( './components/signup'))
const Login =lazy(()=>import( './components/login'))
const User =lazy(()=>import( './components/user'))
const Staff =lazy(()=>import( './components/staff'))
const Profile =lazy(()=>import( './components/profile'))
const Register =lazy(()=>import( './components/register'))
const Activity =lazy(()=>import( './components/activity'))

const App = () => {
  const [login, setLogin]= useState(false)
  const [data, setData]= useState(true)



if(login === false)
  { return (<SignUp setLogin={setLogin} />)}
 else{return (<div>
  {data? ( <div>
   <Login setLogin={setData} /> </div>)
  :(<div>

    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<User />}/>
      <Route path='/staff' element={<Staff />}/>
      <Route path='/activity' element={<Activity />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

  </div>)}</div>)}
}

export default App