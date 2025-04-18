import React from 'react'
import { FaArrowCircleLeft, FaHome, FaUser } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Activity = ({names,setBack}) => {

    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    const [staff,setStaff]=useState()
    const [select,setSelect]=useState('')
    const [select2,setSelect2]=useState('')
    const [object, setObject]= useState("Eng")
    const [session, setSession]= useState("2024/2025")
    const [term, setTerm]= useState("first")
    const [type, setType]= useState() 
     
      

  const {id} = useParams()
    const nav = useNavigate()
    useEffect(() => {
   
      axios.get(`https://register-api-cloud.vercel.app/staff/${id}`)
                .then((res)=> {console.log(res.data);setStaff(res.data)})
                .catch((err)=> console.log(err))   
   }, [id])
     
    
const test =[{questions :["what is you name?",
                        "which class are you?",
                        "how old are you?",
                        "what is your hobby?"],

            options:[{ one:["A.nura ","B.mary","C.muda ","D.myHauwa "],
                       two:["A. class 1 ","B. class 2","C.class 3 ","D. all classes "],
                     three:["A. 20yrs ","B. 25yrs","C.30yrs ","D. 35yrs"],
                      four:["A. reading","B.recitation","C.programming ","D.designing "]}],

            answers:["D","C","B","A"]
            }]
  
    
    
    const name = (answer) => {
       setCount((count)=>count + 1 )
        setSelect("");
        console.log(answer)
      handleAnswer(answer);
       setSelect("")
    }

    const name2 = (answer) => {
     setCount((count)=> count - 1)
       setSelect("")
       handleAnswer2(answer)
      setSelect("")

   }
      
  
      
    const handleAnswer = (answer) => {
      if(answer === select){
        setCount2(count2 => count2 + 10)
        alert(count2)
      } else  {
        setCount2(()=>count2)
        alert(count2)
      }
    }

    const handleAnswer2 = (answer) => {
      if(answer === select){
        setCount2(count2 => count2 - 10)
        alert(count2)
      } else  {
        setCount2(()=>count2)
        alert(count2)
      }
    }
    



     return (
      <div className='center'>
    <div className='bgUser'>
      <div className='two'>
                <h3> STUDENT HALL</h3>
                <div className='click2' onClick={()=>setBack(0)}><FaArrowCircleLeft /></div>
          </div>     
         
        <div  className="two">
        <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
      <div> Admission No: <br />
       Name:{names?.name} <br />
       Class: <br />
      </div></div>
 <div style={{marginBottom:"10px"}}><Link to="/profile">User Profile</Link></div>
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
    


<div className='white'>
  
    {staff?.[`${object}`]
    .filter((item,index) =>{ 
      return item.session === session || item.term === term || index === count
      }).map((item, index)=>
        { const setting = ()=>{ return item.ans};
           const answer = setting();  
            if(count !== item.length)return (
        <div  key={index} > 
        <h1>{item.question}</h1>          
        <h3>
               <input    checked={select === 'A'} value='A'  type='radio' onChange={(e)=>setSelect(e.target.value)}/> A - {item.a}  <br />
            
              <input    checked={select === 'B'} value='B' type='radio' onChange={(e)=>setSelect(e.target.value)}/> B  - {item.b}<br />
            
               <input    checked={select === 'C'} value='C' type='radio' onChange={(e)=>setSelect(e.target.value)}/> C - {item.c}<br />
            
              <input    checked={select === 'D'} value='D' type='radio' onChange={(e)=>setSelect(e.target.value)}/>  D - {item.d}<br />
              </h3>
          <div className="twoA">  
            <button style={{justifySelf:"flex-start"}} className="click1" onClick={()=>name(answer)}>Next</button>
            <button style={{justifySelf:"flex-end"}} className="click1" onClick={()=>name2(answer)}>Previous</button>
            </div>
            </div>)
    ;else return (<div> {count2}</div>)})}
   
</div>
</div>
</div>
  )
}

export default Activity