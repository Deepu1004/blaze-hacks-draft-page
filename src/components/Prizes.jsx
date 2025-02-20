import React, { useState, useEffect } from "react";
import mlh from "../public/mlh-logo-color.png";
import tbh from "../public/tbh-logo.png";
import "./css/Prizes.css";
import "./css/Sponsors.css";

function Prizes() {
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
    <>
      {/* Prizes Section */}
      <section id="prizes" className="prizes">
        <h2>Prizes</h2>
        <h3>$5,000 in Total Prizes</h3>
        <p>First Place: $2,500</p>
        <p>Second Place: $1,500</p>
        <p>Third Place: $1,000</p>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="sponsors">
        <h2>Sponsors</h2>
        <div className="image-grid">
          <img src={mlh} alt="MLH Logo" />
          <img src={tbh} alt="TBH Logo" />
        </div>

        <h3>Swag Sponsors</h3>
        <div className="image-grid">
          <img src={tbh} alt="TBH Logo" />
        </div>

        <h3>Category Sponsors </h3>
        <h4>Brought to you by</h4>
        <div className="image-grid">
          <img src={mlh} alt="MLH Logo" />
        </div>
      </section>
    </>
  );
}

export default Prizes;
