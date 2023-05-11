const arr = [2, 3, 4, 5, 6, 7, 8, 9];

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
