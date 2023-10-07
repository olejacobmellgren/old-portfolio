import React, { useEffect } from 'react';
import './Main.css';
import me from '../images/about/me.jpeg';
import whiteAi from '../images/about/white-ai.jpeg';
import IT from '../images/about/IT_V23.jpg';
import arrow from '../images/about/arrow.png';
import python from '../images/about/python.webp';
import java from '../images/about/java.jpeg';
import typescript from '../images/about/typescript.png';
import sql from '../images/about/sql.webp';
import sevenaside from '../images/about/sevenaside.png';


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
    <div>
      <div className='container hidden'>
        <div className='textbox'>
          <h1> Om meg </h1>
          <p>
            Jeg heter Ole Jacob og går nå på 3. året på et 5-årig masterprogram i datateknologi
            på NTNU i Trondheim. Jeg trives godt på dette studiet og ser fram til å arbeide innenfor
            IT-sektoren som utvikler.
          </p>
        </div>
        <img className='image' alt='' src={me} />
      </div>
      <div className='container hidden'>
        <img className='image white-ai' alt='' src={whiteAi} />
        <div className='textbox'>
          <h1> Spesialisering innen kunstig intelligens </h1>
          <p>
            Med stor interesse for den stadig økende utviklingen av kunstig intelligens
            har jeg valgt å spesialisere meg innenfor AI-feltet. Jeg er fascinert av de mulighetene
            som AI gir og det potensiale AI har til å revolusjonere ulike bransjer, og jeg håper å bidra til
            nyskapende innovasjoner innenfor dette feltet.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='textbox hidden'>
          <h1> Emner og prosjekter </h1>
          <p>
            Jeg gikk på Rosenvilde videregående skole der jeg hadde
            programmering (Python) som valgfag. Dette fikk meg interessert
            i programmering og andre ting som har med datamaskiner å gjøre,
            og var blant grunnene til at jeg valgte datateknologi.
            <br></br><br></br>
            Så langt på studiet har hatt flere emner jeg føler er relevante for arbeidslivet.
            Jeg har hatt «Objektorientert-programmering» (Java), «Programvareutvikling» (typescript),
            «Datamodellering og databasesystemer» (SQL) og «Maskinlæring».  I flere av disse emnene,
            har jeg/vi jobbet med prosjekter. Informasjon om disse finnes på "Prosjekter"-siden.
          </p>
        </div>
        <div className='hidden'>
          <div className='icon-container '>
            <img className='icon' alt='' src={python} />
            <img className='icon' alt='' src={java} />
          </div>
          <div className='icon-container '>
            <img className='icon' alt='' src={typescript} />
            <img className='icon' alt='' src={sql} />
          </div>
        </div>
      </div>
      <div className='container hidden'>
        <img className='image it-vektor' alt='' src={IT} />
        <img className='arrow' alt='' src={arrow} />
        <div className='textbox'>
          <h1 className='title'> Nåværende arbeid </h1>
          <p>
            For tiden har jeg et verv i organisasjonen Vektorprogrammet.
            Dette er en frivillig studentorganisasjon som sender ut assistenter
            til skoler for å hjelpe med realfag. Jeg er en del av IT-teamet og har
            en stilling som utvikler. Det vil si at jeg ikke drar ut til skoler for
            å hjelpe, men arbeider med resten av IT-teamet et par ganger i uka.
            <br></br><br></br>
            Nåværende arbeid er utvikling av en ny nettside for Vektorprogrammet (Mer info på "Prosjekter-siden"). I dette IT-teamet, som jeg
            har vært med i siden våren 2023, har jeg fått mye erfaring med relevant arbeid i team over en lengre periode.
          </p>
        </div>
      </div>
      <div className='container hidden'>
        <div className='textbox'>
          <h1> Når jeg ikke skriver kode... </h1>
          <p>
            Når jeg ikke koder, liker jeg å spille fotball og trene på treningsstudioet.
            NTNU har en studentliga for fotballlag der lag fra ulike studieprogram konkurrerer.
            Innenfor Datateknologi og informatikk er det et lag som heter 'Datakameratene,'
            som deltar både i 11-er og 7-er kamper. Her er et bilde av meg med 7-er-laget ved slutten av forrige sesong.
          </p>
        </div>
        <img className='image sevenaside' alt='' src={sevenaside} />
      </div>
    </div>
  );
};

export default Main;
