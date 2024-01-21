/**
 * What is Set?
Set is a built-in data structure that represents a collection of unique values. It can store any type of value, such as numbers, strings, objects, or even other sets. The main characteristic of a set is that it does not allow duplicate values, meaning each value can only appear once in the set.


Sets provide methods for adding elements, removing elements, checking if an element exists, and iterating over the elements. They offer efficient operations for membership testing, insertion, and deletion. Sets also have properties that give information about their size.
*/

const set = new Set();

// add method used for add in set
set.add("a");
set.add("b");
set.add(true);
set.add(10);
set.add("minhaj");

// has method used for checking key or value in set return boolean
const has = set.has();

// size method used for checking size, but it's not a function
const sizeSet = set.size;

// typeof method used for checking type
const typeSet = typeof set;

// delete method used for specific data
const deleteSet = set.delete("a");

// clear method used for all set clear
const clearSet = set.clear();

console.log(set);
