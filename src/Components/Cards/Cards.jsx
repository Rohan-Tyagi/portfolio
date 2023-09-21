import React from 'react';
import './Cards.css';
import me2 from '../Images/me2.jpg'
function Cards({image, title, details}) {
    return (
        <div className='card'>
       
        <div className='img-card'>
        <img src={image} alt='js'></img>
        </div>

         <div className='bottom-container'>

         <h4><b>{title}</b></h4>
         <p>{details}</p>

         </div>   
        </div>
    );
}

export default Cards;