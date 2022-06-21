import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/ProductServices";
import Product from "../components/Product";

export default function ProductList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", { productId: product._id });
        }}
      />
    );
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <View>
      <FlatList
        styles={styles.productList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item._id.toString()}
        data={products}
        renderItem={renderProduct}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
