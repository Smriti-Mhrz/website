import React from 'react'
import '../style/Resume.scss';
import person from '../assets/images/person.webp'
export default function Resume() {
  return (
   <>
  <div className='wrapper'>
    <div className="box">
          <div className="image">
            <img src={person} alt="profile" />
          </div>
          <div className="details">
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
        
        <div className="footer">
          <i className="uil uil-facebook-f"></i>
          <i className="uil uil-twitter"></i>
          <i className="uil uil-linkedin"></i>
          <i className="uil uil-google"></i>
          <i className="uil uil-instagram"></i>
        </div>
    </div>
      {/* <button className="resume"><b>Download Resume</b></button> */}
      {/* <div className="paragraph">
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
      </div> */}
  </div>
   </>
  )
}
