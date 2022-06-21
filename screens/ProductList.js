import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

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
  // useEffect(() => {
  //   // const response = axios.get("http://localhost:5000/api/product/products");
  //   // console.log(response);

  const getPost = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/product/products"
      );
      const mydata = await response.json();
      console.log(mydata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <View style={{ paddingHorizontal: 10 }}>
      {/* <FlatList
        styles={styles.productList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item._id.toString()}
        data={products}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
      ></FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {},
});
