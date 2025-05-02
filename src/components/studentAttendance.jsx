import { useState, useEffect } from "react"
import { FaUser,FaTimes,FaCheck,FaArrowCircleLeft } from "react-icons/fa"
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"

const StudentAttendance =()=>{
    const [name, setName]= useState()

    const {id} = useParams()
    const nav   = useNavigate()
      
      
        useEffect(() => {
          axios.get(`https://database-api-eight.vercel.app/student/${id}`)
               .then((res)=>  setName(res.data))
               .catch((err)=> console.log(err))
        }, [id,])
      
    return (<>
 <div className='center'>
 <div className='bgUser'>
 <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
     
     <h3>REGISTER</h3>
     <div > {name? <img className='img' src={name?.image} />
                     :
                     <FaUser className='img'/>}</div>
     <h4> Admission: {name?.key} <br />  
        Name: {name?.name} <br />
        Class :{name?.class}</h4>
     
     
     <div className='white'>
     <h2>Student Attendance</h2>
           
      
     

       <div>
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
                {name?.attend.map((item,index)=>{return (
                                            
                                            <tbody key={index} className='green'>
                                                <tr>
                                                    <th >{index}</th>
                                                    <th>{item.date}</th>
                                                    <th >{item.mon === "1" && <div><FaCheck /></div> || item.mon === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th >{item.tue === "1" && <div><FaCheck /></div> || item.tue === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th >{item.wed === "1" && <div><FaCheck /></div> || item.wed === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th >{item.thu === "1" && <div><FaCheck /></div> || item.thu === "0" && <div className='red'><FaTimes /></div>}</th>
                                                    <th >{item.fri === "1" && <div><FaCheck /></div> || item.fri === "0" && <div className='red'><FaTimes /></div>}</th>
                                                </tr>
                                                
                                           </tbody>
                                                    )}
                      
                )}                 
        </div>
    </div>

    </div>
      </div>
   </div>
  </>  )
}
export default StudentAttendance