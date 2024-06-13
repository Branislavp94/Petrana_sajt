import React from "react";
import PortfolioTemlateSection from "../components/PortfolioTemlateSection";
import Image from "../slike/NASLOVNA.jpg";

const images = [{ src: Image, position: "top" }];

const galleryImages = [
  {
    src: Image,
    alt: "slika1",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika4",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika1",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika3",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika4",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika5",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika6",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika7",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika1",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika4",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika1",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika3",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika4",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika5",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika6",
    heigth: "321px",
    width: "205px",
    objectPosition: "",
  },
  {
    src: Image,
    alt: "slika7",
    heigth: "321px",
    width: "461px",
    objectPosition: "",
  },
];

const UmetnostUFokusu = () => {
  return (
    <PortfolioTemlateSection
      images={images}
      galleryImages={galleryImages}
      headerText={"Umetnost u fokusu"}
      additionalText={
        "sve je počelo iz ljubavi. već 12 godina stvaram i izražavam svoju kreativnost kroz objektiv. kada sam prvi put uzela fotoaparat u ruke, shvatila sam da je to zapravo moje oko za sagledavanje stvarnosti. iz ljubavi prema umetnosti i ljudima, tu sam da zabeležim vaše posebne trenutke i da ih kroz moje fotografije učinim još posebnijim."
      }
    />
  );
};

export default UmetnostUFokusu;
