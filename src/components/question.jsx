import React from 'react'
import { useState,useEffect } from 'react'
import {useParams,useNavigate} from "react-router-dom"

const Question = () => {
     
    const [select2,setSelect2]=useState()
    const [select3,setSelect3]=useState()
    const [object, setObject]= useState("Eng")
    const [session, setSession]= useState("2024/2025")
    const [term, setTerm]= useState("first")
    const [name, setName]= useState([])
    const [select, setSelect]= useState(false)
    const [key, setKey]= useState() 
    const [show, setShow]= useState(false)

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
        setShow(true)
        setSelect2(item)
        
      }

    const handleRegister = async(add)=>{
               await axios.put(`https://register-api-cloud.vercel.app/student/${add}`,
                {
                date:Date().slice(0,21),
                session:session,
                term:term,
                question:'',
                ans:'',
                a:'',
                b:'',
                c:'',
                d:'',
               })
                         .then((res)=> {setSelect(pre => !pre);console.log(res.data)})
                         .catch((err)=> console.log(err))
                  
         }

         const handleSave = async()=>{
                    await axios.put(`https://register-api-cloud.vercel.app/staff/set/${id}/${object}/${index}/${key}`,{
                     value:select3
                    })
                              .then((res)=>{setIsNew(pre => !pre); alert("Successfully"); setShow(false); console.log(res.data)})
                              .catch((err)=> console.log(err))
              }
    
  return (
  
  <div>{show?(
  <div className='center'>
   <div className='bgUser'> 

   <h3>Select Option below:</h3>
    <div className='four'>
    <div>Activity: <select onChange={(e)=>setSelect(e.target.value)}>
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
<div className="three4">
    <div><h3>Section A </h3></div>
    <div><h3>Duration: 45mins </h3></div>
    <div><h3>Remaining: 45mins </h3></div>
    </div>


       <div className='white'>
         
           <div>
              <h2>Student Attendance</h2>
                </div>
          <div>
               <thead>
                      <tr>
                          <th>Date:</th>
                          <th>session:</th>
                          <th>term:</th>
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
     </div>):(  <div className='center'>
        <div style={{margin:"auto",color:"green"}}>
         <div className="white">
         <h3>Setting Questions</h3>
        <div className="white2">
            <h5>Question</h5>
            <textarea style={{outlineColor:"yellowgreen"}} cols={39} rows={5} placeholder='type question....' />
          </div>  
        <div className="white2">
            
            <h5>Option Format</h5>
             <h6> A B C D
             <input type="radio"/></h6>
             <h6> A B C D E
             <input type="radio"  /></h6>
             </div>
       <div className="white2">
        
            <h5>Answer</h5>
            <div className="twoA">
            <input type="text" className="input" />
            <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
        </div>
        </div>
           </div>
           </div>
        </div>
        )}
  
   </div>
  )
}

export default Question