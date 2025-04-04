import React from 'react'
import {FaUser,FaBars} from "react-icons/fa"
const Secret = () => {
  return (
    <div className='center' >
        <div className="bgUser">
           
            
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