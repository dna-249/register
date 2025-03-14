import React, { useState } from 'react'
import { FaCheck, FaTimes, FaUser } from 'react-icons/fa'

const Register = () => {
  const [data, setData]= useState(false)
  const [day, setDay]= useState()
  const [select, setSelect]= useState()
  const [isNew, setIsNew]= useState(false)
  const [isUpdate, setIsUpdate]= useState(true)


    const array = [{id:["z","l","d","c","e","f","g"],name:[1,0,0,1,1,0,1,0,0]}]
 
 const name = (params) => {
   if(day === undefined){
    alert("you haven't select the day ")} else {
    alert("save the attendance"+ day)
    }
 }
 
 
 
 
 
    return (
    <>
   

<div className='bgUser'>
    <h3>Take Attendance</h3>
    <div ><FaUser className='img'/></div>
    name: <br />
    class: <br />
    Term:
    
    <div style={{width:"300px"}} className='three'>
    <div  className='click'  onClick={()=>setIsNew((pre)=>!pre)}> Attendance</div>
    <div className='click' onClick={()=>setIsUpdate((pre)=>!pre)}>Update </div>
    <div  className='click'  onClick={()=>setIsNew((pre)=>!pre)}>New </div>
    </div>
    <div className='white'>{isNew?(
        <div>{array.map((data, index)=><div key={index}>
                              <thead>
                                <tr>
                                    <th>S/A</th>
                                    <th>Date:</th>
                                    <th>Mon:</th>
                                    <th>Tue:</th>
                                    <th>Wed:</th>
                                    <th>Thu:</th>
                                    <th>Fri:</th>
                                </tr>
                              </thead>
            {data.name.map((item,index)=>{if(item === 1) return (
                             
                              <tbody key={index} className='red'>
                                <tr>
                                    <th>{index}</th>
                                    <th>{Date().slice(0,16)}</th>
                                    <th><FaTimes /></th>
                                    <th><FaTimes /></th>
                                    <th><FaTimes /></th>
                                    <th><FaTimes /></th>
                                    <th><FaTimes /></th>
                                </tr>
                              </tbody>
                                    ); else return (
               
                <tbody className='green' key={index}>
                  <tr>
                       <th>{index}</th>
                       <th>{Date().slice(0,16)}</th>
                       <th><FaCheck /></th>
                       <th><FaCheck /></th>
                      <th><FaCheck /></th>
                      <th><FaCheck /></th>
                      <th><FaCheck /></th>
                  </tr>
                </tbody>
                     ) })}
          
            
           
                                   
                                                     
    </div>)}</div>):isUpdate?(
        
        <div><h2>
            {data === false && <div>Nuraalhaji Present</div>}{data === true && <div className='red'>Nuralhaji Absent</div>} 
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
             <label htmlFor=""> 
        Deleting:
        <input checked={day === "DELETING"} onChange={(e)=>setDay(e.target.value)} value="DELETING"  type='radio' />
        Updating:
        <input checked={day === "UPDATING"} onChange={(e)=>setDay(e.target.value)} value="UPDATING" type='radio' />
       
            
    </label>
      <h3>{day}</h3>
          {array.map((data, index)=><div key={index}>
                              <thead>
                                <tr>
                                    <th>S/A</th>
                                    <th>Date:</th>
                                    <th>Mon:</th>
                                    <th>Tue:</th>
                                    <th>Wed:</th>
                                    <th>Thu:</th>
                                    <th>Fri:</th>
                                </tr>
                              </thead>
            {data.name.map((item,index)=>{if(item === 1) return (
                             
                              <tbody key={index} className='green'>
                                <tr>
                                    <th>{index}</th>
                                    <th>{Date().slice(0,16)}</th>
                                    <th onClick={()=>setSelect(alert(item))}><FaCheck /></th>
                                    <th onClick={()=>setSelect(alert(item))}><FaCheck /></th>
                                    <th onClick={()=>setSelect(alert(item))}><FaCheck /></th>
                                    <th onClick={()=>setSelect(alert(item))}><FaCheck /></th>
                                    <th onClick={()=>setSelect(alert(item))}><FaCheck /></th>
                                </tr>
                              </tbody>
                                    ); else return (
               
                <tbody className='red' key={index}>
                  <tr>
                       <th>{index}</th>
                       <th>{Date().slice(0,16)}</th>
                       <th onClick={(e)=>setSelect(alert(item))}><FaTimes /></th>
                                    <th onClick={(e)=>setSelect(alert(item))}><FaTimes /></th>
                                    <th onClick={(e)=>setSelect(alert(item))}><FaTimes /></th>
                                    <th onClick={(e)=>setSelect(alert(item))}><FaTimes /></th>
                                    <th onClick={(e)=>setSelect(alert(item))}><FaTimes /></th>
                                </tr>
                </tbody>
                     ) })}
          
            
           
                                   
                                                     
    </div>)}</div>)}
    </div>
</div>
  </>)
}

export default Register