import React from 'react';
import './Resume.css'

function Resume() {

    const handleclick = function(){
        fetch('Rohan Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Rohan Resume.pdf';
                alink.click();
            })
        })
    }
    
    return (
        <div className='resume-container'>
            <button className='resume' onClick={handleclick}>Resume </button>
        </div>
    );
}

export default Resume;