// src/components/Footer.js
import React from 'react';
import styles from '../style/Footer.module.scss';

const Footer = () => {
    return (
      <footer>
      <div class={styles.container1}>
        <article>
        <h1 className={styles.logoText}>MyWebsite</h1>
        <p>
            MyWebsite is a platform to share content, connect with others, and explore new ideas. Follow us on social media for the latest updates.
          </p>
        </article>
      </div>
      <hr />
      <p className={styles.bootomBar}>&copy; 2024 Moj Sajt | Dizajniran by Petrana Tesic</p>
    </footer>
    );
};

export default Footer;
