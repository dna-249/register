import React, { useState,useEffect } from 'react'
import { FaUser,FaArrowCircleLeft } from 'react-icons/fa'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
const Profile = () => {
    
    const [value1,setValue1]= useState('')
    const [value2,setValue2]= useState('')
    const [value3,setValue3]= useState('')
    const [value4,setValue4]= useState('')
    const [value5,setValue5]= useState('')
    const [value6,setValue6]= useState('')
    const [value7,setValue7]= useState('')
    const [value8,setValue8]= useState('')
    const [value9,setValue9]= useState('')
    const [edit,setEdit]= useState(false)
    const [image,setImage]=useState('')
    const [images,setImages]=useState('')
    const [image1,setImage1]=useState('')
    const [name,setName]=useState([''])
       
     const {id,id2} = useParams()
      const nav  = useNavigate()
    


    

  const handleImage = (e) => {
    
    setImage1(e.target.files[0])
    
    setImage(URL.createObjectURL(e.target.files[0]))
    console.log(image)
  }
  const uploadImage = async()=>{

    const form = new FormData()
    form.append("file",image1)
    form.append("upload_preset","user_images")
    form.append("cloud_name","dukgqyyek")

  const res = await fetch(`https://api.cloudinary.com/v1_1/dukgqyyek/image/upload`,{
    method:"POST",
    body:form})

    const url = await res.json()
    console.log(url.secure_url)
                    
  await axios.put(`https://database-api-eight.vercel.app/${id}/${id2}`,
    {image:url.secure_url})
                                    .then((res)=> {console.log(res.data);alert("image uploaded successfully 02")})
                                    .catch((err)=> console.log(err))   
  }

  const handleChange = async(params) => {

    await axios.put(`https://database-api-eight.vercel.app/${id}/${id2}`,
      { key:{value1 === " " ? value1 :  name.key },
        name:{value2 === " " ? value2 :  name.name },
        age:{value3 === " " ? value3 :  name.age },
        gender:{value4 === " " ? value4 :  name.gender },
        email:{value5 === " " ? value5 :  name.email },
        address:{value6 === " " ? value6 :  name.address },
        phone:{value7 === " " ? value7 :  name.phone },
        user:{value8 === " " ? value8 :  name.user },
        password:{value9 === " " ? value9 :  name.password }
        
        })
                                      .then((res)=> {console.log(res.data);alert("Save successfully")})
                                      .catch((err)=> console.log(err))   
    
  
    
  }
  
  useEffect(() => {
   
    axios.get(`https://database-api-eight.vercel.app/${id}/${id2}`)
              .then((res)=> {console.log(res.data);setName(res.data)})
              .catch((err)=> console.log(err))   
 }, [id])
  return (
    <>
    <div className='profile'>
    <div className='click2' onClick={()=>nav(-1)}><FaArrowCircleLeft /></div>
      <div>
        <div>
            {edit? <div>
              {name? <img className='img' src={name?.image}/>
               :
               <label for="file"><FaUser className='img'/> 
               <input type='file' id='file' onChange={(e)=>handleImage(e)}/></label>
               }

                <div className='white2 bgUser'> {image? <img className='img' src={image}/> : 
                <label for="file" className='white2 image'>Select Photo .... 
                <input type='file' id='file' onChange={(e)=>handleImage(e)}/></label>}
                 <div style={{height:"20px", margin:"2px"}} className='click1'  onClick={()=>uploadImage()}>UploadImage</div>
                </div>
              </div>
               :
              <div style={{marginTop:"20px"}}>
                {image? <img className='img' src={name?.image}/> 
               : 
               <label for="file"><FaUser className='img'/> <input type='file' id='file' onChange={(e)=>handleImage(e)}/>
               </label>}
            </div>}
         </div>

         <div className='two'> 
          <div><h3>Student Personal Info</h3></div>
          <div onClick={()=>setEdit((pre)=>!pre)}> <h3 style={{color:"blue", textDecoration:"underline"}}>edit</h3></div>
          </div> 
       <div> 
          
           <div>
            <div>Admission No:<input onChange={(e)=>setValue1(e.target.value)} value={edit? value1:name.key} readOnly={edit? false:true} type="text"  /></div>
             <div> Name:<input onChange={(e)=>setValue2(e.target.value)} value={edit? value2:name.name} readOnly={edit? false:true} type="text"  /></div>
             <div>Gender:<input onChange={(e)=>setValue3(e.target.value)} value={edit? value3:name.gender} readOnly={edit? false:true} type="text"  /></div>
             <div>Age:<input onChange={(e)=>setValue4(e.target.value)} value={edit? value4:name.age} readOnly={edit? false:true} type="text"  /></div>
             <div>Email:<input onChange={(e)=>setValue5(e.target.value)} value={edit? value5:name.email} readOnly={edit? false:true} type="text"  /></div>
             <div>Address:<br/><textarea cols={40} rows={5} onChange={(e)=>setValue6(e.target.value)} value={edit? value6:name.address} readOnly={edit? false:true} type="text"  /></div>
             <div>phone:<input onChange={(e)=>setValue7(e.target.value)} value={edit? value7:name.phone} readOnly={edit? false:true} type="text"  /></div>
             <div>
              <h3>Account Info</h3>
             </div>
             <div>Username:<input onChange={(e)=>setValue8(e.target.value)} value={edit? value8:name.user} readOnly={edit? false:true} type="text"  /></div>
             <div>Password:<input onChange={(e)=>setValue9(e.target.value)} value={edit? value9:name.password} readOnly={edit? false:true} type="text"  /></div>
             <div><button onClick={()=>handleChange()}>Save Changes </button></div>
            </div>
        
          </div>
              </div>
    </div>
    </>
  )
}

export default Profile