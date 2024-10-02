import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Work from "./Pages/Work/Work";
import Logo from "./assets/LogoMLroxo.png";

function App() {
  useEffect(() => {
    const logo = document.querySelector(".logo-cursor");
    let isTouchDevice = false;

    const handleMouseMove = (e) => {
      if (!isTouchDevice) {
        logo.style.left = `${e.pageX + 12}px`;
        logo.style.top = `${e.pageY + -10}px`;
        logo.style.display = "block";
      }
      const elementUnderCursor = document.elementFromPoint(
        e.clientX,
        e.clientY
      );

      if (elementUnderCursor) {
        if (
          elementUnderCursor.tagName === "IMG" ||
          elementUnderCursor.tagName === "P" ||
          elementUnderCursor.tagName === "A" ||
          elementUnderCursor.tagName === "SPAN"
        ) {
          logo.classList.add("transparent");
        } else {
          logo.classList.remove("transparent");
        }
      }
    };

    const handleTouchStart = () => {
      isTouchDevice = true;
      logo.style.display = "none";
    };

    const handleMouseEnter = () => {
      if (!isTouchDevice) {
        logo.style.display = "block";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("touchstart", handleTouchStart, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
      <img
        src={Logo}
        alt="Logo Cursor"
        className="logo-cursor pointer-events-none fixed w-5 h-5"
      />
    </>
  );
}

export default App;
