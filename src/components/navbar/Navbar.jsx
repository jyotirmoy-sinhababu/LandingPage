import Logo from '../logo/Logo';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex justify-between mx-[9%] items-center mt-[2%]'>
      <div className='flex items-center gap-6'>
        <Logo />
        <div className='flex gap-4'>
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
      <div className='flex justify-center items-center'>
        <button>Download</button>
      </div>
    </div>
  );
};

export default Navbar;
