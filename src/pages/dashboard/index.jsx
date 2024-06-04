import React from "react";
import HeroSection from "../../components/HerroSection";
import MainSection from "../../components/MainSection";
import GallerySection from '../../components/GallerySection';
import ExtraContent from '../../components/ExtraContent';

const MainDashboard = () => {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ExtraContent />
      <MainSection />
    </>
  );
};

export default MainDashboard;
