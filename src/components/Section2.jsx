import React from 'react';
import ActionAreaCard from './ActionAreaCard'; // Import your ActionAreaCard component
import './Section2.css';

export default function Section2() {
    return (
      <div className="cardContainer">
        
        <ActionAreaCard title='Trust' description='We prioritize the trust of our community through transparency and honesty in all aspects of our work' imageUrl={'src/assets/In the office-pana.svg'}/>
        <ActionAreaCard title='Fun & Engaging' description='We infuse fun and creativity into our approach, making sustainability enjoyable amidst the challenges of climate change.' imageUrl={'src/assets/Hide and seek game-bro.svg'}/>
        <ActionAreaCard title='Authenticity' description='Our commitment to promoting sustainability and environmental awareness is sincere, fostering an authentic community of eco-conscious individuals.' imageUrl={'src/assets/Certification-pana.svg'}/>

        <ActionAreaCard title='Impact' description='Our success is measured by the positive impact we have on the planet and our community, empowering responsible choices for well-being.' imageUrl={'src/assets/Environmental audit-bro.svg'}/>


        
      </div>
    );
  }