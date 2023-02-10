const num1 = 5;
const num2 = 10;

// greater than condition.
const greaterThan = num1 > num2; // return false

// less than condition.
const lessThan = num1 < num2; // return true

// greater than or equal
const greaterThanOrEqual = num1 >= num2; // return false

// less than or equal
const lessThanOrEqual = num1 <= num2; // return true

// Type Check and value check.
const equalToEqual = num1 === num2;

//  check not equal.
const notEqual = num1 !== num2;

// or operator check true data if it can true data return true otherwise false.
const orCondition = num1 > 10 || num2 < 10;

// and operator check true then next end of the true return true. when fast data false never go to next data.
const andCondition = num1 === 20 && num2 > 5;

//The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.
const nullishCoalescing = false ?? "default";

const nullishCoalescing1 =
  num1 === null && num1 === undefined
    ? "if you wanna check the value (null or undefined) then you can use nullish-coalescing operator"
    : "short line nullish-coalescing";

/**
 * @param false (false, null, undefined, NaN, "", 0) => All are return False.
 * @param true ([], {}, "undefined", true, number, -734,) => All are return True.
 */

// having three elements, parts, or divisions being or consisting of an alloy of three elements
const ternaryOperator = num1 > 10 ? true : false;

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
