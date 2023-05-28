/**
 * What is type error?
 A type error in JavaScript occurs when an operation is performed on a value of an unexpected type or when a method is called on an object that does not support it. It indicates a mismatch between the expected and actual data types or a violation of the type system in JavaScript.

 Overall, when you mistake the string methods used on number then will throw a type error.
 */

const type = 100;
// console.log(type.toLocaleUpperCase()); // type error

const object = {
  name: "John",
  age: 20,
};
console.log(object.name + object.age); // type error

const num = "num";
console.log(Math.floor(num)); // type error
