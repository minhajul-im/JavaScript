/**
 * What is the Factory function?
 * A factory function is a design pattern in JavaScript where a function is used to create and return objects. Instead of using constructors or classes to create instances of objects, a factory function encapsulates the object creation process within the function itself. The primary purpose of a factory function is to produce new objects with a consistent structure and behavior.
 */

const sum = (a, b) => a * b;

const factoryFunc = (name, email) => {
  return {
    name: name,
    email: email,

    // if you can you use parameter.
    contact: () => {
      return `Hey, I'm ${name}. This is my email ${email}!`;
    },

    // if you wanna different parameter you can use it.
    ageCal: (birthYear, curYear) => {
      return curYear - birthYear;
    },

    // if you want use another function
    addSum: sum(10, 10),
  };
};

const minhaj = factoryFunc("MinhaJ", "minhaj@gmail.com");

console.log(minhaj.contact());

console.log(minhaj.ageCal(2002, 2023));

console.log(minhaj.addSum);

/**
 * factory functions provide a clean and flexible approach to creating objects in JavaScript, especially when you want to create multiple instances with common behaviors and properties without the overhead of constructor functions or classes. They are particularly popular in functional programming paradigms and scenarios where simplicity and reusability are essential.
 */
