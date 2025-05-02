import React from 'react'
import {FaUser,} from "react-icons/fa"
import {Link } from "react-router-dom"
import {useState} from "react"
import axios from "axios"


const StudentSignup = ({setLogin}) => {

  const [adm,setAdm]= useState()
  const [user,setUser]= useState("")
  const [name,setName]= useState("")
  const [password,setPassword]= useState('')
  const [phone,setPhone]= useState('')
  const [email,setEmail]= useState('')
  const [confirm,setConfirm]= useState('')
  

  const handleSignUp =()=>{
    axios.post("https://database-api-eight.vercel.app/student",
      { key:adm,
        name:name,
        user:user,
        password:password,
        phone:phone,
        email:email
      })
      .then((res)=>alert("successfully created"))
      .catch((err)=> {alert("invalid Admission Number or network problem");console.log(err)})

  }
  
  return (
    <div className='signUp'>

    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br />
     <span style={{color:"green",fontWeight:"bolder"}}>Student Sign Up</span>  </div>
        <div>Admission No:<input onChange={(e)=>setAdm(e.target.value)}    type='text'/></div>
        <div>Name:<input onChange={(e)=>setName(e.target.value)}     type='text'/></div>
        <div>Create Username:<input onChange={(e)=>setUser(e.target.value)}    type='text'/></div>
        <div>Create Password:<input onChange={(e)=>setPassword(e.target.value)}    type='password'/></div>
        <div>Confirm Password:<input onChange={(e)=>setConfirm(e.target.value)}    type='password'/></div>
        <div>Phone:<input onChange={(e)=>setPhone(e.target.value)}     type='password'/></div>
        <div>Email:<input onChange={(e)=>setEmail(e.target.value)}     type='email'/></div>
        <button onClick={()=>handleSignUp()} > Sign Up</button>
    </div>
    
    
    </div>
  

)

}

export default StudentSignup