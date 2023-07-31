import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Secret from './pages/secret/Secret';
import Main from './pages/Main';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import DarkModeHandler from './components/DarkModeHandler';
import videoNight from './images/night.mp4'
import videoDay from './images/day.mp4'

function App() {

  return (
    <DarkModeHandler>
      <video className='night' src={videoNight} autoPlay loop muted plays-inline></video>
      <video className='day' src={videoDay} autoPlay loop muted plays-inline></video>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </Router>
    </DarkModeHandler>

  );
}

export default App;

