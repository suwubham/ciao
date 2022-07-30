import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterLogin from './Register-Login'
import Homepage from './Homepage'
import YourArts from './YourArts'
import Profile from './Profile'
import Template from './Template'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/signin" element={<RegisterLogin/>}/>
            <Route path="/yourarts" element={<YourArts/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/template" element={<Template/>}/>
        </Routes>
    </BrowserRouter>
  )
}
