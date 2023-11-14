import React from "react";
import { GestureResponderEvent } from "react-native";

import InfoSection from "../common/InfoSection";

interface AboutUsProps {
  onPressLearnMore: (event: GestureResponderEvent) => void;
}

export default function Offer({ onPressLearnMore }: AboutUsProps) {
  return (
    <InfoSection
      header="NASZA OFERTA"
      subHeader="DOWIEDZ SIE CO MOZEMY TOBIE ZAOFEROWAC"
      paragraph={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto excepturi necessitatibus omnis illo dignissimos fugiat ipsa vero ipsum, enim doloremque nostrum nihil? Est voluptatum expedita modi voluptatem magnam sapiente eius ipsam officia, repellat, alias harum libero, reiciendis adipisci iste aspernatur deleniti ex iusto dignissimos aliquid incidunt. Magnam, perferendis aliquid?\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet consectetur, ipsam labore ullam dolor nesciunt officia ipsa saepe illum! Omnis dolor non numquam sequi?`}
      buttonTitle="ZOBACZ WIECEJ"
      onPressLearnMore={onPressLearnMore}
    />
  );
}
