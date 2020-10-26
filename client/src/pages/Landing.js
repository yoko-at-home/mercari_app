import React from "react";

import { Header } from "../components/Landing/Header/Header";
import { BannerSection } from "../components/Landing/BannerSection";
import { ItemsSection } from "../components/Landing/ItemsSection";
import { AppAdvertisement } from "../components/Landing/AppAdvertisement";
import { Footer } from "../components/Landing/Footer";
import { FloatButton } from "../components/Landing/FloatButton";

const LandingPage = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <ItemsSection />
      <AppAdvertisement />
      <Footer />
      <FloatButton />
    </>
  );
};

export default LandingPage;
