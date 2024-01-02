import React from 'react';
import Stars from 'react-stars';

const StarField = () => {
  return (
    <div className='star-field'>
      <Stars
        count={150}
        size={2}
        color1='#FFFFFF'
      />
    </div>
  );
};

export default StarField;
