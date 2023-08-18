import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import {BiSolidMap} from "react-icons/bi"
import {BsFacebook,BsTwitter,BsLinkedin} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import "./Header.css"

function Header() {
  return (
    <div className="header">
    {/*-- Header Main Area --*/}
        <div className='header1'>
          <ul className='header_address'>
            <li className='header_address1'><i className='header_icons'><BiSolidMap/></i>Address:1413 K Street NW, 9th Floor, Washington D.C. 20005</li>
            <li  className='header_address1'><i className='header_icons'><MdEmail/></i>Email Address: support@worldvisatravel.com</li>
          </ul>
        </div>

        <div className='header2'>
        <ul className='social_icons'>
          <li className='icons'><BsFacebook/></li>
          <li className='icons' ><BsTwitter/></li>
          <li className='icons'><BsLinkedin/></li>
       </ul>
       </div>

    </div>
  )
}

export default Header