import React from 'react'
import { FaArrowCircleLeft, FaHome, FaUser } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Timer from './timer'


const Activity = ({setBack}) => {

    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    const [staff,setStaff]=useState()
    const [select,setSelect]=useState('')
    const [image,setImage]=useState('')
    const [image1,setImage1]=useState('')
    const [names,setNames]=useState('')
    const [timeOut,setTimeOut]= useState(true)
    
      

  const {id} = useParams()
    const nav = useNavigate()
    useEffect(() => {
   
      axios.get(`https://database-api-eight.vercel.app/staff/${id}`)
                .then((res)=> {console.log(res.data);setStaff(res.data)})
                .catch((err)=> console.log(err))
     axios.get(`https://database-api-eight.vercel.app/student/${id}`)
                .then((res)=> {console.log(res.data);setNames(res.data)})
                .catch((err)=> console.log(err))   
     
   }, [id])

   const strTime = ()=> {return parseInt(staff?.time)}
   const time = strTime()


   const getTime = (params) => {
       const remain = JSON.parse(localStorage.getItem("time"))
       if(remain === "undefined") {return null} else {return remain}
     }
     
  const [duration,setDuration]=useState(!time?getTime():time)
       
     
  const set = (params) => {
         localStorage.removeItem("time")
         console.log(duration)
         setDuration("")
         setDuration(()=>time*1000)
       
       }

 
       
   
   
  const handle = (params) => {
          if(duration === 0){alert("save successfully");localStorage.removeItem("time")}
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
   
     
     
    
   const form = new FormData()
   form.append("file",image1)
 const handleImage = (e) => {
   setImage1(e.target.files[0])
   
   setImage(URL.createObjectURL(e.target.files[0]))
   console.log(image)
 }
    
    
    const name = (answer) => {
       setCount((count)=>count + 1 )
        setSelect("");
        console.log(answer)
      handleAnswer(answer);
       setSelect("")
       set2()
    }

    const set2 = (params) => {
       setTimeOut(false)
      localStorage.removeItem("time")
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
        alert(count2)
      } else  {
        setCount2(()=>count2)
        alert(count2)
      }
    }

    const handleAnswer2 = (answer) => {
      if(answer === select){
        setCount2(count2 => count2 - 10)
        alert(count2)
      } else  {
        setCount2(()=>count2)
        alert(count2)
      }
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
   <div> Question {count} of {staff?.[`${staff?.type}`].length} </div>


  {count === staff?.[`${staff?.type}`].length || duration >= 0    ?  <div> 
  
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

export default Activity