import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaUser } from 'react-icons/fa'
import {useEffect,useState} from "react"
import axios from 'axios'
import Staff from './staff';
import Student from './student'
import Admission from './admission'
import Secret from './secret'
import Classes from './classes'
import {useParams,useNavigate } from "react-router-dom"

const Management = () => {

  const [names1,setNames1] = useState([''])
  const [names2,setNames2] = useState([''])
  const [names3,setNames3] = useState([''])
  const [name,setName] = useState('')
  const [view,setView] = useState('')
  const [select,setSelect] = useState('1')
  const [show,setShow] = useState(true)
  const nav = useNavigate()
  const {id} = useParams()

  useEffect(() => {
 
    axios.get(`https://register-api-cloud.vercel.app/management`)
              .then((res)=> {console.log(res.data);setNames1(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://register-api-cloud.vercel.app/staff`)
              .then((res)=> {console.log(res.data);setNames2(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://register-api-cloud.vercel.app/student`)
              .then((res)=> {console.log(res.data);setNames3(res.data)})
              .catch((err)=> console.log(err))
  
  
  
 }, [id])
 
  return (
    <div className='center' >
      <div className="bgUser">
        <h3> MANAGEMENT DASHBOARD</h3>
         <div className='two'>
            <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
            
            <div className='bars'><FaBars/></div>
        
            <div>
                <div>Name:{names1?.name}</div>
                <div>Class:</div>
                <div>Subject:</div>
                
            </div>
    </div>


    <div className="two"> 
            <div  className='three2'>
                <div onClick={()=>setSelect('2')}> Admissions</div>
                <div onClick={()=>setSelect('3')}>Secret_Keys </div>
                <div onClick={()=>setSelect('4')}>Classes</div>
         </div>
         <div  className='three2'>
                <div>Results</div>
                <div>Reports </div>
                <div>Notice</div>
         </div>
 </div>
<div className="white three4">
       {select =="1" &&
               <div className="white three4">
                    <div><h3>Management</h3>
                          {names1?.map((name,index) => <div key={index}>
                          <div onClick={()=>nav(`/management/${name._id}`)}> {name.name} </div>
                          </div>)}
                      </div>

                      <div>
                      <h3> Staff  </h3>
                          {names2?.map((name,index) => <div key={index}>
                          <div onClick={()=>nav(`/staff/${name._id}`)}> {name.name} </div>
                          </div>)}
                      </div>
                      
                      <div><h3> Students</h3>
                            {names3?.map((name,index) => <div key={index}>
                            <div onClick={()=>nav(`/student/${name._id}`)}> {name.name} </div>
                            </div>)}
                            
                       </div> 
                </div>
                || select === "2" && <div><Admission id ={id}/></div>
                || select === "3" && <div> <Secret id ={id} /></div>
                || select === "4" && <div> <Classes id ={id} /></div>

      }
    </div>
  </div>
</div>
  )
}

export default Management
