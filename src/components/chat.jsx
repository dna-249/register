import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from "react-router-dom"
import { FaUser, FaArrowCircleLeft, FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Chat = () => {
 const [adm,setAdm]   = useState();
 const [auto,setAuto] = useState(false);
 const [name,setName] = useState();
 const [names,setNames] = useState();
 const [adm2,setAdm2] = useState();
 const [toggle,setToggle] = useState(true);
 const [toggle2,setToggle2] = useState(true);
 const [toggle3,setToggle3] = useState(true);
 const [search,setSearch] = useState('');
 const [select,setSelect] = useState('');
 const [item,setItem] = useState('');
 const [selectId,setSelectId] = useState('');

 const {id,id2} = useParams()
 const [type,setType] = useState(id2);
 const nav  = useNavigate()
 

 

 useEffect(()=>{
    axios.get(`https://database-api-eight.vercel.app/${id2}/${id}`)
                   .then((res)=>{console.log(res.data); setName(res.data)})
                   .catch((err)=> console.log(err))
    axios.get(`https://database-api-eight.vercel.app/${type}`)
                   .then((res)=>{console.log(res.data); setNames(res.data)})
                   .catch((err)=> console.log(err))

 },[id,auto,type,select])
 const handleCreate = (params) => {
     axios.put(`https://database-api-eight.vercel.app/${handle2(type)}/push/${handle(selectId)}/${type}Chat`,
        {
            date:Date().slice(0,21),
            subject:adm2,
            message:adm,
            myId:id
        })
                   .then((res)=>{alert(`sent successfully`);setAuto(pre =>!pre);setAdm("")})
                   .catch((err)=> console.log(err))
      }

  const handleDelete = (params) => {
    axios.put(`https://database-api-eight.vercel.app/${handle2(type)}/pull/${handle3(selectId)}/${item._id}/${type}Chat`)
    .then((res)=>{alert(`message deleted`);setAuto((prev)=>!prev)})
    .catch((err)=> console.log(err))

  }
 
 const handleSelect = (params) => {
  setSelect(()=>params.name);
  setSelectId(()=>params._id)
  setToggle(true)
 }
 const handleSelect2 = (params) => {
  setItem(()=>params);
  setToggle2(false)
 }
 const handleSelect3 = (params) => {
  setItem(()=>params);
  setToggle3(false)
 }
 
 const handle = (select) => {
   if(select) return select;
   else return type
 }
 const handle2 = (select) => {
   if(select) return select;
   else return id2
 }

 const handle3 = (select) => {
   if(select) return select;
   else return id
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
           
            <h4>Date:{Date().slice(0,21)}</h4>
           <h4 className='twoA'><span> To:  {handle(select)}  
     <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select></span>   
    <button className='' onClick={()=>setToggle(false)}><FaSearch/></button></h4>
           
           
      <div>{toggle? <div>  
    </div>
    :<div className='dropDown2'>
     <input type='text' className='input' onChange={(e)=>setSearch(e.target.value)} placeholder={"search"}/>
     {names?.filter((item)=>{return search.toLowerCase() === ""? item : item.name.toLowerCase().includes(search)}).map((item,index)=>
       {return(<div key={index} onClick={()=>handleSelect(item)}>
                             {item.name}<br/>
                             </div>)})} 

      </div>}</div>

    <h4> Subject:  {adm2?.toUpperCase()}</h4>
              <input style={{margin:"5px"}}  className='input' onChange={(e)=>setAdm2(e.target.value)} />
                 
     <div className='twoA'><h4>Message:</h4>  <button className='click1' onClick={()=>handleCreate()}> send</button>
                    </div>
                    <textarea value={adm} className='dropDown'  style={{margin:"5px"}} cols={30}  rows={7} onChange={(e)=>setAdm(e.target.value)} placeholder='message...'/>
                
                    </div>
                 </div>
        <div className="white2">
        <h4>Previous:{type}
                    <select onChange={(e)=>setType(e.target.value)}>
                        <option value="">select</option>
                        <option value="all">All</option>
                        <option value="management">Management Only</option>
                        <option value="staff">Staff Only</option>
                        <option value="student">Student Only</option>
                        </select> </h4>
                   {toggle2? 
                    <div className="dropDown">
                        {name?.[`${type}Chat`]?.map((item,index)=> {return(<div onClick={()=>handleSelect2(item)} key={index}>
                            {item.date}<br/>
                            {item.subject}<br/>
                            {item.message}
                               </div>)})} 
                    </div>:<div className='break white2'>
                           
                           <h5>{item?.subject?.toUpperCase()}<br/> 
                            {item.message}<br/>
                            {item.date}</h5>
                            <div className="twoA">
           <button onClick={()=>setToggle2(true)}>Back</button>
           <button onClick={()=>handleDelete()}>Delete</button>
                        </div>

                      </div>}
                 <div className='white2'> <h4>From: {type}
    <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select> </h4>
              {toggle3? 
                    <div className="dropDown">
                        {name?.[`${type}Chat`]?.map((item,index)=> {return(<div onClick={()=>handleSelect3(item)} key={index}>
                            {item.date}<br/>
                            {item.subject}<br/>
                            {item.message}
                               </div>)})} 
                    </div>:<div className='break white2'>
                           
                           <h5>{item?.subject?.toUpperCase()}<br/> 
                            {item.message}<br/>
                            {item.date}</h5>
                            <div className="twoA">
           <button onClick={()=>setToggle3(true)}>Back</button>
           <button onClick={()=>handleDelete()}>Delete</button>
                        </div>

                      </div>} 

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
<h2>Chats</h2>
    <div className='white2'>
           <h4>Date:{Date().slice(0,21)}</h4>
           <h4 className='twoA'><span> To:  {handle(select)}  
     <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select></span>   
    <button className='' onClick={()=>setToggle(false)}><FaSearch/></button></h4>
           
           
      <div>{toggle? <div>  
    </div>
    :<div className='dropDown2'>
     <input type='text' className='input' onChange={(e)=>setSearch(e.target.value)} placeholder={"search"}/>
     {names?.filter((item)=>{return search.toLowerCase() === ""? item : item.name.toLowerCase().includes(search)}).map((item,index)=>
       {return(<div key={index} onClick={()=>handleSelect(item)}>
                             {item.name}<br/>
                             </div>)})} 

      </div>}</div>

    <h4> Subject:  {adm2?.toUpperCase()}</h4>
              <input style={{margin:"5px"}} className='input' onChange={(e)=>setAdm2(e.target.value)} />
                 
     <div className='twoA'><h4>Message:</h4>  <button className='click1' onClick={()=>handleCreate()}> send</button>
                    </div>
                    <textarea value={adm} className='dropDown'  style={{margin:"5px"}} cols={30}  rows={7} onChange={(e)=>setAdm(e.target.value)} placeholder='message...'/>
                
                    </div>
                 </div>
        <div className="white2">
        <h4>Previous:{type}
                    <select onChange={(e)=>setType(e.target.value)}>
                        <option value="">select</option>
                        <option value="all">All</option>
                        <option value="management">Management Only</option>
                        <option value="staff">Staff Only</option>
                        <option value="student">Student Only</option>
                        </select> </h4>
                   
                    {toggle2? 
                    <div className="dropDown">
                        {name?.[`${type}Chat`]?.map((item,index)=> {return(<div onClick={()=>handleSelect2(item)} key={index}>
                            {item.date}<br/>
                            {item.subject}<br/>
                            {item.message}
                               </div>)})} 
                    </div>:<div className='break white2'>
                           
                           <h5>{item?.subject?.toUpperCase()}<br/> 
                            {item.message}<br/>
                            {item.date}</h5>
                            <div className="twoA">
           <button onClick={()=>setToggle2(true)}>Back</button>
           <button onClick={()=>handleDelete()}>Delete</button>
                        </div>

                      </div>}
                 <div className='white2'> <h4>From: {type}
    <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="all">All</option>
      <option value="management">Management Only</option>
      <option value="staff">Staff Only</option>
      <option value="student">Student Only</option>
    </select> </h4>
                             {toggle3? 
                    <div className="dropDown">
                        {name?.[`${type}Chat`]?.map((item,index)=> {return(<div onClick={()=>handleSelect3(item)} key={index}>
                            {item.date}<br/>
                            {item.subject}<br/>
                            {item.message}
                               </div>)})} 
                    </div>:<div className='break white2'>
                           
                           <h5>{item?.subject?.toUpperCase()}<br/> 
                            {item.message}<br/>
                            {item.date}</h5>
                            <div className="twoA">
           <button onClick={()=>setToggle3(true)}>Back</button>
           <button onClick={()=>handleDelete()}>Delete</button>
                        </div>

                      </div>}
                 

        </div>
        </div>
        </div>
        </div>
  </>  
  )
}

export default Chat