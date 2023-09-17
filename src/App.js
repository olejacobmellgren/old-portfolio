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
import videoNight from './images/black.mp4';
import videoDay from './images/white.mp4';
import ibdb from './images/projects/ibdb.png';
import ibdb2 from './images/projects/ibdb2.png';
import vektor from './images/projects/vektor.png';
import vektor2 from './images/projects/vektorpopup.png';
import workout2 from './images/projects/workout2.png';
import workout3 from './images/projects/workout3.png';
import clothingStorage from './images/projects/clothingStorage.png';
import clothingStorage2 from './images/projects/clothingStorage2.png';
import tictactoe from './images/projects/tictactoe.png';
import tictactoe2 from './images/projects/tictactoe2.png';
import nim from './images/projects/nim.png';
import nim2 from './images/projects/nim2.png';
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
          <Route path="/projects/vektorprogrammet" element={<ProjectComponent img={vektor} img2={vektor2} name='Vektorprogrammet' link='https://vektorprogrammet.no/' githubURL='https://github.com/vektorprogrammet'
              description='I currently hold a position in the organization Vektorprogrammet. This is a voluntary student organization that sends assistants to schools to help with STEM subjects. I am part of the IT team and work as a developer. 
              This means that I dont go to schools to provide assistance directly, but I collaborate with the rest of the IT team a few times a week. 
              
              Currently, our team is working on developing a new website using React with Typescript, and the 
              backend is built with PHP and SQL (More info in "Projects"-tab). Being a member of this IT team since spring 2023 has given me valuable experience in relevant team-based work over an extended period. Some of my recent work has been the new login popup for the website.
              If you want to read more about the organization or see the github-code for the project, links are to the right.'/>} />
          <Route path="/projects/ibdb" element={<ProjectComponent img={ibdb} img2={ibdb2} name='IBDb' link='https://ibdb-743f5.firebaseapp.com/' githubURL='https://github.com/olejacobmellgren/IBDb'
              description='IBDb - Internet Book Database, is a website inspired by IMDb. On this site, you can search for books, authors, and read about each individual book. You can create a user account and provide ratings for the books you have read, in order to help others decide which book they want to read.
              This project was a part of a subject I had in my 2nd year. We were a group of six students working together on a frontend using React and backend using firebase.'
              />} />
          <Route path="/projects/workoutjournal" element={<ProjectComponent name='WorkoutJournal' img={workout2} img2={workout3} link='' githubURL='https://github.com/olejacobmellgren/workoutJournal'
              description='WorkoutJournal is an application that I created in Java and JavaFX. The app can be used to log workouts, mood and sleep, and see the statistics for the workouts.The project was developed in relation to the Object-Oriented Programming course (TDT4100) at NTNU.'/>} />
          <Route path="/projects/clothingstorage" element={<ProjectComponent name='ClothingStorage' img={clothingStorage} img2={clothingStorage2} link='' githubURL='https://github.com/olejacobmellgren/clothingStorage'
              description='Clothing Storage is an application for clothing storage written in Java. The project was created by group 2251 in the IT1901 course at NTNU. The ClothingStorage app aims to assist clothing store owners and employees in managing their inventories. Users can get an 
              overview of the clothes in their inventory, add or remove clothes, change prices, apply discounts to clothes and brands, as well as the ability to filter based on clothing type, brand, price, and discounts. The app also has a dedicated statistics page that displays inventory statistics.'/>} />
          <Route path="/projects/tictactoe" element={<ProjectComponent name='TicTacToe' img={tictactoe} img2={tictactoe2} link='' githubURL='https://github.com/olejacobmellgren/tictactoe'
              description='TicTacToe is a game that I have made using Java and JavaFX. The project was created on my own initiative and is not a part of my education at NTNU. In this version of TicTacToe you can play either two player on the same device or one player against a computer.'/>} />
          <Route path="/projects/nim" element={<ProjectComponent name='Nim' img={nim} img2={nim2} link='' githubURL='https://github.com/olejacobmellgren/nim'
              description='Nim is a game that I have made using Java and JavaFX. The project was created on my own initiative and is not a part of my education at NTNU. Nim is a game for two players. The game consists of four rows with different numbers of matches (1, 3, 5, 7). Players take turns drawing a desired number of matches from one row at a time, and the player who has to draw the last match loses.'/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeHandler>

  );
}

export default App;

