import React from 'react'
import '../style/Skill/Skill.css';

export default function Skill() {
  return (
    <>
        <div class="skill-section">
        <div class="skill-head">
          <h1>Professional Skills</h1>
        </div>
        <div class="skill-main">
          <div class="skillbar">
            <div class="info">
              <p>WordPress</p>
              <p class="percent">80%</p>
            </div>
            <div class="bar">
              <span class="wordpress"></span>
            </div>
          </div>
          <div class="skillbar">
            <div class="info">
              <p>JavaScript</p>
              <p class="percent">52%</p>
            </div>
            <div class="bar">
              <span class="js"></span>
            </div>
          </div>
          <div class="skillbar">
            <div class="info">
              <p>Drupal</p>
              <p class="percent">61%</p>
            </div>
            <div class="bar">
              <span class="drupal"></span>
            </div>
          </div>
          <div class="skillbar">
            <div class="info">
              <p>HTML & CSS</p>
              <p class="percent">89%</p>
            </div>
            <div class="bar">
              <span class="html"></span>
            </div>
          </div>
          <div class="skillbar">
            <div class="info">
              <p>PHP & MySQL</p>
              <p class="percent">99%</p>
            </div>
            <div class="bar">
              <span class="php"></span>
            </div>
          </div>
          <div class="skillbar">
            <div class="info">
              <p>Photoshop</p>
              <p class="percent">97%</p>
            </div>
            <div class="bar">
              <span class="photoshop"></span>
            </div>
          </div>
        </div>
      </div>   
      {/* plus sign */}
      <div class="plus">
        <i class="uil uil-plus"></i>
      </div> 
    </>
  )
}
