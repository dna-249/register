import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Slide from './slide'
import Footer from './footer'
import { FaMailBulk } from 'react-icons/fa'

const Menu = () => {
   const pic =['bg_eoa.jpg','onlinepic.JPG','onlinepic2.JPG','onlinepic3.JPG']
  const title = `Welcome `
  const title2 = ` To `
  const title3 = `Erudite Online Academy`
  
  return (
    <>
    <Header  />
   <div className='center' >
      <div className='center2'>
        <Slide pic={pic} title={title} title3={title3} title2={title2}/>
       
        
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
          <h2>Contact Us <FaMailBulk /></h2>
          <Footer />
          <button style={{justifyItems:"center",backgroundColor:"darkgreen",padding:'5px',borderRadius:"10px"}} ><Link to={""}>WhatsApp Us Here</Link></button>
      </div>
      <div className="footer2">
        <h3>Address</h3>
         <p>NO 7 A close Efab Estate <br/> Life Camp Abuja.</p>
         <h3>Email: </h3>
         <p>eruditeacademyonline@gmail.com</p>
         

      </div>
    </div>
    </>
  )
}

export default Menu
