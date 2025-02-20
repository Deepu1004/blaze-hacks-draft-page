import React from "react";
import image from '../public/hero.jpeg';
import "./css/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={image} />
      <p>Ignite Your Innovation</p>
      <p>36 Hours of Coding, Creating, and Collaborating</p>
      <p>Date: June 6th &7th</p>
      <p>Place: IARE Campus</p>
    </section>
  );
}

export default Hero;
