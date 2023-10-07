import React, { useEffect } from 'react';
import './ProjectComponent.css';


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
        <div className="main-container">
            <div className='image-container'>
                <img className='info-image' alt='' src={props.img} />
                <img className='info-image' alt='' src={props.img2} />
            </div>
            <div className='text-container'>
                <div className='info-textbox'>
                    <h1 className='title'> {props.name} </h1>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className='links-box'>
                    <h1 className='title'> Lenker </h1>
                    <a href={props.githubURL} className='link'> Github Repo</a>
                    {props.link !== '' ?
                        <a href={props.link} className='link'> {props.name}</a> : null}
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;