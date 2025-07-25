import React from 'react'
import {FaUser,} from "react-icons/fa"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className='signUp'>
        
       
    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br /> <span style={{color:"green",fontWeight:"bolder"}}>SIGN-UP</span>  </div>
        
        <button ><Link to="/managementSignup">Management</Link></button>
        <button ><Link to="/staffSignup">Staff</Link></button>
        <button ><Link to="/teacherSignup">Teacher</Link></button>
        <button ><Link to="/studentSignup">Student</Link></button> <br/>
        <div> <Link to="/teacher/:id"> Teacher</Link></div>
    </div>
    
    
    </div>
  

)
}

export default SignUp