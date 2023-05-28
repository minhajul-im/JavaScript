/**
 * What is reference error?
 *A reference error in JavaScript occurs when you try to access a variable or object that does not exist or is not currently in scope. It indicates that the reference being accessed is invalid or undefined.


 Reference errors are common mistakes that can occur when working with variables, objects, or their properties. It's important to be mindful of variable scoping and ensure that all required variables are properly defined before accessing them in your JavaScript code.
 */

// console.log(ref);
const ref = "reference error";

const object = null;
// console.log(object.name);

function reference() {
  console.log(refErr);
  function ref() {
    const refErr = "reference error";
  }
  ref();
}
// console.log(reference())
