import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Product({ title, onPress }) {
  console.log(title, "hello");
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
       <Text>{title} Hello</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF"
  },
  image: {
    width: 200,
    height: 200,
  },
});
