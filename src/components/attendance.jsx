import { useState,useEffect } from "react"
import { FaPlus, FaUser ,FaCheck, FaArrowCircleLeft, FaTimes} from 'react-icons/fa'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"

const Attendance =()=>{
    const [data, setData]= useState(false)
      const [name, setName]= useState()
      const [select, setSelect]= useState(false)
      const [key, setKey]= useState()
      const [index, setIndex]= useState()
      const [select2, setSelect2]= useState()
      const [select3, setSelect3]= useState(1)
      const [isNew, setIsNew]= useState(true)
      
      
      const {id} = useParams()
      const nav   = useNavigate()
    
    
      useEffect(() => {
        axios.get(`https://register-api-cloud.vercel.app/student/${id}`)
             .then((res)=>  setName(res.data))
             .catch((err)=> console.log(err))
      }, [id, isNew,select])
    

    const handleSelect = (item,key,index) => {
      setKey(key) 
      setIndex(index) 
      setIsNew(pre => !pre)
      setSelect2(item)
      
    }

    const handleRegister = async(add)=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/push/${add}`,
            {
            date:Date().slice(0,21),
            mon:'a',
            tue:'b',
            wed:'c',
            thu:'d',
            fri:'e'
           })
                     .then((res)=> {setSelect(pre => !pre);console.log(res.data)})
                     .catch((err)=> console.log(err))
              
     }
     
     
    
    
    const handleSave = async()=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/set/${id}/attend/${index}/${key}`,{
            value:select3
           })
                     .then((res)=>{setIsNew(pre => !pre); console.log(res.data)})
                     .catch((err)=> console.log(err))
     }
    
     
    return (<>
       <div>{isNew? (
<div className='center'>
 <div className='bgUser'> 
 <div className='two'>
          <h3> STUDENT REGISTER</h3>
          <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
    </div>     
  
     <div ><FaUser className='img'/></div>
     name: {name?.name}<br />
     class: <br />
     Term:
     
     
     <div className='white'>
       
         <div>
            <h2>Student Attendance</h2>
              </div>
        <div>
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
                 {name?.attend.map((item,index)=>{ const serial=()=>{ return index +1};
                                                    const serials = serial();          return (
                                            
                                            <tbody key={index} className='green'>
                                                <tr>
                                                    <th >{serials}</th>
                                                    <th>{item.date}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'mon',index)}>{item.mon === "1" && <div><FaCheck /></div> || item.mon === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'tue',index)}>{item.tue === "1" && <div><FaCheck /></div> || item.tue === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'wed',index)}>{item.wed === "1" && <div><FaCheck /></div> || item.wed === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'thu',index)}>{item.thu === "1" && <div><FaCheck /></div> || item.thu === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'fri',index)}>{item.fri === "1" && <div><FaCheck /></div> || item.fri === "0" && <div className='red'><FaTimes /></div>}</th>
                                                </tr>
                                                
                                           </tbody>
                                                    )}
                        
                            
                            
                )}                 
                                                                                   
             <div onClick={()=>handleRegister(id)}><FaPlus  className='click2'/></div>
                                      

        </div>
        </div>
 </div>
   </div>):(

<div className='center'>
 <div className='bgUser'> 
          <h3>
            {data === false && <div>Nuraalhaji Present</div>}{data === true && <div className='red'>Nuralhaji Absent</div>} 
            <br />{Date().slice(0,21)}</h3>
           
         <div className='two'>
           <div style={{justifySelf:"flex-end",display:"grid",marginRight:"40px"}}>Present</div>
           <div> Absent</div>
          </div>
           <div className='two '>
               <div className='click' onClick={()=>{setData(false); setSelect3(1)}}>{data? (<div></div>):(<div className='green2'><FaCheck/></div>)}</div>
               <div style={{justifySelf:"flex-start"}} className='click' onClick={()=>{setData(true); setSelect3(0)}}>{data? (<div className='red2'><FaTimes/></div>):(<div></div>)}</div>
                </div> <div style={{width :"200px",justifySelf:"center" }} className='click2 save'  onClick={()=>handleSave()}>Save Attendance</div>
                </div>
        </div>)}
    </div>
  </>  )
}
export default Attendance