import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";

import { Text, View } from "../Themed";
import Button from "../common/Button";

interface InfoSectionProps {
  header: string;
  subHeader: string;
  paragraph: string;
  buttonTitle: string;
  onPressLearnMore: (event: GestureResponderEvent) => void;
}

export default function InfoSection({
  header,
  subHeader,
  paragraph,
  buttonTitle,
  onPressLearnMore,
}: InfoSectionProps) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.header}
        lightColor="rgb(0,0,0)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {header}
      </Text>

      <Text
        style={styles.subHeader}
        lightColor="rgba(2, 129, 192, 0.8)"
        darkColor="rgba(2, 129, 192, 0.8)"
      >
        {subHeader}
      </Text>

      <Text
        style={styles.paragraph}
        lightColor="rgba(0,0,0,0.6)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {paragraph}
      </Text>

      <Button
        onPress={onPressLearnMore}
        title={buttonTitle}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingVertical: 64,
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
