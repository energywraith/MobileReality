import React from "react";
import { StyleSheet, Image } from "react-native";

import { View } from "../Themed";

export default function Gallery() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://via.placeholder.com/300x300",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://via.placeholder.com/300x300",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://via.placeholder.com/300x300",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://via.placeholder.com/300x300",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    background: "green",
    flexWrap: "wrap",
    width: "100%",
  },
  image: {
    width: "50%",
    height: 200,
  },
});
