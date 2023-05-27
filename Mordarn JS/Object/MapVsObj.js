/**
 * new Map vs Object
 * Data Structure:-
 *  myObject = {}, creates object literal syntax.
 *  myMap = new Map(), creates hash-table data structure.
 *
 * Key Type & Key:-
 * myObject, keys in an object are limited string & symbols.
 * myMap, keys in a map can be any datatype, including object, function, number or boolean.
 *
 * Key Uniqueness:-
 * myObject, Object properties can have duplicate keys. The last assigned value for a key will be the one that remains.
 * myMap, Map keys are unique. If you try to add a duplicate key, it will overwrite the existing value.
 *
 * Built-in Method:-
 * myObject,Object have built-in methods like as, Object.keys/values/entries(), delete().
 * myMap,: Maps provide specific methods like set(), get(), has(), delete(), clear() and size for working with key-value pairs.
 *
 * Iteration:-
 * myObject, for in loop or for of loop.
 * myMap, for of loop or foreach.
 */

const a = (a) => a;

// Object
const myObject = {
  name: "John",
  age: 30,
  // (x) => x, "hello", // read key uniqueness article.
  func() {}, // you can declare this
  a: a("function"),
};
console.log(myObject);

// Map
const myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("a", a("function"));
myMap.set((x) => x, "hello");
myMap.set("func", (x) => {
  return x;
});
console.log(myMap);
