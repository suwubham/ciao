import React from 'react'
import './Navbar.css'
import Logo from '../assets/ciaologo3.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-custom sticky-top navbar-expand-lg " style={{ postion: "fixed" }} >
      <div className="container-fluid">
        <a className="navbar-title navbar-custom" href="http://localhost:3000/home"><img src={Logo} height={30} width={75} /></a>

        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon my-toggler"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link navbar-custom" aria-current="page" href="http://localhost:3000/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-custom" href="http://localhost:3000/yourarts">Your Arts </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle  navbar-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Draw
              </a>
              <ul className="dropdown-menu navbar-custom">
                <li><a className="dropdown-item navbar-custom" href="http://localhost:3000/template">From Template</a></li>
                <li><a className="dropdown-item navbar-custom" href="#">From Image</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item navbar-custom" href="#">Blah Blah Blah</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-custom" aria-current="page" href="http://localhost:3000/signin">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-custom" aria-current="page" href="http://localhost:3000/landingpage">Landing Page</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-custom" aria-current="page" href="http://localhost:3000/footer">Footer</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="search-btn" type="submit">Search</button>
          </form>
          {/* <img src={Logo} height={30} width={100}/> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link navbar-custom" id="Profile-btn" href="http://localhost:3000/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
