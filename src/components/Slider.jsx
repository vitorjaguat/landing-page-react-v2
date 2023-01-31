import React from 'react';
import './Slider.css';
import { useInView } from 'react-intersection-observer';

export default function Slider({ imageSrc, title, subtitle, flipped }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  // console.log(entry);

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt={title} className='slider__image' />
          <div className='slider__content'>
            <h1 className='slider__title'>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='slider__content'>
            <h1 className='slider__title'>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt={title} className='slider__image' />
        </>
      );
    }
  };

  return (
    <div className={inView ? 'slider zoom' : 'slider'} ref={ref}>
      {renderContent()}
    </div>
  );
}
