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
    const [edit1,setEdit1]= useState(false)
    const [edit2,setEdit2]= useState(false)
    const [edit3,setEdit3]= useState(false)
    const [edit4,setEdit4]= useState(false)
    const [edit5,setEdit5]= useState(false)
    const [edit6,setEdit6]= useState(false)
    const [edit7,setEdit7]= useState(false)
    const [edit8,setEdit8]= useState(false)
    const [edit9,setEdit9]= useState(false)
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
      { key:value1,
        name:value2,
        age:value3,
        gender:value4,
        email:value5,
        address:value6,
        phone:value7,
        user:value8,
        password:value9 
        
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

         <div className='twoA'> 
          <div><h3>Student Personal Info</h3></div>
          <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit((pre)=>!pre)}>edit</div>
          </div>  
       <div> 
          
          
          
           <div className='twoA'><div>Admission No:<input onChange={(e)=>setValue1(e.target.value)} value={edit1? value1:name.key} readOnly={edit1? false:true} type="text"  />
           </div>
           <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit1((pre)=>!pre)}>edit</div>
         </div>
             
             <div className='twoA'> <div>Name:<input onChange={(e)=>setValue2(e.target.value)} value={edit2? value2:name.name} readOnly={edit2? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit2((pre)=>!pre)}>edit</div>
             </div>
             
             <div className='twoA'><div>Gender:<input onChange={(e)=>setValue3(e.target.value)} value={edit3? value3:name.gender} readOnly={edit3? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit3((pre)=>!pre)}>edit</div>
             </div>
             
             <div className='twoA'><div>Age:<input onChange={(e)=>setValue4(e.target.value)} value={edit4? value4:name.age} readOnly={edit4? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit4((pre)=>!pre)}>edit</div>
             </div>
             
             <div className='twoA'><div>Email:<input onChange={(e)=>setValue5(e.target.value)} value={edit5? value5:name.email} readOnly={edit5? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit5((pre)=>!pre)}>edit</div>
             </div>
             
             <div className='twoA'><div>Address:<br/><textarea cols={30} rows={5} onChange={(e)=>setValue6(e.target.value)} value={edit6? value6:name.address} readOnly={edit6? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit6((pre)=>!pre)}>edit</div>
             </div>
             
             <div className='twoA'><div>phone:<input onChange={(e)=>setValue7(e.target.value)} value={edit7? value7:name.phone} readOnly={edit7? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit7((pre)=>!pre)}>edit</div>
             </div>
             
             <div>
              <h3>Account Info</h3>
             </div>
             
             <div className='twoA'><div>Username:<input onChange={(e)=>setValue8(e.target.value)} value={edit8? value8:name.user} readOnly={edit8? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit8((pre)=>!pre)}>edit</div>
             </div>
             
             <div className='twoA'><div>Password:<input onChange={(e)=>setValue9(e.target.value)} value={edit9? value9:name.password} readOnly={edit9? false:true} type="text"  />
             </div>
             <div style={{color:"blue", textDecoration:"underline"}} onClick={()=>setEdit9((pre)=>!pre)}>edit</div>
             </div>
            
             <div><button onClick={()=>handleChange()}>Save Changes </button></div>
            </div>
        
          </div>
              </div>
    
    </>
  )
}

export default Profile