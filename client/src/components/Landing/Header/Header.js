import React from "react";

import { HeaderMobile } from "./Mobile/HeaderMobile";
import { HeaderTablet } from "./Tablet/HeaderTablet";

export const Header = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderTablet />
    </>
  );
};
