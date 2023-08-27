// it's a number store in variable.
const number = 1234;

// "isNaN" checked, if is "number" not executed passed the next block.
let num = 100;
const checkIsNaN = isNaN(num) ? false : true; // true

// find minimum numbers
const minNumber = Math.min(12, 23, 40, 50); // 12

// find maximum number
const maxNumber = Math.max(20, 10, 40, 20); //40

//the square root of a number
const sqrtNumber = Math.sqrt(20); // 4.47

//A power, or index, is used when we want to multiply a number by itself several times
const powNumber = Math.pow(5, 2); // 25

// generate random number
const random = Math.random() * num; // 20.45

// return integer number
const parseInt = Number.parseInt(num); // 100

//return integer number doesn't exist dot after number.
const trunc = Math.trunc(-0.69); // -0
const floor = Math.floor(-0.6); // -1

// return integer but .5 up increment and .5 down that number.
const round = Math.round(50.5); // 51

// return absolute value.
const abs = Math.abs(random); // 100

//increment number
let pre = 10;
let preIncrement = ++pre; // 11
let postIncrement = pre++; // 11

//decrement number
let preDecrement = --pre; // 10
let postDecrement = pre--; // 10

// check finite number return boolean
const finite = Number.isFinite(num); // true

// return with decimal.
const parseFloating = parseFloat(num); // 100.19

// return decimal numbers what you want two digits or as many numbers if you want.
const toFixedNumber = num.toFixed(2); // 100.19

//It returns the string that represents the exponential notation of the given number.
const exponential = num.toExponential(); //1e+2
