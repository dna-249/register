import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Admission = ({id}) => {
  const [adm,setAdm]= useState('')
  const [name,setName]= useState('')


   useEffect(() => {
   
      axios.get(`https://register-api-cloud.vercel.app/management/${id}`)
               .then((res)=> {console.log(res.data);setName(res.data)})
               .catch((err)=> console.log(err))
   
   
   }, [id])


  const handleCreate = (params) => {
    axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/admissions/adm`,{adm:adm})
                  .then((res)=> alert(`${adm} admission is registered`))
                  .catch((err)=> console.log(err))
     }
  
  return (
    
           
            
            <div className='white'>
                 <h4>Admissions</h4>
                 <div>
                    <h5>Create Admission</h5>
                    <h3>New:{adm}</h3>
                    <input type="number" onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button onClick={()=>handleCreate()}>Register</button>
                 </div>

                 <div>
                   <h5>Previous Admissions</h5>
                   {name?.Admissions?.map((name, index)=>{return (<div  key={index}>{name.key}</div>)})} 
                 </div>
            </div>
    
  )
}

export default Admission