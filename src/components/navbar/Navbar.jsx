import Logo from '../logo/Logo';
import star from '../../assets/Star.png';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='sm:flex hidden justify-between mx-[9%] items-center mt-[4%] sm:mt-[6%'>
        <div className='flex items-center gap-6'>
          <Logo />
          <div className='flex gap-7 '>
            <Link
              className='cursor-pointer text-black hover:text-red-500 font-medium'
              activeClass='active'
              to='top'
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              className='cursor-pointer text-black hover:text-red-500 font-medium'
              activeClass='active'
              to='top'
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us{' '}
            </Link>{' '}
            <Link
              className='cursor-pointer text-black hover:text-red-500 font-medium'
              activeClass='active'
              to='top'
              spy={true}
              smooth={true}
              duration={500}
            >
              Pricing
            </Link>
            <Link
              className='cursor-pointer text-black hover:text-red-500 font-medium'
              activeClass='active'
              to='top'
              spy={true}
              smooth={true}
              duration={500}
            >
              Features
            </Link>
          </div>
        </div>
        <div>
          <button className='flex justify-center items-center w-[135px] bg-black text-white hover:text-red-500 h-[44px] cursor-pointer font-medium'>
            Download
          </button>
        </div>
        <img className='fixed left-[94%] top-[60px]' src={star} alt='' />
      </div>
      <div className='sm:hidden flex justify-between mx-[6%]'>
        <Logo />
        <div className='sm:hidden '>
          <button onClick={toggleSidebar} className='z-50'>
            {isOpen ? (
              <RxCross1 className='text-2xl text-cyan-600 font-extrabold' />
            ) : (
              <GiHamburgerMenu className='text-2xl hover:text-red-500 font-extrabold' />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
