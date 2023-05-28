/**
 * What is the range error?
  A RangeError in JavaScript occurs when a value is not within the acceptable range or bounds for a particular operation or data type. It indicates that a value is outside the range of values that can be handled by a specific function or operation.

  when you have forgotten to give the base case on the function, means condition.
 */

function recursion(num) {
  // you have to give base case
  if (num <= 0) return;

  console.log(num);

  recursion(num - 1);
}
console.log(recursion(10));
