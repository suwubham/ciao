import React from 'react'
import './Navbar.css'
import Logo from '../ciaologo3.png';


export default function Navbar() {
  return (
    <navbar class="navbar navbar-custom sticky-top navbar-expand-lg " style={{ postion: "fixed" }} >
      <div class="container-fluid">
        <a class="navbar-title navbar-custom" href="http://localhost:3000/home"><img src={Logo} height={30} width={75} /></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link navbar-custom" aria-current="page" href="http://localhost:3000/signin">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-custom" href="http://localhost:3000/yourarts">Your Arts </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle  navbar-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Draw
              </a>
              <ul class="dropdown-menu navbar-custom">
                <li><a class="dropdown-item navbar-custom" href="#">From Template</a></li>
                <li><a class="dropdown-item navbar-custom" href="#">From Image</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item navbar-custom" href="#">Blah Blah Blah</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="search-btn" type="submit">Search</button>
          </form>
          {/* <img src={Logo} height={30} width={100}/> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link navbar-custom" href="http://localhost:3000/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  )
}
