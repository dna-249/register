import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from "react-router-dom"
import { FaUser, FaArrowCircleLeft } from 'react-icons/fa';
import axios from 'axios';

const Chat = () => {
 const [adm,setAdm]   = useState();
 const [auto,setAuto] = useState(false);
 const [name,setName] = useState();
 const [adm2,setAdm2] = useState();
 const [type,setType] = useState();
 const nav  = useNavigate()
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
            message:adm,
            userId:id
        })
                   .then((res)=>{alert(`sent successfully`);setAuto(pre =>!pre);setAdm("")})
                   .catch((err)=> console.log(err))
      }
 

 
  return (
    <>
    <div className='center'>
        <div   className={"bgUserB"}>
             <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
              
              <div >
                         <div style={{marginTop:"20px"}}> {name?<div> <img className='img' src={name?.image} />
                         </div>
                                        :
                                       <div> <FaUser className='img'/>
                         </div>
                        }
                       
                         <h4>
                            Key:{name?.key} <br />
                            Name:{name?.name} <br />
                            Role:
                          </h4>
                        </div>
                     
                </div>
                <div className='two'>
    <div className="white">
       <h2>Chats</h2>
    <div className='white2'>
            <h2>Set Notice:</h2>
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
                 
     <div className='twoA'><h4>Message:</h4>  <button className='click1' onClick={()=>handleCreate()}> send</button>
                    </div>
                    <textarea value={adm} className='dropDown'  style={{margin:"5px"}} cols={30}  rows={7} onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                
                    </div>
                 </div>
        <div className="white2">
        <h4>Previous:</h4>
                    <select onChange={(e)=>setType(e.target.value)}>
                        <option value="">select</option>
                        <option value="all">All</option>
                        <option value="management">Management Only</option>
                        <option value="staff">Staff Only</option>
                        <option value="student">Student Only</option>
                        </select> 
                   
                    <div className="dropDown">
                        {adm? <div className="break">{adm}</div>
                        :<div>{name?.[`${type}Chat`]?.map((item,index)=>{return(<div key={index}>
                            {item.date}<br/>
                            {item.subject}<br/>
                            {item.message}
                            </div>)})} </div>}
                    </div>
                 <div className='white2'> <h4>From: {type}
    <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select> </h4>
                             <div className="dropDown"></div>
                 

        </div>
        </div>
        </div>
        </div>
    
<div   className={"bgUserA"}>
     <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
      
<div className='two' >
    <div style={{marginTop:"20px"}}>
                {name?<div><img className='img' src={name?.image} /></div>
                    :<div><FaUser className='img'/></div>}
                       
                         <h4>
                            Key:{name?.key} <br />
                            Name:{name?.name} <br />
                            Role:
                          </h4>
                        </div>
                     
                </div>
<div className="white">
       <h2>Chat</h2>
    <div className='white2'>
            <h2>Set Notice:</h2>
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
                 
     <div className='twoA'><h4>Message:</h4>  <button className='click1' onClick={()=>handleCreate()}> send</button>
                    </div>
                    <textarea value={adm} className='dropDown'  style={{margin:"5px"}} cols={30}  rows={7} onChange={(e)=>setAdm(e.target.value)} placeholder='new admission no...'/>
                
                    </div>
                 </div>
        <div className="white2">
        <h4>Previous:</h4>
                    <select onChange={(e)=>setType(e.target.value)}>
                        <option value="">select</option>
                        <option value="all">All</option>
                        <option value="management">Management Only</option>
                        <option value="staff">Staff Only</option>
                        <option value="student">Student Only</option>
                        </select> 
                   
                    <div className="dropDown">
                        {adm? <div className="break">{adm}</div>
                        :<div>{name?.[`${type}Chat`]?.map((item,index)=>{return(<div key={index}>
                            {item.date}<br/>
                            {item.subject}<br/>
                            {item.message}
                            </div>)})} </div>}
                    </div>
                 <div className='white2'> <h4>From: {type}
    <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select> </h4>
                             <div className="dropDown"></div>
                 

        </div>
        </div>
        </div>
        </div>
  </>  
  )
}

export default Chat