import React from 'react';
import './Footer.css';
import {  NavLink } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container' id='footer'>
        <footer className='footer'>
         <p className='first text'>AVAILABLE FOR FREELANCE PROJECTS</p>
         <div className='second-text'>
            <h2>Do you have illustration<br/> project? Let's talk.</h2>
            <div className='contact-container'>
            <button className='contact-footer' ><NavLink to='/contact'>Let's talk now </NavLink></button>
        </div>
         </div>

         

        </footer>
            
        </div>
    );
}

export default Footer;