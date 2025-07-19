import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft, FaArrowLeft, FaBars,FaUser } from 'react-icons/fa'
import {useEffect,useState} from "react"
import axios from 'axios'
import User from "./user"
import {useParams,useNavigate } from "react-router-dom"
const Teacher = ({setBack}) => {
  const [names,setNames] = useState([])
  const [toggle, setToggle]=useState()
  const [select, setSelect]=useState('')
  const [select2, setSelect2]=useState('')
  const [name,setName] = useState('')
  const [teacher,setTeacher] = useState('')
  const [next,setNext] = useState(0)
  const [change,setChange] = useState(false)
  const [show,setShow] = useState(true)

  const {id} = useParams()
  const nav = useNavigate()

  
  
  useEffect(() => {
 
    axios.get(`https://database-api-eight.vercel.app/teacher/${id}`)
              .then((res)=> {console.log(res.data);setTeacher(res.data)})
              .catch((err)=> console.log(err))
  
              axios.get(`https://database-api-eight.vercel.app/student`)
              .then((res)=> {console.log(res.data);setNames(res.data)})
              .catch((err)=> console.log(err))
  
 }, [id])
 
 
 
  return (
    <div className='center' >
      <div className="bgUser">
        <div className='two'>
        <h3> Teacher DASHBOARD</h3>
        <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
        </div>
         <div className='two'>
         <div style={{marginTop:"20px"}}> {teacher? <img className='img' src={teacher?.image} />
                         :
                         <FaUser className='img'/>}</div>
         <div  className='three2 icons'>
                <div onClick={()=>nav(`/chat/teacher/${id}`)}>Notice</div>
                <div onClick={()=>nav(`/studentActivity/${teacher._id}`)}>Activity</div>
                <div onClick={()=>nav(`/question/${teacher._id}`)}>Questions </div>
                <div onClick={()=>nav(`/profile/teacher/${teacher._id}`)}>profile</div>
                </div >

                <div>{toggle?(
  <div className='bars'   onClick={()=>setToggle(pre => !pre)}><FaBars/></div>):(
    <div className="icons bars">
      <div onClick={()=>nav(`/chat/teacher/${id}`)}>Notice</div> 
        <div onClick={()=>nav(`/activity/${teacher._id}`)}>Activity</div>
                <div onClick={()=>nav(`/question/${teacher._id}`)}>Questions </div>
                <div onClick={()=>nav(`/profile/teacher/${teacher._id}`)}>profile</div>
               </div>)}
 </div>
         </div>
      <div>
      <div>
              <h4>
                Key:{teacher?.key} <br />
                Name:{teacher?.name} <br />
                
              </h4>
              <div>Select Class: <select onChange={(e)=>setSelect(e.target.value)}> 
                   {teacher?.class?.class?.map((value,index)=>{return(
                    <div key={index}><option value={value}>{value}</option></div>
                   )})}
                  </select>
              </div>
              <div>Select Subject: <select onChange={(e)=>setSelect2(e.target.value)}> 
                {teacher?.subject?.subject?.map((value,index)=>{return(
                    <div key={index}><option value={value}>{value}</option></div>
                   )})} </select>
              </div>
        </div>
        
    </div>
    <div className='white'>
         <h2> STUDENT LIST</h2>
         {names?.filter((item) => {if(item?.class === select) return item.name})
          .map((item,index)=>  <div key={index}>
         <div onClick={()=>nav(`/user/${item._id}`)}> {item.name} </div>
         </div>)}

    </div>
 </div>
</div>
  )
}

export default Teacher
