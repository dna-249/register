import React from 'react'

const Menu = () => {
  return (
   <div className='center' >
      <div className='center2'><img src="/bg_eoa.jpg" width={300} height={300} alt="" />
       
        <h2>Welcome 
        <br/> To<br/>Erudite Online Academy</h2>
        </div>
        <div  className='center2 white3'>
          <h3>Summer Program</h3>
         <h5>Children</h5>
         <h5>Adult</h5>
        </div>
        <div className='center2'>
          <h2>ABOUT </h2>
        </div>

        <div className='center2  white3'>
          <img src="/vision.jpg" className='logo2' alt="" />
           <h3>Vision</h3>
           <p>Empowering learners worldwide to achieve academic
            excellence and reach their full potential through
            innovative online education.
           </p>
        </div>

<div className='center2 white3'>
           <img src="/mission.jpg" className='logo2' alt="" />
           <h3>Mission</h3>
           <p>At Erudite Online Academy, our mission is to 
            provide high-quality accessible, and engaging online
            education that fosters intellectual curiosity, creativity
            and critical thinking. We strive to create a supportive and 
            inclusive learning environment that enables students to succeed in their academic and 
            professional pursuits.
           </p>
        </div>
        <div className='center2  white3'>
          <h2>Contact</h2>
        
      </div>
    </div>
  )
}

export default Menu
