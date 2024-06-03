import React, { useState, useEffect } from 'react';
import styles from '../style/HeroSection.module.scss';

import Image from '../slike/NASLOVNA.jpg';
import Image1 from '../slike/9M0A1888.jpg';
import Image2 from '../slike/9M0A1889.jpg';

const images = [
  Image,
  Image1,
  Image2
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Match this to the CSS transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Background ${index}`}
          className={`${styles.image} ${currentImageIndex === index ? styles.visible : ''} ${fade ? styles.fadeIn : styles.fadeOut}`}
          style={{ zIndex: currentImageIndex === index ? 1 : 0 }}
        />
      ))}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to our website</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className={styles.button}>Learn More</button>
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${currentImageIndex === index ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
