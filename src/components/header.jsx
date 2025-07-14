import React from 'react'
import { FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
       <img src="/eoa_logo.png" alt="" className="logo" />
        <div className=""> <Link to="/login"><FaBars/></Link></div>
    </div>
  )
}

export default Header