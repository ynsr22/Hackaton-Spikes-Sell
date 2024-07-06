import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
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
      <Banner />
      <HeroSection />
      <Dashboard />
      <Feature />
      <Trial />
      <LastEmail />
      <Footer />
    </div>
  );
};

export default App;
