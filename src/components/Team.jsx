import React from "react";
import "./css/Team.css";
import male from "../public/male.png.jpg";
import female from "../public/female.png.jpg";

function TeamSection() {
  const teamMembers = [
    {
      name: "Karthik V",
      role: "Organiser",
      image: male,
    },
    {
      name: "Richard Abhisai",
      role: "Co-Oraganizer",
      image: male,
    },
    {
      name: "Shiva Mani",
      role: "Tech Head",
      image: male,
    },
    {
      name: "Sarika",
      role: "Marketing Head",
      image: female,
    },
    {
      name: "Rex Ryan",
      role: "Design Head",
      image: male,
    },
    {
      name: "Teja",
      role: "Logistics Head",
      image: male,
    },
    {
      name: "Govind",
      role: "Event Management Head",
      image: male,
    },
    {
      name: "CR/PR Head",
      role: "CR/PR Head",
      image: male,
    },
  ];

  return (
    <section id="team" className="team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-container">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
