import React from 'react'
import './LandingPage.css'
import Logo from '../assets/ciao-3.png'
import Link1 from '../assets/facebook-512.png'
import Link2 from '../assets/instagram-logo-2433.png'
import Link3 from '../assets/twlogo2.png'
import Navbar from './Navbar'

export default function LandingPage() {
    return (
        <div className="landingpage-div">
            <header>
                <h3 class="title">C I A O</h3>
                {/* <img src="#" class="ciaoimg" /> */}
                <nav>

                </nav>
            </header>
            <div class="text">
                <div class="maintext">
                    <h1 class="main-text">
                        Generate your own art
                    </h1>
                    <h3>
                        Work with complex math graphs and <br />other image templates to create your art.
                    </h3>
                    <button type="submit" class="signin">Get Started</button>
                </div>
                <div class="image">
                    <img src={Logo} class="ciaoimg" />
                </div>
            </div>
            <div class="logos">
                <ul>
                    <li><a href="#"><img src={Link1} id="fb" /></a></li>
                    <li><a href="#"><img src={Link2} id="insta" /></a></li>
                    <li><a href="#"><img src={Link3} id="tw" /></a></li>
                </ul>
            </div>
            <footer>
                <div class="row">
                    <div class="col">
                        <p>A web tool that enables the users to produce generative art of different kinds</p>
                    </div>
                    <div class="col">
                        <h3>CONTACT</h3>
                        <p>              </p>
                        <p>Kathmandu University</p>
                        <p>Kavre,Nepal</p>
                        <p>0714547787</p>
                        <p>ciao@gmail.com</p>

                    </div>
                    <div class="col">
                        <p>Prasiddhi Dahal</p>
                        <p>Kriti Gautam</p>
                        <p>Saral Sainju</p>
                        <p>Shubham Shakya</p>
                    </div>
                </div>
                <hr/>
                <p class="copyright">CIAO 2022 copyright - All rights reserved</p>
            </footer>
        </div>
    )
}
