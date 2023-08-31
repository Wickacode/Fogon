// Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import FogonLogo from "../assets/fogon-img/fogon.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <img src={FogonLogo} alt="" />
        <button
          className={`menu-button ${isMenuOpen ? "menu-icon-desktop" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul>
          <li>
          <Link to="/">Accueil</Link>
          </li>
          <li>
            <a href="#chef-description">Le chef</a>
          </li>
          <li>
            <Link to="/popUp">Pop-Up</Link>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <span className="contact-number">
            <i className="fa-solid fa-phone"></i>
            05 59 01 70 95
          </span>
        </ul>
      </nav>
    </div>
  );
}
