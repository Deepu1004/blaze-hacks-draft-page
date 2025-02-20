import React from "react";
import { Mail, Instagram, FileSpreadsheet } from "lucide-react";
import "./css/Contact.css";

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-links">
        <a href="mailto:blazehacks.team@gmail.com" className="contact-link">
          <Mail size={20} /> blazehacks.team@gmail.com
        </a>
        <a
          href="https://www.instagram.com/blazehacks_iare"
          className="contact-link"
        >
          <Instagram size={20} /> @blazehacks_iare
        </a>
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="contact-link"
        >
          <FileSpreadsheet size={20} /> MLH Code of Conduct
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
