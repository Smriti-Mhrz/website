import React from 'react'
import '../style/Resume/Resume.css';
import person from '../assets/images/profile.jpg'

export default function Resume() {
  return (
   <>
    <div class="box">
        <div class="image_description">
          <div class="image">
            <img src={person} alt="profile" />
          </div>
          <div class="details">
            <p>I'm <strong>Robert Smith</strong></p>
            <p>Developer and Startup entrepreneur</p>
            <hr/>
            <table>
              <tr>
                <td>Age</td>
                <td>29</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>20458, Belgium, BE</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>robertsmith@company.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+1 256 254 84 56</td>
              </tr>
              <tr>
                <td>Freelance</td>
                <td>till March 25,2016</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="footer">
          <i class="uil uil-facebook-f"></i>
          <i class="uil uil-twitter"></i>
          <i class="uil uil-linkedin"></i>
          <i class="uil uil-google"></i>
          <i class="uil uil-instagram"></i>
        </div>
      </div>
      <button class="resume"><b>Download Resume</b></button>
      <div class="paragraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          tenetur cum, pariatur numquam, quisquam vero reiciendis a alias saepe
          perferendis tempora qui temporibus tempore similique molestias at eos
          consequuntur neque? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptatem repellendus nulla esse optio voluptates,
          eveniet adipisci deserunt mollitia beatae exercitationem et incidunt
          non. Asperiores praesentium eveniet iste, totam ipsa cum nemo ullam?
          Dolorum sed sequi dolorem eligendi quae est harum et, eius laudantium
          aliquam. Explicabo iusto dolorum corrupti magni veniam? Soluta iusto
          illum suscipit sit, id iure. Aperiam labo!
        </p>
      </div>
   </>
  )
}
