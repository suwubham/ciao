import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import RegisterLogin from "./Register-Login";
import Homepage from "./Homepage";
import YourArts from "./YourArts";
import Profile from "./Profile";
import Template from "./Template";
import About from "./About";
import Phyllotaxis from "./art/phyllotaxis";
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
      <Route path="/phyllotaxis" element={<Phyllotaxis />} />
    </Routes>
  );
}
