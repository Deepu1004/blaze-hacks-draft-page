import React, { useState, useEffect } from "react";
import { Flame, Menu, X } from "lucide-react";
import "./css/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Flame size={24} /> Blaze Hacks
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#tracks" onClick={() => setMenuOpen(false)}>
              Tracks
            </a>
          </li>
          <li>
            <a href="#schedule" onClick={() => setMenuOpen(false)}>
              Schedule
            </a>
          </li>
          <li>
            <a href="#prizes" onClick={() => setMenuOpen(false)}>
              Prizes
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
