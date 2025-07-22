import React from 'react'

const Footer = () => {
  return (           
    <div style={{height:"400px"}} className="center">
        <div className="footer">
            <h3>Email</h3>
             <div style={{border:"none",background:"transparent",height:"400px",position:"relative",top:"0px",alignContent:"baseline"}} className='signUp'>
            <div style={{borderRadius:"10px",padding:"20px"}}>
           <div>Message:<textarea style={{outlineColor:"lightgreen",border:" 1px solid rgba(128, 127, 127, 0.28)"}} cols={30} rows={5} onChange={(e)=>setConfirm(e.target.value)}  type='text'/></div>
          <div>Name:<input onChange={(e)=>setName(e.target.value)} type='text'/></div>   
           <div>Email:<input onChange={(e)=>setEmail(e.target.value)}  type='email'/></div>
     
              <div><button style={{border:"none",outline:"none"}} > Send</button></div> 
        </div>
    </div>
        </div>
    </div>
  )
}

export default Footer