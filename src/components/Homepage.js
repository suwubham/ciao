import React from "react";
import Navbar from "./Navbar";
import '../styles/HomePage.css'
import Logo from '../assets/Logo.jpg'
import Link1 from '../assets/logo.png'
import Link2 from '../assets/phyllotaxis.png'
import Link3 from '../assets/twlogo2.png'
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage">

        <div className="top-page">
          <div className="main-page-left">
            <div className="shape"></div>
            <div className="divi">
              <h3 className="divi-title">Glassmorphism is awesome</h3>
              <p>A modern CSS UI library based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.</p>
              <a href="https://ui.glass">Read more</a>
            </div>
          </div>

          <div className="main-page-right">
            <div className="shape2"></div>
            <div className="divi">
              <h3 className="divi-title">Glassmorphism is awesome</h3>
              <p>A modern CSS UI library based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.</p>
              <a href="https://ui.glass">Read more</a>
            </div>
          </div>
        </div>

        <div className="bottom-page">
          <h1 className="quote">We provide the best for you</h1>

          <div className="services">
            <div className="service1"><p>helloworld</p><div className="text"><p>hello</p></div></div>
            <div className="service1"><p>helloworld</p></div>
            <div className="service1"><p>helloworld</p></div>
            <div className="service1"><p>helloworld</p></div>
          </div>

        </div>

      </div>
    </>
  )
}

