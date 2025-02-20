import React from "react";
import "./css/Schedule.css";

function ScheduleSection() {
  

  return (
    <section id="schedule" className="schedule">
      
      <h2>Schedule</h2>
      <div className="schedule-grid">
        <div className="schedule-day">
          <h3>Saturday</h3>
          <p>9:00 AM - Check-in</p>
          <p>10:30 AM - Opening Ceremony</p>
          <p>11:00 AM - Hackathon begins</p>
          <p>1:30 PM - Lunch</p>
          <p>3:00 PM - Workshop 1</p>
          <p>8:00 PM - Mini event</p>
          <p>9:00 PM - Dinner</p>
          <p>12:00 AM - Midnight Snacks & Surprise</p>
        </div>
        <div className="schedule-day">
          <h3>Sunday</h3>
          <p>8:00 AM - Breakfast</p>
          <p>11:00 AM - Workshop 2</p>
          <p>1:30 PM - Lunch</p>
          <p>4:00 PM - Submissions Due</p>
          <p>5:00 PM - Hackathon ends</p>
          <p>6:30 PM - Closing Ceremony</p>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
