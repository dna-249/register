import React from 'react'
import {FaUser,} from "react-icons/fa"

const SignUp = ({setLogin}) => {
  return (
    <div className='signUp'>
        
       
    <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
    <div><FaUser className='img'/> <br /> <span style={{color:"green",fontWeight:"bolder"}}>Sign Up</span>  </div>
        <div>Admission No:<input placeholder='admission number...' type='text'/></div>
        <div>Create Username:<input placeholder='write username...' type='text'/></div>
        <div>Create Password:<input placeholder='write password...' type='password'/></div>
        <div>Confirm Password:<input placeholder='confirm password...' type='password'/></div>
        <button onClick={()=>setLogin(true)}>Create Account</button>
    </div>
    
    
    </div>
  

)
}

export default SignUp