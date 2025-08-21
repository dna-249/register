import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { BiCurrentLocation, BiMap, BiPrinter } from "react-icons/bi"
import { FaMap } from 'react-icons/fa'
import { AiFillHome, AiFillMacCommand } from 'react-icons/ai'
import Header from './header'
import Slide from './slide'
const ProgramOne = () => {
    const pic =['bg_eoa.jpg','onlinepic.JPG']
    
  
  const title = "Child Program"
  
  return (
   <>
   <Header />
    <div className="center">
        <div className="center2">
         <Slide pic={pic} title={title} />
        
         
        
         </div>
        <div className="center2 white3">
                <h3><Link to={'/program'}>Programmes Objectives</Link></h3>
           <p >This program is designed to help a child:</p>
           <ul style={{textAlign:"left"}}>
           <li>  refresh his previous knowledge</li>
           <li> learn about the teachings and sunnah of our beloved prophet(S A W)</li>
           <li> master arabic letters(huruf), reading, and writing right from the basics.</li>
           <li> be able to recite the Qur'an proficiently</li>
           <li> have basic Fiqh(jurisprudence) knowledge</li>
           <li> learn basic islamic history.</li>
        </ul>
        </div>
        <div className="center2 white3">
             <h3>Subjects</h3>
            <p>Below are the summer programme subjects: </p>
            <ul style={{textAlign:"left"}}>
            <li>Qur'an</li>
            <li>Hadith</li>
            <li>Huruf </li>
            <li>Fiqh</li>
            <li>Tauheed</li>
            <li>Seerah </li>
            <li>Azkaar </li>
            
        </ul>
        </div>
         <div className="center2 white3">
             <h3>Schedule Time</h3>
             <p>Flexible based on request </p>

    </div>
    <div className="center2 white3">
             <h3>How to Enroll</h3>
             <ul>
                <li>Click on the green button to enroll</li>
                <li>Make payment to obtain Admission No</li>
             </ul>
       <button style={{justifyItems:"center",height:"30", width:"200px",fontSize:"20px", backgroundColor:"darkgreen",padding:'5px',borderRadius:"10px"}} ><Link to={`payment/${title}`}>Enroll here</Link></button>
    <ul>
     <li>Use admission number  to create your account </li>
     </ul>
     <button style={{justifyItems:"center",backgroundColor:"darkgreen",padding:'5px',borderRadius:"10px"}} ><Link to={"/studentSignUp"}>Create Account Here</Link></button>
  
    
    </div>




    </div>
    </>
  )

}

export default ProgramOne