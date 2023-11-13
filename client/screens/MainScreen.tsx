import React from "react";

import AboutUs from "../components/templates/AboutUs";
import Gallery from "../components/templates/Gallery";

export default function MainScreen() {
  const onPressLearnMore = () => {};

  return (
    <>
      <AboutUs onPressLearnMore={onPressLearnMore} />
      <Gallery />
    </>
  );
}
