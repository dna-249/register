import React from 'react'
import { FaArrowCircleLeft, FaHome, FaUser } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Timer from './timer'


const Activity = ({names,setBack}) => {

    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    const [staff,setStaff]=useState()
    const [select,setSelect]=useState('')
    const [image,setImage]=useState('')
    const [image1,setImage1]=useState('')
    const [object, setObject]= useState("Eng")
    const [session, setSession]= useState("2024/2025")
    const [term, setTerm]= useState("first")
    const [type, setType]= useState("exam") 
     
      

  const {id} = useParams()
    const nav = useNavigate()
    useEffect(() => {
   
      axios.get(`https://database-api-eight.vercel.app/staff/${id}`)
                .then((res)=> {console.log(res.data);setStaff(res.data)})
                .catch((err)=> console.log(err))   
   }, [id])
     
    
   const form = new FormData()
   form.append("file",image1)
 const handleImage = (e) => {
   setImage1(e.target.files[0])
   
   setImage(URL.createObjectURL(e.target.files[0]))
   console.log(image)
 }
    
    
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
        <div style={{marginTop:"20px"}}>{image? <img src={image?.image} width={100} height={100}/> : <label for="file"><FaUser className='img'/> <input type='file' id='file' onChange={(e)=>handleImage(e)}/></label>}</div>
      <div> Admission No: <br />
       Name:{names?.name} <br />
       Class: <br />
      </div></div>
 <div style={{marginBottom:"10px"}}  onClick={()=>nav(`/profile/${id}`)}>User Profile</div>
 <div>
  <div></div>
  <div><Timer time ={staff?.time}/></div>
 </div>
    
    


<div className='white'>
  
    {staff?.[`${staff?.type}`].filter((item,index) =>{ 
      return item.session === staff?.session && item.term === staff?.term index === count
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