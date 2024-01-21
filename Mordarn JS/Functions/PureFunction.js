/**
 * What is the Pure function?
 *
 * a pure function is a function (a block of code) that always returns the same result if the same arguments are passed.it doesn't depend on any state or data change during a program’s execution. rather, it only depends on its input arguments.
 */

// here all pure function

function pureFun(x, y) {
  return x + y;
}

const funcPure = (x, y) => x - y;

const pureFunc = (x, y) => {
  return x * y;
};
