import React, { useEffect } from 'react';
import '../Main.css';

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
            <div>
                <div className='textbox hidden'>
                    <h1 className='title'> Contact </h1>
                    <p>
                        Paragraphs are the building blocks
                        of papers. Many students define
                        paragraphs in terms of length: a
                        paragraph is a group of at least
                        five sentences,
                    </p>
                </div>
                <div className='textbox hidden'>
                    <h1 className='title'> About me </h1>
                    <p>
                        Paragraphs are the building blocks
                        of papers. Many students define
                        paragraphs in terms of length: a
                        paragraph is a group of at least
                        five sentences,
                    </p>
                </div>
                <div className='textbox hidden'>
                    <h1 className='title'> About me </h1>
                    <p>
                        Paragraphs are the building blocks
                        of papers. Many students define
                        paragraphs in terms of length: a
                        paragraph is a group of at least
                        five sentences,
                    </p>
                </div>
                <div className='textbox hidden'>
                    <h1 className='title'> About me </h1>
                    <p>
                        Paragraphs are the building blocks
                        of papers. Many students define
                        paragraphs in terms of length: a
                        paragraph is a group of at least
                        five sentences,
                    </p>
                </div>
                <div className='textbox hidden'>
                    <h1 className='title'> About me </h1>
                    <p>
                        Paragraphs are the building blocks
                        of papers. Many students define
                        paragraphs in terms of length: a
                        paragraph is a group of at least
                        five sentences,
                    </p>
                </div>
                <div className='textbox hidden'>
                    <h1 className='title'> About me </h1>
                    <p>
                        Paragraphs are the building blocks
                        of papers. Many students define
                        paragraphs in terms of length: a
                        paragraph is a group of at least
                        five sentences,
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
