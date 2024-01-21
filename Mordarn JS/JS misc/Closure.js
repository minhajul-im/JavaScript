/**
 * What is closure?
 * A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing. In simpler terms, a closure "closes over" the variables it references, preserving their values and allowing them to be accessed later.
 */

function closureFunc() {
  const outer = "outer function";

  function innerFunc() {
    const inner = "inner function";

    function nestedInnerFunc() {
      const nested = "nested inner function";

      return inner;
    }
    console.log(outer);

    return nestedInnerFunc;
  }

  return innerFunc;
}

const closure = closureFunc()()();

console.log(closure);
console.log(typeof closure);
