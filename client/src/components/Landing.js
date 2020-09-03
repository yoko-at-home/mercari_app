import React from 'react';

import { Header } from './Header';
import { BannerSection } from './BannerSection';
import { Items } from './ItemsSection';
import { AppAdvertisement } from './AppAdvertisement';
import { Footer } from './Footer';

export default () => {
  return (
    <>
      <Header />
      <BannerSection />
      <Items />
      <AppAdvertisement />
      <Footer />
    </>
  );
};
