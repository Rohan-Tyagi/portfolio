import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  
    return (
        <div className= 'navbar-container'>
        <div className='left-nav'>
           FOLIO 
        </div>
        <div className='navbar-nav'>
        
        <ul className='headers'>

          <Link  activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={900}>
          <li className='skills'>SKILLS</li>
          </Link> 
            <li className='projects'>PROJECTS</li>
            <li className='experience'>EXPERIENCE</li>
            <Link  activeClass="active" to="footer" spy={true} smooth={true} offset={-100} duration={900}>
            <li className='hire-me'>HIRE ME</li>
            </Link>
            
              
           </ul>
        </div>

    
            
        </div>
    );
}

export default Navbar;