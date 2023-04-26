'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    if (elem?.id === 'header') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    elem?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  return (
    <header
      id='header'
      className={classNames(
        scrollPosition > 0
          ? 'shadow-sm shadow-[rgba(255,255,255,.08)] py-1 bg-coal'
          : 'shadow-none py-6',
        'sticky top-0 z-50 transition-shadow px-28 transition-padding transition-duration-1000 transition-delay-100 ease'
      )}
    >
      <div className='inner flex place-content-between items-center'>
        <div className='logo flex-initial'>
          <ul className='flex'>
            <li className='flex-initial text-4xl hover:animate-waveFast animate-wave bg-gradient-to-tl from-primary via-secondary to-primary bg-clip-text text-transparent text-5xl font-black'>
              <Link onClick={handleScroll} href='#header'>
                David
              </Link>
            </li>
          </ul>
        </div>

        <div className='nav flex-initial'>
          <ul className='flex nav-menu'>
            <Link
              className='flex-initial pl-5 flex items-end'
              data-menu-name='About'
              href='#about'
              onClick={handleScroll}
            >
              About
            </Link>

            <a
              className='flex-initial pl-5 flex items-end'
              data-menu-name='Projects'
              href='#projects'
              onClick={handleScroll}
            >
              Projects
            </a>

            <a
              className='flex-initial pl-5 flex items-end'
              data-menu-name='Contact'
              href='#contact'
              onClick={handleScroll}
            >
              Contact
            </a>

            <a
              className='flex-initial pl-5 flex items-end'
              data-menu-name='Resume'
              href='#resume'
              onClick={handleScroll}
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
