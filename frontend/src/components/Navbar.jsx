import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo1} alt="logo" />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li className="py-1">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            HOME
            <hr className="underline" />
          </NavLink>
        </li>

        <li className="py-1">
          <NavLink
            to="/doctors"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            ALL DOCTORS
            <hr className="underline" />
          </NavLink>
        </li>

        <li className="py-1">
          <NavLink
            to="/EMERGENCY MEDICINE"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            ONLINE DOCTOR
            <hr className="underline" />
          </NavLink>
        </li>

        <li className="py-1">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            ABOUT
            <hr className="underline" />
          </NavLink>
        </li>

        <li className="py-1">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            CONTACT
            <hr className="underline" />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold text-sm"
          >
            CREATE ACCOUNT
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
