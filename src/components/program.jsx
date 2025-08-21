import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink ,useNavigate} from 'react-router-dom'
import { FaBars, FaCircle, FaDotCircle, FaGgCircle} from "react-icons/fa"
const Program = () => {
   const [showPic, setShowPic] = useState(0)
    const pic =['bg_eoa.jpg','onlinepic.JPG']
  
const nav = useNavigate()   
   const handleImg = (index) => {
     setShowPic(()=>index)
   }
   
   useEffect(()=>{
    const interval = setInterval(() => {
        setShowPic((index)=>{
            if(index === pic.length -1)return 0
            else return index + 1
             })  
    }, 3000);
    return ()=>{
        clearInterval(interval)
    }
   },[])
  return (
    <div style={{height:'100%',width:"100%", position:"relative",margin:'auto',}}>
        <div style={{height:'100%',width:"100%",display:"flex",overflow:'hidden',margin:'auto'}}  >
        {pic?.map((p)=>
        <img  key={p} style={{translate:`${-100 * showPic}%`, transition:'1s ease-in-out',margin:'auto',flexGrow:"0",flexShrink:"0"}} src={p} className='img2' />
        ,)}
        
    </div>
  <div  className="cover" > 
    <h2> Select Program</h2>
    <div className="white2 center2 program" onClick={()=>nav('/child/Child Program')}>Child Program </div>
    <div className="white2 center2 program" onClick={()=>nav('/child/Tahfeez Program')}>Tahfeez Program </div>
    <div className="white2 center2 program" onClick={()=>nav('/child/Adult (Male) Program')}> Adult (Male) Program</div>
    <div className="white2 center2 program" onClick={()=>nav('/child/Woman Program')}> Woman Program</div>
    <div className="white2 center2 program" onClick={()=>nav('/child/Qur\'an Science')}>Qur'an Science</div>
    
    
    </div>
    <div className='img-icon'>{pic?.map((_,index)=><span key={index} onClick={()=>handleImg(index)}>{index === showPic? <FaDotCircle /> : <FaCircle/>}</span>)}</div>
    </div>
  )
}

export default Program