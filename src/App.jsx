import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Packages from './components/Packages.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
