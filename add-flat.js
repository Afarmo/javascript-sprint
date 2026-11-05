function sumNestedArray(array) {
  const flatten = array.flat(Infinity);
  const filter = array.filter((value) => typeof value === "number");
  const sum = array.reduce((total, value) => total + value, 0);

  return sum;
}
