import React, { useEffect } from 'react';
import './ProjectComponent.css';
// import vektor from '../../pages/projects/images/vektor.png';
// import vektorpopup from '../../pages/projects/images/vektorpopup.png';
// import ibdb from '../../pages/projects/images/ibdb.png';
// import workout from '../../pages/projects/images/workout.png';
// import workout2 from '../../pages/projects/images/workout2.png';
// import workout3 from '../../pages/projects/images/workout3.png';
// import clothingStorage from '../../pages/projects/images/clothingStorage.png';
// import clothingStorage2 from '../../pages/projects/images/clothingStorage2.png';
// import nim from '../../pages/projects/images/nim.png';
// import tictactoe from '../../pages/projects/images/tictactoe.png';
// import tictactoe2 from '../../pages/projects/images/tictactoe2.png';


const ProjectComponent = (props) => {

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
            <div className='top'>
                <div className='container'>
                    <img className='info-image' alt='' src={props.img} />
                    <img className='info-image' alt='' src={props.img2} />
                </div>
                <div className='container'>
                    <div className='info-textbox'>
                        <h1 className='title'> {props.name} </h1>
                        <p>
                            {props.description}
                        </p>
                    </div>
                    <div className='links-box'>
                        <h1 className='title'> Links </h1>
                        <a href={props.githubURL} className='link'> Github Repo</a>
                        {props.link !== '' ?
                        <a href={props.link} className='link'> {props.name}</a> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;