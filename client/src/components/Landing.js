import React from 'react';
import Header from './Header';
import BannerSection from './BannerSection';
import ItemsSection from './ItemsSection';
import AppAdvertisement from './AppAdvertisement';
import LandingFooter from './Footer';
// import './Landing.css';

function LandingPage() {
  return (
    <>
      <Header />
      <BannerSection />
      <ItemsSection />
      <AppAdvertisement />
      <LandingFooter />
    </>
  );
}

export default LandingPage;
