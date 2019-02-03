import React from 'react';
import { Flex, Box } from '@rebass/grid';
import './styles.css';

const Details = () => {
  return (
    <Flex className='details' flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <h4 className='details-header'>The Details</h4>
      <div className='details-section'>
        <h1>Where</h1>
        <div>THE PENNSYLVANIAN</div>
        <div>Pittsburgh, Pennsylvania </div>
      </div>
      <div className='details-section'>
        <h1>When</h1>
        <div>SEPTEMBER 01, 2019</div>
      </div>
      <div>
        <h1>Attire</h1>
        <div>COCKTAIL</div>
      </div>
  </Flex>
  );
};

export default Details;
