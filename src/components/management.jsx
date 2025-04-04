import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaUser } from 'react-icons/fa'
import {useEffect,useState} from "react"
import axios from 'axios'
import Staff from './staff';
import Student from './student'

const Management = ({management}) => {
  const [names1,setNames1] = useState([])
  const [names2,setNames2] = useState([])
  const [names3,setNames3] = useState([])
  const [name,setName] = useState('')
  const [view,setView] = useState('')
  const [show,setShow] = useState(true)


  useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/management`)
              .then((res)=> {console.log(res.data);setNames1(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://register-api-cloud.vercel.app/staff`)
              .then((res)=> {console.log(res.data);setNames2(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://register-api-cloud.vercel.app/student`)
              .then((res)=> {console.log(res.data);setNames3(res.data)})
              .catch((err)=> console.log(err))
  
  
  
 }, [])
 const handleSelect = (name,view) => {
  setName(name)
  setView(()=>{if(view ===  "3")
  return <Student  name={name} setBack ={setShow}/> 

  else if (view === "2"){
    return <Staff  staff={name} setBack ={setShow}/>
 }

 else if(view === "1"){
  return <Management  management={name} setBack ={setShow}/>}
  })
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
            
            <div className='bars'><FaBars/></div>
        
            <div>
                <div>Name:{management?.name}</div>
                <div>Class:</div>
                <div>Subject:</div>
                
            </div>
    </div>


    <div className="two"> 
            <div  className='three2'>
                <div> Admissions</div>
                <div>Secret_Keys </div>
                <div>Classes</div>
         </div>
         <div  className='three2'>
                <div>Results</div>
                <div>Reports </div>
                <div>Notice</div>
         </div>
 </div>
<div className="white three4">
        <div><h3>Management</h3>
            {names1?.map((name,index) => <div key={index}>
            <div onClick={()=>handleSelect(name,'1')}> {name.name} </div>
            </div>)}
        </div>

        <div>
         <h3> Staff  </h3>
            {names2?.map((name,index) => <div key={index}>
            <div onClick={()=>handleSelect(name,"2")}> {name.name} </div>
            </div>)}
        </div>
        
        <div><h3> Students</h3>
              {names3?.map((name,index) => <div key={index}>
              <div onClick={()=>handleSelect(name,"3")}> {name.name} </div>
              </div>)}
              
          </div>
    </div>
  </div>
</div>
):( <div>{view}</div>)}
</div>

  )
}

export default Management
