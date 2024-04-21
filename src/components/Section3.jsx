import React from 'react';
import './Section3.css';
import Person from './Person';

export default function Section3() {
  return (
    <div className='wrapper-3'>
      <div className='heading-3'>
        <h1 style={{marginBottom:'20px'}}>Meet the team</h1>
      </div>
       <div className='person-container'>
   
        <div className='founder-row'>
          <Person title="Abhishek" description="Co-founder" width={200} height={200} margin={20} />
          <Person title="Sarwan" description="Co-founder" width={200} height={200} margin={20}/>
        </div>
        </div>

      
      <div className='founder-text'><p>We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.<br /><br />
As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.</p>
<p>Connect with the founders on LinkedIn here:
            <a href="https://www.linkedin.com/in/abhishek-rao-k" target="_blank" rel="noopener noreferrer"> Abhishek Rao</a>
            &nbsp;
            <a href="https://www.linkedin.com/in/sarwanjeetsingh/" target="_blank" rel="noopener noreferrer"> Sarwanjeet Singh</a>
          </p></div>
      <div>
  
        
        <div className='team-row'>
          <Person title="Shruthi" description="Social Media" width={200} height={200} margin={40}/>
          <Person title="Urmil" description="Social Media" width={200} height={200} margin={40}/>
          <Person title="Divya" description="UX Design" width={200} height={200} margin={40}/>
          <Person title="Prashanith" description="FrontEnd Engineer" width={200} height={200} margin={40}/>
       
        </div>
      </div>
      <div>
        <div className='team-row'>
          <Person title="Sai Abhilash" description="Backend Engineer" width={200} height={200} margin={40}/>
          <Person title="???" description="This spot awaits you" width={200} height={200} margin={40}/>

       
        </div>
      </div> 
    </div>
  );
}
