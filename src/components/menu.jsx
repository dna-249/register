import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Menu = () => {
  return (
    <>
    <Header />
   <div className='center' >
      <div className='center2'><img src="/bg_eoa.jpg" width={300} height={300} alt="" />
       
        <h2>Welcome 
        <br/> To<br/>Erudite Online Academy</h2>
        <p>An online based academy rich in educational resources aimed at attaining excellence in the impartation of islamic education, morals, and secular education</p>
        <p>Erudite Online Academy provides a variety of programmes including Summer Lessons.</p>
          </div>
        <div className='center2 white3'>
        
        <div  style={{textAlign:"left",fontWeight:"bold",color:"darkblue"}}><h5><Link to="/child">Programmes Offered</Link> </h5>
        </div>
        </div>

        <div className="center2 white2">
          <h3>Academic Features</h3>
          <ul style={{textAlign:"left",color:"darkblue"}}>
            <li>Online User Account</li>
            <li>E Examination</li>
            <li>E Result</li>
            <li>Interactive Virtual Online Classroom</li>
            <li>Active Professional Scholars</li>
          </ul>
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
        <div className='center2'>
          <h2>Contact</h2>
      </div>
      <div className="center2">

      </div>
    </div>
    </>
  )
}

export default Menu
