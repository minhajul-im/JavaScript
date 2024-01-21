/**
 * What is recursion?
 * Recursion refers to the process of a function calling itself as part of its execution. It's a powerful programming technique used to solve problems that can be broken down into smaller, similar sub-problems. Recursion is widely used in various algorithms and tasks, such as traversing data structures, solving mathematical problems, and more...
 * 
 * Base Case: This is the termination condition that specifies when the recursion should stop. Without a base case, the recursive function would continue to call itself indefinitely, leading to a stack overflow error.

Recursive Case: In this part of the function, it calls itself with a modified version of the problem, making the problem smaller and eventually reaching the base case.
 */

const x = [10, 20, 30];

function recursive(x, i) {
  if (i === x.length - 1) {
    return x[i];
  }

  return x[i] + recursive(x, i + 1);
}
const sum = recursive(x, 0);
console.log(sum);
