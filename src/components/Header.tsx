import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/MiguelMercedesIcon.jpeg';

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const { pathname } = useLocation();

  return (
    <nav className='bg-black/80 border-gray-200 py-2 sticky top-0 z-50'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
        <Link
          to='/'
          className='flex items-center'
        >
          <img
            src={Logo}
            className='h-6 mr-3 sm:h-9'
            alt='Miguel MercedesLogo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            {'<Miguel'} <span className='text-[#1ad31a]'>{'Mercedes/>'}</span>
          </span>
        </Link>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            <span></span>
          </div>

          <button
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            data-collapse-toggle='mobile-menu-2'
            type='button'
            className='hover:bg-white/20 inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 focus:ring-gray-600'
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
          <ul className='flex flex-col gap-4 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            <li>
              <NavLink
                to='/'
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className={`text-${
                  pathname === '/' ? '[#1ad31a] bg-slate-700' : 'white'
                } hover:text-[#1ad31a] hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium`}
                aria-current='page'
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/projects'
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className={`text-${
                  pathname === '/projects' ? '[#1ad31a] bg-slate-700' : 'white'
                } hover:text-[#1ad31a] hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium`}
                aria-current='page'
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/about'
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className={`text-${
                  pathname === '/about' ? '[#1ad31a] bg-slate-700' : 'white'
                } hover:text-[#1ad31a] hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium`}
                aria-current='page'
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/contact'
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className={`text-${
                  pathname === '/contact' ? '[#1ad31a] bg-slate-700' : 'white'
                } hover:text-[#1ad31a] hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium`}
                aria-current='page'
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/resume'
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className={`text-${
                  pathname === '/resume' ? '[#1ad31a] bg-slate-700' : 'white'
                } hover:text-[#1ad31a] hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium`}
                aria-current='page'
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
