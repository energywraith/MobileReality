import React from "react";

import AboutUs from "../components/templates/AboutUs";
import Gallery from "../components/templates/Gallery";
import Services from "../components/templates/Services";
import Offer from "../components/templates/Offer";

export default function MainScreen() {
  const onPressLearnMore = () => {};

  return (
    <>
      <AboutUs onPressLearnMore={onPressLearnMore} />
      <Gallery />
      <Services />
      <Offer onPressLearnMore={onPressLearnMore} />
    </>
  );
}
