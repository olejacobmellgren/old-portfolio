import React, { useEffect } from 'react';
import '../Main.css';
import './Contact.css';

const Contact = () => {

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
            <div className='textbox contact hidden'>
                <h1 className='title'> Contact me :)</h1>
                <textarea placeholder='Hi Ole Jacob,' type='text-field'/>
                <button className='send-button'>Send email</button>
            </div>
        </div>
    );
};

export default Contact;
