import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import AboutUs from "../components/modules/Home/AboutUs";
import Gallery from "../components/modules/Home/Gallery";
import Services from "../components/modules/Home/Services";
import Offer from "../components/modules/Home/Offer";

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
