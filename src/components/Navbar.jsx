import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets/images';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import '../assets/images/logo.css';
import '../styles/Navbar.css';

import { useTranslation } from "react-i18next";
import '../i18n';

const Navbar = ({ isMenuOpen, handleMenuToggle }) => {
  const {t, i18n}= useTranslation();
  const  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className="logo-round" />
        <h1><b>{t('pages.navbar.home')}</b></h1>
      </NavLink>
      <button className='mobile-menu-button' onClick={handleMenuToggle}>
        {isMenuOpen ? <AiOutlineClose size={24} /> : <HiMenuAlt3 size={24} />}
      </button>
      <nav className={`desktop-nav ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          {t('pages.navbar.about')}
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          {t('pages.navbar.projects')}
        </NavLink>
        <NavLink to='/resume' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          {t('pages.navbar.resume')}
        </NavLink>
      {/* <div className='language-switcher'>
        <button
        onClick={() => changeLanguage('en')}
          className={i18n.language === 'en' ? 'active' : ''}>EN</button>
        <button
        onClick={() => changeLanguage('fr')}
          className={i18n.language === 'fr' ? 'active' : ''
        }>
          FR
        </button>
      </div> */}
      <div className='language-switcher'>
  <div className='relative inline-block w-24'>
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className='
        border-gray-300 
        rounded-lg 
        shadow-sm 
        bg-transparent
        text-gray-700 
        font-medium 
        cursor-pointer 
        appearance-none 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-blue-500 
        transition-all 
        duration-200 
        hover:border-gray-400
      '
    >
      <option value='en'>🇺🇸 En</option>
      <option value='fr'>🇫🇷 Fr</option>
    </select>
  </div>
</div>

      </nav>
      {isMenuOpen && (
        <div className='mobile-nav'>
          <NavLink to='/about' className='text-black font-bold'>
            {t('pages.navbar.about')}
          </NavLink>
          <NavLink to='/projects' className='text-black font-bold'>
          {t('pages.navbar.projects')}
          </NavLink>
          <NavLink to='/resume' className='text-black font-bold'>
            {t('pages.navbar.resume')}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
