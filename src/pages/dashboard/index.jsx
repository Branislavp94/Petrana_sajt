import React from "react";
import HeroSection from "../../components/HerroSection";
import MainSection from "../../components/MainSection";
import GallerySection from "../../components/GallerySection";
import ExtraContent from "../../components/ExtraContent";

import Image1 from "../../slike/9M0A9460.jpg";
import Image2 from "../../slike/9M0A0009-3.jpg";
import Image3 from "../../slike/9M0A1994-2.jpg";
import Image4 from "../../slike/9M0A2357.jpg";
import Image5 from "../../slike/9M0A2095.jpg";
import Image6 from "../../slike/9M0A1991.jpg";
import Image7 from "../../slike/9M0A6822.jpg";
import Image8 from "../../slike/9M0A9962.jpg";

//  na height mozemo postavljati sami velicinu slike ili ce biti auto kolika je
const galleryImages = [
  {
    src: Image1,
    alt: "slika1",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image2,
    alt: "slika4",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image3,
    alt: "slika1",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image4,
    alt: "slika3",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image5,
    alt: "slika4",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image6,
    alt: "slika5",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image7,
    alt: "slika6",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image8,
    alt: "slika7",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
];

const MainDashboard = () => {
  return (
    <>
      <HeroSection />
      <MainSection />
      <GallerySection galleryImages={galleryImages} />
      <ExtraContent />
    </>
  );
};

export default MainDashboard;
