 import React from 'react';
 import { useState } from 'react';
 import axios from "axios"
 
import { usePaystackPayment } from 'react-paystack';
  
  
const payment = () => {
  const [name,setName]= useState("")
  const [phone,setPhone]= useState('')
  const [email,setEmail]= useState('')
   
  const makePayment = async()=>{
    await axios.post("https://database-api-eight.vercel.app/pay").then(res => {console.log(res)})
  }
  
  return (
<>
<div className='signUp'>

    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><img src="/bg_eoa.jpg" width={300} height={300} alt="" /> <br />
     <span style={{color:"green",fontWeight:"bolder"}}>Fill the following information:</span>  </div>
         <div>Full Name:<input onChange={(e)=>setName(e.target.value)}     type='text'/></div>
         <div>Phone:<input onChange={(e)=>setPhone(e.target.value)}     type='password'/></div>
         <div>Email:<input onChange={(e)=>setEmail(e.target.value)}     type='email'/></div>
         <button onClick={() =>makePayment()}> Make Payment</button>
    </div>
    
     
    </div>
  
        </>
      );
}

export default payment