import React from "react";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Main page*/}
        <Route path="/" element={<Home />} />
        {/*Project page*/}
        <Route path="/projects" element={<Projects />} />
        {/*About page*/}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
