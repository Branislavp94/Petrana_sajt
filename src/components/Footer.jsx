// src/components/Footer.js
import React from 'react';
import styles from '../style/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h1 className={styles.logoText}>MyWebsite</h1>
                    <p>
                        MyWebsite is a platform to share content, connect with others, and explore new ideas. Follow us on social media for the latest updates.
                    </p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2024 MyWebsite | Designed by MyWebsite Team</p>
            </div>
        </footer>
    );
};

export default Footer;
