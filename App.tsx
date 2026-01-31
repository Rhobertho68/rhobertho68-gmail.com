import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySection } from './components/PropertySection';
import { Testimonials } from './components/Testimonials';
import { MapSection } from './components/MapSection';
import { AIChat } from './components/AIChat';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services / Categories banner could go here, integrated into Properties for brevity */}
        
        <PropertySection />
        
        <Testimonials />
        
        <MapSection />
      </main>

      <Footer />

      <AIChat />
    </div>
  );
};

export default App;