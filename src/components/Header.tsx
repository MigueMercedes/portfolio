import { useState } from 'react';
import Logo from '../assets/MiguelMercedesIcon.jpeg';

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <nav className='bg-black border-gray-200 py-2'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
        <a
          href='/'
          className='flex items-center'
        >
          <img
            src={Logo}
            className='h-6 mr-3 sm:h-9'
            alt='Miguel MercedesLogo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            Miguel Mercedes
          </span>
        </a>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            <span></span>
          </div>

          <button
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            data-collapse-toggle='mobile-menu-2'
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='true'
          >
            <span className='sr-only'>Menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpenMobileMenu ? 'block' : 'hidden'
          }`}
          id='mobile-menu-2'
        >
          <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            <li>
              <a
                href='/'
                className='block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded '
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='/projects'
                className='block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='contact'
                className='block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
