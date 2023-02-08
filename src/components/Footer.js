import React from 'react';
// import {
//   FaFacebook,
//   FaGithub,
//   FaInstagram,
//   FaTwitter,
//   FaTwitch,
// } from 'react-icons/fa';

const footer = () => {
  return (
    <footer className='mx-auto w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
      <div className='max-w-[1240px] grid grid-cols-2 md:grid-cols-6 mx-auto border-b-2 border-gray-600 py-8'>
        <div className='text-left'>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='uppercase font-bold my-2'>Subscibe to our Newsletter</p>
          <p className='my-2'>
            The latest news,articles, andresources, sent to your inbox weekly
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input
              type='email'
              placeholder='email@example.com'
              className='rounded-md mb-4 w-full p-2 mr-4 '
            />
            <button className='p-2 mb-4'>Subscibe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default footer;
