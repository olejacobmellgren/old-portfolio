import React, { useEffect } from 'react';
import '../Main.css';
import './Contact.css';
import facebook from '../../images/contact-images/facebook.png';
import linkedin from '../../images/contact-images/linkedin.png';
import gmail from '../../images/contact-images/gmail.png';

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
        <div className="contact-main">
            <div className="hidden all-icons">
                <div className="icon-box">
                    <a href="https://www.linkedin.com/in/ole-jacob-mellgren-9b417127a/" target="_blank"><img className="contact-icon" src={linkedin}/></a>
                    <p className="icon-tooltip">LinkedIn</p>
                </div>
                <div className="icon-box">
                    <a href="mailto:olejacobmellgren@gmail.com" target="_blank"><img className="contact-icon" src={gmail}/></a>
                    <p className="icon-tooltip">Gmail</p>
                </div>
                <div className="icon-box">
                    <a href="https://www.facebook.com/olejacob.mellgren/" target="_blank"><img className="contact-icon" src={facebook}/></a>
                    <p className="icon-tooltip">FaceBook</p>
                </div>
            </div>
            <div className='textbox contact hidden'>
                <iframe id="form" className="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvKDT5r3ADHGLwYfWaGh99UjMGT_27oluoa82hPlC3xICNbg/viewform?embedded=true" width="640" height="375">Laster inn …</iframe>
            </div>
        </div>
    );
};

export default Contact;
