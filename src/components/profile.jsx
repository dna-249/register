import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
const Profile = () => {
    const [values,setValues]= useState('nura')
    const [value,setValue]= useState('')
    const [edit,setEdit]= useState(false)
    
  return (
    <>
    <div className='profile'>
      <div>
        <div>
            <div style={{marginTop:"20px"}}><FaUser className='img'/></div>
         </div>
         <div className='two'> 
          <div><h3>Student Personal Info</h3></div>
          <div onClick={()=>setEdit((pre)=>!pre)}> <h3 style={{color:"blue", textDecoration:"underline"}}>edit</h3></div>
          </div> 
       <div> 
            <div>
            <div>Admission No:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div> Name:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Gender:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Age:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Email:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Address:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>phone:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>
              <h3>Account Info</h3>
             </div>
             <div>Username:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Password:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div><button>Save Changes </button></div>
            </div>
          </div>
              </div>
    </div>
    </>
  )
}

export default Profile