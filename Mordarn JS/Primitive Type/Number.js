//TODO: <-- ----------------Number --------------------- -->a

// it's a number store in variable.
const number = 1234;

// "isNaN" checked, if is "number" not executed passed the next block.
const num = 100;
const checkIsNaN = isNaN(num) ? `Not a Number` : `It's Number`;

// plus
const plus = number + num;

// minus
const minus = number - num;

// multiply
const multiply = number * num;

// divided
const divided = number / num;

// find minimum numbers
const minNumber = Math.min(12, 23, 40, 50);

// find maximum number
const maxNumber = Math.max(20, 10, 40, 20);

//the square root of a number
const sqrtNumber = Math.sqrt(20);

//A power, or index, is used when we want to multiply a number by itself several times
const powNumber = Math.pow(5, 2);

// generate random number
const random = Math.random() * num;

// return integer number
const parseInt = Number.parseInt(num);

//return integer number doesn't exist dot after number.
const trunc = Math.trunc(-0.69);
const floor = Math.floor(-0.6);

// return integer but .5 up increment and .5 down that number.
const round = Math.round(50.5);

// return absolute value.
const abs = Math.abs(random);

//increment number
let pre = 10;
let preIncrement = ++pre;
let postIncrement = pre++;

//decrement number
let preDecrement = --pre;
let postDecrement = pre--;

// return not with decimal.
const parseInteger = parseInt(num);

// return with decimal.
const parseFloating = parseFloat(num);
