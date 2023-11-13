import React from "react";

import AboutUs from "../components/templates/AboutUs";

export default function MainScreen() {
  const onPressLearnMore = () => {};

  return (
    <>
      <AboutUs onPressLearnMore={onPressLearnMore} />
    </>
  );
}
