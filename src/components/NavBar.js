import React from 'react'
import '../style/Navbar/NavBar.css'
import wallpaper from '../assets/images/wallpaper.jpg';

export default function NavBar() {
 
  return (
    <>
        <div className="container">
        <img src={wallpaper} alt="backgroundimage" />
        <div className="navbar">
          <h1 className="title">RsCard</h1>
          <ul className="links">
          {/* {nav.map((item)=>{
            return(<li>{item}</li>)
          })} */}
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Calendar</li>
            <li>Contact</li>
            <li>Other</li>
            <i className="menu uil uil-bars"></i>
          </ul>
        </div>
      </div>
    </>
  )
}
