import React, { useState,useEffect } from 'react'
import { FaBars, FaUser} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Student = () => {
  const [select, setSelect]=useState()
  const [toggle, setToggle]=useState()
  const [time,setTime]=useState()
  const [name,setName]=useState()
  const [staff,setStaff]=useState()
  const [show,setShow] = useState(0)
  const {id} = useParams()
  const nav = useNavigate()

useEffect(() => {
  axios.get(`https://database-api-eight.vercel.app/student/${id}`)
       .then((res)=> {setName(res.data);console.log(res.data)})
       .catch((err)=> console.log(err))

  axios.get(`https://database-api-eight.vercel.app/staff`)
                       .then((res)=> {console.log(res.data);setStaff(res.data)})
                       .catch((err)=> console.log(err))
          
}, [id])
const handleId = (id) => {
  setTime(id)
}


 if(show === 0) return (
    <>
    <div>
       <div>

    <div className='center'>
 <div className='bgUser'>
  <div className='two'>
 <div style={{marginTop:"20px"}}> {name? <img className='img' src={name?.image} />
                :
                <FaUser className='img'/>}</div>
 <div  className='three2 icons'>

        <div onClick={()=>nav(`/studentActivity/${name._id}/${time}`)}>Activity</div>
        <div onClick={()=>nav(`/studentAttendance/${name._id}`)}>Attendance </div>
        <div onClick={()=>nav(`/profile/student/${name._id}`)}>profile</div>
     </div >
 <div>{toggle?(
  <div className='bars'   onClick={()=>setToggle(pre => !pre)}><FaBars/></div>):(
    <div className="icons bars">
        <div onClick={()=>nav(`/studentActivity/${name._id}/${time}`)}>Activity</div>
        <div onClick={()=>nav(`/studentAttendance/${name._id}`)}>Attendance </div>
        <div onClick={()=>nav(`/profile/${name._id}`)}>profile</div>
    </div>)}
 </div>
 
 </div>
   <div className='two'>
   <div>
   <div>
    <h4> Admission: {name?.key} <br />  
        Name: {name?.name} <br />
        Class :{name?.class}</h4> </div> 
   </div>
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
     {staff?.filter((item)=> {return item.class === name?.class})
   .map((item,index)=>{
               return (<div key={index}>{handleId(item.name)}</div>)
   })}
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
      <th onClick={()=>handleSelect("Eng","ass",index)}>{name.ass}</th>
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
}

export default Student