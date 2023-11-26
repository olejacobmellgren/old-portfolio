import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Secret from './pages/secret/Secret';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DarkModeHandler from './components/DarkModeHandler';
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
import WrappedMain from './pages/Main';
import description from './assets/description.json';


function App() {

  return (
    <DarkModeHandler>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WrappedMain />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/vektorprogrammet" element={<ProjectComponent img={vektor} img2={vektor2} name='Vektorprogrammet' link='https://vektorprogrammet.no/' githubURL='https://github.com/vektorprogrammet'
              description={description.vektor}/>} />
          <Route path="/projects/ibdb" element={<ProjectComponent img={ibdb} img2={ibdb2} name='IBDb' link='https://ibdb-743f5.firebaseapp.com/' githubURL='https://github.com/olejacobmellgren/IBDb'
              description={description.ibdb}
              />} />
          <Route path="/projects/workoutjournal" element={<ProjectComponent name='WorkoutJournal' img={workout2} img2={workout3} link='' githubURL='https://github.com/olejacobmellgren/workoutJournal'
              description={description.workoutJournal}/>} />
          <Route path="/projects/clothingstorage" element={<ProjectComponent name='ClothingStorage' img={clothingStorage} img2={clothingStorage2} link='' githubURL='https://github.com/olejacobmellgren/clothingStorage'
              description={description.clothingStorage}/>} />
          <Route path="/projects/tictactoe" element={<ProjectComponent name='TicTacToe' img={tictactoe} img2={tictactoe2} link='' githubURL='https://github.com/olejacobmellgren/tictactoe'
              description={description.tictactoe}/>} />
          <Route path="/projects/nim" element={<ProjectComponent name='Nim' img={nim} img2={nim2} link='' githubURL='https://github.com/olejacobmellgren/nim'
              description={description.nim}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeHandler>

  );
}

export default App;

