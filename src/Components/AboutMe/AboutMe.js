import React from 'react';
import img from '../Images/me2.jpg'
import Resume from '../Resume/Resume';
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div className='about-me'>
                <h2>I design digital <br/>crafts for <br/> clients.</h2>
                <Resume/>
            </div>
            
            <img className='Image-me' src={img} alt='My Pic'/>
            
        
        </div>
    );
}

export default AboutMe;