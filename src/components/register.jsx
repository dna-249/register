import React, { useState, useEffect, lazy } from 'react'
import { FaCheck, FaPlus, FaTimes, FaUser } from 'react-icons/fa'
import axios from 'axios'
const Update =lazy(()=>import('./update'))
const Attendance =lazy(()=>import('./attendance'))

const Register = () => {
  const [data, setData]= useState(false)
  const [day, setDay]= useState()
  const [select, setSelect]= useState()
  const [isNew, setIsNew]= useState(false)
  const [items, setItems]= useState([])
  const [update, setUpdate]= useState("Check the update type above...")
  const [isUpdate, setIsUpdate]= useState(true)


    const array = [{id:["z","l","d","c","e","f","g"],name:[1,0,0,1,1,0,1,0,0]}]
 
 const name = (params) => {
   if(day === undefined){
    alert("you haven't select the day ")} else {
    alert("save the attendance"+ day)
    }
 }
 
useEffect(() => {
 
   axios.get(`https://register-api-cloud.vercel.app/student`)
             .then((res)=> {console.log(res.data);setItems(res.data)})
             .catch((err)=> console.log(err))
 
}, [])


 const handleRegister = async(add)=>{
       await axios.put(`https://register-api-cloud.vercel.app/student/push/${add}`,{
        date:Date().slice(0,21),
        mon:'',
        tue:'',
        wed:'',
        thu:'',
        fri:''
       })
                 .then((res)=> console.log(res.data))
                 .catch((err)=> console.log(err))
 }
 
 
 
    return (
    <>
   
 <div className='center'>
<div className='bgUser'> 
    <h3>REGISTER</h3>
    <div ><FaUser className='img'/></div>
    name: <br />
    class: <br />
    Term:
    
    
    <div className='white'>{isNew?(
      
        <div>
          <div style={{width:"300px",justifyContent:"flex-end"}} className='three'>
    <div  className='click'  onClick={()=>setIsNew((pre)=>!pre)}> New </div>
    </div>
    <h3>Student Attendance</h3>
          {items.map((data, index)=><div key={index}>
                             <Attendance datas ={data} handleRegister={handleRegister} />
          </div>)}</div>):isUpdate?(
        <div style={{padding:"5px"}}>
          <div style={{width:"fit-content",}} className='three'>
    <div  className='click2'  onClick={()=>setIsNew((pre)=>!pre)}> Attendance</div>
    <div className='click2' onClick={()=>setIsUpdate((pre)=>!pre)}>Update </div>
    <div  className='click2'  onClick={()=>setIsNew(false)}>New </div>
    </div>
          <h2>
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
      
         {items.map((data, index)=><div key={index}>
                            <Update datas={data} handleRegister={handleRegister} />
         </div>)}</div>  )}
    </div>
</div>
  </div></>)
}

export default Register