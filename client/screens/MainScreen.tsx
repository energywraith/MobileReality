import React from "react";

import AboutUs from "../components/templates/AboutUs";
import Gallery from "../components/templates/Gallery";
import Services from "../components/templates/Services";

export default function MainScreen() {
  const onPressLearnMore = () => {};

  return (
    <>
      <AboutUs onPressLearnMore={onPressLearnMore} />
      <Gallery />
      <Services />
    </>
  );
}
