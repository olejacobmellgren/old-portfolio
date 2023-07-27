import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route for About Page */}
        <Route path="/about" element={<About />} />

        {/* Route for Projects Page */}
        <Route path="/projects" element={<Projects />} />

        {/* Route for Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

