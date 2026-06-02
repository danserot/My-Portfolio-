import React from "react";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./languages";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
