import { MdSlowMotionVideo } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';

import strip from '../../assets/strip.svg';
import one from '../../assets/one.svg';
import two from '../../assets/two.svg';
import thee from '../../assets/thee.svg';
import ring from '../../assets/ring.svg';

const Hero = () => {
  return (
    <div className='flex sm:justify-between justify-center sm:mx-[9%] mt-[14%]  sm:mt-[6%] h-[700px]'>
      <div className='flex flex-col gap-[29px] sm:justify-normal justify-center'>
        <div className='flex flex-col sm:w-[618px] w-[300px] gap-[16px] '>
          <p className='sm:text-[64px] text-[44px] font-bold bg-redspot bg-contain bg-no-repeat bg-[center_bottom_1rem] sm:leading-[64px] leading-[40px]  '>
            Make The Best Financial Decisions
          </p>
          <p className='sm:text-[20px]  sm:text-wrap'>
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div className='flex gap-9'>
          <button className='flex justify-center items-center gap-2 w-[204px] h-[60px] bg-black text-white'>
            Get Started <FaArrowRightLong />
          </button>
          <button className='flex items-center gap-2'>
            <MdSlowMotionVideo />
            Watch Video
          </button>
        </div>
        <div className=''>
          <img
            className='sm:w-[512px] w-[312px]'
            src={strip}
            alt='something odd was here'
          />
        </div>
      </div>
      <div className='sm:flex hidden flex-col justify-center items-center relative '>
        <img
          className='sm:w-[412px] relative left-[2%] top-[420px] z-50'
          src={one}
          alt='something odd was here'
        />
        <img
          className='sm:w-[412px] relative left-[14%] bottom-[70px] z-40'
          src={two}
          alt='something odd was here'
        />
        <img
          className='sm:w-[330px] relative left-[20%] bottom-[540px] z-30'
          src={thee}
          alt='something odd was here'
        />
        <img
          className='sm:w-[212px] relative  left-[21%] z-20 bottom-[1150px]'
          src={ring}
          alt='something odd was here'
        />
      </div>
    </div>
  );
};

export default Hero;
