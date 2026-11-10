function convert2DArrayToObjectArray(array) {
  let result = [];
  for (const [key, value] of array) {
    result.push({ [key]: value });
  }

  return result;
}

function convertArrayOfObjectsToStrings(array) {
  return array.map((x) => objToStr(x));
}

function objToStr(obj) {
  let result = "";
  for (const property in obj) {
    result += `${property.charAt(0).toUpperCase() + property.slice(1)}: ${obj[property]}, `;
  }
  return result.slice(0, result.length - 2);
}

function concatenateStrings(array, len) {
  return array.map((x) => concatStr(x, len));
}

function concatStr(s, len) {
  let result = "";
  const ellipsis = "...";
  if (len >= s.length) {
    return s;
  }
  return s.slice(0, len) + ellipsis;
}
const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
];
const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];
console.log(objToStr(objects[0]));
console.log(convertArrayOfObjectsToStrings(objects));

console.log(concatenateStrings(strings, 5));
