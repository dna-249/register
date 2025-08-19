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
                        
                        {name?.map((name, index)=>{return (<div  key={index}> <h4>{()=>{return index +1}}{name.name}<br/>
                                                                              {name.email}<br/>
                                                                              {name.phone}</h4></div>)})} 
                        
                    </div>
                    </div>
                    </div>
    
  )
}

export default Client