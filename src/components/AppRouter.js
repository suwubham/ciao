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
import Wavy from "../pages/draw/Wavy.draw";
import Mandala from "../pages/draw/Mandala.draw";
import PerlinNoiseRandomness from "../pages/draw/PerlinNoiseRandomness.draw";
import Grid from "../pages/draw/Grid.draw";
import ASCIIFabric from "../pages/draw/ASCIIFabric.draw";
import RosePetals2d from "../pages/draw/RosePetals2d.draw";
import SuperShape from "../pages/draw/SuperShape.draw";
import PerlinTriangle from "../pages/draw/PerlinTriangle.draw";
import FlowerThree from "../pages/draw/FlowerThree.draw";
import DrawSnowflake from "../pages/draw/DrawSnowflake.draw";
import FromImage from "../pages/FromImage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Homepage />} />
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
      <Route path="template/wavy" element={<Wavy />} />
      <Route path="template/Mandala" element={<Mandala />} />
      <Route path="template/pnrandom" element={<PerlinNoiseRandomness />} />
      <Route path="template/Grid" element={<Grid />} />
      <Route path="template/ASCIIFabric" element={<ASCIIFabric />} />
      <Route path="template/rosepetals2d" element={<RosePetals2d />} />
      <Route path="template/supershape2d" element={<SuperShape />} />
      <Route path="template/perlintriangle" element={<PerlinTriangle />} />
      <Route path="template/flowerthree" element={<FlowerThree />} />
      <Route path="template/drawsnowflake" element={<DrawSnowflake />} />
      <Route path="image" element={<FromImage />} />
    </Routes>
  );
}
