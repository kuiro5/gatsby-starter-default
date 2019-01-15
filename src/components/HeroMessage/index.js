import React from 'react';
import Button from '../Button'
import './styles.css';

const HeroMessage = ({ openRSVP }) => {
  return (
    <div class='hero-message'>
      <div class='hero-message-title'>Josh & Rachel</div>
      <div class='hero-message-date'>09.01.19</div>
      <Button onClick={openRSVP} className='hero-button'>{'RSVP'}</Button>
    </div>
  );
};

export default HeroMessage;
