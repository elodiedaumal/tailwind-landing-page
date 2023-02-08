import React from 'react';
import { PhoneIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import { CpuChipIcon, LifebuoyIcon } from '@heroicons/react/20/solid';

const Support = () => {
  return (
    <section className='w-full'>
      <div className='h-[700px]  bg-[url("../public/images/support.jpg")]  bg-cover bg-center bg-no-repeat  '>
        <div className='w-full h-[700px]  bg-gray-900/90 '>
          <div className='max-w-[1240px] mx-auto text-white '>
            <header className='px-4 py-12 text-center'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase '>
                Support
              </h2>
              <h3 className='text-5xl font-bold py-6 '>
                Finding the right team
              </h3>
              <p className='py-4 text-3xl text-slate-300 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, blanditiis veritatis accusamus cumque atque aut
                repudiandae nostrum ut omnis maxime?
              </p>
            </header>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mx-auto lg:-mt-96 md:-mt-80 sm:-mt-72 -mt-32'>
        <article className='bg-white rounded-xl shadow-2xl flex flex-col justify-between'>
          <div className='p-8'>
            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
            <h3 className='font-bold text-2xl my-6'>Sales</h3>
            <p className='text-gray-600 text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              odit, architecto sapiente accusamus nam pariatur delectus ratione
              laboriosam laborum eos.
            </p>
          </div>
          <div className='bg-slate-100 pl-8 py-4'>
            <p className='flex items-center text-indigo-600'>
              Contact <ArrowSmallRightIcon className='w-5 ml-2' />
            </p>
          </div>
        </article>
        <article className='bg-white rounded-xl shadow-2xl  flex flex-col justify-between'>
          <div className='p-8'>
            <LifebuoyIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
            <p className='text-gray-600 text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              pariatur hic unde quaerat repudiandae quasi non magnam ipsam
              numquam aliquam?
            </p>
          </div>
          <div className='bg-slate-100 pl-8 py-4'>
            <p className='flex items-center text-indigo-600'>
              Contact <ArrowSmallRightIcon className='w-5 ml-2' />
            </p>
          </div>
        </article>
        <article className='bg-white rounded-xl shadow-2xl flex flex-col justify-between'>
          <div className='p-8'>
            <CpuChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
            <p className='text-gray-600 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at a
              quidem. Dicta optio nam in deleniti dolorum, amet quos?
            </p>
          </div>
          <div className='bg-slate-100 pl-8 py-4'>
            <p className='flex items-center text-indigo-600'>
              Contact <ArrowSmallRightIcon className='w-5 ml-2' />
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Support;
