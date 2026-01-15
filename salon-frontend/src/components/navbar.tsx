import React, { useState } from "react";
import "./componentstyles.css";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: string;
  navItems: NavItem[];
};

function Navbar({ brand, navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">{brand}</div>

        {/* Hamburger (Mobile) */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="navbar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
