import React, { useState } from "react";
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
function NavBar() {
  const [isNavShort, setIsNavShort] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsNavShort(() => false)}
        >
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShort ? "show_nav" : "hide_nav"}`}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShort((isNavShort) => !isNavShort)}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toogle-btn"
          onClick={() => setIsNavShort((isNavShort) => !isNavShort)}
        >
          {isNavShort ? <IoMdCloseCircleOutline /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
