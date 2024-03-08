import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <FontAwesome5 name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
