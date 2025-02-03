import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import '../styles/_menu.scss';
import logo from "../assets/lilu-logo-white-rect.png";

const NavMenu = () => {
   // const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      document.body.classList.toggle("mobile-nav-active", !menuOpen);
    };

   // const toggleDropdown = (e) => {
    //    e.preventDefault();
      //  setDropdownOpen(!dropdownOpen);
     // };
  
    return (
        <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container position-relative d-flex align-items-center justify-content-between">
          
          {/*  Logo Section */}
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
  
  
          {/* Navigation Menu */}
          <nav id="navmenu" className={`navmenu ${menuOpen ? "mobile-nav-active" : ""}`}>
            <ul>
              <li><NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>About</NavLink></li>
              <li><NavLink to="/portfolio/development" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Development</NavLink></li>
              <li><NavLink to="/portfolio/design" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Art & Design</NavLink></li>
              <li><NavLink to="/curricula" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Curricula</NavLink></li>
              <li><NavLink to="/education" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Education</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Contact</NavLink></li>
              

              {/* Dropdown Menu *
              <li className={`dropdown ${dropdownOpen ? "dropdown-active" : ""}`}>
              <a href="#test" onClick={toggleDropdown}>
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={dropdownOpen ? "show" : ""}>
                <li><a href="#test">Dropdown 1</a></li>
                <li><a href="#test">Dropdown 2</a></li>
                <li><a href="#test">Dropdown 3</a></li>
                <li><a href="#test">Dropdown 4</a></li>
              </ul>
            </li> */}
          </ul>
          </nav>
             {/* Mobile Menu Toggle Button (Moved Outside <nav>) */}
             <button className="mobile-nav-toggle d-xl-none" onClick={toggleMenu}>
            <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </header>
    );
  };
  
  export default NavMenu;
