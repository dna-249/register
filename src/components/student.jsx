import React, { useState,useEffect } from 'react'
import { FaBars, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Activity from './activity'
import StudentAttendance from './studentAttendance'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Student = () => {
  const [select, setSelect]=useState()
  const [toggle, setToggle]=useState()
  const [name,setName]=useState()
  const [show,setShow] = useState(0)
  const {id} = useParams()


useEffect(() => {
  axios.get(`https://register-api-cloud.vercel.app/student/${id}`)
       .then((res)=> setName(res.data))
       .catch((err)=> console.log(err))
}, [id])


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
        <thead>
          <tr> 
    <th>Subjects</th>  
    <th>Ass</th>
    <th>C/A</th>
    <th>Test</th>
    <th>Exam</th>
    <th>Total</th>
    <th>Percentage</th>
    <th>Grade</th>
    </tr>
    </thead>
     </div>
     <div className='row5 green'>
    {name?.Eng.map((name,index)=> { 
                  
    const digit = (name)=>{if(typeof name === 'undefined') return "0";else return name}

    const data1 = Number(digit(name.ass));
    const data2 = Number(digit(name.ca));
    const data3 = Number(digit(name.test));
    const data4 = Number(digit(name.exam));
    const arr =[data1,data2,data3,data4]
    const total = arr.reduce((sum,current)=>{return sum + current},0)
      
     const percent = (total) =>{return (total/100)*100 +"%"}
     const percents = percent(total)
     const grade =(total)=>{    
                           if(total <= 40) return "F";
                      else if(total <= 55) return "E";
                      else if(total <= 65) return "D";
                      else if(total <= 75) return "C";
                      else if(total <= 85) return "B";
                      else if(total <= 100) return "A";
                      else if(total > 100) return "A+";
                       }
    const grades = grade(total)
       
      return (
     
      <tr  key={index}>
      <th>Eng</th>
      <th onClick={()=>handleSelect("Eng","ass",index)}>{show? name.ass : <input type='number'value={value && value || name.ass} width={100} onChange={(e)=>setValue(e.target.value)}/>}</th>
      <th onClick={()=>handleSelect("Eng","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("Eng","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("Eng","exam",index)}>{name.exam}</th>
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
      )})}
      {name?.math.map((name,index)=> {
        const digit = (name)=>{if(typeof name === 'undefined') return "0";else return name}

        const data1 = Number(digit(name.ass));
        const data2 = Number(digit(name.ca));
        const data3 = Number(digit(name.test));
        const data4 = Number(digit(name.exam));
         const arr =[data1,data2,data3,data4]
       const total = arr.reduce((sum,current)=>{return sum + current},0)

       const percent = (total) =>{return (total/100)*100 +"%"}
       const percents = percent(total)

       const grade =(total)=>{    
        if(total <= 40) return "F";
   else if(total <= 55) return "E";
   else if(total <= 65) return "D";
   else if(total <= 75) return "C";
   else if(total <= 85) return "B";
   else if(total <= 100) return "A";
   else if(total > 100) return "A+";
                       }
   const grades = grade(total)
        
        return (
    
      
      <tr key={index}>
      <th>Math</th>
      <th >{name.ass}</th>
      <th>{name.ca}</th>
      <th >{name.test}</th>
      <th >{name.exam}</th>
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
     )})}
      {name?.chem.map((name,index)=> {
        
        const digit = (name)=>{if(typeof name === 'undefined') return "0";else return name}

        const data1 = Number(digit(name.ass));
        const data2 = Number(digit(name.ca));
        const data3 = Number(digit(name.test));
        const data4 = Number(digit(name.exam));
          const arr =[data1,data2,data3,data4]
      const total = arr.reduce((sum,current)=>{return sum + current},0)

      const percent = (total) =>{return (total/100)*100 +"%"}
       const percents = percent(total)

       const grade =(total)=>{    
                           if(total <= 40) return "F";
                      else if(total <= 55) return "E";
                      else if(total <= 65) return "D";
                      else if(total <= 75) return "C";
                      else if(total <= 85) return "B";
                      else if(total <= 100) return "A";
                      else if(total > 100) return "A+";
                       }
                       const grades = grade(total)
       
        return (
     
      
      <tr key={index}>
      <th>Chem</th>
      <th >{name.ass}</th>
      <th>{name.ca}</th>
      <th >{name.test}</th>
      <th >{name.exam}</th> 
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
      )})}
      {name?.phy.map((name,index)=> {
        const digit = (name)=>{if(typeof name === 'undefined') return "0";else return name}

        const data1 = Number(digit(name.ass));
        const data2 = Number(digit(name.ca));
        const data3 = Number(digit(name.test));
        const data4 = Number(digit(name.exam));
        const arr =[data1,data2,data3,data4]
       const total = arr.reduce((sum,current)=>{return sum + current},0)

       const percent = (total) =>{return (total/100)*100 +"%"}
       const percents = percent(total)

       const grade =(total)=>{    
                          if(total <= 40) return "F";
                    else if(total <= 55) return "E";
                    else if(total <= 65) return "D";
                    else if(total <= 75) return "C";
                    else if(total <= 85) return "B";
                    else if(total <= 100) return "A";
                      else if(total > 100) return "A+";
                       }
                  const grades = grade(total)
                          return (
     
      
      <tr key={index}>
      <th>Phy</th>
      <th >{name.ass}</th>
      <th>{name.ca}</th>
      <th >{name.test}</th>
      <th >{name.exam}</th>
         <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
     )})}
      {name?.bio.map((name,index)=> {
        const digit = (name)=>{if(typeof name === 'undefined') return "0";else return name}

        const data1 = Number(digit(name.ass));
        const data2 = Number(digit(name.ca));
        const data3 = Number(digit(name.test));
        const data4 = Number(digit(name.exam));
        const arr =[data1,data2,data3,data4]
       const total = arr.reduce((sum,current)=>{return sum + current},0)

       const percent = (total) =>{return (total/100)*100 +"%"}
       const percents = percent(total)

       const grade =(total)=>{    
        if(total <= 40) return "F";
   else if(total <= 55) return "E";
   else if(total <= 65) return "D";
   else if(total <= 75) return "C";
   else if(total <= 85) return "B";
   else if(total <= 100) return "A";
   else if(total < 100) return "A+";
    }
   const grades = grade(total)
       
        return (
     
      
      <tr key={index}>
      <th>Bio</th>
      <th >{name.ass}</th>
      <th>{name.ca}</th>
      <th >{name.test}</th>
      <th >{name.exam}</th>
        <th>{total}</th>
      <th>{percents}</th>
        <th>{grades}</th>
      </tr>
      
     )})}
     </div>
   </div></div>
   
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
           
       <StudentAttendance datas ={name} />
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