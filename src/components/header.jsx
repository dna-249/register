import React from 'react'
import { FaBars} from "react-icons/fa"

const Header = () => {
  return (
    <div className='header'>
       <img src="/eoa_logo.png" alt="" className="logo" />
        <div className=""> <FaBars/></div>
    </div>
  )
}

export default Header