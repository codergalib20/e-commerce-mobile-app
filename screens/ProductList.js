import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function ProductList({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
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
  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://e-commerce-l.herokuapp.com/api/product/products"
      );
      const productsdata = await response.json();
      setProducts(productsdata.data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.log(error);
      setError(error.message);
      isLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#DFDFDE", flex: 1 }}>
      <View>
        <View style={styles.coustomHeader}>
          <View style={styles.headerWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="dots-three-vertical" size={24} color="black" />
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
            <Text>Products</Text>
            <View>
              <FontAwesome name="search" size={24} color="black" />
            </View>
          </View>
        </View>
        <View>
          {products && (
            <FlatList
              styles={styles.productList}
              contentContainerStyle={styles.contentContainerStyle}
              keyExtractor={(item) => item._id}
              data={products}
              renderItem={renderProduct}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          )}
          {!products && isLoading && <Text>Loading</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  coustomHeader: {
    backgroundColor: "#FFF",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainerStyle: {},
});
