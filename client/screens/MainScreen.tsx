import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import AboutUs from "../components/templates/AboutUs";
import Gallery from "../components/templates/Gallery";
import Services from "../components/templates/Services";
import Offer from "../components/templates/Offer";

export default function MainScreen() {
  const onPressLearnMore = () => {
    router.replace("/posts");
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <AboutUs onPressLearnMore={onPressLearnMore} />
        <Gallery />
        <Services />
        <Offer onPressLearnMore={onPressLearnMore} />
      </SafeAreaView>
    </ScrollView>
  );
}
