import React, { useState } from 'react'

const useControl = (name,password ,email ,select,select2) => {
    const [error,setError]= useState('')
    const control =(func)=>{
         
     if(select === ""){
        setError("choose your program duration")

    }else if(select2 === ""){
               setError("choose your program time plan")


    }
    else if(name === ""){
        setError("name field can't be blank")
    } 
    else if(password === ""){
        setError("password field can't be blank")

    }
    else if(email === ""){
        setError("Email field can't be blank")

    }
    else if(select === ""){
        setError("choose your program duration")

    }else if(select2 === ""){
               setError("choose your program time plan")


    }
    else{
    setError(null)
    func()
   }
   }
  return  {error,control}
  
}

export default useControl