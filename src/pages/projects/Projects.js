import React, { useEffect } from 'react';
import './Projects.css';
import vektor from './images/vektor.png';
import vektorpopup from './images/vektorpopup.png';
import ibdb from './images/ibdb.png';
import workout from './images/workout.png';
import workout2 from './images/workout2.png';
import workout3 from './images/workout3.png';
import clothingStorage from './images/clothingStorage.png';
import clothingStorage2 from './images/clothingStorage2.png';
import nim from './images/nim.png';
import tictactoe from './images/tictactoe.png';
import tictactoe2 from './images/tictactoe2.png';


const Projects = () => {

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
                <div className='top hidden'>
                    <img className='top-image' alt='' src={vektor} />
                    <img className='top-image' alt='' src={ibdb} />
                </div>
                <div className='bottom-container'>
                    <div className='bottom hidden'>
                        <img className='bottom-left-image' alt='' src={workout} />
                        <img className='bottom-left-image' alt='' src={clothingStorage} />
                    </div>
                    <div className='hidden'>
                        <img className='bottom-rigth-image' alt='' src={tictactoe} />
                        <img className='bottom-rigth-image' alt='' src={nim} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
