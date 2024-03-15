import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
