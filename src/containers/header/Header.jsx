import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>We were travelling for days without assistance which was unpleasing. Not all our thoughts were all an extreme blessing
            Intelligence with everything was alrady futile and the party used years to allow whoever
        </p>
         
         <div className="gpt3___header-content-input">
          <input type="email" placeholder="You@email.com" />
          <button type="button">Get Started</button>
         </div>

         <div className="gpt3__header-content__people">
          <img src={people} alt="people"  />
          <p>600 people requested access in last 24 hours</p>
         </div>
      </div>
      
         <div className="gpt3__header-image">
          <img src={ai} alt="ai"  /> 
         </div>

    </div>
  )
}

export default Header;
