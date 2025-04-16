import React from 'react'
import { useState,useEffect } from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from 'axios'
import { FaPlus,FaArrowCircleLeft } from 'react-icons/fa'
const Question = () => {
     
  const [select2,setSelect2]=useState()
  const [select3,setSelect3]=useState()
  const [object, setObject]= useState("Eng")
  const [session, setSession]= useState("2024/2025")
  const [term, setTerm]= useState("first")
  const [name, setName]= useState([])
  const [select, setSelect]= useState(false)
  const [key, setKey]= useState() 
  const [value, setValue]= useState() 
  const [value1, setValue1]= useState() 
  const [value2, setValue2]= useState() 
  const [value3, setValue3]= useState() 
  const [value4, setValue4]= useState() 
  const [value5, setValue5]= useState() 
  const [value6, setValue6]= useState() 
  const [type, setType]= useState() 
  const [show, setShow]= useState(true)
  const [insert, setInsert]= useState(false)

  const [index, setIndex]= useState()
  const [isNew, setIsNew]= useState(true)
  
  
  const {id} = useParams()
  const nav   = useNavigate()


    useEffect(() => {
      axios.get(`https://register-api-cloud.vercel.app/staff/${id}`)
           .then((res)=>  setName(res.data))
           .catch((err)=> console.log(err))
    }, [id, show,select])
  

     
    const handleSelect = (item,key,index) => {
        setKey(key) 
        setIndex(index) 
        setSelect2(item)
        setShow(false)
        
      }

    const handleRegister = async(add)=>{
               await axios.put(`https://register-api-cloud.vercel.app/staff/${add}/${object}`,
                {
                date:Date().slice(0,21),
                session:session,
                term:term,
                type:type,
                question:value1,
                ans:v,
                a:value2,
                b:value3,
                c:value4,
                d:value5,
               })
                         .then((res)=> {setSelect(pre => !pre);console.log(res.data)})
                         .catch((err)=> console.log(err))
                  
         }

         const handleSave = async()=>{
                    await axios.put(`https://register-api-cloud.vercel.app/staff/set/${id}/${object}/${index}/${key}`,{
                     value:value
                    })
                              .then((res)=>{setIsNew(pre => !pre); alert("Successfully"); setShow(true); console.log(res.data)})
                              .catch((err)=> console.log(err))
              }
    
 if(insert === false)return (
  
  <div>{show?(
  <div className='center'>
   <div className='bgUser'> 

   <h3>Select Option below:</h3>
    <div className='four'>
    <div>Activity: <select onChange={(e)=>setType(e.target.value)}>
      <option value="">select</option>
      <option value="exam">Examination</option>
      <option value="test">Test</option>
      <option value="ca">C/A</option>
      <option value="ass">Assignment</option>
    </select></div>
        
        <div>Session: <select onChange={(e)=>setSession(e.target.value)}> 
      <option value="">select</option>
      <option value="2022/2023">2022/2023</option>
      <option value="2023/2024">2023/2024</option>
      <option value="2024/2025">2024/2025</option>
      </select></div>

       <div>Term: <select onChange={(e)=>setTerm(e.target.value)}> 
      <option value="">select</option>
      <option value="first">First Term</option>
      <option value="second">Second Term</option>
      <option value="third">Third Term</option>
    </select></div>

    <div>Subject: <select onChange={(e)=>setObject(e.target.value)}>
      <option value="">select</option>
      <option value="Eng">English</option>
      <option value="math">Mathematics</option>
      <option value="chem">Chemistry</option>
      <option value="phy">Physics</option>
      <option value="bio">Biology</option>
    </select></div>
    </div>
    <div> <button style={{width:"150px",fontWeight:"bold",margin:"5px"}} className='click1' onClick={()=>setInsert(true)}>Insert Questions</button></div>


       <div className='white'>
         
           <div>
              <h2>Questions</h2>
                </div>
          <div>
               <thead>
                      <tr>
                          <th>Date:</th>
                          <th>session:</th>
                          <th>term:</th>
                          <th>type:</th>
                          <th>question:</th>
                          <th>ans:</th>
                          <th>a:</th>
                          <th>b:</th>
                          <th>c:</th>
                          <th>d:</th>
                      </tr>
              </thead>
                   {name?.[`${object}`]?.map((item,index)=>
                   { const serial=()=>{ return index +1};
                                    const serials = serial();
                                    return (
                                              <tbody key={index} className='green'>
                                                  <tr>
                                                      <th>{item.date}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'session',index)}>{item.session}</th>
                                                     <th  onClick={()=>handleSelect(item._id,'term',index)}>{item.term}</th>
                                                      <th  onClick={()=>handleSelect(item._id,`${type}`,index)}>{item.type}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'question',index)}>{item.question}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'ans',index)}>{item.ans}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'a',index)}>{item.a}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'b',index)}>{item.b}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'c',index)}>{item.c}</th>
                                                      <th  onClick={()=>handleSelect(item._id,'d',index)}>{item.d}</th>
                                                        </tr>
                                                  
                                             </tbody>
                                                      )}
                          
                              
                              
                  )}                 
                                                                                     
               <div onClick={()=>handleRegister(id)}><FaPlus  className='click2'/></div>
                                        
  
          </div>
          </div>
   </div>
     </div>):(
      <div className='center'>
      {key === "question" && 
        
        <div style={{margin:"auto",color:"green"}}>
         <div className="white">
         <h3>Setting Questions</h3>
        <div className="white2">
          
            <h5>Question: {value}</h5>
            <textarea style={{outlineColor:"yellowgreen"}} cols={39} rows={5} placeholder='type question....'  onChange={(e)=>setValue(e.target.value)}/>
            <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>

             </div> 
             </div> 
        </div>
        
       || key === "a"   && <div style={{margin:"auto",color:"green"}}>
       <div className="white">
    
      <div className="white2">
          <h5>Option value for {key}</h5>
          <h5>value: {value} </h5>
           <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="value...."/> 
          <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
           </div>
           </div>
           </div>
           
           || key === "b"  && <div style={{margin:"auto",color:"green"}}>
           <div className="white">
        
          <div className="white2">
              <h5>Option value for {key}</h5>
              <h5>value: {value} </h5>
               <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="value...."/> 
              <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
               </div>
               </div>
               </div>
           
           || key === "c"  && <div style={{margin:"auto",color:"green"}}>
           <div className="white">
         
          <div className="white2">
              <h5>Option value for {key}</h5>
              <h5>value: {value} </h5>
               <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="value...."/> 
              <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
               </div>
               </div>
               </div>
           
           || key === "d"
        && <div style={{margin:"auto",color:"green"}}>
         <div className="white">
      
        <div className="white2">
            <h5>Option value for {key}</h5>
            <h5>value: {value} </h5>
             <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="value...."/> 
            <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
             </div>
             </div>
             </div>
            
    || key === "ans" &&
        
        <div style={{margin:"auto",color:"green"}}>
         <div className="white">
      
       <div className="white2">
           
           
            <h5>Answer: {value} </h5>
            <div className="twoA">
            <input type="text" className="input" placeholder="write ans..."  onChange={(e)=>setValue(e.target.value)}/>
            <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
        </div>
           </div>
           </div>
        </div>
      } </div>
        )}
  
   </div>
  )
  else return(
    <div className='center'>
  <div style={{margin:"auto",color:"green"}}>
       
   <div className="white">
   <div className='click2' onClick={()=>setInsert(false)}><FaArrowCircleLeft /></div>
  
   <h3>Setting Questions</h3>
  <div className="white2">
      <h5>Question: {value1}</h5>
        <textarea style={{outlineColor:"yellowgreen"}} cols={39} rows={5} placeholder='type question....'  onChange={(e)=>setValue1(e.target.value)}/> 
       </div> 
  
<div className="white2">
    <h5>Option value for A</h5>
    <h5>value: {value2} </h5>
     <input type="text" className="input" onChange={(e)=>setValue2(e.target.value)} placeholder="value...."/> 
    </div>
   
    <div className="white2">
        <h5>Option value for B</h5>
        <h5>value: {value3} </h5>
         <input type="text" className="input" onChange={(e)=>setValue3(e.target.value)} placeholder="value...."/> 
       </div>
        
       <div className="white2">
        <h5>Option value for C</h5>
        <h5>value: {value4} </h5>
         <input type="text" className="input" onChange={(e)=>setValue4(e.target.value)} placeholder="value...."/> 
       </div>
       
  <div className="white2">
      <h5>Option value for D</h5>
      <h5>value: {value5} </h5>
       <input type="text" className="input" onChange={(e)=>setValue5(e.target.value)} placeholder="value...."/> 
       </div>
        

 <div className="white2">
    
      <h5>Answer: {value6} </h5>
      <div className="twoA">
      <input type="text" className="input" placeholder="write ans..."  onChange={(e)=>setValue6(e.target.value)}/>
      <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
  </div>
     </div>
     </div>
  </div>
  </div>
 
  )
}

export default Question