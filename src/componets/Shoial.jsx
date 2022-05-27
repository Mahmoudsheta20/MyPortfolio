import React from 'react'
import './shoial.scss'

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const Shoial = () => {
  return (
  <div className="app_social">
<div className='icon'><BsInstagram/></div>
<div className='icon'>

    <BsTwitter/>
</div>
<div className='icon'>
    <FaFacebookF/>
</div>



  </div>
  )
}

export default Shoial