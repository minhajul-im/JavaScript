/**
 Hoisting is a mechanism by which variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is actually executed. This gives the impression that these declarations are "hoisted" to the top of their scope.
*/
// Hoisting is a JavaScript feature that moves all variable declarations to the top of their scope before execution. This means that variables are declared and accessible even before they are defined.

// variable hoisting => it was using before 2016.
console.log(name); // result undefined

var name = "minhaj";

console.log(name); // result correct

// function declaration
hoistingFunc(); // result correct

function hoistingFunc() {
  console.log("hello");
}

hoistingFunc(); // hello

// the variable sayHello is hoisted, but since its value is assigned as a function expression later in the code, trying to invoke it before the assignment results in a TypeError.
// hi(); // hi is not a function

hostedFunc();

var hostedFunc = function () {
  console.log("hi");
};

hostedFunc();
