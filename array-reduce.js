function getTotalFromShoppingBasket(basket) {
  // for (let property in basket) {
  //   result += property[price];
  // }

  const result = basket.reduce(
    (accumulator, currentVal) => accumulator + currentVal.price,
    0,
  );

  return result;
}
function getAverageAge(people) {
  const result = people.reduce(
    (accumulator, currentVal) => accumulator + currentVal.age,
    0,
  );
  return result / people.length;
}

function concatenateObjects(objects) {
  let result = {};
  // for (let [key, value] in objects) {
  //   if (result.hasOwnProperty[key]) {
  //     result[key].push(value);
  //   } else {
  //     result[key] = value;
  //   }
  // }
  for (let property of objects) {
    if (result.hasOwnProperty([property.key])) {
      console.log("here");

      result[property.key].push(property.value);
    } else {
      result[property.key] = [property.value];
    }
  }

  return result;
}

const shoppingBasket = [
  { name: "Apple", price: 2.5 },
  { name: "Banana", price: 1.5 },
  { name: "Orange", price: 3 },
  { name: "Mango", price: 4 },
];

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

const objects = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 4 },
  { key: "b", value: 5 },
];

console.log(getTotalFromShoppingBasket(shoppingBasket));
console.log(getAverageAge(people));
console.log(concatenateObjects(objects));
