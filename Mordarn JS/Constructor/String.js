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
const splitString = string.split("");

// implementation string with function, but not need this function you can use simple string what js given normal function.
const strFunc = (str) => {
  if (str === "string") {
    return new String(str).toUpperCase();
  } else {
    return str.length;
  }
};

const funcString = strFunc("string");

console.log(funcString);

/**
 *  you can use object methods with string objects, but it's generally recommended to use string literals for strings whenever possible. String objects can be useful in specific situations, such as when you need to explicitly convert values to strings or when you're dealing with object-oriented programming concepts. However, for most everyday string manipulations, using string literals is more intuitive and efficient.
 */
