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
  const [color,setColor] = useState('')
  const [toggle,setToggle] = useState(true)
  const [toggle2,setToggle2] = useState(true)
  const [edit,setEdit] = useState(true)
  const [select,setSelect] = useState('1')
  const [selected,setSelected] = useState('')
  const [selected2,setSelected2] = useState('')
  const [show,setShow] = useState(true)
  const [auto,setAuto] = useState(true)
  const nav = useNavigate()
  const {id} = useParams()

  useEffect(() => {
 
    axios.get(`https://database-api-eight.vercel.app/management/${id}`)
              .then((res)=> {console.log(res.data);setName(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://database-api-eight.vercel.app/management`)
              .then((res)=> {console.log(res.data);setNames1(res.data)})
              .catch((err)=> console.log(err))


    axios.get(`https://database-api-eight.vercel.app/staff`)
              .then((res)=> {console.log(res.data);setNames2(res.data)})
              .catch((err)=> console.log(err))

    axios.get(`https://database-api-eight.vercel.app/student`)
              .then((res)=> {console.log(res.data);setNames3(res.data)})
              .catch((err)=> console.log(err))
  
  
  
 }, [id,auto])
 const colorPerSec = (params) => {
   const color = Math.floor(Math.random() * 1001010)
  setColor(()=>color)
 }

 setTimeout(()=>{
 colorPerSec()
 },5000)
 const handleSelected = (params,user) => {
   setToggle2(false)
   setSelected(params)
   setSelected2(user)
 }
 const handleDelete = (params) => {
    axios.delete(`https://database-api-eight.vercel.app/${selected2}/${selected._id}`)
    .then((res)=>{alert(`user deleted`);setAuto((prev)=>!prev);setToggle2(true)})
    .catch((err)=> console.log(err))

  }
 
 
  return (
    <div className='center' >
      <div className="bgUser">
        <h3 onClick={()=>colorPerSec()}> MANAGEMENT DASHBOARD</h3>
         <div className='two' >
             <div style={{marginTop:"20px"}}> {name?<div> <img className='img' src={name?.image} />
             </div>
                            :
                           <div> <FaUser className='img'/>
             </div>
            }
            <div  onClick={()=>nav(`/profile/management/${id}`)}><h4></h4>Profile</div>
             <h4>
                Key:{name?.key} <br />
                Name:{name?.name} <br />
                Role:
              </h4>
            </div>
             <div> 
             <div style={{boxShadow:`2px 0px 10px 2px #${color}`}} className='sideA'>
                 
             <div>
             {select === "1" && <div>
                   {names1.length} Management<br/>
                    {names2.length} Staffs<br/>
                    {names3.length} Students<br/>
                    </div>
                     || select === "2" && <div>{name?.admissions?.length} Admissions</div>
                     || select === "3" && <div> {name?.management?.length} Management Keys <br />
                                               {name?.staff?.length} Staff Keys 
                                              </div>
                     || select === "4" && <div> {name?.classes?.length} Classes</div>
     
                    }
                  </div>
                </div>               
            <div className='bars'>
              
              {toggle? <div> 
                <FaBars className='bar' onClick={()=>setToggle(false)}/>
                <div  style={{boxShadow:`2px 0px 10px 2px #${color}`}} className='side'>
                  <div>
                    {select === "1" && <div>
                   {names1.length} Management<br/>
                    {names2.length} Staffs<br/>
                    {names3.length} Students<br/>
                    </div>
                     || select === "2" && <div>{name?.admissions?.length} Admissions</div>
                     || select === "3" && <div> {name?.management?.length} Management Keys <br /><br />
                                               {name?.staff?.length} Staff Keys 
                                              </div>
                     || select === "4" && <div> {name?.classes?.length} Classes</div>
     
                    }
                  </div>
                </div>
            </div> :
            

        
            <div  style={{boxShadow:`2px 0px 10px 2px #${color}`}} className="side"  onClick={()=>setToggle(true)}>
            <div onClick={()=>setSelect('1')}> Index</div>
                <div onClick={()=>setSelect('2')}> Admissions</div>
                <div onClick={()=>setSelect('3')}>Secret_Keys </div>
                <div onClick={()=>setSelect('4')}>Classes</div>
                <div >Results</div>
                <div onClick={()=>nav(`/chat/management/${id}`)}>Notice</div>
              
            </div>}
            </div>
            </div> 
    </div>


    <div className="two"> 
            <div  className='three2' >
                <div onClick={()=>setSelect('1')}> Index</div>
                <div onClick={()=>setSelect('2')}> Admissions</div>
                <div onClick={()=>setSelect('3')}>Secret_Keys </div>
              
         </div>
         <div  className='three2'>
                <div onClick={()=>setSelect('4')}>Classes</div>
                <div>Results</div>
                <div  onClick={()=>nav(`/chat/management/${id}`)}>Notice</div>
         </div>
 </div>
<div className="white three4">
       {select =="1" &&
               <div className="white2 three4">
                <div className="scroll">
                    <div><h3>Management</h3>
                    <div className="dropDown">
                          {names1?.map((name,index) => 
                          <div key={index} onClick={()=>nav(`/management/${name._id}`)}> {name.name} </div>
                          )}
                      </div>
                      </div>

                      <div>
                      <h3> Staff  </h3>
                      <div className="dropDown">
                          {names2?.map((name,index) => 
                          <div key={index} onClick={()=>nav(`/staff/${name._id}`)}> {name.name} </div>
                          )}
                      </div>
                      </div>
                      
                      <div><div className='twoA'><h3 onClick={()=>setEdit(false)}> Students</h3><h3 onClick={()=>setEdit(false)}> update</h3></div>
                         <div>{edit?
                           <div className="dropDown">
                            {names3?.map((name,index) =>
                               <div onClick={()=>nav(`/student/${name._id}`)} key={index}>
                                        {name.name} 
                                           </div>)}
                            
                       </div>
                       :<div style={{background:"aliceblue"}}>
                         {toggle2? <div className="dropDown">
                            {names3?.map((name,index) =>
                               <div onClick={()=>handleSelected(name,"student")} key={index}>
                                        {name.name} 
                                           </div>)}
                            
                        </div>
                         : <div>
                           <img className='img' src={selected?.image} /> 
                           <h4>{selected.name}</h4>
                          <div className="twoA">
                                <button onClick={()=>setToggle2(true)}>Back</button>
                                <button onClick={()=>handleDelete()}>Delete</button>
                        </div>
                        </div>}
                        
                    </div>} 
                       </div>
                </div>
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
