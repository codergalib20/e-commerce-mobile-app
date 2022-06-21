import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductList({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  function renderProduct({ item: product }) {
    return (
      <Product
        product={product}
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
    <SafeAreaView style={{ backgroundColor: "#DFDFDE" }}>
      <View>
        <View style={styles.coustomHeader}>
          <View style={styles.headerWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color="#1C424F"
              />
            </View>
            <Text style={styles.headerTitle}>Products</Text>
            <View>
              <FontAwesome name="search" size={20} color="#1C424F" />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          {products && (
            <FlatList
              columnWrapperStyle={{ justifyContent: "space-between" }}
              contentContainerStyle={styles.contentContainerStyle}
              numColumns={2}
              keyExtractor={(item, index) => index}
              data={products}
              renderItem={renderProduct}
              // showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.5}
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
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    // Shadow
    shadowColor: "#1C424F",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  headerTitle: {
    fontSize: 20,
    color: "#1C424F",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainerStyle: {
    paddingHorizontal: 10,
    // flex: 1,
    // flexGrow: 1,
  },
});
