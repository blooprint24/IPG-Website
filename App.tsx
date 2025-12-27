
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import About from './components/About';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll reveal simulation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-lime-400 selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Features />
        <SocialProof />
        <Pricing />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
