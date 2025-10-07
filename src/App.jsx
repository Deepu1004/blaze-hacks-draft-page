import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/About';
import TracksSection from './components/Tracks';
import ScheduleSection from './components/Schedule';
import Prizes from './components/Prizes';
import TeamSection from './components/Team';
import FaqSection from './components/Faq';
import ContactSection from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <TracksSection />
      <ScheduleSection />
      <Prizes />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  );
}

export default App;