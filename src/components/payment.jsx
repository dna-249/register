 import React from 'react';
 import { useState } from 'react';
 import axios from "axios"
 import { useParams } from 'react-router-dom';
 import useControl from './useControl';
  
const payment = () => {
  const [name,setName]= useState("")
  const [select,setSelect]= useState("")
  const [select2,setSelect2]= useState("")
  const [reference,setReference]= useState("")
  const [phone,setPhone]= useState('')
  const [email,setEmail]= useState('')
  const {id} = useParams()

   const{error,control} = useControl(name,phone,email,select,select2)
  const makePayment = async()=>{
    await axios.put("https://database-api-eight.vercel.app/pay/put",
      {email:email,
        name:name,
        phone:phone,
        date:Date().slice(0,21)
      }).then(res=> alert("processing...")).catch(err=>alert(err.message))    
 
    await axios.post("https://database-api-eight.vercel.app/pay",
      {email:email,
        amount:10000
      }).then(res => {console.log(res);window.location.href = res.data.data.authorization_url;setReference(res.data.data.reference)}).catch(err => alert(err))

       }
  
  return (
<>
<div style={{height:"fit-content",padding:"20px"}} className='signUp'>

    <div style={{borderRadius:"10px",padding:"5px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div ><img src="/bg_eoa.jpg" width={300} height={300} alt="" />  <br />
       </div>
          <h2> PROGRAM DESCRIPTION </h2>
          <div style={{fontSize:"20px", color:"coral",fontWeight:"bold"}}>Program Type  </div>
          <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}> {id}</p>

          <div style={{fontSize:"20px", color:"coral",fontWeight:"bold"}}>Select Time:   
            <select onChange={(e)=>setSelect2(e.target.value)}> 
      <option value="Morning Plan"> Morning</option>
      <option value="Afternoon Plan"> Afternoon</option>
      <option value="Evening Plan"> Evening</option>
      
    </select>
    </div>
       <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}> {select2}</p>
          <div style={{fontSize:"20px", color:"coral",fontWeight:"bold"}}>Select Duration:  
            <select onChange={(e)=>setSelect(e.target.value)}> 
      <option value="50000"> One Month Program</option>
      <option value="100000"> Two Months Program</option>
      <option value="150000"> Three Months Program</option>
      
    </select>
      </div>
      {select  === '50000' && <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}>One Month Program  </p> 
    || select === '100000' && <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}>Two Months  Program  </p>
     || select === '150000' && <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}>Three Months Program   </p>}
       
    
       <div style={{fontSize:"20px", color:"coral",fontWeight:"bold"}}>Program Fees</div>
        {select  === '50000' && <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}>Fees: N50,000:00</p> 
    || select === '100000' && <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}>Fees: N100,000:00</p>
     || select === '150000' && <p className="box" style={{fontSize:"20px",fontWeight:"bold"}}> Fees:N150,000</p>}
       
     <h3 style={{color:"green",fontWeight:"bolder"}}>  Fill the following information:</h3>
         <div>Full Name:<input onChange={(e)=>setName(e.target.value)}     type='text'/></div>
         <div>Phone:<input onChange={(e)=>setPhone(e.target.value)}     type='number'/></div>
         <div>Email:<input onChange={(e)=>setEmail(e.target.value)}     type='email'/></div>
         <h3 className='red'>{error}</h3>
         <button style={{marginBottom:"20px"}} onClick={() =>control(makePayment)}> Make Payment</button>
    </div>
    </div>
  
        </>
      );
}

export default payment