import './App.css'
import RegisterLogin from "./Components/Register-Login"
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from './Components/Homepage'
import Blogs from './Components/Blogs'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import AppRouter from './Components/AppRouter'

function App() {
  return (
    <>
      {/* <div className="App">
        <ul className="nav-list">
          <li><a href="http://localhost:3000/home"> HomePage </a></li>
          <li><a href="http://localhost:3000/signin"> Register </a></li>
          <li><a href="http://localhost:3000/blogs"> Blogs </a></li>
        </ul>
        
      </div> */}

      <navbar class="navbar sticky-top navbar-expand-lg bg-secondary" style={{postion:"fixed"}} >
        <div class="container-fluid">
          <a class="navbar-title" href="http://localhost:3000/home">CIAO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/signin">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/blogs">Blogs </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Draw
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">From Template</a></li>
                  <li><a class="dropdown-item" href="#">From Image</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Blah Blah Blah</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Account Name</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </navbar>
      <AppRouter />
    </>
  );
}

export default App;

