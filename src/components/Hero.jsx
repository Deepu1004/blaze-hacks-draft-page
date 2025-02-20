import React from "react";
import image from '../public/hero.jpeg';
import "./css/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={image} />
      <p>Ignite Your Innovation</p>
      <p>24 Hours of Coding, Creating, and Collaborating</p>
    </section>
  );
}

export default Hero;
