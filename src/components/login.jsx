import React from 'react'
import {FaUser,} from "react-icons/fa"
import { Link } from "react-router-dom"

const Login = ({setLogin}) => {
  return (
    <div className='signUp'>
        
       
    <div  style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br /> <span style={{color:"green",fontWeight:"bolder"}}>LOGIN</span>  </div>
        
        <button ><Link to="/managementLogin">Management</Link></button>
        <button ><Link to="/staffLogin">Staff</Link></button>
        <button ><Link to="/studentLogin">Student</Link></button> <br/>
        <div> <Link to="/timer">countDown</Link></div>
    </div>
    
    
    </div>
  

)
}

export default Login