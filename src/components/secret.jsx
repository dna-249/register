import React from 'react'
import{ useState} from "react"
import axios from "axios"
const Secret = ({id}) => {

   const [adm,setAdm]= useState('')
   const [adm1,setAdm1]= useState('')
   const [name,setName]= useState('')


   useEffect(() => {
   
      axios.get(`https://register-api-cloud.vercel.app/management/${id}`)
               .then((res)=> {console.log(res.data);setName(res.data)})
               .catch((err)=> console.log(err))
   
   
   }, [])
   const handleManagementKey = (params) => {

      axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/management/key`,{adm:adm})
                    .then((res)=> alert(`${adm} secret_key is registered`))
                    .catch((err)=> console.log(err))
       }
       const handleStaffKey = (params) => {
        axios.put(`https://register-api-cloud.vercel.app/management/push/${id}/staff/key`,{adm:adm1})
                      .then((res)=> alert(`${adm1} secret_key is registered`))
                      .catch((err)=> console.log(err))
         }
  return (
    
            <div className='white'>
                 <h4>Secret_Keys</h4>

                  <div className='two'>   
                     <div>
                        <h5>Management</h5>
                        <input type="text" onChange={(e)=>setAdm(e.target.value)} placeholder='secret key...'/>
                        <button className='click1' onClick={()=>handleManagementKey()}>Register</button>
                      </div>
                      <div>
                        <h5>Previous Keys</h5>
                         {name.management.map((name,index)=>{return (
                           <div key={index}>{name}</div>
                         )})}
                      </div>
                </div>

               <div>
                     <div>
                        <h5>Staff</h5>
                        <input type="text" onChange={(e)=>setAdm1(e.target.value)} placeholder='secret key...'/>
                        <button className='click1' onClick={()=>handleStaffKey()}>Register</button>
                       </div>

                       <div>
                        <h5>Previous Keys</h5>
                         {name.staff.map((name,index)=>{return (
                           <div key={index}>{name}</div>
                         )})}
                     </div>
               </div>

            </div>
  )
}

export default Secret