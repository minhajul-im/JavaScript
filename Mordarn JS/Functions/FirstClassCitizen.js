/**
 * What is First Class Citizen?
 *Assigned to variables: You can assign a function to a variable, just like any other value.

Passed as arguments to other functions: You can pass functions as arguments to other functions.

Returned as values from other functions: Functions can be returned from other functions. 

Stored in data structures: Functions can be stored in arrays, objects, or other data structures.
 */

/**
 * Majors 3 items,
 *
 * A function cna be store variable(array, object, function);
 *
 * Pass as an argument ( take a parameter);
 *
 * return from another function;
 */

// 1. Number case,
function store() {
  return `A function cna be store variable(array, object, function)`;
}

// store in variable
const variable = store;
variable();

// store in array
const array = ["minhajul", store];
array[1]();

// sore in object
const object = {
  name: "minhajul",
  store,
};
object.store();

// 2. Number Case
function argument(parameter) {
  return `Pass an  ${parameter}`;
}

argument(`argument`);

// 3. Number Case
function anotherFunc(func) {
  func();
}

anotherFunc(function () {
  console.log(`return from another function`);
});
