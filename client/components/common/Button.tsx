import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: StyleProp<ViewStyle>;
}

export default function Button({ onPress, title, style }: ButtonProps) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderWidth: 2,
    borderColor: "rgba(2, 129, 192, 0.8)",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "rgba(2, 129, 192, 0.8)",
  },
});
