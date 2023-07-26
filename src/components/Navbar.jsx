import React from 'react'
import Logo from '../assets/img/logo-nextgen.png'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-10 py-4 bg-gray-900 text-white'>
        <div className='flex items-center'>
          <img
            src={Logo}
            alt='NextGen Logo'
            className='max-h-12'
          />
          <ul className='flex items-center'>
            <li className='ml-6'>Home</li>
            <li className='ml-6'>TV Shows</li>
            <li className='ml-6'>Movies</li>
            <li className='ml-6'>New & Popular</li>
            <li className='ml-6'>My List</li>
          </ul>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 10h16M4 14h16M4 18h16'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar