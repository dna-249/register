import React, { useState,useEffect,useRef } from 'react'

const Timer = () => {
  const [timer,setTimer] = useState()

  const getTime = (params) => {
    const remain = JSON.parse(localStorage.getItem("time"))
    if(remain === "undefined") {return null} else {return remain}
  }
  
    const [duration,setDuration]=useState(!timer?getTime():timer)
    
  
    const set = (params) => {
      localStorage.removeItem("time")
      console.log(duration)
      setDuration("")
      setDuration(()=>timer*1000)
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
  },[duration,timer])
  return (
    
       
          <div className="white">
            <div className="twoA">
                <div > <h2>Examination Hall <input type='number'value={timer} onChange={(e)=>setTimer(e.target.value)}/> <button onClick={()=>set()}>set Time</button> </h2></div>
                <div>
                    <div> <h2>Duration:{duration !== -1000? timerFormat(duration):'0:0:0'}</h2></div>
                    <div></div>
                </div>
            </div>
          </div>
       
  )
}

export default Timer