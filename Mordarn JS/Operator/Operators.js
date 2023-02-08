// Logical nd operator (&&)
let andOperator = 10 == 20 && 20 == 33; // false

// Logical OR operator (||)
let orOperator = 10 == 20 || 20 == 33; // false

// Logical Not (!)
let notLogical = !(10 == 20); // true

//TODO: JavaScript Special Operators

// Conditional ternary operator (__? true : false)
let ternaryOperator = x >= y ? true : false; // false

// Chaining Operator check if yes or not then use Chaining Operator.
const chainingObj = {
  name: {
    firstName: "Minhajul",
    lastName: "Islam",
  },
  age: "TwentyOne",
};

// example chaining operator on implement object.
const chainingOperatorObj = chainingObj?.name?.lastName;

//if there is no index  then return undefined not return error.
// example chaining operator on implement array.
const chainingArr = [10, 20, 30, 40];
const chainingOperatorArr = chainingArr?.at();

//when you use (...) in the function that is called rest Operator.
const restOperator = function (a, b, ...rest) {
  const x = a + b;
  return rest;
};
const rest = restOperator(1, 2, 3, 4, 5, 6, 7, 8);
