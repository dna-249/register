import axios from 'axios'
import React, { useState,useEffect } from 'react'
const Classes = ({id}) => {
  const [adm,setAdm]= useState('')
  const [name,setName]= useState('')


 useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/management/${id}`)
              .then((res)=> {console.log(res.data);setName(res.data)})
              .catch((err)=> console.log(err))
  
  
 }, [id])
 
 


  const handleCreate = (params) => {
    axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/classes/key`,{key:adm})
                .then((res)=> alert(`${adm} class is assigned`))
                  .catch((err)=> console.log(err))
     }
  
  return (
    
           
            
            <div className='white'>
                 <h4>Classes</h4>
                 <div>
                    <h5>Assign Class</h5>
                
                    <input type="text" onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button onClick={()=>handleCreate()}>Assign</button>
                 </div>

                 <div>
                   <h5>Previous Classes</h5>
                   {name?.classes?.map((name,index)=>{return(
                    <div key={index}>{name.key}</div>
                   )})} 
                 </div>
            </div>
    
  )
}

export default Classes