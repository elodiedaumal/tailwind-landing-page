import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const Pricing = () => {
  return (
    <section className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 mix-blend-overlay'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <header className='text-center py-8 text-slate-300'>
            <h2 className='text-3xl uppercase'>Pricing</h2>
            <h3 className='text-5xl font-bold text-white py-8'>
              The right price for your reasearch
            </h3>
            <p className='text-3xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              aperiam architecto voluptate, ab numquam harum.
            </p>
          </header>
          <div className='grid md:grid-cols-2'>
            <article className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
              <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
                Standard
              </span>
              <p className='text-6xl font-bold py-4 flex'>
                $49
                <span className='text-xl  flex flex-col justify-end'>/mo</span>
              </p>
              <p className='text-2xl py-8 text-slate-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className='text-2xl'>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
              </div>
              <button className='w-full py-4 my-4'>Get started</button>
            </article>
            <article className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
              <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
                Premium
              </span>
              <p className='text-6xl font-bold py-4 flex'>
                $99
                <span className='text-xl  flex flex-col justify-end'>/mo</span>
              </p>
              <p className='text-2xl py-8 text-slate-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className='text-2xl'>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
                <p className='flex py-4'>
                  <CheckIcon className='w-8 mr-5 text-green-600' /> Lorem, ipsum
                  dolor.
                </p>
              </div>
              <button className='w-full py-4 my-4'>Get started</button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
