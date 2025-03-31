import { useState } from "react"
import { FaPlus,FaTimes,FaCheck } from "react-icons/fa"
import axios from "axios"

const Update =({datas})=>{
    const [data, setData]= useState(false)
      const [day, setDay]= useState()
      const [select, setSelect]= useState()
      const [key, setkey]= useState()
      const [index, setIndex]= useState()
      const [select2, setSelect2]= useState()
      const [select3, setSelect3]= useState(1)
      const [isNew, setIsNew]= useState(true)
      
      const [update, setUpdate]= useState("Check the update type above...")
      const [isUpdate, setIsUpdate]= useState(true)

    const handleSelect = (item,key,index) => {
      setkey(key) 
      setIndex(index) 
      setIsNew(pre => !pre)
      setSelect2(item)

      console.log(key,index,item)
    }

    const handleRegister = async(add)=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/${add}`,
            {
            date:Date().slice(0,21),
            mon:'a',
            tue:'b',
            wed:'c',
            thu:'d',
            fri:'e'
           })
                     .then((res)=> console.log(res.data))
                     .catch((err)=> console.log(err))
     }
     
     
    
    
    const handleSave = async()=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/set/${datas._id}/${index}/${key}`,{
            value:select3
           })
                     .then((res)=> console.log(res.data))
                     .catch((err)=> console.log(err))
     }
    
     
    return (<>
       <div>{isNew? (
        <div>
          <div style={{width:"300px",justifyContent:"flex-end"}} className='three'>
  <div  className='click'  onClick={()=>setIsNew((pre)=>!pre)}>New </div>
  </div>
  <h3>Student Attendance Updating</h3>
           <label htmlFor=""> 
      Deleting:
      <input checked={update === "DELETING"} onChange={(e)=>setUpdate(e.target.value)} value="DELETING"  type='radio' />
      Updating:
      <input checked={update === "UPDATING"} onChange={(e)=>setUpdate(e.target.value)} value="UPDATING" type='radio' />
     
          
  </label>
    <h3>{update}</h3>
 
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
                                                    <th  onClick={()=>handleSelect(item._id,'mon',index)}>{item.mon === "1" && <div><FaCheck /></div> || item.mon === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'tue',index)}>{item.tue === "1" && <div><FaCheck /></div> || item.tue === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'wed',index)}>{item.wed === "1" && <div><FaCheck /></div> || item.wed === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'thu',index)}>{item.thu === "1" && <div><FaCheck /></div> || item.thu === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id,'fri',index)}>{item.fri === "1" && <div><FaCheck /></div> || item.fri === "0" && <div className='red'><FaTimes /></div>}</th>
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
export default Update