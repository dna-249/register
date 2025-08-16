import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Admission = ({id}) => {
  const [adm,setAdm]= useState('')
  const [ref,setRef]= useState('')
  const [email,setEmail]= useState('')
  const [select,setSelect]= useState('')
  const [update,setUpdate]= useState(true)
  const [name,setName]= useState([''])
  const [auto,setAuto]= useState(false)


   useEffect(() => {
   
      axios.get(`https://database-api-eight.vercel.app/management/${id}`)
               .then((res)=> {console.log(res.data);setName(res.data)})
               .catch((err)=> console.log(err))
   
   
   }, [id, auto])


  const handleCreate = (params) => {
    axios.put(`https://database-api-eight.vercel.app/management/pay/verify`,{
      email:email,
      ref:ref,
      adm:adm
    })
              .then((res)=>{alert(`${adm} verified successfully`);setAuto((prev)=>!prev)})
              .catch((err)=> console.log(err))
  }

  const handleDelete = (params) => {
    axios.put(`https://database-api-eight.vercel.app/management/pull/${id}/${select._id}/admissions`)
    .then((res)=>{alert(`${adm} admission is deleted`);setAuto((prev)=>!prev);setUpdate(true)})
    .catch((err)=> console.log(err))

  }
  const handleSelect = (name) => {
    setSelect(name)
    setUpdate(false)
  }
  
  
  
  return (
    
           
            
            <div >
                 <h4>Verification & Admissions</h4>
                 <div className='white2'>
                    <h5>Client Email</h5>
                    <h5>Email: {email}</h5> 

                    <div className='twoA'>
                    <input type="number" className='input' onChange={(e)=>setEmail(e.target.value)} placeholder='new admission no...'/>
                    </div>
                    <h5>Transaction Ref: {ref}</h5> 

                    <div className='twoA'>
                    <input type="number" className='input' onChange={(e)=>setRef(e.target.value)} placeholder='new admission no...'/>
                   </div>
                   <h5>New Admission: {adm}</h5> 

                    <div className='twoA'>
                    <input type="number" className='input' onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                   
                    <button className='click1' onClick={()=>handleCreate()}>Register</button>
                 </div></div>
                     <h5>Previous Admissions</h5>
                 <div className='white2' >{update?
                  <div className="dropDown">
                   {name?.admissions?.map((name, index)=>{return (<div  key={index}  onClick={()=>handleSelect(name)}>{name.key}</div>)})} 
                 </div>:
                      <div>
                       Delete this admission? <br/>
                       Admission: {select.key}<br/>
                       <div className="twoA">
                       <button onClick={()=>handleDelete()}>Delete</button>
                       <button onClick={()=>setUpdate(true)}>Back</button>
                       </div> 
                      </div>}
                 </div>
            </div>
    
  )
}

export default Admission