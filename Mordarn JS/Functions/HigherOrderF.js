/**
 * what is higher order function?
 * a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. In other words, it operates on functions, treating them as data, just like any other values.

  Higher-order functions are a powerful concept in functional programming, as they enable more concise and expressive code. They allow you to abstract over actions, generalize behavior, and create reusable code components.
 */

const higherOrder = (a, hof) => {
  const time = hof(a, a);
  return time;
};

const hof = (a, b) => a * b;

console.log(higherOrder(10, hof));
