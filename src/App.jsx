import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Prizes from "./components/Prizes";
import Faq from "./components/Faq";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Prizes />
      <Faq />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
