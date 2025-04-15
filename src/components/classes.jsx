import axios from 'axios'
import React, { useState,useEffect } from 'react'
const Classes = ({id}) => {
  const [adm,setAdm]= useState('')
  const [select,setSelect]= useState('')
  const [select1,setSelect1]= useState('')
  const [show,setShow]= useState(true)
  const [show1,setShow1]= useState(true)
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

     const handleId = (name) => {
       setSelect(name)
       setShow(false)
     }

     const handleId1 = (name) => {
      setSelect1(name)
      setShow1(false)
    }
     
    const handleAssign = (name) => {
      axios.put(`https://register-api-cloud.vercel.app/staff/${select?._id}`,{class:name})
                .then((res)=> {alert(`${select?.name}  is assigned class ${name}`);setAuto((prev)=>!prev);setShow(true)})
                  .catch((err)=> console.log(err))
    
    }

    const handleAssign1 = (name) => {
      axios.put(`https://register-api-cloud.vercel.app/student/${select1?._id}`,{class:name})
      .then((res)=> {alert(`${select1?.name}  is assigned class ${name}`);setAuto((prev)=>!prev);setShow1(false)})
        .catch((err)=> console.log(err))

   }
    
  
  return (
    
           
            
            <div >
                 <h4 >Classes</h4>
                 <div className='white2'>
                    <h5>Create Class</h5>
                    <div className='twoA'>
                      <h5>New Class: {adm}</h5>
                    <input type="text" className='input' onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button className='click1' onClick={()=>handleCreate()}>Create</button>
                 </div>
                 </div>

                 <div>
                   {show?(
                    <div className='white2'> 
                      <h5>Assign Class to Staff</h5>
                      <div className="dropDown">
                   {name1?.map((name,index)=>{return(
                    <div onClick={()=>handleId(name)} key={index}>{name.name}</div>

                   )})} 
                  </div>
                  </div>
                  ):(
                  <div className='white2'>
                      <h5> Select Class</h5>
                      <div className="dropDown">
                       {name?.classes?.map((name,index)=>{return(
                             <div onClick={()=>handleAssign(name.key)} key={index}>{name.key}</div>
                      )})} 
                </div>
                </div>
                )}
              </div>

              <div>
                    {show1?(
                    <div className='white2'>
                      <h5>Assign Class to Student</h5>
                      <div className="dropDown">
                   {name2?.map((name,index)=>{return(
                       <div onClick={()=>handleId1(name)} key={index}>{name.name}</div>

                   )})} 
                 </div>
                 </div>
                ):(
                  <div className='white2'>
                      <h5> Select Class</h5>
                      <div className="dropDown">
                      {name?.classes?.map((name,index)=>{return(
                        <div onClick={()=>handleAssign1(name.key)} key={index}>{name.key}</div>

                      )})} 
                </div>
                </div>
                )}
             </div>

                 <div className='white2'>
                   <h5>Previous Classes</h5>
                   <div className="dropDown">
                   {name?.classes?.map((name,index)=>{return(
                    <div key={index}>{name.key}</div>
                   )})} 
                 </div>
                 </div>
            </div>
    
  )
}

export default Classes