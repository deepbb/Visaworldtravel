import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi"
import{RxDividerVertical} from "react-icons/rx"
import {LuMessagesSquare} from "react-icons/lu"
import "./Navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
//     <div className={`Navbar ${isMenuOpen ? 'open' : ''}`}>

//       <div className='Logo_name'>
//          <img src="assets/logo.png" alt="logo" width="300px"></img>
//       </div>

//       <div className='Navbar_list'>
//         <ul className='list_items'>
//          <li className='list_item'>HOME</li>
//          <li className='list_item'>ABOUT US</li>
//          <li className='list_item'>PASSPORTS</li>
//          <li className='list_item'>VISAS</li>
//          <li className='list_item'>LEGALIZATIONS</li>
//          <li className='list_item'>CONTACT US</li>
//          <li className='list_item'>FEEDBACK</li>
//         </ul>
//       </div>

//       <div className='Navbar_right'> 
//         <div className='Navbar_right1'>
       
//          <ul className='Navbarright_list'>
//              <li>Have any Questions?</li>
//              <li>+(202) 289-6251</li>
//          </ul>
//          <i className='Navbarright_icon'><LuMessagesSquare/></i>
//         </div>
//       </div>

//  </div>
<>
<div className={`Hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
<div className={`Navbar ${isMenuOpen ? 'open' : ''}`}>

  <div className='Logo_name'>
    <img src="assets/logo.png" alt="logo" width="300px"></img>
  </div>
  <div className='Navbar_list'>
    <ul className='list_items mobile_list_items'>
      <li className='list_item mobile_list_item'>HOME</li>
      <li className='list_item mobile_list_item'>ABOUT US</li>
      <li className='list_item mobile_list_item'>PASSPORTS</li>
      <li className='list_item mobile_list_item'>VISAS</li>
      <li className='list_item mobile_list_item'>LEGALIZATIONS</li>
      <li className='list_item mobile_list_item'>CONTACT US</li>
      <li className='list_item mobile_list_item'>FEEDBACK</li>
    </ul>
  </div>
  <div className='Navbar_right'>
    <div className='Navbar_right1'>
      <ul className='Navbarright_list'>
        <li>Have any Questions?</li>
        <li>+(202) 289-6251</li>
      </ul>
      <i className='Navbarright_icon'><LuMessagesSquare/></i>
    </div>
  </div>
</div>
</>


  )
}

export default Navbar