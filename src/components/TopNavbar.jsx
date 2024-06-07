// src/components/Navigation.js
import React, { useState } from "react";
import styles from "../style/Navigation.module.scss";
import Logo from "../slike/logo_test.jpeg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li className={styles.menuItem}>
            <a href="/">Pocetna</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/about">O meni</a>
          </li>
        </ul>
        <div className={styles.nav_logo}>
          <img src={Logo} alt="logo" />
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li className={styles.menuItemWithDropdown}>
            <span className={styles.dropdownToggle}>Portfolio</span>
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="/portfolio/stvaranje-price-i-priroda">Stvaranje price i priroda</a>
              </li>
              <li>
                <a href="/portfolio/umetnost-u-fokusu">Umetnost u fokusu</a>
              </li>
              <li>
                <a href="/portfolio/krstenja-i-rodjendani">Rodjendani i krstenja</a>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}></div>
        </div>
      </nav>
      <div
        className={`${styles.mobileBackdrop} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {isOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              <li className={styles.menuItem}>
                <a href="/">Pocetna</a>
              </li>
              <li className={styles.menuItem}>
                <a href="/about">O meni</a>
              </li>
              <li className={styles.menuItemWithDropdown}>
                <span className={styles.dropdownToggle}>Portfolio</span>
                <ul className={styles.dropdownMenu}>
                  <li className={styles.menuItem}>
                    <a href="/portfolio1">Portfolio Item 1</a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="/portfolio2">Portfolio Item 2</a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="/portfolio3">Portfolio Item 3</a>
                  </li>
                </ul>
              </li>
              <li className={styles.menuItem}>
                <a href="/contact">Kontakt</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
