import { useState } from "react";

import { useTranslation } from "react-i18next";
// import "./App.css";
import "./i18n";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Work from "./Pages/Work/Work";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
