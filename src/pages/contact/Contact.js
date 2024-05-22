import React, { useEffect } from 'react';
import './Contact.css';
import facebook from '../../images/contact-images/facebook.png';
import linkedin from '../../images/contact-images/linkedin.png';
import gmail from '../../images/contact-images/gmail.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


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
                    <a href="https://www.linkedin.com/in/ole-jacob-mellgren-9b417127a/" target="_blank" rel="noreferrer"><img className="contact-icon" alt="linkedin" src={linkedin} /></a>
                    <p className="icon-tooltip">LinkedIn</p>
                </div>
                <div className="icon-box">
                    <a href="mailto:olejacobmellgren@gmail.com" target="_blank" rel="noreferrer"><img className="contact-icon" alt="gmail" src={gmail} /></a>
                    <p className="icon-tooltip">Gmail</p>
                </div>
                <div className="icon-box">
                    <a href="https://www.facebook.com/olejacob.mellgren/" target="_blank" rel="noreferrer"><img className="contact-icon" alt="facebook" src={facebook} /></a>
                    <p className="icon-tooltip">FaceBook</p>
                </div>
            </div>
            <Box
                component="form"
                className='icon-box hidden'
                action="mailto:olejacobmellgren@gmail.com"
                method="post"
                enctype="text/plain"
                sx={{
                    '& > :not(style)': { m: 1, width: '25rem' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Kontaktskjema</h1>
                <TextField type="text" name="Hei Ole Jacob, " id="outlined-basic" label="Melding" variant="outlined" />
                <TextField type="text" name="Med vennlig hilsen" id="outlined-basic" label="Fra" variant="outlined" />
                <Button type="submit" variant="contained">Send</Button>
            </Box>
        </div>

    );
};

export default Contact;
