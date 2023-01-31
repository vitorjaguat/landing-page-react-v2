import './Hero.css';

import React from 'react';
import Navbar from './Navbar';
import { useInView } from 'react-intersection-observer';

export default function Hero({ imageSrc }) {
  const { ref, inView } = useInView();

  return (
    <>
      <div className='hero' ref={ref}>
        <img src={imageSrc} alt='Books' className='hero__image' />
        <h1 className='hero__title'>books for everyone.</h1>
      </div>
      <Navbar heroInView={inView} />
    </>
  );
}
