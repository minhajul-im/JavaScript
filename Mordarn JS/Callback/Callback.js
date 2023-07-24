/**
 * What is callback?
 *A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 */

// just for see on the display
const see = function (value) {
  console.log(value);
};

// function definition
const callback1 = function (sum1, sum2) {
  let sum = sum1 + sum2;

  return sum;
};

// call function
let result = callback1(5, 5);
see(result);

/// let see example function (it's a function definition)
const callback2 = function (sum1, sum2) {
  let sum = sum1 + sum2;

  see(sum); // definitely we call this "see" function
};

// call function
let result2 = callback2(5, 5);

/// let see actual call back function
const callback3 = function (sum1, sum2, callback) {
  // here two parameters & one function

  let sum = sum1 + sum2;

  callback(sum); // this is a function
};

// call function
let result3 = callback3(5, 5, see); // here we give only function name

// let  see another example
const callback4 = function (sum1, sum2, callback) {
  // here two parameters & one function
  let sum = sum1 + sum2;

  callback(sum); // this is a function
};

// call function
let result4 = callback4(5, 5, function (value) {
  //here is a callback actual function we can write here like this
  console.log(value);
});
