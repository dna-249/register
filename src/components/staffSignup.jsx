import React from 'react'
import {FaUser,} from "react-icons/fa"
import {useState} from "react"
import axios from "axios"


const StaffSignup = ({setLogin}) => {

  const [key,setKey]= useState()
  const [name,setName]= useState("")
  const [user,setUser]= useState("")
  const [password,setPassword]= useState('')
  const [phone,setPhone]= useState('')
  const [confirm,setConfirm]= useState('')
  const [email,setEmail]= useState("")
  
  const handleSignUp =()=>{
    axios.post("https://register-api2.vercel.app/staff/staff/key",
      { adm:key,
        name:name,
        name:user,
        password:password,
        phone:phone,
        email:email})
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))
  }
  
  return (
    <div className='signUp'>
        
       
    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br /> <span style={{color:"green",fontWeight:"bolder"}}>Staff Sign Up</span>  </div>
    <div>Secret_key:<input onChange={(e)=>setKey(e.target.value)} placeholder='admission number...' type='text'/></div>
        <div>Name:<input onChange={(e)=>setName(e.target.value)} placeholder='Full name...' type='text'/></div>
         <div>Create Username:<input onChange={(e)=>setUser(e.target.value)} placeholder='username...' type='text'/></div>
        <div>Create Password:<input onChange={(e)=>setPassword(e.target.value)} placeholder='password...' type='password'/></div>
        <div>Confirm Password:<input onChange={(e)=>setConfirm(e.target.value)} placeholder='confirm...' type='password'/></div>
        <div>Phone:<input onChange={(e)=>setPhone(e.target.value)} placeholder='phone...' type='password'/></div>
        <div>Email:<input onChange={(e)=>setEmail(e.target.value)} placeholder='email...' type='email'/></div>
        <button onClick={()=>handleSignUp()}>Create Account</button>
    </div>
    
    
    </div>
  

)

}

export default StaffSignup