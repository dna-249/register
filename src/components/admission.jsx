import React from 'react'
import {FaUser,FaBars} from "react-icons/fa"
const Admissions = () => {
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