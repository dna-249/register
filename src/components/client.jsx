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
                        <h5>Clients List</h5>
                        
                        {name?.payer?.map((name, index)=>{return (<div  key={index}>{name.key}</div>)})} 
                        
                    </div>
                    </div>
                    </div>
    
  )
}

export default Client