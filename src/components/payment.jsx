 import React from 'react';
 import { useState } from 'react';
 
import { usePaystackPayment } from 'react-paystack';
  
  
const payment = () => {
  const [name,setName]= useState("")
  const [phone,setPhone]= useState('')
  const [email,setEmail]= useState('')
   
   
  const config = {
      reference: (new Date()).getTime().toString(),
      email: email,
      name:name,
      phone:phone,
      amount: 500000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_616566e8c418c2ea8544844d7b5792290b03ccba',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  
      const initializePayment = usePaystackPayment(config);
      
  
  return (
<>
<div className='signUp'>

    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><img src="/bg_eoa.jpg" width={300} height={300} alt="" /> <br />
     <span style={{color:"green",fontWeight:"bolder"}}>Fill the following information:</span>  </div>
         <div>Full Name:<input onChange={(e)=>setName(e.target.value)}     type='text'/></div>
         <div>Phone:<input onChange={(e)=>setPhone(e.target.value)}     type='password'/></div>
         <div>Email:<input onChange={(e)=>setEmail(e.target.value)}     type='email'/></div>
         <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Make Payment</button>
    </div>
    
     
    </div>
  
        </>
      );
}

export default payment