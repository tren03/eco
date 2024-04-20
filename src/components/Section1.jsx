import React from 'react';
import './Section1.css';

function Section1() {
  return (
    <div className='wrapper'>
      <div className='text'>
        <h1>About Ecoyaan</h1>
        <p style={{textAlign:'left'}}>
          At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
          <br/><br/>
          We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
          <br/><br/>
          <ul>
            <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
            <li>Videos, posts, and quizzes on climate change and sustainability</li>
            <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
          </ul>
        </p>
      </div>
      <div className='img'>
  <img src='src/assets/tree-4857597_1280.png' alt='Tree Image' />
</div>

    </div>
  );
}

export default Section1;
