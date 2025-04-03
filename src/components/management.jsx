import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaUser } from 'react-icons/fa'
import {useEffect,useState} from "react"
import axios from 'axios'
import Staff from './staff'

const Management = ({management}) => {
  const [names,setNames] = useState([])
  const [name,setName] = useState('')
  const [show,setShow] = useState(true)


  useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/staff`)
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
        <h3> MANAGEMENT DASHBOARD</h3>
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
        <div>Name:{management?.name}</div>
        <div>Class:</div>
        <div>Subject:</div>
        
    </div>
    <div>
         <h2> STAFF LIST </h2>
         {names?.map((name,index) => <div key={index}>
         <div onClick={()=>handleSelect(name)}> {name.name} </div>
         </div>)}

    </div>
 </div>
</div>
):( <div><Staff name={name} setBack ={setShow}/></div>)}
</div>

  )
}

export default Management
