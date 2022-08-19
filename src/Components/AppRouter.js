import React from 'react'
import { Routes, Route } from "react-router-dom"
import LandingPage from './LandingPage'
import RegisterLogin from './Register-Login'
import Homepage from './Homepage'
import YourArts from './YourArts'
import Profile from './Profile'
import Template from './Template'
import About from './About'
import FromTemplate from '../draw/FromTemplate'
import Phyllotaxis from './art/Phyllotaxis.js'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/signin" element={<RegisterLogin />} />
      <Route path="/about" element={<About />} />
      <Route path="/yourarts" element={<YourArts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/template" element={<Template />} />
      <Route path="/template/fromTemplate" element={<FromTemplate />} />
      <Route path="/template/fromTemplate/phyllotaxis" element={<Phyllotaxis />} />
    </Routes>
  );
}
