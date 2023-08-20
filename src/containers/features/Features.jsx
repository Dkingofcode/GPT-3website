import React from 'react';
import './features.css';
import { Feature } from '../../components';


const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From the fine john he gave to the pebbles he sold and the people he helped to buy stones he was heavily applauded till they all saw him leave'  
    },

    {
      title: 'Become the tended active',
      text: 'From the fine john he gave to the pebbles he sold and the people he helped to buy stones he was heavily applauded till they all saw him leave'  
    },

    {
      title: 'Message or am nothing',
      text: 'From the fine john he gave to the pebbles he sold and the people he helped to buy stones he was heavily applauded till they all saw him leave'  
    },

    {
      title: 'Really boy law county',
      text: 'From the fine john he gave to the pebbles he sold and the people he helped to buy stones he was heavily applauded till they all saw him leave'  
    }
]


const Features = () => {
    return (
       <div className="gpt3__features section__padding">
         <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today and Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
         </div>
         <div className="gpt3__features-container">
           {featuresData.map((item, index) => (
              <Feature title={item.title} text={item.text} key={item.title + index}  />
           ))}
         </div>
       </div> 
    )
}

export default Features;