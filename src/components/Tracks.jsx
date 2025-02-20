import React, { useState, useEffect } from "react";
import "./css/Tracks.css";

function TracksSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const eventDate = new Date("February 22, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tracks" className="tracks">
      <h2>Tracks</h2>
      <div className="tracks-grid">
        <div className="track-card">
          <h3>Health & Wellness</h3>
          <p>
            Unlock the potential for transformation in health and wellness
            within society, as we aim to innovate and enhance in one concerted
            effort.
          </p>
        </div>
        <div className="track-card">
          <h3>Social Good</h3>
          <p>
            Dedicated to the greater good, creating a positive impact on society
            while addressing pressing social issues.
          </p>
        </div>
        <div className="track-card">
          <h3>Web 3.0</h3>
          <p>
            Web 3.0 is the new digital realm. The decentralized,
            inter-connected, user-centric, and secure evolution of the internet.
          </p>
        </div>
        <div className="track-card">
          <h3>Security</h3>
          <p>
            Create innovative solutions with a focus on security, implementing
            robust measures on safeguarding digital systems, networks, or user
            data.
          </p>
        </div>
        <div className="track-card">
          <h3>Gamify</h3>
          <p>
            Elevate project development by incorporating game-like experiences
            to engage users, foster a sense of achievement, and create an
            immersive experience.
          </p>
        </div>
        <div className="track-card">
          <h3>Open Innovation</h3>
          <p>
            We embrace the idea that innovation can originate from anywhere and
            actively tap into diverse minds for great ideas.
          </p>
        </div>
      </div>

      <div className="countdown">
        <h3>Hackathon Begins In</h3>
        <p>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
      </div>
    </section>
  );
}

export default TracksSection;
