import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Secret from './pages/secret/Secret';
import Main from './pages/main/Main';
import DarkModeHandler from './components/DarkModeHandler';

function App() {
  return (
    <DarkModeHandler>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </Router>
    </DarkModeHandler>

  );
}

export default App;

