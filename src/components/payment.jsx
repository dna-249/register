 import React from 'react';
 import { useState } from 'react';
 import axios from "axios"
 import { useParams } from 'react-router-dom';
  
const payment = () => {
  const [name,setName]= useState("")
  const [select,setSelect]= useState("")
  const [reference,setReference]= useState("")
  const [phone,setPhone]= useState('')
  const [email,setEmail]= useState('')
  const {id} = useParams()
   
  const makePayment = async()=>{
    await axios.put("https://database-api-eight.vercel.app/pay/put",
      {email:email,
        name:name,
        phone:phone,
        date:Date().slice(0,21)
      }).then(res=> alert("processing...")).catch(err=>alert(err.message))    
 
    await axios.post("https://database-api-eight.vercel.app/pay",
      {email:email,
        amount:100000
      }).then(res => {console.log(res);window.location.href = res.data.data.authorization_url;setReference(res.data.data.reference)}).catch(err => alert(err))

       }
  
  return (
<>
<div className='signUp'>

    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><img src="/bg_eoa.jpg" width={300} height={300} alt="" />  <br />
     <span style={{color:"green",fontWeight:"bolder"}}>  Fill the following information:</span>  </div>
          <h3>Program:  {id} </h3>
          <h3>Select Duration: {select}
            <select onChange={(e)=>setSelect(e.target.value)}> 
      <option value="One Month"> One Month</option>
      <option value="Two Months"> Two Months</option>
      <option value="Three Months"> Three Months</option>
      
    </select>
    </h3>
         <div>Full Name:<input onChange={(e)=>setName(e.target.value)}     type='text'/></div>
         <div>Phone:<input onChange={(e)=>setPhone(e.target.value)}     type='number'/></div>
         <div>Email:<input onChange={(e)=>setEmail(e.target.value)}     type='email'/></div>
         <button onClick={() =>makePayment()}> Make Payment</button>
    </div>
    </div>
  
        </>
      );
}

export default payment