import React from 'react';
import Cards from '../Cards/Cards';
import './CardDetails.css';


function CardDetails({data}) {

    
    return (
        <div className='cardDetails-container'>
            {
                data.map(card=>(
                    <Cards
                     key={card.id}
                    image={card.image}
                    title={card.title}
                    details={card.details}
                     />
                )
                    

                )
            }
        </div>
    );
}

export default CardDetails;