export function getProduct(id) {
  return PRODUCTS.find((product) => product._id === id);
}
