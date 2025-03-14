import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './components/signup'
import Login from './components/login'
import User from './components/user'
import Profile from './components/profile'
import Register from './components/register'
import Activity from './components/activity'

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
      <Route path='/activity' element={<Activity />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

  </div>)}</div>)}
}

export default App