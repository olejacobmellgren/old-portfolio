import React, { useEffect } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import vektor from '../../images/projects/vektor.png';
import ibdb from '../../images/projects/ibdb.png';
import workout from '../../images/projects/workout.png';
import clothingStorage from '../../images/projects/clothingStorage.png';
import nim from '../../images/projects/nim.png';
import tictactoe from '../../images/projects/tictactoe.png';


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
            <div className='image-container hidden'>
                <div className='tooltip-container'>
                    <p className='tooltip'>Vektorprogrammet</p>
                    <Link to='/projects/vektorprogrammet'><img className='project-image rectangle-image' alt='' src={vektor} /></Link>
                </div>
                <div className='tooltip-container'>
                    <p className='tooltip'>IBDb</p>
                    <Link to='/projects/ibdb'><img className='project-image rectangle-image' alt='' src={ibdb} /></Link>
                </div>
            </div>
            <div className='image-container'>
                <div className='image-container hidden'>
                    <div className='tooltip-container'>
                        <p className='tooltip'>Workout Journal</p>
                        <Link to='/projects/workoutjournal'><img className='project-image portrait-image' alt='' src={workout} /></Link>
                    </div>
                    <div className='tooltip-container'>
                        <p className='tooltip'>Clothing Storage</p>
                        <Link to='/projects/clothingstorage'><img className='project-image portrait-image' alt='' src={clothingStorage} /></Link>
                    </div>
                </div>
                <div className='hidden'>
                    <div className='tooltip-container'>
                        <p className='tooltip'>TicTacToe</p>
                        <Link to='/projects/tictactoe'><img className='project-image square-image' alt='' src={tictactoe} /></Link>
                    </div>
                    <div className='tooltip-container'>
                        <p className='tooltip'>Nim</p>
                        <Link to='/projects/nim'><img className='project-image square-image' alt='' src={nim} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
