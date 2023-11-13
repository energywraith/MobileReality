import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";

import { Text, View } from "../Themed";
import Button from "../common/Button";

interface AboutUsProps {
  onPressLearnMore: (event: GestureResponderEvent) => void;
}

export default function AboutUs({ onPressLearnMore }: AboutUsProps) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.header}
        lightColor="rgb(0,0,0,0)"
        darkColor="rgba(255,255,255,0.8)"
      >
        KILKA SŁÓW O NAS
      </Text>

      <Text
        style={styles.subHeader}
        lightColor="rgba(2, 129, 192, 0.8)"
        darkColor="rgba(2, 129, 192, 0.8)"
      >
        CZYLI KIM JESTEŚMY I DOKAD ZMIERZAMY
      </Text>

      <Text
        style={styles.paragraph}
        lightColor="rgba(0,0,0,0.6)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto
        excepturi necessitatibus omnis illo dignissimos fugiat ipsa vero ipsum,
        enim doloremque nostrum nihil? Est voluptatum expedita modi voluptatem
        magnam sapiente eius ipsam officia, repellat, alias harum libero,
        reiciendis adipisci iste aspernatur deleniti ex iusto dignissimos
        aliquid incidunt. Magnam, perferendis aliquid? {"\n"} {"\n"}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet
        consectetur, ipsam labore ullam dolor nesciunt officia ipsa saepe illum!
        Omnis dolor non numquam sequi?
      </Text>

      <Button
        onPress={onPressLearnMore}
        title="ZOBACZ WIECEJ"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingVertical: 48,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center",
  },
  button: {
    marginTop: 24,
  },
});
