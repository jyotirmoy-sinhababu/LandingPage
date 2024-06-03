import Logo from '../logo/Logo';
import star from '../../assets/Star.png';

import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='sm:flex hidden justify-between sm:mx-[9%] mx-[6%]] items-center mt-[2%]'>
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
        <img className='fixed left-[1460px] top-[60px]' src={star} alt='' />
      </div>
      <div>
        <Logo />
        <div className='sm:hidden '>
          <button onClick={toggleSidebar} className='z-50'>
            {isOpen ? (
              <RxCross1 className='text-2xl text-cyan-600 font-extrabold' />
            ) : (
              <img className='w-[40px]' src={burger} alt='burger menu' />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
