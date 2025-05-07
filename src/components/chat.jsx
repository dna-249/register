import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from "react-router-dom"
import axios from 'axios';

const Chat = () => {
 const [adm,setAdm] = useState();
 const [auto,setAuto] = useState(false);
 const [name,setName] = useState();
 const [adm2,setAdm2] = useState();
 const [type,setType]= useState();
 const nav = useNavigate()
 const {id} = useParams()

 

 useEffect(()=>{
    axios.get(`https://database-api-eight.vercel.app/management/${id}`)
                   .then((res)=>{console.log(res.data); setName(res.data)})
                   .catch((err)=> console.log(err))
 },[id,auto])
 const handleCreate = (params) => {
     axios.put(`https://database-api-eight.vercel.app/management/push/${id}/${type}Chat`,
        {
            date:Date().slice(0,21),
            subject:adm2,
            message:adm
        })
                   .then((res)=>{alert(`sent successfully`);setAuto(pre =>!pre)})
                   .catch((err)=> console.log(err))
      }
 

 
  return (
    <>
    <div className='center'>
        <div   className={"bgUserB seven"}>
    <div className="white">
       <h3>Chat</h3>
    <div className='white2'>
            <h3>Set Notice:</h3>
            <h4>Date:{Date().slice(0,21)}<br/>
           
        To:  {type}
     <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select> <br />

     Subject:  {adm2?.toUpperCase()}</h4>
              <input style={{margin:"5px"}} className='input' onChange={(e)=>setAdm2(e.target.value)} />
                 
     <div className='twoA'><h4>Message:</h4>  <button className='click1' onClick={()=>handleCreate()}> Create</button>
                    </div>

                    <h4>Previous:</h4>
                    <div className='twoA'>
                    <div className="dropDown">
                        {adm? <div className="break">{adm}</div>
                        :<div>{name?.managementChat?.map((item,index)=>{return(<div key={index}>
                            {item.date}
                            {item.subject}
                            {item.message}
                            </div>)})} </div>}
                    </div>
                    <textarea className='dropDown'  style={{margin:"5px"}} cols={30}  rows={7} onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                 </div>
                    </div>
                 </div>
        <div className="white">
                 <div className='white2'> <h4>From Management</h4>
                             <div className="dropDown"></div>
                 </div>
                 <div className='white2'><h4>From Staff</h4>
                             <div className="dropDown"></div>
                 </div>
                 <div className='white2'><h4>From Student</h4>
                             <div className="dropDown"></div>
                 </div>

        </div>
        </div>
    
<div   className={"bgUserA"}>
<div className="white">
<h3>Chat</h3>
<div className='white2'>
    <h3>Set Notice:</h3>
    <h4>Date:{Date().slice(0,21)}<br/>
   
To:  {type}
<select onChange={(e)=>setType(e.target.value)}>
<option value="">select</option>
<option value="all">All</option>
<option value="management">Management Only</option>
<option value="staff">Staff Only</option>
<option value="student">Student Only</option>
</select> <br />

Subject:  {adm2?.toUpperCase()}</h4>
      <input style={{margin:"5px"}} className='input' onChange={(e)=>setAdm2(e.target.value)} />
         
<div className='twoA'><h4>Message:</h4>  <button className='click1' onClick={()=>handleCreate()}> Create</button>
            </div>
            <div >
            <textarea className='dropDown'  style={{margin:"5px"}} cols={30}  rows={6} onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
            <h4>Previous:</h4>
            <div className="dropDown">
            {adm? <div className="break">{adm}</div>
                        :<div>
                            {name?.map((item,index)=>Object.keys(item).map((item)=>{return(<div key={index}>
                            {item.date}
                            {item.subject}
                            {item.message}
                            </div>)}))}
                            
                     </div>} 
                     </div>
         </div>
            </div>
         </div>
<div className="white">
         <div className='white2'> <h4>From Management</h4>
                     <div className="dropDown"></div>
         </div>
         <div className='white2'><h4>From Staff</h4>
                     <div className="dropDown"></div>
         </div>
         <div className='white2'><h4>From Student</h4>
                     <div className="dropDown"></div>
         </div>

</div>
</div>
</div>
  </>  
  )
}

export default Chat