import React from 'react';
import "../style/NavBar.scss"
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

export default function NavBar() {
  const [click,setClick]= useState(false);
  const handleClick= ()=>{
    setClick(!click);
  } 
  return (
    <>
    <div className='header'>
      <h1>RsCard</h1>
      <ul className={click?"nav-menubar active":"nav-menu"}>      
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Calendar</li>
            <li>Contact</li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:'#fff'}}/>):(<FaBars size={20} style={{color:'#fff'}}/> )}         
      </div>

        {/* <div className="container">
          <div className='image'>
            <img src={wallpaper} alt="backgroundimage" />
          </div> */}
        
       </div>
    </>
  )
}
