import React, { useEffect } from "react";
import Navbar from "./Navbar";
import '../styles/HomePage.css'

export default function Homepage() {
  return (
    <>
      <Navbar />
        <header className="bg-dark">
          <div className="container pt-4 pt-xl-5">
            <div className="row pt-5">
              <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                <div className="text-center">
                  <p className="fw-bold text-success mb-2">Voted #1 Worldwide</p>
                  <h1 className="fw-bold">The best solution for you and your customers</h1>
                </div>
              </div>
              <div className="col-12 col-lg-10 mx-auto">
                <div className="position-relative">
                  <div style={{ position: "relative" , flex: "0 0 45%" , transform: "translate3d(-15%, 35%, 0)"}}><img className="img-fluid" data-bss-parallax data-bss-parallax-speed={0.8} src="products/3.jpg" /></div>
                  <div style={{position: "relative" , flex: "0 0 45%" , transform: "translate3d(-5%, 20%, 0)"}}><img className="img-fluid" data-bss-parallax data-bss-parallax-speed="0.4" src="products/2.jpg" /></div>
                  <div style={{position: "relative" , flex: "0 0 60%" , transform: "translate3d(0, 0%, 0)"}}><img className="img-fluid" data-bss-parallax data-bss-parallax-speed="0.25" src="products/1.jpg" /></div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}
