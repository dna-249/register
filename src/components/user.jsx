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
  const [show,setShow] = useState(true)
  const [data, setData]= useState(false)
  const [day, setDay]= useState()
  const [next, setNext]= useState()
  const [name, setName]= useState([ ])
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
  }, [id,isUpdate])
   
  const handleSelect = (object,key,index) => {
    setKey(key) 
    setIndex(index) 
    setObject(object)
     const edit = window.prompt("write something")
    setValue(edit)
  }


const handleResult = async(params) => {
   await axios.put(`https://register-api-cloud.vercel.app/student/set/${id}/${object}/${index}/${key}`,{
              value:value
             })
                       .then((res)=>{setIsUpdate(pre => !pre);setShow(true); console.log(res.data)})
                       .catch((err)=> console.log(err))
}

  return (
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
          <div onClick={()=>nav(`/attendance/${name._id}`)}>Attendance </div>
        <div onClick={()=>nav(`/update/${name._id}`)}> Update</div>
    </div >
 <div>{toggle?(
  <div className='bars'   onClick={()=>setToggle(pre => !pre)}><FaBars/></div>):(
    <div className="icons bars">
   <div>Activity</div>
        <div onClick={()=>nav(`/attendance/${name._id}`)}>Attendance </div>
        <div onClick={()=>nav(`/update/${name._id}`)}> Update</div>
    </div>)}
 </div>
 
 </div>
   <div className='two'>
  
   <div> <h4>{name?.name}</h4> </div> 
   <div><span style={{color:"blue", textDecoration:"underline"}}></span></div>
 
   </div>
 
    <button className='click2' onClick={()=>handleResult()}>Save</button>
   
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
    {name.Eng?.map((name,index)=> { 
                  
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
      <th onClick={()=>handleSelect("Eng","ass",index)}>{show? name.ass : <input type='number'value={name.ass } width={100} onChange={(e)=>setValue(e.target.value)}/>}</th>
      <th onClick={()=>handleSelect("Eng","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("Eng","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("Eng","exam",index)}>{name.exam}</th>
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
      )})}
      {name.math?.map((name,index)=> {
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
      <th onClick={()=>handleSelect("math","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("math","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("math","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("math","exam",index)}>{name.exam}</th>
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
     )})}
      {name.chem?.map((name,index)=> {
        
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
      <th onClick={()=>handleSelect("chem","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("chem","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("chem","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("chem","exam",index)}>{name.exam}</th>
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
      )})}
      {name.phy?.map((name,index)=> {
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
      <th onClick={()=>handleSelect("phy","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("phy","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("phy","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("phy","exam",index)}>{name.exam}</th>
      <th>{total}</th>
      <th>{percents}</th>
       <th>{grades}</th>
      </tr>
     )})}
      {name.bio?.map((name,index)=> {
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
      <th>Bio</th>
      <th onClick={()=>handleSelect("bio","ass",index)}>{name.ass}</th>
      <th onClick={()=>handleSelect("bio","ca",index)}>{name.ca}</th>
      <th onClick={()=>handleSelect("bio","test",index)}>{name.test}</th>
      <th onClick={()=>handleSelect("bio","exam",index)}>{name.exam}</th>
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

export default User