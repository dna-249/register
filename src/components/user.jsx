import React, { useState } from 'react'
import { FaBars, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const User = () => {
  const [select, setSelect]=useState()
  return (
    <>
 <div className='bgUser'>
  <div className='two'>
 <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
 <div  className='three2'>
        <div>Report Sheet</div>
        <div><Link to="/register">Attendance</Link> </div>
        <div><Link to="/activity">Activity</Link></div>
 </div>
 <div className='bars'><FaBars/></div>
 </div>
   <div className='two'>
  
   <div> <h4>Nuraalhaji</h4> </div> 
   <div><span style={{color:"blue", textDecoration:"underline"}}><Link to='/profile' >user profile</Link></span></div>
 
   </div>
 
 <div></div>
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
   
</div>
  </>)
}

export default User