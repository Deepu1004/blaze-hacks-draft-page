import React from "react";
import { Users } from "lucide-react";
import "./css/Team.css";

function TeamSection() {
  const teamMembers = [
    {
      name: "Karthik V",
      role: "Organiser",
      gifUrl: "https://i.gifer.com/PGGt.gif",
    },
    {
      name: "Richard Abhisai",
      role: "Co-Organizer",
      gifUrl: "https://i.gifer.com/S9Ih.gif",
    },
    {
      name: "Shiva Mani",
      role: "Tech Head",
      gifUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXJtZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZg/qgQUggAC3Pfv687qPC/giphy.gif",
    },
    {
      name: "Sarika",
      role: "Marketing Head",
      gifUrl: "https://i.gifer.com/JXA0.gif",
    },
    {
      name: "Rex Ryan",
      role: "Design Head",
      gifUrl:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlqcWc2amZvN25kemc4cnRxN3kzbXE1NmdjNWF3OWczYmF4MzdqeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBFJTbwJBu5DAqc/giphy.gif",
    },
    {
      name: "Teja",
      role: "Logistics Head",
      gifUrl: "https://i.gifer.com/4q43.gif",
    },
    {
      name: "Govind",
      role: "Event Management Head",
      gifUrl:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZqbTJlemo0NTZma29qOW1pZXY5b2tkYTh1b3drZnI2Z3NyajlmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kc1tJDZ3Q4d2pfalIG/giphy.gif",
    },
    {
      name: "CR/PR Head",
      role: "CR/PR Head",
      gifUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXJtZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZg/RbDKaczqWovIugyJmW/giphy.gif",
    },
  ];

  return (
    <section id="team" className="team">
      <div className="team-header">
        <Users className="team-icon" />
        <h2>Meet Our Team</h2>
        <div className="divider"></div>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-container">
              <img
                src={member.gifUrl}
                alt={member.name}
                onError={(e) => {
                  const target = e.target;
                  target.src =
                    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXJtZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZg/3oKIPf1BaBDILVxbYA/giphy.gif";
                }}
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
