import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";
import { Route, Routes, route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
