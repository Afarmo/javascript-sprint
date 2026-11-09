function filterOutOddNumbers(array) {
  const result = array.filter((num) => num % 2 == 0);
  return result;
}

function filterObjectsByNameLength(array, len) {
  const result = array.filter((word) => word.name.length <= len);
  return result;
}

function compoundFilter(products) {
  let result = products.filter((product) => product.code.length > 5);
  result = products.filter(
    (product) => product.category.indexOf("special") !== -1,
  );
  //   result = products.filter((product) => product.price > 50);
  result = products.filter(
    (product) => product.location !== "Underground" && product.price > 50,
  );
  return result;
}

const products = [
  {
    code: "ABC123",
    category: "electronics",
    price: 75,
    location: "Store",
  },
  {
    code: "XYZ456",
    category: "clothing",
    price: 30,
    location: "Mall",
  },
  {
    code: "PQR789",
    category: "special items",
    price: 60,
    location: "Underground",
  },
  {
    code: "LMN012",
    category: "accessories",
    price: 90,
    location: "Street",
  },
];

console.log(compoundFilter(products));
