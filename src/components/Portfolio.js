import React from 'react'
import '../style/Portfolio/portfolio.css'
import desk from '../assets/images/desk.jpg'
import watch from '../assets/images/watch.webp'
import laptop from '../assets/images/laptop.png'


export default function Portfolio() {
  return (
    <>
        <div class="portfolio">
        <div class="portfolio-head">
          <h1>Portfolio</h1>
        </div>
        <div class="category">
          <div class="category-type">
            <li>All</li>
            <li>Photgraphy</li>
            <li>UX Design</li>
          </div>
          <div class="category-bar">
            <span></span>
          </div>
        </div>
        <div class="image-category">
          <div class="first_image">
            <img class="desk" src={desk} alt="desk" />
          </div>
          <div class="second-image">
            <img src={laptop} alt="desktop" />
            <img src={watch} alt="desktop" />
          </div>
        </div>
      </div>
    </>
  )
}
