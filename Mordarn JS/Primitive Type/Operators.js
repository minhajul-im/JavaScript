// TODO: JavaScript Arithmetic Operators

let x = 10,
  y = 20;
// Addition operator
let addition = x + y; // 30

// Subtraction operator
let subtraction = y - x; // 10

// Multiplication operator
let multiplication = x * y; //200

// Division operator
let division = y / x; // 2

// Modulus (remainder) operator
let modulus = 21 % x; // 1

// Increment operator (pre,post)
let increment = ++x; // 11

// Decrement operator (pre, post)
let decrement = --x; // 9

// TODO: JavaScript Comparison Operators

// Equal operator
let equal = x == y; // false

// Equal operator (check type)
let equalType = 20 === y; // true

// Not equal operator
let notEqual = x != "10"; // true

// Not equal operator (check type)
let notEqualType = x !== "10"; // false

// Greater than
let greater = x > y; // false

// Less than
let less = x < y; // true

// Greater than equal
let greaterEqual = x >= y; // false

// Less than equal
let lessEqual = x <= y; // true

// TODO: JavaScript Bitwise Operators

// Bitwise (&) operator
let bitwiseAnd = x & y; // binary number(0,1)

// Bitwise (or |) operator
let bitwiseOr = x | y; // binary number(0,1)

// Bitwise (XOR) operator
let bitwiseXOR = x ^ y; // binary number(0,1)

// Bitwise left shift
let bitwiseLeft = x << y; // 10485760

// Bitwise right shift
let bitwiseRight = y >> x; //0

// Bitwise right shift zero
let bitwiseZero = y >>> x; // 0

// TODO: JavaScript Logical Operators

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
