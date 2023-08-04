'use client';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import profile from './profile.png';
import oOne from './oOne.png';
import oTwo from './oTwo.png';
import plusOne from './plusOne.png';
import plusTwo from './plusTwo.png';
import { MouseEvent } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import Link from 'next/link';

const DMSans = DM_Sans({ weight: ['400'], subsets: ['latin'] });

interface Props {}

export default function Home(props: Props) {
  // const handleClick = (event: MouseEvent): void => {
  //   event.preventDefault();
  //   const icon: any = document.getElementById('arrow');

  //   icon.classList.remove('arrow');
  //   setTimeout(() => {
  //     icon.classList.add('arrow');
  //   }, 0);
  // };

  let iconStyles = { color: 'white' };

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const icon: any = document.getElementById('arrow');

    icon.classList.remove('arrow');
    setTimeout(() => {
      icon.classList.add('arrow');
    }, 0);
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    setTimeout(() => {
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 1100);
  };

  return (
    <main
      id='intro'
      className={`flex flex-col ${DMSans.className} scroll-smooth lg:h-screen`}
    >
      <div className='intro flex flex-col items-center justify-center lg:justify-between'>
        <div className='content justify-center flex lg:grid pt-24 w-5/6 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:pl-20 pl-0'>
          <div className='details initial flex flex-col mt-10'>
            <div className={`short container relative mb-5`}>
              <h1
                data-text='David Curtis'
                className='before:content-[attr(data-text)] before:absolute before:left-0 before:top-[2px] before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 selection:bg-primary selection:text-coal'
              >
                David Curtis
              </h1>
              <span className='job pl-24 text-xl selection:bg-primary selection:text-coal relative before:absolute before:left-0 before:bottom-[0.8rem] before:w-20 before:border-b-[1px] before:border-b-primary'>
                Full Stack Developer
              </span>
            </div>
            <div className='text mb-10'>
              <p className='max-w-md selection:bg-primary selection:text-coal'>
                I&apos;m a software developer based in North Carolina, and
                I&apos;m very passionate and dedicated to my work.
              </p>
            </div>
            <div className='buttons flex'>
              <button className='flex-initial shadow-custom animate-waveButton hover:animate-waveButton relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tl from-primary via-secondary to-primary hover:text-white dark:text-white group'>
                <span className=''>
                  <a
                    className='text-sm flex text-white items-center justify-between relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0'
                    href='mailto: heythereimdavidcurtis@gmail.com'
                  >
                    Say Hey
                    <svg
                      width='24'
                      height='25'
                      viewBox='0 0 24 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      id='null'
                      className='svg replaced-svg ml-2 group-hover:animate-wiggle'
                    >
                      <path
                        d='M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z'
                        fill='white'
                      ></path>
                      <path
                        d='M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z'
                        fill='white'
                      ></path>
                    </svg>
                  </a>
                </span>
              </button>
              <button className='flex-initial relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium'>
                <Link
                  className='flex items-center justify-between relative px-5 py-2.5'
                  onClick={handleScroll}
                  href='#projects'
                >
                  My Work
                  <svg
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    id='arrow'
                    className='svg replaced-svg ml-2'
                  >
                    <path
                      d='M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z'
                      fill='white'
                    ></path>
                  </svg>
                </Link>
              </button>
            </div>
            <div className='follow flex flex-row mt-24'>
              <span className='flex justify-center items-center mr-2'>
                Follow me:
              </span>
              <ul className='flex flex-row justify-center items-center'>
                <li className='hover:animate-waveButton flex justify-center items-center shadow-custom bg-gradient-to-tl from-secondary to-primary rounded-full w-10 h-10 mr-2'>
                  <div className='flex justify-center items-center bg-gray-900 rounded-full w-[2.3rem] h-[2.3rem]'>
                    <a
                      href='https://www.linkedin.com/in/davidcurtis92/'
                      target='_blank'
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
                    <a href='https://github.com/DavidebCurtis' target='_blank'>
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
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.1}
            className='z-20 hidden lg:block'
          >
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.4}
              className='absolute top-[190px] left-[2px]'
            >
              <Image src={oOne} alt='oOne' />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.5}
              className='absolute top-[73px] left-[48px]'
            >
              <Image src={oTwo} alt='oTwo' />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.9}
              className='absolute top-[145px] left-[83px]'
            >
              <Image src={plusOne} alt='plusOne' />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.2}
              className='absolute top-[90px] left-[275px]'
            >
              <Image src={plusTwo} alt='plusTwo' />
            </MouseParallaxChild>
            <Image src={profile} alt='Picture of the author' />
          </MouseParallaxContainer>
        </div>
      </div>
    </main>
  );
}
