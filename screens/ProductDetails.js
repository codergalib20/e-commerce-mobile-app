import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getProduct } from "../services/ProductServices";

export default function ProductDetails({ route }) {
  const { productId } = route.params;
  console.log(productId);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);
  console.log(product);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View>
          <View style={styles.titlebox}>
            <Text style={styles.title}>{product.name}sdfsdfsdfsdfsdfsdfsdfsdddsd</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  titlebox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    // Card Extra design
    borderRadius: 20,
    shadowColor: "#888",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    color: "#222",
  },
  price: {
    fontSize: 20,
    color: "#222",
  },
  image: {
    width: "100%",
    aspectRatio: 2,
  },
});
