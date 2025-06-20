import React from 'react'
import {FaUser,} from "react-icons/fa"
import {useState} from "react"
import axios from "axios"


const TeacherSignup = ({setLogin}) => {

  const [key,setKey]= useState()
  const [name,setName]= useState("")
  const [user,setUser]= useState("")
  const [password,setPassword]= useState('')
  const [phone,setPhone]= useState('')
  const [confirm,setConfirm]= useState('')
  const [email,setEmail]= useState("")
  
  const handleSignUp =()=>{
    axios.post("https://database-api-eight.vercel.app/staff",
      { key:key,
        name:name,
        user:user,
        password:password,
        phone:phone,
        email:email})
        .then((res)=>alert("successfully created"))
        .catch((err)=> {alert("invalid secret_key or network problem");console.log(err)})
  
    }
  
  return (
    <div className='signUp'>
        
       
    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br /> <span style={{color:"green",fontWeight:"bolder"}}>Teacher Sign Up</span>  </div>
    <div>Secret_key:<input onChange={(e)=>setKey(e.target.value)}  type='text'/></div>
        <div>Name:<input onChange={(e)=>setName(e.target.value)} type='text'/></div>
         <div>Create Username:<input onChange={(e)=>setUser(e.target.value)}  type='text'/></div>
        <div>Create Password:<input onChange={(e)=>setPassword(e.target.value)}  type='password'/></div>
        <div>Confirm Password:<input onChange={(e)=>setConfirm(e.target.value)} type='password'/></div>
        <div>Phone:<input onChange={(e)=>setPhone(e.target.value)} type='password'/></div>
        <div>Email:<input onChange={(e)=>setEmail(e.target.value)} type='email'/></div>
        <button onClick={()=>handleSignUp()}>Create Account</button>
    </div>
    
    
    </div>
  

)

}

export default TeacherSignup