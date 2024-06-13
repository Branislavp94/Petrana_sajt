import React from "react";
import styles from "../style/HeroSection.module.scss";

const HeroAllSection = ({ images, headerText, additionalText }) => {
  return (
    <div className={styles.hero}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Background ${index}`}
          className={`${styles.image} ${styles.visible}`}
          style={{
            zIndex: 1,
            objectPosition: image.position,
          }}
        />
      ))}
      <div className={styles.overlay}></div>
      <div
        className={styles.content}
        style={{
          textAlign: "center",
          display: "flex",
          placeItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className={styles.subtitle}>{headerText}</h1>
        <p>{additionalText}</p>
      </div>
    </div>
  );
};

export default HeroAllSection;
