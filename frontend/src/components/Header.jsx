import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600 rounded-lg px-8 md:px-16 lg:px-24 py-14 max-w-7xl mx-auto relative'>


      {/* ---------- Left Side ----------- */}
      <div className='md:w-1/2 flex-col items-start justify-center gap-4 py-10 md:py-[5vw]'>
        <p className='text-3xl md:text-3xl lg:text-4xl text-black font-semibold leading-tight'>
          "Your Health, Our Priority" <br /> 
          <span className='text-sm md:text-base lg:text-lg font-normal'>
              Emergency Medical Assistance and Booking Made Simple
          </span>
        </p>

        {/* Group Image and Text Side by Side */}
        <div className='flex flex-row items-center gap-3 text-white text-sm font-light mt-3'>
          <img className='w-16' src={assets.group_profiles} alt="group" />
          <p className='flex-1'>
            Get immediate medical help or schedule a consultation with ease.<br className='hidden sm:block' />
            @Emergency? <br className='hidden sm:block' />
            @Book online or in-person appointments with our trusted doctors.
          </p>
        </div>

        {/* Updated Buttons: Larger Size and Positioned Lower */}
        <div className='flex gap-4 mt-4'>
          <a href='#speciality' 
             className='flex items-center gap-2 px-5 py-2 rounded-full text-black text-xs font-semibold transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105'
             style={{
               background: 'linear-gradient(90deg, #FFD580 0%, #FFA726 100%)', 
               paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '10px',
               width: 'fit-content',
               marginTop: '20px',
             }}
          >
            Book appointment <img className='w-2' src={assets.arrow_icon} alt='arrow' />
          </a>
          
          <a href='#emergency' 
             className='flex items-center gap-2 px-5 py-2 rounded-full text-black text-xs font-semibold transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105'
             style={{
               background: 'linear-gradient(90deg, #A8E063 0%, #56AB2F 100%)', 
               paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '10px',
               width: 'fit-content',
               marginTop: '20px',
             }}
          >
            Online Doctor <img className='w-2' src={assets.arrow_icon} alt='arrow' />
          </a>
        </div>
      </div>

      {/* ---------- Right Side ----------- */}
      <div className='md:w-1/2 relative flex justify-end items-end'>
        {/* Doctor Image - Aligned to bottom */}
        <img 
          className='w-[90%] h-auto md:w-[120%] md:h-auto lg:w-[130%] object-cover relative -mb-14'  
          src={assets.header_img} 
          alt='Doctors' 
        />
      </div>
    </div>
  );
}

export default Header;



