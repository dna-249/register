import axios from 'axios'
import React, { useState } from 'react'
const Classes = ({id}) => {
  const [adm,setAdm]= useState('')
  const handleCreate = (params) => {
    axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/admissions/adm`,{adm:adm})
                .then((res)=> alert(`${adm} admission is registered`))
                  .catch((err)=> console.log(err))
     }
  
  return (
    
           
            
            <div className='white'>
                 <h4>Classes</h4>
                 <div>
                    <h5>Asign Class</h5>
                
                    <input type="text" onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button onClick={()=>handleCreate()}>Asign</button>
                 </div>

                 <div>
                   <h5>Previous Classes</h5> 
                 </div>
            </div>
    
  )
}

export default Classes