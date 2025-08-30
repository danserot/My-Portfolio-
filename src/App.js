import React from "react";
import Home from "./components/home";
import Projects from "./components/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Main page*/}
        <Route path="/" element={<Home />} />
        {/*Project page*/}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
