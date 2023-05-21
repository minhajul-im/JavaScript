/**
 Hosting is a mechanism by which variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is actually executed. This gives the impression that these declarations are "hoisted" to the top of their scope.
*/

// variable hoisting => it was using before 2016.
console.log(name); // result undefined
var name = "minhaj";
console.log(name); // result correct

// function declaration
hello(); // result correct
function hello() {
  console.log("hello");
}
hello(); // hello

// the variable sayHello is hoisted, but since its value is assigned as a function expression later in the code, trying to invoke it before the assignment results in a TypeError.
// hi(); // hi is not a function
var hi = function () {
  console.log("hi");
};
hi();
