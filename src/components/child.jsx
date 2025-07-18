import React from 'react'
import { Link } from 'react-router-dom'
const Child = () => {
  return (
    <div className="center">
        <div className="center2">
         <h1>Children Summer Lesson</h1>
         </div>
        <div className="center2 white3">
   
           <p >This program is designed to help a child:</p>
           <ul style={{textAlign:"left"}}>
           <li> To refresh his previous knowledge</li>
           <li>To learn about the teachings and sunnah of our beloved prophet(S A W)</li>
           <li>To master arabic letters(huruf), reading, and writing right from the basics.</li>
           <li>To able to recite the Qur'an</li>
           <li>To have basic Figh(jurisprudence) knowledge</li>
           <li>To learn basic islamic history.</li>
        </ul>
        </div>
        <div className="center2 white3">
             <h3>Subjects</h3>
            <p>Below are the child program subjects:</p>
            <ul style={{textAlign:"left"}}>
            <li>Qur'an</li>
            <li>Hadith</li>
            <li>Khuruf</li>
            <li>Fiqh</li>
            <li>Tauheed</li>
            <li>Sirah</li>
            <li>Azkar</li>
        </ul>
        </div>
         <div className="center2 white3">
             <h3>Schedule Time</h3>

    </div>
    <div className="center2 white3">
             <h3>How to Enroll ?</h3>
             <ul>
                <li>Click on the green button Enroll</li>
                <li>Make payment to obtain Admission No</li>
             </ul>
       <button style={{justifyItems:"center",backgroundColor:"darkgreen",padding:'5px',borderRadius:"10px"}} ><Link to={"/payment"}>Enroll here</Link></button>
    <ul>
     <li>Use Admission to create Account</li>
     </ul>
     <button style={{justifyItems:"center",backgroundColor:"darkgreen",padding:'5px',borderRadius:"10px"}} ><Link to={"/studentSignUp"}>Create Account Here</Link></button>
  
    
    </div>




    </div>
  )

}

export default Child