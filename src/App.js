import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Secret from './pages/secret/Secret';
import Main from './pages/Main';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DarkModeHandler from './components/DarkModeHandler';
import videoNight from './images/night.mp4';
import videoDay from './images/day.mp4';
import ibdb from './images/projects/ibdb.png';
import vektor from './images/projects/vektor.png';
import vektor2 from './images/projects/vektorpopup.png';
import ProjectComponent from './components/projectcomponent/ProjectComponent';

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
          <Route path="/projects/vektorprogrammet" element={<ProjectComponent img={vektor} img2={vektor2} name='Vektorprogrammet'
              description='I currently hold a position in the organization Vektorprogrammet. This is a voluntary student organization that sends assistants to schools to help with STEM subjects. I am part of the IT team and work as a developer. 
              This means that I dont go to schools to provide assistance directly, but I collaborate with the rest of the IT team a few times a week. Currently, our team is working on developing a new website using React with Typescript, and the 
              backend is built with PHP and SQL (More info in "Projects"-tab). Being a member of this IT team since spring 2023 has given me valuable experience in relevant team-based work over an extended period. Some of my recent work has been the new login popup for the website.
              Read more about the organization at vektorprogrammet.no. To see the github-code for the project, click the image.'/>} />
          <Route path="/projects/ibdb" element={<ProjectComponent img={ibdb} img2='' name='IBDb' 
              description=''/>} />
          <Route path="/projects/workoutjournal" element={<ProjectComponent name='WorkoutJournal' 
              description=''/>} />
          <Route path="/projects/clothingstorage" element={<ProjectComponent name='ClothingStorage' 
              description=''/>} />
          <Route path="/project/tictactoe" element={<ProjectComponent name='TicTacToe' 
              description=''/>} />
          <Route path="/projects/nim" element={<ProjectComponent name='Nim' 
              description=''/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeHandler>

  );
}

export default App;

