const num1 = 5;
const num2 = 10;

// greater than condition.
const greaterThan = num1 > num2;

// less than condition.
const lessThan = num1 < num2;

// greater than or equal
const greaterThanOrEqual = num1 >= num2;

// less than or equal
const lessThanOrEqual = num1 <= num2;

// Type Check and value check.
const equalToEqual = num1 === num2;

//  check not equal.
const notEqual = num1 !== num2;

// or operator check true data if it can true data return true otherwise false.
const orCondition = num1 > 10 || num2 < 10;

// and operator check true then next end of the true return true. when fast data false never go to next data.
const andCondition = num1 === 20 && num2 > 5;

//The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand
const nullishCoalescing = false ?? "default";

/**
 * @param false (false, null, undefined, NaN, "", 0) => All are return False.
 * @param true ([], {}, "undefined", true, number, -734,) => All are return True.
 */
