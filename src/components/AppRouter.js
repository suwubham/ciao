import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterLogin from "../pages/Register-Login";
import Homepage from "../pages/Homepage";
import YourArts from "../pages/YourArts";
import Profile from "../pages/Profile";
import Template from "../pages/Template";
import About from "../pages/About";
import Phyllotaxis from "../pages/draw/Phyllotaxis.draw";
import Flowfield from "../pages/draw/PerlinNoiseFlowField.draw";
import Lorentzz from "../pages/draw/LorentzAttractor.draw";
import Mandelbrot from "../pages/draw/MandelbrotSet.draw";
import RecursiveTree from "../pages/draw/RecursiveTree.draw";
import Tenprint from "../pages/draw/Tenprint-line.draw";
import TenprintCircle from "../pages/draw/TenprintCircle.draw";
import RecursionCircle from "../pages/draw/RecursionCircle.draw";
import RotatedBox from "../pages/draw/RotatedBox.draw";
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
      <Route path="template/recursivetree" element={<RecursiveTree />} />
      <Route path="template/Tenprint" element={<Tenprint />} />
      <Route path="template/tenprintcircle" element={<TenprintCircle />} />
      <Route path="template/recursioncircle" element={<RecursionCircle />} />
      <Route path="template/rotatedbox" element={<RotatedBox />} />
    </Routes>
  );
}
