import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterLogin from './Register-Login'
import Homepage from './Homepage'
import YourArts from './YourArts'
import Profile from './Profile'
import Template from './Template'
import About from './About'
import LandingPage from './LandingPage'
import Footer from './Footer'


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<RegisterLogin/>}/>
            <Route path="/yourarts" element={<YourArts/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/template" element={<Template/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/landingpage" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}
