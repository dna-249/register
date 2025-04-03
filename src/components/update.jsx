import { useState } from "react"
import { FaPlus,FaTimes,FaCheck, FaDatabase, } from "react-icons/fa"
import axios from "axios"

const Update =({datas,setIsNews,setChange})=>{
    const [data, setData]= useState(false)
      const [day, setDay]= useState()
      const [select, setSelect]= useState()
      const [key, setKey]= useState()
      const [index, setIndex]= useState()
      const [select2, setSelect2]= useState()
      const [select3, setSelect3]= useState(1)
      const [isNew, setIsNew]= useState(true)
      
    
    const handleSelect = (item,key,index) => {
      setKey(key) 
      setIndex(index) 
      setIsNew(pre => !pre)
      setSelect2(item)
      setChange((pre)=>!pre)
      console.log(key,index,item)
    }

    
    
    const handleSave = async()=>{
           await axios.put(`https://register-api-cloud.vercel.app/student/pull/${datas._id}/${select2}`)
                     .then((res)=> console.log(res.data))
                     .catch((err)=> console.log(err))
                     setChange((pre)=>!pre)
     }
    
     
    return (<>
       <div>{isNew? (
        <div>
          <div style={{display:"grid",justifyContent:"flex-end"}}>
  <div  className='click'  onClick={()=>setIsNews((pre)=>!pre)}>New </div>
  </div>
  <h3>Student Attendance Updating</h3>
          
 
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
                                            
                                            <tbody key={index} className='green1'>
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
                                                                                   
              </div>):(

        <div> 
          <div style={{width:"300px",justifyContent:"flex-end"}} className='three'>
    <div  className='click'  onClick={()=>setIsNew(true)}> BAck </div>
    </div>
            <div className="center2" >
               <FaDatabase style={{width:"50px",height:"50px"}} className='img'/>
            <h3 className="red">Your are about to delete Row {index}<br/>
            Row Id:{select2}</h3>
         
           <div className='two '>
                </div> <div style={{width :"200px",justifySelf:"center" }} className='click2 save'  onClick={()=>handleSave()}>Delete</div>
                </div>
        </div>)}
    </div>
  </>  )
}
export default Update