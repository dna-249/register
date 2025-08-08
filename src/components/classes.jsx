import axios from 'axios'
import React, { useState,useEffect } from 'react'
const Classes = ({id}) => {
  const [adm,setAdm]= useState('')
  const [link,setLink]= useState('')
  const [select,setSelect]= useState('')
  const [select1,setSelect1]= useState('')
  const [show,setShow]= useState(true)
  const [show1,setShow1]= useState(true)
  const [name,setName]= useState([''])
  const [name1,setName1]= useState([''])
  const [name2,setName2]= useState([''])
  const [name3,setName3]= useState([''])
  const [auto,setAuto]= useState(false)


 useEffect(() => {
 
    axios.get(`https://database-api-eight.vercel.app/management/${id}`)
              .then((res)=> {console.log(res.data);setName(res.data)})
              .catch((err)=> console.log(err))
  
    axios.get(`https://database-api-eight.vercel.app/staff`)
              .then((res)=> {console.log(res.data);setName1(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://database-api-eight.vercel.app/student`)
              .then((res)=> {console.log(res.data);setName2(res.data)})
              .catch((err)=> console.log(err))
  
              axios.get(`https://database-api-eight.vercel.app/teacher`)
              .then((res)=> {console.log(res.data);setName3(res.data)})
              .catch((err)=> console.log(err))
  
 }, [id, auto])
 
 


  const handleCreate = (params) => {
    axios.put(`https://database-api-eight.vercel.app/management/push/${id}/classes/key`,{adm:adm})
                .then((res)=> {alert(`${adm} class is assigned`);setAuto((prev)=>!prev)})
                  .catch((err)=> console.log(err))
     }
     const handleCreate2 = (params) => {
    axios.put(`https://database-api-eight.vercel.app/management/push/${id}/subject/key`,{adm:adm})
                .then((res)=> {alert(`${adm} class is assigned`);setAuto((prev)=>!prev)})
                  .catch((err)=> console.log(err))
     }
      const handleCreate3 = (params) => {
    axios.put(`https://database-api-eight.vercel.app/management/push/${id}/link/link`,
      {adm:adm,linkname:link})
                .then((res)=> {alert(`${adm} link is assigned`);setAuto((prev)=>!prev)})
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
      axios.put(`https://database-api-eight.vercel.app/staff/${select?._id}`,{class:name})
                .then((res)=> {alert(`${select?.name}  is assigned class ${name}`);setAuto((prev)=>!prev);setShow(true)})
                  .catch((err)=> console.log(err))
    
    }
const handleAssign3 = (name) => {
      axios.put(`https://database-api-eight.vercel.app/teacher/push/${select?._id}/class/class`,{classes:name})
                .then((res)=> {alert(`${select?.name}  is assigned class ${name}`);setAuto((prev)=>!prev);setShow(true)})
                  .catch((err)=> console.log(err))
    
    }
    const handleAssign4 = (name) => {
      axios.put(`https://database-api-eight.vercel.app/teacher/push/${select?._id}/subject/subject`,{classes:name})
                .then((res)=> {alert(`${select?.name}  is assigned subject ${name}`);setAuto((prev)=>!prev);setShow(true)})
                  .catch((err)=> console.log(err))
    
    }

    const handleAssign1 = (name) => {
      axios.put(`https://database-api-eight.vercel.app/student/${select1?._id}`,{class:name})
      .then((res)=> {alert(`${select1?.name}  is assigned class ${name}`);setAuto((prev)=>!prev);setShow1(false)})
        .catch((err)=> console.log(err))

   }
   const handleAssignLink = (name) => {
      axios.put(`https://database-api-eight.vercel.app/teacher/${select?._id}`,{link:name})
      .then((res)=> {alert(`${select?.name}  is assigned link`);setAuto((prev)=>!prev);setShow1(false)})
        .catch((err)=> console.log(err))

   } 
    
  
  return (
    
           
            
            <div >
                 <h4 >Classes</h4>
                 <div className='white2'>
                    <h5>Create Class</h5>
                    <h5>New Class: {adm}</h5>
                    <div className='twoA'>
                      
                      
                    <input type="text" className='input' onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                    <button className='click1' onClick={()=>handleCreate()}>Create</button>
                 </div>
                 </div>
                  <div className='white2'>
                    <h5>Create Subject</h5>
                    <h5>New Class: {adm}</h5>
                    <div className='twoA'>
                      
                      
                    <input type="text" className='input' onChange={(e)=>setAdm(e.target.value)} placeholder='tap subject...'/>
                    <button className='click1' onClick={()=>handleCreate2()}>Create</button>
                 </div>
                 </div>
                 <div className='white2'>
                    <h5>Create Link</h5>
                    <h5>Class Link Name:{link}</h5>
                    <h5>New Link: {adm}</h5>
                    <div className='two'>
                    <input type="text" className='input' onChange={(e)=>setLink(e.target.value)} placeholder='tap link name...'/>
                    
                 </div>
                    <div className='twoA'>
                      
                      
                    <input type="text" className='input' onChange={(e)=>setAdm(e.target.value)} placeholder='tap link...'/>
                    <button className='click1' onClick={()=>handleCreate3()}>Create</button>
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
                   {show?(
                    <div className='white2'> 
                      <h5>Assign Class to Teacher</h5>
                      <div className="dropDown">
                   {name3?.map((name,index)=>{return(
                    <div onClick={()=>handleId(name)} key={index}>{name.name}</div>

                   )})} 
                  </div>
                  </div>
                  ):(
                  <div className='white2'>
                      <h5> Select Class</h5>
                      <div className="dropDown">
                       {name?.classes?.map((name,index)=>{return(
                             <div onClick={()=>handleAssign3(name.key)} key={index}>{name.key}</div>
                      )})} 
                </div>
                </div>
                )}
              </div>
              <div>
                   {show?(
                    <div className='white2'> 
                      <h5>Assign subject to Teacher</h5>
                      <div className="dropDown">
                   {name3?.map((name,index)=>{return(
                    <div onClick={()=>handleId(name)} key={index}>{name.name}</div>

                   )})} 
                  </div>
                  </div>
                  ):(
                  <div className='white2'>
                      <h5> Select subject</h5>
                      <div className="dropDown">
                       {name?.subject?.map((name,index)=>{return(
                             <div onClick={()=>handleAssign4(name.key)} key={index}>{name.key}</div>
                      )})} 
                </div>
                </div>
                )}
              </div>


<div>
                   {show?(
                    <div className='white2'> 
                      <h5>Assign Link to Teacher</h5>
                      <div className="dropDown">
                   {name3?.map((name,index)=>{return(
                    <div onClick={()=>handleId(name)} key={index}>{name.name}</div>

                   )})} 
                  </div>
                  </div>
                  ):(
                  <div className='white2'>
                      <h5> Select link</h5>
                      <div className="dropDown">
                       {name?.link?.map((name,index)=>{return(
                             <div onClick={()=>handleAssignLink(name.link)} key={index}>{name.name} <br/> {name.link}</div>
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
                 <div className='white2'>
                   <h5>Previous Subjects</h5>
                   <div className="dropDown">
                   {name?.subject?.map((name,index)=>{return(
                    <div key={index}>{name.key}</div>
                   )})} 
                 </div>
                 </div>
            </div>
    
  )
}

export default Classes