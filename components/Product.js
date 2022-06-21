import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Product({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>{product.title} Hello</Text>
      <View>
        <Image style={styles.image} source={{ uri: product.images[0].image }} />
      </View>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "49%",
    backgroundColor: "#FFF",  
    // Shadow
    shadowColor: "#1C424F",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    padding: 5,
    borderRadius: 8,
    marginTop: 10
  },
  image: {
    // width: 200,
    // height: 200
    aspectRatio: 1,
    width: "100%",
  },
});
