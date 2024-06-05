import React from 'react';

import Image1 from "../slike/9M0A2576.jpg";
import Image4 from "../slike/9M0A2493.jpg";
import Image2 from "../slike/9M0A5415-2.jpg";
import Image3 from "../slike/5T3A5386.jpg";


import GalleryStyle from '../style/Gallery.module.scss';

//  na height mozemo postavljati sami velicinu slike ili ce biti auto kolika je
const images = [
  { src: Image1, alt: "slika1", heigth: '321px', width: '461px', objectPosition: '' },
  { src: Image2, alt: "slika2", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image4, alt: "slika1", heigth: '321px', width: '461px', objectPosition: '' },
  { src: Image3, alt: "slika3", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image1, alt: "slika4", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image2, alt: "slika5", heigth: '321px', width: '461px', objectPosition: '' },
  { src: Image3, alt: "slika6", heigth: '321px', width: '205px', objectPosition: '' },
  { src: Image1, alt: "slika7", heigth: '321px', width: '461px', objectPosition: '' },
];

const GallerySection = () => {
  return (
    <section className={`${GalleryStyle.gallery} ${GalleryStyle.container1}`}>
      <h2>DOBRODOŠLI NA SAJT</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        iure molestiae sint quod quaerat suscipit dolores accusamus quam velit!
        Sapiente laborum earum vel a nulla pariatur ducimus! Eum possimus
        facilis officia aperiam eius distinctio nostrum reprehenderit libero
        unde optio, laudantium nesciunt repudiandae, voluptate ullam, tenetur
        maiores magni. Ullam, id iure!
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
