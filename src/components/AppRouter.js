import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import RegisterLogin from "./Register-Login";
import Homepage from "./Homepage";
import YourArts from "./YourArts";
import Profile from "./Profile";
import Template from "./Template";
import About from "./About";
import Phyllotaxis from "../draw/Phyllotaxis.draw";
import Flowfield from "../draw/PerlinNoiseFlowField.draw";
import Lorentzz from "../draw/LorentzAttractor.draw";
import Mandelbrot from "../draw/MandelbrotSet.draw";

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
      <Route path="/template/phyllotaxis" element={<Phyllotaxis />} />
      <Route path="template/perlinnoise" element={<Flowfield />} />
      <Route path="template/lorentzattractor" element={<Lorentzz />} />
      <Route path="template/mandelbrotset" element={<Mandelbrot />} />
    </Routes>
  );
}
