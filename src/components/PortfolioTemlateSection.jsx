import React from "react";
import HeroAllSection from "./HeroAllSection";
import GallerySection from "./GallerySection";

const PortfolioTemlateSection = ({ images, galleryImages, headerText, additionalText }) => {
  return (
    <>
      <HeroAllSection
        images={images}
        headerText={headerText}
        additionalText={additionalText}
      />
      <GallerySection hasHeaderSection={false} galleryImages={galleryImages} />
    </>
  );
};

export default PortfolioTemlateSection;
