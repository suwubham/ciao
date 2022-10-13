import React from 'react'
import Navbar from '../components/Navbar'
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";


export default function YourArts() {
  return (
    <>
      {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
      <div>Your Arts</div>
    </>
  )
}
