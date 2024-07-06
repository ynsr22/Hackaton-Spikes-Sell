import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import HeroSection from './components/HeroSection';
import Carrousel from './components/Carrousel';
import Feature from './components/Feature';
import Trial from './components/FreeTrial';
import LastEmail from './components/LastEmail';
import Footer from './components/Footer';
import Background from './components/sub-components/Background';

const App: React.FC = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Intro />
      <HeroSection />
      <Carrousel />
      <Feature />
      <Trial />
      <LastEmail />
      <Footer />
    </div>
  );
};

export default App;
