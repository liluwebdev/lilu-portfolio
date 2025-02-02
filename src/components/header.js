import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [openSubMenus, setOpenSubMenus] = useState({}); // State for tracking open submenus

  const toggleSubMenu = (menu) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu], // Toggle the specific submenu
    }));
  };

  return (
    <header className="header">
      <div className="container">
        {/* Title */}
        <Link to="/" className="logo d-flex align-items-center">
          <img src="/lilu-logo-white-rect.png" alt="Lilu Portfolio Logo" className="logo-img" />
          <h1 className="sitename">Lilu Portfolio</h1>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger"
          onClick={() =>
            setOpenSubMenus((prev) => ({ ...prev, mainMenu: !prev.mainMenu }))
          }
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`nav-menu ${openSubMenus.mainMenu ? "open" : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setOpenSubMenus({})}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpenSubMenus({})}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setOpenSubMenus({})}>
                Portfolio
              </Link>
            </li>
            <li className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubMenu("education");
                }}
                aria-expanded={!!openSubMenus.education}
              >
                Education
              </button>
              {/* Sub-Dropdown */}
              <ul
                className={`sub-dropdown ${
                  openSubMenus.education ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/curricula" onClick={() => setOpenSubMenus({})}>
                    Curricula
                  </Link>
                </li>
                <li>
                  <Link to="/fieldwork" onClick={() => setOpenSubMenus({})}>
                    Fieldwork Summary
                  </Link>
                </li>
                <li>
                  <Link to="/arted" onClick={() => setOpenSubMenus({})}>
                    Value of Art Education
                  </Link>
                </li>
                <li>
                  <Link to="/classroom" onClick={() => setOpenSubMenus({})}>
                    Classroom Management
                  </Link>
                </li>
                <li>
                  <Link to="/techint" onClick={() => setOpenSubMenus({})}>
                    Technology Integration
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpenSubMenus({})}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
