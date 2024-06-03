// src/components/Navigation.js
import React, { useState } from 'react';
import styles from '../style/Navigation.module.scss';
import Logo from './Logo';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={styles.nav}>
            <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <li className={styles.menuItem}><a href="/">Pocetna</a></li>
                    <li className={styles.menuItem}><a href="/about">O meni</a></li>
            </ul>
            <Logo />
                <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <li className={styles.menuItem}><a href="/about">Portfolio</a></li>
                    <li className={styles.menuItem}><a href="/contact">Kontakt</a></li>
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
                            <li className={styles.menuItem}><a href="/">Pocetna</a></li>
                            <li className={styles.menuItem}><a href="/about">O meni</a></li>
                            <li className={styles.menuItem}><a href="/contact">Portfolio</a></li>
                            <li className={styles.menuItem}><a href="/contact">Kontakt</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navigation;
