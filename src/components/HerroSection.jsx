// src/components/HeroSection.js
import React from 'react';
import styles from '../style/HeroSection.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to our website</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
