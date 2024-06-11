import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { Features } from "./Pages/Features.js";

import { About } from "./Pages/About.js";
import { Home } from "./Pages/Home.js";
import { Products } from "./Pages/Products.js";
import { Contact } from "./Pages/Contact.js";
function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme);
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
