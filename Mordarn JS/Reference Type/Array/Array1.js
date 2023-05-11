const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// set last index in array.
arr.push(10);

// delete last index in array.
arr.pop();

//delete first index in array.
arr.shift();

// set first index in array.
arr.unshift(1);

// return will new array(if you tell index number start & end).
const arrSlice = arr.slice(3, 5);

// split delete, set whatever you want to do.
const arrSplice = arr.splice(1, 3);

// check for length.
const arrLength = arr.length - 1;

// check index number but you can tell any any value in array return index number.
const lastIndex = arr.lastIndexOf(9);

// return boolean value.
const arrIncludes = arr.includes(9);

//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
const copyWithin = arr.copyWithin(2, 5);

//It creates an iterator object and a loop that iterates over each key/value pair.
const entries = Object.entries(arr); // bracket in object.

// Every method like as loop check condition if condition okay then return true otherwise false.
const x = (a) => a < 100;
// every method called in must given function
const every = arr.every(x);

// If you have a multidimensional array then you wanna a one-dimensional array then use this method.
const array = [[1], [2], [3]];
// return a one-dimensional array
const flat = array.flat();

// It's work flat & map method combination
const flatMap1 = flat.flatMap((num) => (num === 2 ? 2 + 10 : 1));
const flatMap2 = flat.flatMap((num) => [num * 2]);

// It's work fill-up any value
const fill = flat.fill(5);
