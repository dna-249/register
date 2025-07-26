import React from 'react'
import axios from "axios"
import { useState } from 'react'

const Footer = () => {
const [name,setName] = useState("")
const [email, setEmail] = useState("")
const [msg, setMsg] = useState('')
const [phone,setPhone] = useState("")


const sendEmail = async()=>{
 await axios.post("https://database-api-eight.vercel.app/email",{
  to:email,
  name:name,
  msg:msg,
  phone:phone 
})
 .then((res)=>alert("sent successfully")).catch((err)=>alert(err.message))
}

  return (           
    <div style={{height:"400px"}} className="center">
        <div className="footer">
            <h3>Email</h3>
             <div style={{border:"none",background:"transparent",height:"400px",position:"relative",top:"0px",alignContent:"baseline"}} className='signUp'>
            <div style={{borderRadius:"10px",padding:"20px"}}>
            <div>Message:<textarea onChange={(e)=>setMsg(e.target.value)} style={{outlineColor:"lightgreen",border:" 1px solid rgba(128, 127, 127, 0.28)"}} cols={30} rows={5}   type='text'/></div>
             <div>Name:<input onChange={(e)=>setName(e.target.value)} type='text'/></div>            
             <div>Email:<input onChange={(e)=>setEmail(e.target.value)}  type='email'/></div>
             <div>Phone:<input onChange={(e)=>setPhone(e.target.value)}  type='number'/></div>
     
              <div><button style={{border:"none",outline:"none"}} onClick={()=>sendEmail()}> Send</button></div> 
        </div>
    </div>
        </div>
    </div>
  )
}

export default Footer