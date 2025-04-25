import React, { useState,useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
const Profile = () => {
    const [values,setValues]= useState('nura')
    const [value,setValue]= useState('')
    const [edit,setEdit]= useState(false)
    const [image,setImage]=useState('')
    const [images,setImages]=useState('')
    const [image1,setImage1]=useState('')
    const [name,setName]=useState('')
       
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

  useEffect(() => {
   
    axios.get(`https://database-api-eight.vercel.app/${id}/${id2}`)
              .then((res)=> {console.log(res.data);setName(res.data)})
              .catch((err)=> console.log(err))   
 }, [id])
  return (
    <>
    <div className='profile'>
      <div>
        <div>
            {edit? <div>
              {name? <img src={name?.image} width={100} height={100}/>
               :
               <label for="file"><FaUser className='img'/> 
               <input type='file' id='file' onChange={(e)=>handleImage(e)}/></label>
               }

                <div className='white2 bgUser'> 
                <label for="file" className='white2 image'>Select Photo .... 
                <input type='file' id='file' onChange={(e)=>handleImage(e)}/></label>
                 <div style={{height:"20px", margin:"2px"}} className='click1'  onClick={()=>uploadImage()}>UploadImage</div>
                </div>
              </div>
               :
              <div style={{marginTop:"20px"}}>
                {image? <img src={image} width={100} height={100}/> 
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
            <div>Admission No:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div> Name:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Gender:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Age:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Email:<input onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
             <div>Address:<br/><textarea cols={40} rows={5} onChange={(e)=>setValue(e.target.value)} value={edit? value:values} readOnly={edit? false:true} type="text"  /></div>
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