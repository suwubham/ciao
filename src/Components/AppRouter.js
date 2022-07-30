import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterLogin from './Register-Login'
import Homepage from './Homepage'
import Blogs from './Blogs'



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/signin" element={<RegisterLogin/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
    </BrowserRouter>
  )
}
