import React from 'react'
import { FaArrowCircleLeft, FaHome, FaUser } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const StudentActivity = ({setBack}) => {
  const unSet = (params) => {
    const remain = JSON.parse(localStorage.getItem("unset"))
    if(!remain) {return false} else {return remain}
  }

    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    const [staff,setStaff]=useState()
    const [select,setSelect]=useState('')
    const [names,setNames]=useState('')
    const [timeOut,setTimeOut]= useState(true)
    const [score,setScore]= useState(unSet())
    
      

  const {id} = useParams()
    const nav = useNavigate()

    const handleStudent = async ()=>{
      await axios.get(`https://database-api-eight.vercel.app/student/${id}`)
      .then((res)=> {console.log(res.data);setNames(res.data);handleStudent2()})
      .catch((err)=> console.log(err)) 
    }
    const handleStudent2 = async ()=>{
     await axios.get(`https://database-api-eight.vercel.app/staff/class/${names?.class}`)
      .then((res)=> {console.log(res.data);setStaff(res.data)})
      .catch((err)=> console.log(err))

    }
    useEffect(() => {
   
       handleStudent()
   }, [id,names])

   const strTime = ()=> {return parseInt(staff?.time)}
   const time = strTime()


   const getTime = (params) => {
       const remain = JSON.parse(localStorage.getItem("time"))
       if(remain === "undefined") {return null} else {return remain}
     }
     
  const [duration,setDuration]=useState(!time?getTime():time)
       
     
  const set = (params) => {
         localStorage.removeItem("time")
         localStorage.removeItem("unset")
         console.log(duration)
         setDuration("")
         setScore(false)
         setDuration(()=>time*1000)
       
       }

 
       
   
   
  const handle = (params) => {
          if(duration === 0){
             setScore(true);localStorage.removeItem("time")
           localStorage.setItem("unset",JSON.stringify(score))
               handleResult()

    }
        }
   
  const timerFormat = (milliseconds) => {
          let secs =parseInt(Math.floor(milliseconds /1000))
          let mins =parseInt(Math.floor(secs /60))
          let hours =parseInt( Math.floor(mins /60))
   
          let sec =parseInt(secs %60)
          let min =parseInt(mins %60)
          let hour =parseInt(hours)
             
          return `${hour}:${min}:${sec}`
        }
        
       
       useEffect(()=>{
         handle()
         if(duration >= 0){
       setTimeout(() => {
        setDuration(()=>{if(timeOut === true)return duration - 1000;else return 0 })
        localStorage.setItem("time", JSON.stringify(duration))
       }, 1000)}
     },[duration,time])
   
     
     
    
    const name = (answer) => {
       setCount((count)=>count + 1 )
        setSelect("");
        console.log(answer)
      handleAnswer(answer);
       setSelect("")
       set2()
    }

    const set2 = (params) => {
  if(count === staff?.[`${staff?.type}`].length -1 ){
     setScore(true)
     localStorage.setItem("unset",JSON.stringify(score))
     setTimeOut(false)
   localStorage.removeItem("time")
   handleResult()
        } 
   }

    const name2 = (answer) => {
     setCount((count)=> count - 1)
       setSelect("")
       handleAnswer2(answer)
      setSelect("")

   }
      
  
      
    const handleAnswer = (answer) => {
      if(answer === select){
        setCount2(count2 => count2 + 10)
      } else  {
        setCount2(()=>count2)
      }
    }

    const handleAnswer2 = (answer) => {
      if(answer === select){
        setCount2(count2 => count2 - 10)
      } else  {
        setCount2(()=>count2)
      }
    }
    
const handleResult = async(params) => {
   await axios.put(`https://database-api-eight.vercel.app/student/set/${id}/${staff?.type}/0/${staff?.activity}`,{
              value:count2
             })
                       .then((res)=>{alert("uploaded successfully"); console.log(res.data)})
                       .catch((err)=> console.log(err))
}
    

     return (
      <div className='center'>
    <div className='bgUser'>
      <div className='two'>
                <h3> STUDENT HALL</h3>
                <div className='click2' onClick={()=>setBack(0)}><FaArrowCircleLeft /></div>
          </div>     
         
        <div  className="two">
        <div style={{marginTop:"20px"}}> {names? <img className='img' src={names?.image} />
                        :
                        <FaUser className='img'/>}</div>
      <div>
        <h4> Admission: {names?.key} <br />  
        Name: {names?.name} <br />
        Class :{names?.class}
        </h4>
      </div></div>
 <div style={{marginBottom:"10px"}}  onClick={()=>nav(`/profile/student/${id}`)}>User Profile</div>
 <div>
  <div></div>
  <div> <h2 onClick={()=>set()}>Duration:{duration !== -1000? timerFormat(duration):'0:0:0'}</h2>   
  </div>
 </div>
    
    


<div className='white'>
<h4>
      
      Session:  {staff?.session} <br />
      Term:  {staff?.term} <br />
      Activity:  {staff?.activity} <br />
      Type:  {staff?.type} <br />
      Time in sec:  {staff?.time}
    </h4>
   <div> Question {count} of {staff?.[`${staff?.type}`].length} </div>


  {score === false ?  <div> 
  
    {staff?.[`${staff?.type}`].filter((item,index) =>{ 
      return item.session === staff?.session && item.term === staff?.term && index === count 
      }).map((item, index)=>
        { const setting = ()=>{ return item.ans};
           const answer = setting(); 
           
           
           return (
        <div  key={index} > 
        <h1>{item.question}</h1>          
        <h3>
               <input    checked={select === 'A'} value='A'  type='radio' onChange={(e)=>setSelect(e.target.value)}/> A - {item.a}  <br />
            
              <input    checked={select === 'B'} value='B' type='radio' onChange={(e)=>setSelect(e.target.value)}/> B  - {item.b}<br />
            
               <input    checked={select === 'C'} value='C' type='radio' onChange={(e)=>setSelect(e.target.value)}/> C - {item.c}<br />
            
              <input    checked={select === 'D'} value='D' type='radio' onChange={(e)=>setSelect(e.target.value)}/>  D - {item.d}<br />
              </h3>
          <div className="twoA">  
            <button style={{justifySelf:"flex-start"}} className="click1" onClick={()=>name(answer)}>Next</button>
            <button style={{justifySelf:"flex-end"}} className="click1" onClick={()=>set2()}>Previous</button>
            </div>
            </div>)
})}
   
   </div>:<div> {count2}</div> }</div>
   
</div>
</div>
  )
}

export default StudentActivity