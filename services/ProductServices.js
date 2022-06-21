const PRODUCTS = [
  {
    _id: 1,
    name: "Apple iPhone 14 Pro Max",
    image:
      "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/06/20/186604-untitled-design-34.jpg",
    price: 232,
    description:
      "Apple iPhone 14 series: The US-based tech giant Apple is to launch iPhone 14 series globally in September this year. Ahead of the launch announcement, a new report has revealed that the company might still be ordering OLED displays for its iPhone 14 series from BOE, Samsung and LG Display, the 3 same companies who supplied the iPhone 13 series OLEDs last year.",
  },
  {
    _id: 2,
    name: "Apple iPhone 14 Pro Max",
    image:
      "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/06/20/186604-untitled-design-34.jpg",
    price: 232,
    description:
      "Apple iPhone 14 series: The US-based tech giant Apple is to launch iPhone 14 series globally in September this year. Ahead of the launch announcement, a new report has revealed that the company might still be ordering OLED displays for its iPhone 14 series from BOE, Samsung and LG Display, the 3 same companies who supplied the iPhone 13 series OLEDs last year.",
  },
  {
    _id: 3,
    name: "Apple iPhone 14 Pro Max",
    image:
      "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/06/20/186604-untitled-design-34.jpg",
    price: 232,
    description:
      "Apple iPhone 14 series: The US-based tech giant Apple is to launch iPhone 14 series globally in September this year. Ahead of the launch announcement, a new report has revealed that the company might still be ordering OLED displays for its iPhone 14 series from BOE, Samsung and LG Display, the 3 same companies who supplied the iPhone 13 series OLEDs last year.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product._id === id);
}
