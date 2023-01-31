/**
 * The String constructor in JavaScript works like any other constructor function. It creates new instances of the String object, allowing you to work with strings as objects with associated methods and properties. Let's break down how it works step by step:
 */

// look likes

const string = new String("hello String Constructor");

/**
 * Yes, in JavaScript, instances created using the String constructor are considered objects. They are instances of the String object type. This is a core concept of JavaScript's object-oriented nature, where different data types (including strings) can be treated as objects with associated properties and methods.
 */

// you can all string methods use

const length = string.length;

const strFunc = (str) => {
  if (str === "string") {
    return new String(str).toUpperCase();
  } else {
    return str.length;
  }
};

const funcString = strFunc("string");

console.log(funcString);
