import React, { useState, useEffect } from 'react'
import { FaBars, FaUser ,FaCheck, FaArrowCircleLeft, FaTimes} from 'react-icons/fa'
import { Link ,useParams,useNavigate} from 'react-router-dom'
import Attendance from "./attendance"
import Update from "./update"
import Activity from './activity'
import axios from "axios"

const User = () => {
  const [select, setSelect]=useState()
  const [toggle, setToggle]=useState()
  const [show,setShow] = useState(0)
  const [data, setData]= useState(false)
  const [day, setDay]= useState()
  const [next, setNext]= useState()
  const [name, setName]= useState()
  const [isNew, setIsNew]= useState(false)
  const [isUpdate, setIsUpdate]= useState(true)
  const [object, setObject]= useState()
  const [key, setKey]= useState()
  const [value, setValue]= useState()
  const [index, setIndex]= useState()
      

  const {id} = useParams()
  const nav  = useNavigate()


  useEffect(() => {
    axios.get(`https://register-api-cloud.vercel.app/student/${id}`)
         .then((res)=>  setName(res.data))
         .catch((err)=> console.log(err))
  }, [id])

  const handleSelect = (object,key,index) => {
    setKey(key) 
    setIndex(index) 
    setObject(object)
    
  }


const handleResult = async(params) => {
   await axios.put(`https://register-api-cloud.vercel.app/student/set/${id}/${object}/${index}/${key}`,{
              value:value
             })
                       .then((res)=> console.log(res.data))
                       .catch((err)=> console.log(err))
}

 if(show === 0) return (
    <>
    <div>
       <div>

    <div className='center'>
 <div className='bgUser'>
   <div className='two'>
          <h3> STUDENT DASHBOARD</h3>
          <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
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
 
   <div>upload Result:<input type="text" placeholder='write...' onChange={(e)=>setValue(e.target.value)} />
    <button onClick={()=>handleResult()}>uploadResult</button>
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
        <thead>
          <tr> 
    <th>Subjects</th>  
    <th>Ass</th>
    <th>C/A</th>
    <th>Test</th>
    <th>Exam</th>
    <th>Total</th>
    <th>Average</th>
    <th>Percentage</th>
    <th>Grade</th>
    </tr>
    </thead>
     </div>
    {name.map((name,index)=>
     <tbody className='row5 green' key={index}>
      <tr>
      <th>Eng</th>
      <th onClick={()=>handleSelect("Eng","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("Eng","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("Eng","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("Eng","exam",index)}>{name.exam}</th>
      
      <th></th>
      <th></th>

      </tr>
      
      <tr>
      <th>Math</th>
      <th onClick={()=>handleSelect("math","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("math","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("math","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("math","exam",index)}>{name.exam}</th>
       <th></th>
      <th></th>

      </tr>
      
      <tr>
      <th>Chem</th>
      <th onClick={()=>handleSelect("chem","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("chem","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("chem","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("chem","exam",index)}>{name.exam}</th>
      
      <th></th>
      <th></th>

      </tr>
      
      <tr>
      <th>Phy</th>
      <th onClick={()=>handleSelect("phy","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("phy","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("phy","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("phy","exam",index)}>{name.exam}</th>
       <th></th>
      <th></th>

      </tr>
      
      <tr>
      <th>Bio</th>
      <th onClick={()=>handleSelect("bio","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("bio","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("bio","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("bio","exam",index)}>{name.exam}</th>
      <th></th>
      <th></th>

      </tr>
      
     </tbody>)}
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
           
                              <Attendance setBack={setShow} datas ={name}  setIsNews ={setIsNew} />
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
                 <Update datas={name}   setIsNews ={setIsNew}/>
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