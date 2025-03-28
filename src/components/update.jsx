import { useState } from "react"
import { FaPlus,FaTimes,FaCheck } from "react-icons/fa"

const Update =({datas})=>{
    const [data, setData]= useState(false)
      const [day, setDay]= useState()
      const [select, setSelect]= useState()
      const [isNew, setIsNew]= useState(true)
      const [items, setItems]= useState([])
      const [update, setUpdate]= useState("Check the update type above...")
      const [isUpdate, setIsUpdate]= useState(true)

    const handleSelect = (item) => {
      setIsNew(pre => !pre)
      setSelect(item)
    }
    
    const handleRegister = async(add)=>{
           await axios.delete(`https://register-api-cloud.vercel.app/student/delete/${add}`
            )
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
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.mon === "n" && <div><FaCheck /></div> || item.mon === 0 && <div><FaCheck /></div>}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.tue}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.wed}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.thu}</th>
                                                    <th  onClick={()=>handleSelect(item._id)}>{item.id}</th>
                                                </tr>
                                                </tbody>
                                            )})}
                  
                    
                   
     <div onClick={()=>handleRegister(datas._id)}><FaPlus  className='click2'/></div>
                                      
                             
                                                             
           </div>):(

        <div>
            <div style={{padding:"5px"}}>
          <div style={{width:"fit-content",}} className='three'>
    <div  className='click2'  onClick={()=>setIsNew((pre)=>!pre)}> Attendance</div>
    <div className='click2' onClick={()=>setIsNew((pre)=>!pre)}>Update </div>
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
                </div>
        </div>)}
    </div>
  </>  )
}
export default Update