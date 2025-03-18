import React from 'react'
import { FaUser } from 'react-icons/fa'
import {Link} from "react-router-dom"

const Login = ({setLogin}) => {
  return (
    <div className='signUp'>
        <div style={{borderRadius:"10px",padding:"20px",border:" 1px solid rgba(128, 127, 127, 0.28)"}}>
           <div><FaUser className='img'/> <br /><span  style={{color:"green",fontWeight:"bolder"}}> Login</span> </div>
           <div> Username: <input placeholder='username...' type="text" /></div>
           <div> Password: <input placeholder='password... ' type="password" /></div>
           <div><button onClick={()=>setLogin(false)}><Link to="/signup">Login</Link></button></div> 
        </div>
    </div>
  )
}

export default Login