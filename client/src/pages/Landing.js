import React from "react";

import { Header } from "../components/organisms/Header";
import { Section } from "../components/section";
import { Footer } from "../components/organisms/Footer";
import { Button } from "../components/atom/Button";

const LandingPage = () => {
  return (
    <>
      <Header type='landing'/>
      <Section type='banner'/>
      <Section type='items'/>
      <Section type='app'/>
      <Footer type='landing' />
      <div style={{ position: 'fixed', bottom: -10, right: -15, zIndex: 999 }}>
      <Button type='float' />
      </div>
    </>
  );
};

export default LandingPage;
