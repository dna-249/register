import React from 'react'
import {FaUser,} from "react-icons/fa"
import {useState} from "react"
import axios from "axios"


const ManagementSignup = ({setLogin}) => {

  const [key,setKey]= useState()
  const [user,setUser]= useState("")
  const [password,setPassword]= useState('')
  const [confirm,setConfirm]= useState('')
  
  
  const handleSignUp =()=>{
    axios.post("https://register-api2.vercel.app/management/management/key",
      { adm:key,
        name:user,
        password:password,
        email:confirm
      })
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))

    axios.get("https://register-api2.vercel.app/management")
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
  }
  
  
  return (
    <div className='signUp'>
        
       
    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br /> <span style={{color:"green",fontWeight:"bolder"}}>Management Sign Up</span>  </div>
    <div>Secret_key:<input onChange={(e)=>setKey(e.target.value)} placeholder='admission number...' type='text'/></div>
        <div>Create Username:<input onChange={(e)=>setUser(e.target.value)} placeholder='write username...' type='text'/></div>
        <div>Create Password:<input onChange={(e)=>setPassword(e.target.value)} placeholder='write password...' type='password'/></div>
        <div>Confirm Password:<input onChange={(e)=>setConfirm(e.target.value)} placeholder='confirm password...' type='password'/></div>
        <button onClick={()=>handleSignUp()}>Create Account</button>
    </div>
    
    
    </div>
  

)

}

export default ManagementSignup