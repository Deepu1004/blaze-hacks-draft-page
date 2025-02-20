import React, { useState } from "react";
import "./css/FAQ.css";

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "When and where will Blaze Hacks 2025 take place?",
      answer:
        "Blaze Hacks 2025 will be held on June 6th & 7th, 2025 at the Institute of Aeronautical Engineering (IARE).",
    },
    {
      question:
        "How can I stay updated about Blaze Hacks and receive event-related information?",
      answer:
        "Stay connected with us by following our Instagram @blazehacks_iare. We'll keep you informed about the latest news and announcements.",
    },
    {
      question: "Will food & stay be provided?",
      answer:
        "We've got lots of food and snacks for everyone, stay hacky and hydrated. Two large rooms for resting/sleeping will be arranged at the Campus (separately for men and women).",
    },
    {
      question: "Who can Participate?",
      answer:
        "We welcome undergraduates and graduate students of all majors, backgrounds, and skill levels to come create. Unfortunately, if you are under 18, you will not be able to attend.",
    },
    {
      question: "Is there any Registration fee?",
      answer: "Blaze Hacks is absolutely free for everyone to attend.",
    },
    {
      question: "What are the team requirements?",
      answer:
        "Participate individually or in a team of up to 4 people. Your team members can be from other colleges too. If you are looking for a team, build one in the team-building channel on Discord.",
    },
    {
      question: "Will Travel expenses be covered by the Hackathon Organizers?",
      answer:
        "Unfortunately, Travel expenses will not be covered by the organizers. Kindly understand, as Blaze Hacks is a free event, we have limited monetary resources.",
    },
    {
      question: "I have more questions",
      answer:
        "You can email us at blazehacks.team@gmail.com or reach out on Instagram: @blazehacks_iare.",
    },
  ];
  const toggleAccordion = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null); 
    } else {
      setActiveFaq(index); 
    }
  };

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeFaq === index ? "active" : ""}`}
        >
          <div
            className="faq-question-wrapper"
            onClick={() => toggleAccordion(index)}
          >
            {" "}

            <div className="faq-question">{faq.question}</div>
          </div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </section>
  );
}

export default FaqSection;
