import React from 'react'
import {FaUser,FaBars} from "react-icons/fa"
const Admissions = () => {
  return (
    <div className='center' >
        <div className="bgUser">
           
            
            <div className='white'>
                 <h4>Admissions</h4>
                 <div>
                    <h5>Create Admission</h5>
                    <input type="number" placeholder='new admission no...'/>
                    <button>Register</button>
                 </div>

                 <div>
                   <h5>Previous Admissions</h5> 
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Admissions