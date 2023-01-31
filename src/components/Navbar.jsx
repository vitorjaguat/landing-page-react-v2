import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import React, { useState } from 'react';

export default function Navbar({ heroInView }) {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const navbarLinks = [
    {
      url: '#',
      title: 'home',
    },
    {
      url: '#',
      title: 'books',
    },
    {
      url: '#',
      title: 'news',
    },
  ];

  return (
    <nav className={heroInView ? 'navbar' : 'navbar sticky'}>
      <span className='navbar__logo'>boooks</span>

      {menuClicked ? (
        <FiX size={25} className='navbar__menu' onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClick} />
      )}

      <ul className={!menuClicked ? '' : 'active'}>
        {navbarLinks.map((item) => {
          return (
            <li className='navbar__item' key={item.title}>
              <a className='navbar__link' href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
