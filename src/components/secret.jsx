import React from 'react'
import{ useState, useEffect} from "react"
import axios from "axios"
const Secret = ({id}) => {

   const [adm,setAdm]= useState('')
   const [adm1,setAdm1]= useState('')
   const [name,setName]= useState('')
   const [auto,setAuto]= useState(false)
   


   useEffect(() => {
   
      axios.get(`https://database-api-eight.vercel.app/management/${id}`)
               .then((res)=> {console.log(res.data);setName(res.data)})
               .catch((err)=> console.log(err))
   
   
   }, [id,auto])
   const handleManagementKey = (params) => {

      axios.put(`https://database-api-eight.vercel.app/management/push/${id}/management/key`,{adm:adm})
                    .then((res)=> {alert(`${adm} secret_key is created`);setAuto((prev)=>!prev)})
                    .catch((err)=> console.log(err))
       }
       const handleStaffKey = (params) => {
        axios.put(`https://database-api-eight.vercel.app/management/push/${id}/staff/key`,{adm:adm1})
                      .then((res)=> {alert(`${adm} secret_key is created`);setAuto((prev)=>!prev)})
                      .catch((err)=> console.log(err))
         }

          const handleTeacherKey = (params) => {
        axios.put(`https://database-api-eight.vercel.app/management/push/${id}/teacher/key`,{adm:adm1})
                      .then((res)=> {alert(`${adm} secret_key is created`);setAuto((prev)=>!prev)})
                      .catch((err)=> console.log(err))
         }
  return (
    
            <div >
                 <h4>Secret_Keys</h4>

                  <div>   
                     <div className='white2'>
                        <h5>Management</h5>
                        <h5>New key: {adm}</h5>
                     
                  <div className='twoA'>
                         <input type="text" className='input' onChange={(e)=>setAdm(e.target.value)} placeholder='secret key...'/>
                        <button className='click1' onClick={()=>handleManagementKey()}>Register</button>
                      </div>
                      </div>
                      <div className='white2'>
                        <h5>Previous Keys</h5>
                        <div className="dropDown">
                         {name?.management?.map((item,index)=>{return (
                           <div key={index}>{item.key}</div>
                         )})}
                      </div>
                      </div>
                </div>

               <div >
                     <div className='white2'>
                        <h5>Staff</h5>
                      <h5>New key: {adm1}</h5>
                    <div className='twoA'>
                        <input type="text" className='input' onChange={(e)=>setAdm1(e.target.value)} placeholder='secret key...'/>
                        <button className='click1' onClick={()=>handleStaffKey()}>Register</button>
                       </div>
                       </div>

                       <div className='white2'>
                        <h5>Previous Keys</h5>
                        <div className="dropDown">
                         {name?.staff?.map((item,index)=>{return (
                           <div key={index}>{item.key}</div>
                         )})}
                     </div>
                     </div>
               </div>

                <div >
                     <div className='white2'>
                        <h5>Teacher</h5>
                      <h5>New key: {adm1}</h5>
                    <div className='twoA'>
                        <input type="text" className='input' onChange={(e)=>setAdm1(e.target.value)} placeholder='secret key...'/>
                        <button className='click1' onClick={()=>handleTeacherKey()}>Register</button>
                       </div>
                       </div>

                       <div className='white2'>
                        <h5>Previous Keys</h5>
                        <div className="dropDown">
                         {name?.teacher?.map((item,index)=>{return (
                           <div key={index}>{item.key}</div>
                         )})}
                     </div>
                     </div>
               </div>


            </div>
  )
}

export default Secret