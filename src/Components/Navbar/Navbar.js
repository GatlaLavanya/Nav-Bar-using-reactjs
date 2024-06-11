import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo_light from "../../Components/Assests/edu2.png";
import logo_dark from "../../Components/Assests/edu.jpg";
import search_icon_light from "../../Components/Assests/search-icon-dark.png";
import search_icon_dark from "../../Components/Assests/search-icon-light.png";
import toggle_icon_dark from "../../Components/Assests/Toggle-light.png";
import toggle_icon_light from "../../Components/Assests/Toggle-dark.png";
export const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="Navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="logo"
        className="logo"
      />

      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toggle_icon_light : toggle_icon_dark}
        alt=" "
        className="toggle-icon"
      />
    </div>
  );
};
export default Navbar;
