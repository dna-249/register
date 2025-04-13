import axios from 'axios'
import React, { useState,useEffect } from 'react'
const Classes = ({id}) => {
  const [adm,setAdm]= useState('')
  const [name,setName]= useState([''])
  const [name1,setName1]= useState([''])
  const [name2,setName2]= useState([''])
  const [auto,setAuto]= useState(false)


 useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/management/${id}`)
              .then((res)=> {console.log(res.data);setName(res.data)})
              .catch((err)=> console.log(err))
  
    axios.get(`https://register-api-cloud.vercel.app/staff`)
              .then((res)=> {console.log(res.data);setName1(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://register-api-cloud.vercel.app/student`)
              .then((res)=> {console.log(res.data);setName2(res.data)})
              .catch((err)=> console.log(err))
  
 }, [id, auto])
 
 


  const handleCreate = (params) => {
    axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/classes/key`,{adm:adm})
                .then((res)=> {alert(`${adm} class is assigned`);setAuto((prev)=>!prev)})
                  .catch((err)=> console.log(err))
     }
  
  return (
    
           
            
            <div >
                 <h4 >Classes</h4>
                 <div className='white'>
                    <h5>Create Class</h5>
                
                    <input type="text" onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button onClick={()=>handleCreate()}>Create</button>
                 </div>

                 <div>
                    <h5>Assign Class to Staff</h5>
                    <div className='white'>
                   {name1?.map((name,index)=>{return(
                    <div key={index}>{name.name}</div>
                   )})} 
                 </div>
                 </div>

                 <div>
                    <h5>Assign Class to Staff</h5>
                    <div className='white'>
                   {name2?.map((name,index)=>{return(
                    <div key={index}>{name.name}</div>
                   )})} 
                 </div>
                 </div>

                 <div className='white'>
                   <h5>Previous Classes</h5>
                   {name?.map((name,index)=>{return(
                    <div key={index}>{name.key}</div>
                   )})} 
                 </div>
            </div>
    
  )
}

export default Classes