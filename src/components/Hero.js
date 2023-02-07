import React from 'react';
import {
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerStackIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/solid';

import bgImage from '../assets/cyber-bg.png';

const Hero = () => {
  return (
    <section className='w-full h-full bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequences & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>
            Cloud Management
          </h1>
          <p className='text-2xl'>This is our Tech Brands.</p>
          <button className='sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img src={bgImage} alt='logo' className='w-full' />
        </div>
      </div>
      <div className='self-center flex flex-col py-8 md:min-w-[760px] mx-2 md:mx-auto  bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
        <p>Data Services</p>
        <div className='flex justify-between px-4 flex-wrap'>
          <p className='flex px-4 py-2 text-slate-500'>
            <CloudArrowUpIcon className='h-6 text-indigo-600 mx-1' /> App
            Security
          </p>
          <p className='flex px-4 py-2 text-slate-500 '>
            <ServerStackIcon className='h-6 text-indigo-600 mx-1' /> Dashboard
            Design
          </p>
          <p className='flex px-4 py-2 text-slate-500 mr-10'>
            <CircleStackIcon className='h-6 text-indigo-600 mx-1' /> Cloud Data
          </p>
          <p className='flex px-4 py-2 text-slate-500 '>
            <PaperAirplaneIcon className='h-6 -rotate-90 text-indigo-600 mx-1' />
            API
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
