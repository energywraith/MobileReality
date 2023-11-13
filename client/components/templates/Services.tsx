import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

import { View } from "../Themed";

export default function Services() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://via.placeholder.com/300x300" }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>BUDOWA DOMOW Z DREWNA</Text>
        <Text style={styles.text}>BUDOWA BRAM WJAZDOWYCH</Text>
        <Text style={styles.text}>WYKONCZENIE WNETRZ</Text>
        <Text style={styles.text}>ATLANY OGRODOWE</Text>
        <Text style={styles.text}>KAMIENNE ELEMENTY ARCHITEKTURY</Text>
        <Text style={styles.text}>REMONTY</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "blue",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 64,
    display: "flex",
    rowGap: 16,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
