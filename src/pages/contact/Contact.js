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
        <div className="contact-main">
            {/* <div className='textbox contact hidden'> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvKDT5r3ADHGLwYfWaGh99UjMGT_27oluoa82hPlC3xICNbg/viewform?embedded=true" width="640" height="375" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>
            {/* </div> */}
        </div>
    );
};

export default Contact;
