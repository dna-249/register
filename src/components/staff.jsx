import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaBars,FaUser } from 'react-icons/fa'
import {useEffect,useState} from "react"
import axios from 'axios'
import User from "./user"
const Staff = ({staff,setBack}) => {
  const [names,setNames] = useState([])
  const [name,setName] = useState('')
  const [show,setShow] = useState(true)


  useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/student`)
              .then((res)=> {console.log(res.data);setNames(res.data)})
              .catch((err)=> console.log(err))
  
 }, [])
 const handleSelect = (name) => {
  setName(name)
  setShow(false)
 }
 
 
  return (
  <div>
     {show?(
    <div className='center' >
      <div className="bgUser">
        <div className='two'>
        <h3> STAFF DASHBOARD</h3>
        <div onClick={setBack(true)}><FaArrowLeft /></div>
        </div>
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
         <h2> STUDENT LIST</h2>
         {names?.map((name,index) => <div key={index}>
         <div onClick={()=>handleSelect(name)}> {name.name} </div>
         </div>)}

    </div>
 </div>
</div>
):( <div><User name={name}/></div>)}
</div>

  )
}

export default Staff
