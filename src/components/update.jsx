import { useState,useEffect } from "react"
import { FaArrowCircleLeft,FaTimes,FaCheck,FaUser, FaDatabase, } from "react-icons/fa"
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom"

const Update =()=>{
    const [data, setData]= useState(false)
      const [day, setDay]= useState()
      const [name, setName]= useState()
      const [key, setKey]= useState()
      const [index, setIndex]= useState()
      const [select2, setSelect2]= useState()
      const [select3, setSelect3]= useState(1)
      const [isNew, setIsNew]= useState(true)


      const {id} = useParams()
      const nav  = useNavigate()
    
    
      useEffect(() => {
        axios.get(`https://database-api-eight.vercel.app/student/${id}`)
             .then((res)=>  setName(res.data))
             .catch((err)=> console.log(err))
      }, [id, isNew])
      
    
    const handleSelect = (item,key,index) => {
      setKey(key) 
      setIndex(index) 
      setIsNew(pre => !pre)
      setSelect2(item)
      console.log(key,index,item)
    }

    
    
    const handleSave = async()=>{
           await axios.put(`https://database-api-eight.vercel.app/student/pull/${id}/${select2}/attend`)
                     .then((res)=> {setIsNew(pre => !pre);console.log(res.data)})
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
  
     <div > {name? <img className='img' src={name?.image} />
                     :
                     <FaUser className='img'/>}</div>
     <h4> Admission: {name?.key} <br />  
        Name: {name?.name} <br />
        Class :{name?.class}</h4>
     
     
     <div className='white'> 
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
                {name?.attend.map((item,index)=>{const serial=()=>{ return index +1};
                                                    const serials = serial();    
                                                          return (
                                            
                                            <tbody key={index} className='green1'>
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
                                                                                   
              </div></div>
              </div>):(

<div className='center'>
<div className='bgUser'> 

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
                </div>
        </div>)}
    </div>
  </>  )
}
export default Update