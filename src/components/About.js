import React from 'react'
import ciao from "../assets/images.png";
import ciaologo from"../assets/girl2.png"
import boy1 from"../assets/boy1.jpg"
import boy2 from"../assets/boy2.jpg"
import logo from"../assets/ciaologo3.png"
import Navbar from "./Navbar";
import './About.css';

export default function About() {
  return (
    <>
   <Navbar />
    
      <div class="about-section">
        
  
  <img src={logo}alt="logo"/>
  <h2> What makes us different</h2>
  <p>paragraph on who we are</p>
  <div className ="row"></div>
  </div>
         
        

      <div className="container emp-profile">
        <form method="">
       <h2> Our Team </h2>
          <div className="row">
            <div className="col-md-2">
            
              <img src={ciao}alt="ciao"/>
              <h5>Prasiddhi Dahal</h5>
              <h6> anything want to add </h6>
              <p>prasiddhidahal@gmail.com</p>
              <div class="container"> </div>
              <p class="title"></p>
             </div>

            <div className="col-md-2">
              <img src={boy1}alt="boy1"/>
              <h5>Saral Sainju</h5>
              <h6> anything want to add </h6>
              <p>saralsainju@gmail.com</p>
              <div class="container"> </div>
              <p class="title"></p>
         </div>

            <div className="col-md-2">
              <img src={boy2}alt="boy2"/>
              <h5>Shubham Shakya</h5>
              <h6> anything want to add </h6>
              <p>shakyasuham1@gmail.com</p>
              <div class="container"> </div>
              <p class="title"></p>
            </div>

            <div className="col-md-4">
              <div className = "profile-head">
              <img src={ciaologo}alt="Logo"/>
              <h5>Kriti Gautam</h5>
              <h6> anything want to add </h6>
              <p>gautamkriti@gmail.com</p>
              <div class="container"> </div>
              <p class="title"></p>
              </div>

            </div>

</div>
</form>
      </div>
      <p><button class="button">Contact us</button></p>
    </>
  )
}
