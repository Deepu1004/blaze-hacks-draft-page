import React from "react";
import { Flame } from "lucide-react";
import './css/Header.css';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Flame size={24} /> Blaze Hacks
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#tracks">Tracks</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#prizes">Prizes</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
