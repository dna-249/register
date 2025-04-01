import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaUser } from 'react-icons/fa'
import Register from './register'
import {useState,useEffect} from "react"
import axios from 'axios'
import User from "./user"

const Staff = () => {
  const [items,setItems] = useState()

  useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/student`)
              .then((res)=> {console.log(res.data);setItems(res.data)})
              .catch((err)=> console.log(err))
  
 }, [])
 
  return (
    <div className='center' >
      <div className="bgUser">
        <h3> STAFF DASHBOARD</h3>
         <div className='two'>
         <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
         <div  className='three2'>
        
                <div><Link to="/staff">Results</Link></div>
                <div><Link to="/register">Attendances</Link> </div>
                <div><Link to="/activity">Activities</Link></div>
         </div>
         <div className='bars'><FaBars/></div>
         </div>
      <div>
        <div>Name:</div>
        <div>Class:</div>
        <div>Subject:</div>
      </div> 
      <div>
         <h2> Student List </h2>
         {items?.map((item, index)=><div key={index}>
                 {item.name}
                
          </div>)}

    </div>   <User  />
    </div>
   
</div>

  )
}

export default Staff
