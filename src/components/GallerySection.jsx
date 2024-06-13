import React from "react";
import GalleryStyle from "../style/Gallery.module.scss";

const GallerySection = ({ hasHeaderSection = true, galleryImages }) => {
  return (
    <section className={`${GalleryStyle.gallery} ${GalleryStyle.container1}`}>
      {hasHeaderSection && (
        <>
          <h2>DOBRODOŠLI U MOJ SVET FOTOGRAFIJE</h2>
          <hr />
          <p>
            HVALA ŠTO STE BAŠ NA MOJOJ STRANICI I ŠTO DELITE LJUBAV PREMA
            UMETNOSTI FOTOGRAFIJE UŽIVAJTE U PRIČAMA ISPRIČANIM KROZ OBJEKTIV
          </p>
        </>
      )}
      <div className={GalleryStyle.gallery_images}>
        {galleryImages.map((image, index) => (
          <figure key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: image.width,
                height: image.heigth || "auto",
                objectPosition: image.objectPosition,
              }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
