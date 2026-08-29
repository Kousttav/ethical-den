import React, { useState } from "react";
import logo from "/src/assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Tala Prattoy" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/service">Service</NavLink>
          </li>

          <li>
            <NavLink to="/">Album</NavLink>
          </li>

          <li>
            <NavLink to="/stories">Stories</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>

        <button className="contact-btn">Contact Us</button>

        {/* Mobile Hamburger */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <FaTimes
          className="close-icon"
          onClick={() => setMenuOpen(false)}
        />

        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/service"
          onClick={() => setMenuOpen(false)}
        >
          Service
        </NavLink>

        <NavLink
          to="/album"
          onClick={() => setMenuOpen(false)}
        >
          Album
        </NavLink>

        <NavLink
          to="/stories"
          onClick={() => setMenuOpen(false)}
        >
          Stories
        </NavLink>

        <NavLink
          to="/blog"
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </NavLink>

        <button>Contact Us</button>
      </div>
    </>
  );
};

export default Navbar;