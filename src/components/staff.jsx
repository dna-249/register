import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft, FaArrowLeft, FaBars,FaUser } from 'react-icons/fa'
import {useEffect,useState} from "react"
import axios from 'axios'
import User from "./user"
import {useParams,useNavigate } from "react-router-dom"
const Staff = ({setBack}) => {
  const [names,setNames] = useState([])
  const [name,setName] = useState('')
  const [staff,setStaff] = useState('')
  const [next,setNext] = useState(0)
  const [change,setChange] = useState(false)
  const [show,setShow] = useState(true)

  const {id} = useParams()
  const nav = useNavigate()
  useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/staff/${id}`)
              .then((res)=> {console.log(res.data);setStaff(res.data)})
              .catch((err)=> console.log(err))
  
              axios.get(`https://register-api-cloud.vercel.app/student`)
              .then((res)=> {console.log(res.data);setNames(res.data)})
              .catch((err)=> console.log(err))
  
 }, [id])
 
 
 
  return (
    <div className='center' >
      <div className="bgUser">
        <div className='two'>
        <h3> STAFF DASHBOARD</h3>
        <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
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
        <div>Name:{staff?.name}</div>
        <div>Class:</div>
        <div>Subject:</div>
        
    </div>
    <div className='white'>
         <h2> STUDENT LIST</h2>
         {names?.map((name,index) => <div key={index + next}>
         <div onClick={()=>nav(`/user/${name._id}`)}> {name.name} </div>
         </div>)}

    </div>
 </div>
</div>
  )
}

export default Staff
