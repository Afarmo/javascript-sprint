function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function containsUser(array, user) {
  return array.includes(user);
}

const isAuthorizedUser = curry(containsUser);
const check = isAuthorizedUser([1, 2, 3]);

console.log(check(5));
console.log(check(4));
console.log(check(3));
console.log(check(2));
console.log(check(1));

console.log(isAuthorizedUser([4, 5, 6])(10));
console.log(isAuthorizedUser(["A", "B", "C"])("C"));

// false
// false
// true
// true
// true

// false
// true
