import { useState } from "react"
import { FaPlus,FaTimes,FaCheck } from "react-icons/fa"
import axios from "axios"

const Attendance =({datas})=>{
    const [data, setData]= useState(false)
      const [day, setDay]= useState()
      const [select, setSelect]= useState()
      const [select2, setSelect2]= useState()
      const [select3, setSelect3]= useState(1)
      const [isNew, setIsNew]= useState(true)
      
      const [update, setUpdate]= useState("Check the update type above...")
      const [isUpdate, setIsUpdate]= useState(true)

    const handleSelect = (item) => {
       
      setIsNew(pre => !pre)
      setSelect2(item)
    }

    const handleRegister = async(add)=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/${add}`,{
            date:Date().slice(0,21),
            mon:'',
            tue:'tue',
            wed:'',
            thu:'',
            fri:''
           })
                     .then((res)=> console.log(res.data))
                     .catch((err)=> console.log(err))
     }
     
     
    
    
    const handleSave = async()=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/${datas._id}/${select2}`,{
            tue:select3
           })
                     .then((res)=> console.log(res.data))
                     .catch((err)=> console.log(err))
     }
    
     
    return (<>
       <div>{isNew? (
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
                {datas.attend.map((item,index)=>{return (
                                            
                                            <tbody key={index} className='green'>
                                                <tr>
                                                    <th >{index}</th>
                                                    <th>{item.date}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.mon === "n" && <div><FaCheck /></div> || item.mon === 0 && <div><FaCheck /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.tue}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.wed}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.thu}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.id}</th>
                                                </tr>
                                                
                                           </tbody>
                                                    )}
                        
                            
                            
                )}                 
                                                                                   
             <div onClick={()=>handleRegister(datas._id)}><FaPlus  className='click2'/></div>
                                      

        </div>):(

        <div> 
            <div style={{padding:"5px"}}>
          <div style={{width:"fit-content",}} className='three'>
    <div  className='click2'  onClick={()=>setIsNew((pre)=>!pre)}> Attendance</div>
    <div className='click2' onClick={()=>setIsUpdate((pre)=>!pre)}>Update </div>
    <div  className='click2'  onClick={()=>setIsNew(false)}>New </div>
    </div>
          <h2>
            {data === false && <div>Nuraalhaji Present</div>}{data === true && <div className='red'>Nuralhaji Absent</div>} 
            <br />{Date().slice(0,21)}</h2>
            <h3>day:{day} point:{select3}</h3>
    <label htmlFor=""> 
        Mon
        <input checked={day === "mon"} onChange={(e)=>setDay(e.target.value)} value="mon"  type='radio' />
        Tue
        <input checked={day === "tue"} onChange={(e)=>setDay(e.target.value)} value="tue" type='radio' />
        Wed
       <input checked={day === "wed"} onChange={(e)=>setDay(e.target.value)} value="wed" type='radio' />
               Thu
               <input checked={day === "thu"} onChange={(e)=>setDay(e.target.value)} value="thu" type='radio' />
               Fri
               <input checked={day === "fri"} onChange={(e)=>setDay(e.target.value)} value="fri" type='radio' />
              
           </label>
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