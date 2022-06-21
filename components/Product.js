import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Product({ image, name, price, description, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 3 }}>
          <Text style={{ fontSize: 20, color: "#333" }}>{price}</Text>
          <Text style={{ paddingLeft: 10, fontSize: 20, color: "#333" }}>
            {name?.slice(0, 30)}
          </Text>
        </View>
        <Text style={{color: "#333", fontSize: 14}}>{description?.slice(0, 100)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    padding: 3,
    paddingVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
