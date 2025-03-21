import React from 'react'
import { FaUser } from 'react-icons/fa'
import {Link} from "react-router-dom"
import axios from "axios"
import {useState } from "react"
const Login = () => {
  const [user,setUser]=useState()
  const [password,setPassword]=useState()
  const handleLogin = async (params) => {
    await axios.post("https://register-api-cloud.vercel.app/staff/login",{
      name:user,
    }).then(res => { handleVerify(res.data);alert(res.data) ;console.log(res)}).catch(err => console.log(err))
   
  }
 
  const handleVerify = (token) => {
    {
      await axios.post("https://register-api-cloud.vercel.app/staff/verify",{
        name:user,
        headers:{
          Authorization:token
        }
      }).then(res => console.log(res.data)).catch(err => {alert(user + "is not verified");console.log(err)})
    }
  }
  
  

  return (
    <div className='signUp'>
        <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
           <div><FaUser className='img'/> <br /><span  style={{color:"green",fontWeight:"bolder"}}> Login</span> </div>
           <div> Username: <input onChange={(e)=>setUser(e.target.value)} placeholder='username...' type="text" /></div>
           <div> Password: <input onChange={(e)=>setPassword(e.target.value)} placeholder='password... ' type="password" /></div>
           <div><button onClick={()=>handleLogin()}>Login</button></div> 
        </div>
    </div>
  )
}

export default Login