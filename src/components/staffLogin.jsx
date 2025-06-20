import React from 'react'
import { FaUser } from 'react-icons/fa'
import axios from "axios"
import {useState ,useEffect} from "react"
import Staff from './staff'
import {useNavigate } from "react-router-dom"

const StaffLogin = () => {
  const [user,setUser]=useState()
   const [users,setUsers]=useState()
   const [token,setToken]=useState()
   const [name,setName]=useState()
   const [login,setLogin]=useState(true)
   const [password,setPassword]=useState()

  const nav = useNavigate()
   
 useEffect(() => {
   handleLogin()
 }, [users])
 
  const handleLogin = async () => {
    
    await axios.post("https://database-api-eight.vercel.app/staff/login",{
        name:users,
        password:password
      }).then(res => setToken(res.data)).catch(err => {if(typeof user !== "undefined"){alert(user + "" + "access denied")} else console.log(err)})
   
  }
  useEffect(() => {
  if(typeof users !== "undefined" && users !== "") {handleLogin();}
  }, [users])

  useEffect(() => {
    if(typeof token !== "undefined") {handleVerify();}
  }, [token])

  const handleVerify = async(tokens) => {
    await axios.post("https://database-api-eight.vercel.app/staff/verify",{
      name:user,
      password:password,
      header:token
    }).then(res =>{nav(`/staff/${res.data._id}`); setName(res.data); console.log(res.data); alert(user +""+ "is verified successfully")}).catch(err => {alert("invalid username or password");console.log(err)})
  
  }
  
  
 

  return (
    <div className='signUp'>
        <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
           <div><FaUser className='img'/> <br /><span  style={{color:"green",fontWeight:"bolder"}}>Staff Login</span> </div>
           <div> Username: <input onChange={(e)=>setUser(e.target.value)} placeholder='username...' type="text" /></div>
           <div> Password: <input onChange={(e)=>setPassword(e.target.value)} placeholder='password... ' type="password" /></div>
           <div><button onClick={()=>setUsers(()=>user)}>Login</button></div> 
        </div>
    </div>
  )
  
}

export default StaffLogin