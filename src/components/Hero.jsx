import React from "react";
import image from '../public/hero.jpeg';
import "./css/Hero.css";
import { MapPin, Calendar } from "lucide-react"; 

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={image} />
      <p>Ignite Your Innovation</p>
      <p>36 Hours of Coding, Creating, and Collaborating</p>
      <div className="event-details">
        <p>
          <Calendar size={20} className="icon" /> June 6th & 7th, 2025
        </p>
        <p>
          <MapPin size={20} className="icon" /> IARE Campus, Hyderabad
        </p>
      </div>
    </section>
  );
}

export default Hero;
