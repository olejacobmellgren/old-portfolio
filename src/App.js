import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Secret from './pages/secret/Secret';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DarkModeHandler from './components/DarkModeHandler';
import videoBlack from './images/black.mp4';
import videoWhite from './images/white.mp4';
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


function App() {

  return (
    <DarkModeHandler>
      <video className='black' src={videoBlack} autoPlay loop muted plays-inline="true"></video>
      <video className='white' src={videoWhite} autoPlay loop muted plays-inline="true"></video>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WrappedMain />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/vektorprogrammet" element={<ProjectComponent img={vektor} img2={vektor2} name='Vektorprogrammet' link='https://vektorprogrammet.no/' githubURL='https://github.com/vektorprogrammet'
              description='For tiden har jeg et verv i organisasjonen Vektorprogrammet. Dette er en frivillig studentorganisasjon som sender ut assistenter 
              til skoler for å hjelpe med realfag. Jeg er en del av IT-teamet og har 
              en stilling som utvikler. Det vil si at jeg ikke drar ut til skoler for 
              å hjelpe, men arbeider med resten av IT-teamet et par ganger i uka. 
              Nåværende arbeid er utvikling av en ny nettside som skal lages i React med 
              typescript og en backend som bruker PHP og SQL. I dette IT-teamet, som jeg 
              har vært med i siden våren 2023, har jeg fått mye erfaring med relevant arbeid i team over en lengre periode. Noen av mine nylige arbeider har vært den nye påloggingspopupen for nettsiden.

              Hvis du ønsker å lese mer om organisasjonen eller se GitHub-koden for prosjektet, se lenker.'/>} />
          <Route path="/projects/ibdb" element={<ProjectComponent img={ibdb} img2={ibdb2} name='IBDb' link='https://ibdb-743f5.firebaseapp.com/' githubURL='https://github.com/olejacobmellgren/IBDb'
              description='IBDb - Internet Book Database, er en nettside inspirert av IMDb. På dette nettstedet kan du søke etter bøker, forfattere og lese om hver enkelt bok. Du kan opprette en brukerkonto og gi vurderinger for bøkene du har lest, for å hjelpe andre med å bestemme hvilken bok de ønsker å lese.
              Dette prosjektet var en del av et fag jeg hadde i mitt andre år. Vi var en gruppe på seks studenter som samarbeidet om å utvikle en frontend med React og en backend med Firebase.'
              />} />
          <Route path="/projects/workoutjournal" element={<ProjectComponent name='WorkoutJournal' img={workout2} img2={workout3} link='' githubURL='https://github.com/olejacobmellgren/workoutJournal'
              description='WorkoutJournal er en applikasjon som jeg opprettet i Java og JavaFX. Appen kan brukes til å logge treningsøkter, humør og søvn, samt se statistikken for treningsøktene. Prosjektet ble utviklet i forbindelse med kurset i objektorientert programmering (TDT4100) ved NTNU.'/>} />
          <Route path="/projects/clothingstorage" element={<ProjectComponent name='ClothingStorage' img={clothingStorage} img2={clothingStorage2} link='' githubURL='https://github.com/olejacobmellgren/clothingStorage'
              description='Clothing Storage er en applikasjon for klær og lagerbeholdning skrevet i Java. Prosjektet ble laget i forbindelse med IT1901-kurset ved NTNU. Målet med ClothingStorage-appen er å hjelpe eiere av klesbutikker og ansatte med å administrere inventaret sitt. Brukere kan få en oversikt over klærne i lageret sitt, legge til eller fjerne klær, endre priser, anvende rabatter på klær og merker, samt filtrere basert på klesstype, merke, pris og rabatter. Appen har også en dedikert statistikkside som viser lagerstatistikk.'/>} />
          <Route path="/projects/tictactoe" element={<ProjectComponent name='TicTacToe' img={tictactoe} img2={tictactoe2} link='' githubURL='https://github.com/olejacobmellgren/tictactoe'
              description='TicTacToe er et spill jeg har laget ved hjelp av Java og JavaFX. Prosjektet ble opprettet på eget initiativ og er ikke en del av studiene mine ved NTNU. I denne versjonen av TicTacToe kan du enten spille to spillere på samme enhet eller en spiller mot datamaskinen.'/>} />
          <Route path="/projects/nim" element={<ProjectComponent name='Nim' img={nim} img2={nim2} link='' githubURL='https://github.com/olejacobmellgren/nim'
              description='Nim er et spill jeg har laget ved hjelp av Java og JavaFX. Prosjektet ble opprettet på eget initiativ og er ikke en del av studiene mine ved NTNU. Nim er et spill for to spillere. Spillet består av fire rader med ulikt antall fyrstikker (1, 3, 5, 7). Spillerne tar tur til å trekke et ønsket antall fyrstikker fra én rad om gangen, og spilleren som må trekke den siste fyrstikken taper.'/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeHandler>

  );
}

export default App;

