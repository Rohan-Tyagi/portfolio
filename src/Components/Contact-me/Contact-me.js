import React from 'react';
import './Contact-me.css';

function Contact() {
    return (
      <div className='parentContainer'>
          <div className='container'>
        <div className='form-container'>

            <form>

            <div className='name'>
            <input type='text' placeholder='Your Name' className='input-name'></input>
            </div>
            <div className='email'>
            <input type='email' placeholder='Your e-mail' className='input-email'></input>
            </div>
            <div className='message'>
            <textarea placeholder='Enter your message'></textarea>
            </div>
              <div className='form-btn'>
                <button type='submit' className='btn'>SEND</button>
              </div>                  
            </form>
            </div>
            <div className='contact-card'>
            <div>
                <p>Email me at</p>
                rohantyagi6898@gmail.com
            </div>
            <div>
                <p >Call me at</p>
                8279624954
            </div>

            
           </div>
        
            
        </div>
      </div>
    );
}

export default Contact;