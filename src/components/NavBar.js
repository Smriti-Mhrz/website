import React from 'react'
import wallpaper from '../assets/images/wallpaper.jpg';
import '../style/NavBar/NavBar.scss'
import { useState } from 'react';
// import {FaBars, FaTimes} from 'react-icons'

export default function NavBar() {
  const [click,setClick]= useState[false];
  const handleClick= ()=>{
    setClick(!click);
  } 
  return (
    <>
    <div className='header'>
      <h1>RsCard</h1>
      {/* <ul className={click?"nav-menubar active":"nav-menu"}> */}
      <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Calendar</li>
            <li>Contact</li>
      </ul>
      {/* <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:'#fff'}}/>):(<FaBars size={20} style={{color:'#fff'}}/> )}         
      </div> */}

        {/* <div className="container">
          <div className='image'>
            <img src={wallpaper} alt="backgroundimage" />
          </div> */}
        
       </div>
    </>
  )
}
