import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Admission = ({id}) => {
  const [adm,setAdm]= useState('')
  const [name,setName]= useState([''])
  const [auto,setAuto]= useState(false)


   useEffect(() => {
   
      axios.get(`https://register-api-cloud.vercel.app/management/${id}`)
               .then((res)=> {console.log(res.data);setName(res.data)})
               .catch((err)=> console.log(err))
   
   
   }, [id, auto])


  const handleCreate = (params) => {
    axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/admissions/key`,{adm:adm})
                  .then((res)=>{alert(`${adm} admission is created`);setAuto((prev)=>!prev)})
                  .catch((err)=> console.log(err))
     }
  
  return (
    
           
            
            <div >
                 <h4>Admissions</h4>
                 <div className='white2'>
                    <h5>Create Admission</h5>
                    <h4>New:{adm}</h4>
                    <input type="number" onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button onClick={()=>handleCreate()}>Register</button>
                 </div>
                     <h5>Previous Admissions</h5>
                 <div className='white2' >
                  
                   {name?.admissions?.map((name, index)=>{return (<div  key={index}>{name.key}</div>)})} 
                 </div>
            </div>
    
  )
}

export default Admission