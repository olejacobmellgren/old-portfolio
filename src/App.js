import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <Header />
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

