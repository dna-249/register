import React from 'react'
import {FaUser,FaBars} from "react-icons/fa"
const Secret = () => {
  return (
    <div className='center' >
        <div className="bgUser">
            <h3> MANAGEMENT DASHBOARD</h3>
             <div className='two'>
                <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
                
                <div className='bars'><FaBars/></div>
            
                <div>
                    <div>Name:</div>
                    <div>Class:</div>
                    <div>Subject:</div>
                    
                </div>
            </div>
            <div className='white'>
                 <h4>Secret_Keys</h4>
                 <div>
                    <h5>Management</h5>
                    <input type="number" placeholder='secret key...'/>
                    <button>Register</button>
                 </div>

                 <div>
                    <h5>Staff</h5>
                    <input type="number" placeholder='secret key...'/>
                    <button>Register</button>
                 </div>

                 <div>
                   <h5>Previous Secret_Keys</h5> 
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Secret