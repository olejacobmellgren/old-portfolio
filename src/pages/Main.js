import React, { useEffect } from 'react';
import './Main.css';


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
        <section className='textbox hidden'>
          <h1 className='title'> About me </h1>
          <p>
            Paragraphs are the building blocks
            of papers. Many students define
            paragraphs in terms of length: a
            paragraph is a group of at least
            five sentences,
          </p>
        </section>
        <section className='textbox hidden'>
          <h1 className='title'> About me </h1>
          <p>
            Paragraphs are the building blocks
            of papers. Many students define
            paragraphs in terms of length: a
            paragraph is a group of at least
            five sentences,
          </p>
        </section>
        <section className='textbox hidden'>
          <h1 className='title'> About me </h1>
          <p>
            Paragraphs are the building blocks
            of papers. Many students define
            paragraphs in terms of length: a
            paragraph is a group of at least
            five sentences,
          </p>
        </section>
        <section className='textbox hidden'>
          <h1 className='title'> About me </h1>
          <p>
            Paragraphs are the building blocks
            of papers. Many students define
            paragraphs in terms of length: a
            paragraph is a group of at least
            five sentences,
          </p>
        </section>
        <section className='textbox hidden'>
          <h1 className='title'> About me </h1>
          <p>
            Paragraphs are the building blocks
            of papers. Many students define
            paragraphs in terms of length: a
            paragraph is a group of at least
            five sentences,
          </p>
        </section>
        <section className='textbox hidden'>
          <h1 className='title'> About me </h1>
          <p>
            Paragraphs are the building blocks
            of papers. Many students define
            paragraphs in terms of length: a
            paragraph is a group of at least
            five sentences,
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
