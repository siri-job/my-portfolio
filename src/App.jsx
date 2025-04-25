import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Home from './pages/Home';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* This ensures the Footer stays at the bottom */}
      {/* Navbar - This will be visible on all pages */}
      <Navbar />
      
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection />} />
      </Routes>

      {/* Footer - This will be visible on all pages */}
      <Footer />
    </div>
  );
}

export default App;




