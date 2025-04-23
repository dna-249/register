import React, { useState,useEffect,useRef } from 'react'

const Timer = ({time}) => {
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
      setTimer('')
    }
    


     const name = (params) => {
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
      name()
      if(duration >= 0){
    setTimeout(() => {
     setDuration(()=>duration - 1000)
     localStorage.setItem("time", JSON.stringify(duration))
    }, 1000);}
  },[duration])
  return (
    
       
          <div >
               <h2>Duration:{duration !== -1000? timerFormat(duration):'0:0:0'}</h2>
           </div>
       
  )
}

export default Timer