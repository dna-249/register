import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Admission = ({id}) => {
  const [adm,setAdm]= useState('')
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
    axios.put(`https://database-api-eight.vercel.app/management/push/${id}/admissions/key`,{adm:adm})
                  .then((res)=>{alert(`${adm} admission is created`);setAuto((prev)=>!prev)})
                  .catch((err)=> console.log(err))
     }

  const handleDelete = (params) => {
    axios.put(`https://database-api-eight.vercel.app/management/pull/${id}/${select._id}`)
    .then((res)=>{alert(`${adm} admission is deleted`);setAuto((prev)=>!prev)})
    .catch((err)=> console.log(err))

  }
  const handleSelect = (name) => {
    setSelect(name)
    setUpdate(false)
  }
  
  
  
  return (
    
           
            
            <div >
                 <h4>Admissions</h4>
                 <div className='white2'>
                    <h5>Create Admission</h5>
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
                       Admission: {name.key}<br/>
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