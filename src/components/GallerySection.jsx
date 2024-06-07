import React from 'react';

import Image1 from "../slike/9M0A9460.jpg";
import Image2 from "../slike/9M0A0009-3.jpg";
import Image3 from "../slike/9M0A1994-2.jpg";
import Image4 from "../slike/9M0A2357.jpg";
import Image5 from "../slike/9M0A2095.jpg";
import Image6 from "../slike/9M0A1991.jpg";
import Image7 from "../slike/9M0A6822.jpg";
import Image8 from "../slike/9M0A9962.jpg";

import GalleryStyle from '../style/Gallery.module.scss';

//  na height mozemo postavljati sami velicinu slike ili ce biti auto kolika je
const images = [
  { src: Image1, alt: "slika1", heigth: '321px', width: '461px', objectPosition: '' },
  { src: Image2, alt: "slika4", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image3, alt: "slika1", heigth: '321px', width: '461px', objectPosition: '' },
  { src: Image4, alt: "slika3", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image5, alt: "slika4", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image6, alt: "slika5", heigth: '321px', width: '461px', objectPosition: '' },
  { src: Image7, alt: "slika6", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image8, alt: "slika7", heigth: '321px', width: '461px', objectPosition: '' },
];

const GallerySection = () => {
  return (
    <section className={`${GalleryStyle.gallery} ${GalleryStyle.container1}`}>
      <h2>DOBRODOŠLI U MOJ SVET FOTOGRAFIJE</h2>
      <hr />
      <p>
        HVALA ŠTO STE BAŠ NA MOJOJ STRANICI I ŠTO DELITE LJUBAV PREMA UMETNOSTI FOTOGRAFIJE
        UŽIVAJTE U PRIČAMA ISPRIČANIM KROZ OBJEKTIV
      </p>
      <div className={GalleryStyle.gallery_images}>
        {images.map((image, index) => (
          <figure key={index}>
            <img src={image.src} alt={image.alt} style={{ width: image.width, height: image.heigth || 'auto', objectPosition: image.objectPosition }} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
