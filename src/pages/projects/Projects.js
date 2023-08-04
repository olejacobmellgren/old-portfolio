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
                <div className='top-container hidden'>
                    <div className='top'>
                        <img className='image top-image' alt='' src={vektor} />
                        <p className='tooltip'>Vektorprogrammet</p>
                    </div>
                    <div className='top'>
                        <img className='image top-image' alt='' src={ibdb} />
                        <p className='tooltip'>IBDb</p>
                    </div>
                </div>
                <div className='bottom-container'>
                    <div className='bottom hidden'>
                        <div className='bottom-left'>
                            <p className='tooltip'>Workout Journal</p>
                            <img className='image bottom-left-image' alt='' src={workout} />
                        </div>
                        <div className='bottom-left'>
                            <p className='tooltip'>Clothing Storage</p>
                            <img className='image bottom-left-image' alt='' src={clothingStorage} />
                        </div>
                    </div>
                    <div className='hidden'>
                        <div className='bottom-right'>
                            <p className='tooltip'>TicTacToe</p>
                            <img className='image bottom-rigth-image' alt='' src={tictactoe} />
                        </div>
                        <div className='bottom-right'>
                            <p className='tooltip'>Nim</p>
                            <img className='image bottom-rigth-image' alt='' src={nim} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
