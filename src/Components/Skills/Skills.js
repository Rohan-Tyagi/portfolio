import React from 'react';
import './Skills.css';
import CardDetails from '../CardDetails/CardDetails';
import cardItems from '../cardItems'

function Skills({ref}) {
    return (
        <div className='skills-container' id='hero'>
            <div className='skills-header'>
                SKILLS
            </div>
            <CardDetails  data={cardItems}/>
            
        </div>
    );
}

export default Skills;