// src/components/Navigation.js
import React from 'react';
import styles from '../style/Navigation.module.scss';

const TopNavbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
              Petranaaaaaaa photography :D
            </div>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="/">Home</a></li>
                <li className={styles.menuItem}><a href="/about">About</a></li>
                <li className={styles.menuItem}><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default TopNavbar;
