import React, { useEffect } from 'react';
import './Main.css';
import me from '../images/about/me.jpeg';
import blackAi from '../images/about/black-ai.avif';
import whiteAi from '../images/about/white-ai.jpeg';
import IT from '../images/about/IT_V23.jpg';
import arrow from '../images/about/arrow.png';
import python from '../images/about/python.webp';
import java from '../images/about/java.jpeg';
import javascript from '../images/about/javascript.png';
import sql from '../images/about/sql.webp';
import sevenaside from '../images/about/sevenaside.png';


const Main = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
  }, []);

  return (
    <div className="main">
      <div >
        <section className='container hidden'>
          <img className='image me' alt='' src={me} />
          <div className='textbox'>
            <h1 className='title'> About me </h1>
            <p>
              Hi my name is Ole Jacob. I'm a dedicated and ambitious student
              currently pursuing a 5-year master's program in Computer Science
              at NTNU in Trondheim. Currently in my third year, I have found
              a true passion for the world of technology and is enthusiastic
              about my chosen path as a developer in the IT sector.
            </p>
          </div>
        </section>
        <section className='ai-container hidden'>
            <img className='image black-ai' alt='' src={blackAi} />
            <img className='image white-ai' alt='' src={whiteAi} />
            <div className='textbox'>
              <h1 className='title'> Specializing in Artificial Intelligence </h1>
              <p>
                With a keen interest in the intersection of technology and artificial
                intelligence, I have chosen to specialize in the field of AI.
                I'm fascinated by the possibilities that AI offers and its potential to
                transform various industries, and I hope to contribute to cutting-edge innovations in this domain.
              </p>
            </div>
        </section>
        <div className='container'>
          <section className='textbox courses-textbox hidden'>
            <h1 className='title'> Courses & Projects </h1>
            <p>
              I attended Rosenvilde High School, where I took programming
              (Python) as an elective course. This sparked my interest in programming
              and other aspects related to computers, leading me to choose computer
              science as my field of study.
              <br></br><br></br>
              So far, during my studies, I have covered
              several subjects that I find relevant to the professional world. These
              include "Introduction to Computer Science" (Python), "Object-Oriented Programming"
              (Java), "Computer Science Project" (Java), "Software Development" (javascript/typescript),
              and "Data Modeling and Database Systems." In several of these courses, I/we have developed
              projects. Information about these projects can be found in the "Projects"-tab.
            </p>
          </section>
          <div className='icon-container hidden'>
            <div className='container'>
              <img className='icon' alt='' src={python} />
              <img className='icon' alt='' src={java} />
            </div>
            <div className='container'>
              <img className='icon' alt='' src={javascript} />
              <img className='icon' alt='' src={sql} />
            </div>
          </div>
        </div>
        <section className='vektor-container hidden'>
          <img className='image it-vektor' alt='' src={IT} />
          <img className='arrow' alt='' src={arrow} />
          <div className='textbox vektor-textbox'>
            <h1 className='title'> Current work </h1>
            <p>
              I currently hold a position in the organization Vektorprogrammet. This is a voluntary
              student organization that sends assistants to schools to help with mathematics.
              I am part of the IT team and work as a developer. This means that I don't go to schools
              to provide assistance directly, but I collaborate with the rest of the IT team a few times
              a week.
              <br></br><br></br>
              Currently, our team is working on developing a new website using React with Typescript,
              and the backend is built with PHP and SQL (More info in "Projects"-tab). Being a member of this IT team since spring 2023
              has given me valuable experience in relevant team-based work over an extended period.
            </p>
          </div>
        </section>
        <div className='sparetime-container hidden'>
          <section className='textbox sparetime-text'>
            <h1 className='title'> When I'm not writing code... </h1>
            <p>
              When I'm not coding, I enjoy playing football and working out at the gym.
              NTNU has a student football league where teams from various study programs
              compete. Within the Datateknologi program, there's a team called "Datakameratene,"
              which participates in both 11-a-side and 7-a-side matches. Here's a picture of
              me with the 7-a-side team at the end of the previous season.
            </p>
          </section>
          <img className='image sevenaside' alt='' src={sevenaside} />
        </div>
      </div>
    </div>
  );
};

export default Main;
