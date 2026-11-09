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
    result += `${property}: ${obj[property]}, `;
  }
  return result.slice(0, result.length - 2);
}

function concatenateStrings(array, len) {
  return array.map((x) => concatStr(x));
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

console.log(objToStr(objects[0]));
console.log(convertArrayOfObjectsToStrings(objects));

console.log(concatStr("applea", 5));
