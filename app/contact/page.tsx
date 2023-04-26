import React from 'react';

const contact = () => {
  return (
    <div
      id='contact'
      className='grid grid-cols-1 h-screen items-center justify-items-center'
    >
      <div className='relative'>
        <h1
          data-text='Lets work together'
          className='before:content-[attr(data-text)] before:absolute before:left-0 before:top-[2px] before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 selection:bg-primary selection:text-coal'
        >
          Lets work together
        </h1>
        <div>Peep my @ links bellow, email or give me a call.</div>
      </div>
    </div>
  );
};

export default contact;
