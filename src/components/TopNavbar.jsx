// src/components/Navigation.js
import React, { useState } from 'react';
import styles from '../style/Navigation.module.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                     photography :D
                </div>
                <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <li className={styles.menuItem}><a href="/">Home</a></li>
                    <li className={styles.menuItem}><a href="/about">About</a></li>
                    <li className={styles.menuItem}><a href="/contact">Contact</a></li>
                </ul>
                <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
                    <div className={`${styles.icon} ${isOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.icon} ${isOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.icon} ${isOpen ? styles.open : ''}`}></div>
                </div>
            </nav>
            <div className={`${styles.mobileBackdrop} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        <ul className={styles.mobileMenuList}>
                            <li className={styles.menuItem}><a href="/">Home</a></li>
                            <li className={styles.menuItem}><a href="/about">About</a></li>
                            <li className={styles.menuItem}><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navigation;
