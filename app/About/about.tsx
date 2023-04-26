'use client';
import React from 'react';
import Image from 'next/image';
import { MouseEvent } from 'react';
import davidheadshot from '../davidheadshot.png';

const about = () => {
  window.onload = function () {
    const tiltEffect = {
      max: 6,
      perspective: 1000,
      scale: 1,
      speed: 3000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
    };

    const card: any = document.getElementById('card');
    card.addEventListener('mouseenter', cardMouseEnter);
    card.addEventListener('mousemove', cardMouseMove);
    card.addEventListener('mouseleave', cardMouseLeave);

    function setTransition(event: MouseEvent) {
      clearTimeout(card.transitionTimedOut);

      card.style.transition = `transform ${tiltEffect.speed}ms ${tiltEffect.easing}`;
      card.transitionTimedOut = setTimeout(() => {
        card.style.transition = '';
      }, tiltEffect.speed);
    }

    function cardMouseEnter(event: MouseEvent) {
      setTransition(card);
    }

    function cardMouseLeave(event: MouseEvent) {
      card.style.transform = `perspective(${tiltEffect.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }

    function cardMouseMove(event: MouseEvent) {
      if (card instanceof HTMLDivElement) {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = cardHeight / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateX = (
          (+1 * tiltEffect.max * mouseY) /
          (cardHeight / 2)
        ).toFixed(2);
        const rotateY = (
          (-1 * tiltEffect.max * mouseX) /
          (cardWidth / 2)
        ).toFixed(2);

        card.style.transform = `perspective(${tiltEffect.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffect.scale}, ${tiltEffect.scale}, ${tiltEffect.scale})`;
      }
    }
  };

  return (
    <div
      id='about'
      className={`min-h-screen bg-no-repeat bg-[url('/plant.png')] bg-[center_left_-10rem] bg-[length:700px_800px] grid auto-rows-auto grid-cols-1 grid-flow-row-dense`}
    >
      <div className='row-start-2'>
        <div className='grid grid-cols-7 lg:gap-10 '>
          <div
            id={'card'}
            className='justify-self-center rounded-lg max-w-md col-span-3 col-start-2 row-auto'
          >
            <Image
              src={davidheadshot}
              alt='headshot'
              className='rounded-lg p-4 bg-neutral-100 bg-opacity-[.08] border-[1px] border-neutral-100'
            />
          </div>
          <div className='relative col-span-2 selection:bg-primary selection:text-coal'>
            <h1
              data-text='About Me'
              className='before:content-[attr(data-text)] before:absolute before:left-0 before:top-[2px] before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 selection:bg-primary selection:text-coal'
            >
              <span className='relative before:absolute before:left-full before:ml-2 before:bottom-2 before:w-20 before:border-b-[1px] before:border-b-primary'>
                About Me
              </span>
            </h1>
            <p className='mt-5 leading-loose'>
              I transistioned in to an IT career three years ago. Upon entering
              this new field I found a love for computers yes, but more so how
              applications are built and run.
            </p>
            <p className='mt-5 leading-loose'>
              Since then I have devoted my time to designing and developing
              responsive web and mobile apps using a range of technologies.
              Working on agile teams has allowed me to collaborate effectively
              with colleagues and ensure timely project delivery. Check out my
              work bellow and see some cool things I&aposve created in my spare
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
