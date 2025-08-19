import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Client = () => {

  const [name,setName]= useState([''])
  const [auto,setAuto]= useState(false)


   useEffect(() => {
   
      axios.get(`https://database-api-eight.vercel.app/pay/get`)
               .then((res)=> {console.log(res.data);setName(res.data)})
               .catch((err)=> console.log(err))
   
   
   }, [ auto])



  
  return (
    
           
            <div className='center'>
               <div className='bgUser'>
                    <div >
                        <h3>Clients List</h3>
                        
                        {name?.map((name, index)=>{ const serial = ()=>{return index +1}; return (<div  key={index}> <h4>{serial}--{name.name}<br/>
                                                                              {name.email}<br/>
                                                                              {name.phone}<br/>
                                                                              {name.date}</h4></div>)})} 
                        
                    </div>
                    </div>
                    </div>
    
  )
}

export default Client