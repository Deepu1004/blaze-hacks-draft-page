import React from "react";
import "./css/About.css";
import fire from '../public/fire.jpeg';
function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img
          src={fire}
          alt="About Section Image"
        />
      </div>
      <div className="about-content">
        <h2>About</h2>
        <p>
          BlazeHacks, Hyderabad’s 36-hour summer hackathon in collaboration with
          Major League Hacking, invites students of all skill levels to
          innovate, build, and solve real-world challenges at the Institute of
          Aeronautical Engineering (IARE). Designed to foster hands-on learning
          and collaboration, BlazeHacks provides mentorship, networking, and a
          space to push creative boundaries while developing impactful projects.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
