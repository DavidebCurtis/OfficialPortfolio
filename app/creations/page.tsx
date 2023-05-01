'use client';
import React from 'react';
import Image from 'next/image';
import weather from '../../public/images/quiz.png';

const projects = () => {
  return (
    <div id='projects' className='mt-20 flex justify-center items-center'>
      <div className='w-5/6'>
        <div className='mb-14'>
          <div className='relative'>
            <h1
              data-text='Look at my'
              className='before:content-[attr(data-text)] before:absolute before:left-0 before:top-[2px] before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 selection:bg-primary selection:text-coal'
            >
              <span className='relative'>Look at my</span>
            </h1>
          </div>
          <div className='relative'>
            <h1
              data-text='recent projects'
              className='before:content-[attr(data-text)] before:absolute before:left-0 before:top-[2px] before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 selection:bg-primary selection:text-coal'
            >
              <span className='relative before:absolute before:left-full before:ml-2 before:bottom-2 before:w-20 before:border-b-[1px] before:border-b-primary'>
                recent projects
              </span>
            </h1>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
          <div className='relative absolute inset-0 cursor-pointer'>
            <Image
              className='object-cover h-full max-w-full rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
              src={weather}
              alt='Weather App'
              placeholder='blur'
              loading='lazy'
            />
            <div className='bg-gradient-to-r from-primary to-secondary m-4 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
              <a
                target='_blank'
                href='https://davidebcurtis.github.io/weather-dashboard/'
              >
                Weather App
              </a>
            </div>
          </div>
          <div className='relative absolute inset-0 cursor-pointer'>
            <Image
              className='object-cover h-full max-w-full rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
              src={weather}
              alt='Weather App'
              placeholder='blur'
              loading='lazy'
            />
            <div className='bg-gradient-to-r from-primary to-secondary m-4 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
              Weather App
            </div>
          </div>
          <div className='relative absolute inset-0 cursor-pointer'>
            <Image
              className='object-cover h-full max-w-full rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
              src={weather}
              alt='Weather App'
              placeholder='blur'
              loading='lazy'
            />
            <div className='bg-gradient-to-r from-primary to-secondary m-4 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
              Weather App
            </div>
          </div>
          <div className='relative absolute inset-0 cursor-pointer'>
            <Image
              className='object-cover h-full max-w-full rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
              src={weather}
              alt='Weather App'
              placeholder='blur'
              loading='lazy'
            />
            <div className='bg-gradient-to-r from-primary to-secondary m-4 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
              Weather App
            </div>
          </div>
          <div className='relative absolute inset-0 cursor-pointer'>
            <Image
              className='object-cover h-full max-w-full rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
              src={weather}
              alt='Weather App'
              placeholder='blur'
              loading='lazy'
            />
            <div className='bg-gradient-to-r from-primary to-secondary m-4 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
              Weather App
            </div>
          </div>
          <div className='relative absolute inset-0 cursor-pointer'>
            <Image
              className='object-cover h-full max-w-full rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
              src={weather}
              alt='Weather App'
              placeholder='blur'
              loading='lazy'
            />
            <div className='bg-gradient-to-r from-primary to-secondary m-4 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
              Weather App
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
