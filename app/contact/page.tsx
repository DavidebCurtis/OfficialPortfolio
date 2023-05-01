'use client';
import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const contact = () => {
  let iconStyles = { color: 'white' };
  return (
    <div id='contact' className='h-screen flex justify-center items-center'>
      <div className='w-5/6 grid grid-cols-1'>
        <div className='top flex justify-center items-center'>
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
        <div className='mt-20 bottom flex-col lg:flex-row flex flex-flow w-full justify-between lg:items-center'>
          <div className='left'>
            <ul className='flex flex-flow flex-col lg:flex-row'>
              <li className='mr-4'>
                <h4 className='call mb-4 text-primary'>Call me:</h4>
                <p className='text-2xl'>336-209-9503</p>
              </li>
              <li>
                <h4 className='email mb-4 text-primary'>Email me:</h4>
                <a
                  className='text-2xl'
                  href='mailto: heythereimdavidcurtis@gmail.com'
                >
                  heythereimdavidcurtis@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className='right'>
            <div className='follow flex flex-row'>
              <span className='flex justify-center items-center mr-2 text-primary'>
                Follow me:
              </span>
              <ul className='flex flex-row justify-center items-center'>
                <li className='hover:animate-waveButton flex justify-center items-center shadow-custom bg-gradient-to-tl from-secondary to-primary rounded-full w-10 h-10 mr-2'>
                  <div className='flex justify-center items-center bg-gray-900 rounded-full w-[2.3rem] h-[2.3rem]'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/davidcurtis92/'
                    >
                      <AiOutlineLinkedin
                        size='20'
                        style={iconStyles}
                        className='hover:animate-wiggleOnce'
                      />
                    </a>
                  </div>
                </li>
                <li className='hover:animate-waveButton flex justify-center items-center shadow-custom bg-gradient-to-tl from-secondary to-primary rounded-full w-10 h-10'>
                  <div className='flex justify-center items-center bg-gray-900 rounded-full w-[2.3rem] h-[2.3rem]'>
                    <a target='_blank' href='https://github.com/DavidebCurtis'>
                      <AiOutlineGithub
                        size='20'
                        style={iconStyles}
                        className='hover:animate-wiggleOnce'
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
