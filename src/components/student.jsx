import React, { useState } from 'react'
import { FaBars, FaUser ,FaCheck, FaPlus, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Attendance from "./attendance"
import Update from "./update"
import Activity from './activity'

const Student = ({name}) => {
  const [select, setSelect]=useState()
  const [toggle, setToggle]=useState()
  const [show,setShow] = useState(0)
  const [data, setData]= useState(false)
  const [day, setDay]= useState()
  const [isNew, setIsNew]= useState(false)
  const [items, setItems]= useState([])
  const [update, setUpdate]= useState("Check the update type above...")
  const [isUpdate, setIsUpdate]= useState(true)


 if(show === 0) return (
    <>
    <div>
       <div>

    <div className='center'>
 <div className='bgUser'>
  <div className='two'>
 <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
 <div  className='three2'>

          <div onClick={()=>setShow(3)}>Activity</div>
        <div onClick={()=>setShow(1)}>Attendance </div>
        <div onClick={()=>setShow(2)}> Activity</div>
 </div >
 <div>{toggle?(
  <div className='bars'   onClick={()=>setToggle(pre => !pre)}><FaBars/></div>):(
    <div className="icons bars">
  <div><Link to="/activity">Activity</Link></div>
        <div><Link to="/register">Attendance</Link> </div>
        <div><Link to='/profile' >profile</Link></div>
    </div>)}
 </div>
 
 </div>
   <div className='two'>
  
   <div> <h4>{name?.name}</h4> </div> 
   <div><span style={{color:"blue", textDecoration:"underline"}}></span></div>
 
   </div>
 
 
   <div className='user2 '>
    <div className='three'>
    <div>Student Results</div>
    <div>Session: <select onChange={(e)=>setSelect(e.target.value)}> 
      <option value="2022/2023">2022/2023</option>
      <option value="2023/2024">2023/2024</option>
      <option value="2024/2025">2024/2025</option>
    </select></div>
    <div>Term: <select onChange={(e)=>setSelect(e.target.value)}> 
      <option value="1">First Term</option>
      <option value="2">Second Term</option>
      <option value="3">Third Term</option>
    </select></div>
    </div>  
    <div className='scroll'>
      <div className='seven'> 
    <div>Subjects</div>  
    <div>C/A</div>
    <div>Exam</div>
    <div>Total</div>
    <div>Average</div>
    <div>Percentage</div>
    <div>Grade</div>

     
     </div>
     <div className='row5'>
      <div>Eng</div>
      <div>Math</div>
      <div>Chem</div>
      <div>Phy</div>
      <div>Bio</div>
     </div>
     </div>
   </div>
   
</div></div>
</div>
</div>
  </>)

 else if(show === 1) return (
  <>
  <div className='center'>
 <div className='bgUser'> 
     <h3>REGISTER</h3>
     <div ><FaUser className='img'/></div>
     name: {name?.name}<br />
     class: <br />
     Term:
     
     
     <div className='white'>
     <h2>Student Attendance</h2>
           
                              <Attendance datas ={name} setIsNews ={setIsNew} />
     </div>
      </div>
   </div></>
)
 else if(show === 2) return(
  <div>
    <Activity names={name} />
  </div>
)



}

export default Student