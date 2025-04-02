import React from 'react'
import { FaHome, FaUser } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


const Activity = ({names}) => {

    let score = 0
      
       
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(5)
    const [selects,setSelects]=useState()
    const [select,setSelect]=useState()
    const [select1,setSelect1]=useState()
    const [select2,setSelect2]=useState()
    const [select3,setSelect3]=useState()

    
    
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
     
       setCount((count)=> count + 1)
       setSelect('')
       handleAnswer(answer)
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
    
const name3 = (params) => {
  score++
  alert(score)
}


     return (
      <div className='center'>
    <div className='bgUser'> 
        <div  className="two">
        <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
      <div> Admission No: <br />
       Name:{names.name} <br />
       Class: <br />
       Subject: {select3} <br />
       Activity: {select} <br />
       Session: {select1} <br />
       Term: {select2}
</div></div>
 <div style={{marginBottom:"10px"}}><Link to="/profile">User Profile</Link></div>
 <h3>Select Option below:</h3>
    <div className='four'>
    <div>Activity: <select onChange={(e)=>setSelect(e.target.value)}>
      <option value="">select</option>
      <option value="Examination">Examination</option>
      <option value="Test">Test</option>
      <option value="Assignment">Assignment</option>
    </select></div>
        
        <div>Session: <select onChange={(e)=>setSelect1(e.target.value)}> 
      <option value="">select</option>
      <option value="2022/2023">2022/2023</option>
      <option value="2023/2024">2023/2024</option>
      <option value="2024/2025">2024/2025</option>
      </select></div>

       <div>Term: <select onChange={(e)=>setSelect2(e.target.value)}> 
      <option value="">select</option>
      <option value="First Term">First Term</option>
      <option value="Second Term">Second Term</option>
      <option value="Third Term">Third Term</option>
    </select></div>

    <div>Subject: <select onChange={(e)=>setSelect3(e.target.value)}>
      <option value="">select</option>
      <option value="English">English</option>
      <option value="Mathematics">Mathematics</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Physics">Physics</option>
      <option value="Biologys">Biology</option>
    </select></div>
    </div>
<div className="three4">
    <div><h3>Section A </h3></div>
    <div><h3>Duration: 45mins </h3></div>
    <div><h3>Remaining: 45mins </h3></div>
    </div>

    {test.map((item, index)=> {
        return (
        <div  key={index} >{item.questions[count]}
            {item.options.map((item,index)=> {if(count > item.length) return(<div key={index}>
             <div>Select: {select}
             <select onChange={(e)=>setSelect(e.target.value)}>
              <option value="">select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select></div>
            {Object.values(item)[count]
            .map((item, index)=>{return (<div  key={index}>
                 {item}
            </div>)})}</div>);else return (<div> {score}</div>)})}
            <div  onClick={()=>name(item.answers[count])}> Next</div></div>)
    })}
   
</div></div>
  )
}

export default Activity