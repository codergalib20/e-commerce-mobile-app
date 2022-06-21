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
          <Text>{product.name}</Text>
          <Text></Text>
          <Text></Text>
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
  image: {
    width: "100%",
    aspectRatio: 2,
  },
});
