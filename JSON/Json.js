/**
 * What is JSON?
 *JSON (JavaScript Object Notation) is a lightweight data interchange format that is commonly used for transmitting data between a server and a web application, as well as for storing and structuring data. It is designed to be easy for humans to read and write and easy for machines to parse and generate.

 JSON represents data in a key-value pair format, similar to how objects are represented in JavaScript.
 
 Here some example:-
 */

const json = {
  name: "John",
  id: 1,
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    postalCode: "10001",
  },
  hobbies: ["reading", "playing guitar", "hiking"],
};

// convert to object to json
const helloJson = JSON.stringify(json);
