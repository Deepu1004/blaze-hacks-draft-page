import React from "react";
import "./css/Hero.css";
import image from "../public/hero.jpeg";
import { MapPin, Calendar } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={image} alt="Hero" className="hero-image" />
        <h1 className="main-title">Ignite Your Innovation</h1>
        <p className="hero-subtitle">
          36 Hours of Coding, Creating, and Collaborating
        </p>

        <div className="event-details">
          <div className="detail-item">
            <Calendar size={20} className="detail-icon" />
            <p>June 7th & 8th, 2025</p>
          </div>
          <div className="detail-item">
            <MapPin size={20} className="detail-icon" />
            <p>IARE Campus, Hyderabad</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
