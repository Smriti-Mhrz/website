import "../style/HeroImage.scss"
import React from 'react'
import IntroImg from "../assets/images/wallpaper.jpg"

export default function Heroimage() {
  return (
    <>
        <div className="hero">
            <div className="mask">
                <img className="intro-image" src={IntroImg} alt="IntroImg"></img>
            </div>
        </div>
    </>
  )
}
