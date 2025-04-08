import React, { useState, useEffect } from 'react'
import { FaBars, FaUser ,FaCheck, FaArrowCircleLeft, FaTimes} from 'react-icons/fa'
import { Link ,useParams} from 'react-router-dom'
import Attendance from "./attendance"
import Update from "./update"
import Activity from './activity'

const User = () => {
  const [select, setSelect]=useState()
  const [toggle, setToggle]=useState()
  const [show,setShow] = useState(0)
  const [data, setData]= useState(false)
  const [day, setDay]= useState()
  const [next, setNext]= useState()
  const [isNew, setIsNew]= useState(false)
  const [isUpdate, setIsUpdate]= useState(true)

  const {id} = useParams()


  useEffect(() => {
    axios.get(`https://register-api-cloud.vercel.app/student/${id}`)
         .then((res)=> {alert(res.data.name); setName(res.data)})
         .catch((err)=> console.log(err))
  }, [id])


 if(show === 0) return (
    <>
    <div>
       <div>

    <div className='center'>
 <div className='bgUser'>
   <div className='two'>
          <h3> STUDENT DASHBOARD</h3>
          <div className='click2' onClick={()=>setBack(true)}><FaArrowCircleLeft /></div>
    </div>     
  <div className='two'>
 <div style={{marginTop:"20px"}}> <FaUser className='img'/></div>
 <div  className='three2'>

          <div onClick={()=>setShow(3)}>Activity</div>
        <div onClick={()=>setShow(1)}>Attendance </div>
        <div onClick={()=>setShow(2)}> Activity</div>
 </div >
 <div>{toggle?(
  <div className='bars'   onClick={()=>setToggle(pre => !pre)}><FaBars/></div>):(
    <div className="icons bars">
   <div onClick={()=>setShow(3)}>Activity</div>
        <div onClick={()=>setShow(1)}>Attendance </div>
        <div onClick={()=>setShow(2)}> Activity</div>
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
 <div className='two'>
          <h3> STUDENT REGISTER</h3>
          <div className='click2' onClick={()=>setShow(0)}><FaArrowCircleLeft /></div>
    </div>     
  
     <div ><FaUser className='img'/></div>
     name: {name?.name}<br />
     class: <br />
     Term:
     
     
     <div className='white'> {isNew?(
       
         <div>
           <div style={{display:"grid",justifyContent:"flex-end"}} >
     <div  className='click'    onClick={()=>setIsNew((pre)=>!pre)}> New </div>
     </div>
     <h2>Student Attendance</h2>
           
                              <Attendance setBack={setShow} datas ={name} setChange={setChange} setIsNews ={setIsNew} />
           </div>):isUpdate?(
         <div style={{padding:"5px"}}>
           <div style={{width:"fit-content",}} className='three'>
     <div  className='click2'  onClick={()=>setIsNew((pre)=>!pre)}> Attendance</div>
     <div className='click2' onClick={()=>setIsUpdate((pre)=>!pre)}>Update </div>
     <div  className='click2'  onClick={()=>setChange(()=> change + 1)}>New </div>
     </div>
           <h2>
             {data === false && <div>{name?.name} Present</div>}{data === true && <div className='red'>{name?.name} Absent</div>} 
             <br />{Date().slice(0,21)}</h2>
     <label htmlFor=""> 
         Mon
         <input checked={day === "Mon"} onChange={(e)=>setDay(e.target.value)} value="Mon"  type='radio' />
         Tue
         <input checked={day === "Tue"} onChange={(e)=>setDay(e.target.value)} value="Tue" type='radio' />
         Wed
         <input checked={day === "Wed"} onChange={(e)=>setDay(e.target.value)} value="Wed" type='radio' />
         Thu
         <input checked={day === "Thu"} onChange={(e)=>setDay(e.target.value)} value="Thu" type='radio' />
         Fri
         <input checked={day === "Fri"} onChange={(e)=>setDay(e.target.value)} value="Fri" type='radio' />
        
     </label>
    <div className='two'>
     <div style={{justifySelf:"flex-end",display:"grid",marginRight:"40px"}}>Present</div>
     <div> Absent</div>
    </div>
     <div className='two '>
         <div className='click' onClick={()=>setData(pre => !pre)}>{data? (<div></div>):(<div className='green2'><FaCheck/></div>)}</div>
         <div style={{justifySelf:"flex-start"}} className='click' onClick={()=>setData(pre => !pre)}>{data? (<div className='red2'><FaTimes/></div>):(<div></div>)}</div>
          </div> <div style={{width :"200px",justifySelf:"center" }} className='click save'  onClick={()=>name()}>Save Attendance</div>
          </div>):( 
          <div>
                 <Update datas={name} setChange={setChange}  setIsNews ={setIsNew}/>
          </div>  )}
     </div>
 </div>
   </div></>
)
 else if(show === 2) return(
  <div>
    <Activity setBack={setShow} names={name} />
  </div>
)



}

export default User