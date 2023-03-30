//TODO: <-- ----------------Number --------------------- -->

const num = 100;
const checkIsNaN = isNaN(num) ? `Not a Number` : `It's Number`;
// "isNaN" checked, if is "number" not executed passed the next block.

const minNumber = Math.min(12, 23, 40, 50);
const maxNumber = Math.max(20, 10, 40, 20);

const sqrtNumber = Math.sqrt(20);
const powNumber = Math.pow(5,2);

const addition = num + sqrtNumber;
const subtraction = num - powNumber;
const multiplication = powNumber * sqrtNumber;
const divided = num / powNumber;
const modulus = num % sqrtNumber;

const random = Math.random() * num;
const trunc = Math.trunc(-0.69);// return integer number not exist dot after number.
const floor = Math.floor(-0.6);//^^
const round = Math.round(50.5); // return integer but .5 up increment and .5 down that number.
const abs = Math.abs(random);// return absolute value.

// ------------ -->Increment <-- ---------------
let pre = 10;
let preIncrement = ++pre;
let postIncrement = pre++;
// -------------- --> Decrement <-- --------------
let preDecrement = --pre;
let postDecrement = pre--;

const parseInteger = parseInt(num); // return not with decimal.
const parseFloating = parseFloat(num);// return with decimal.

const toFixedNumber = num.toFixed(2);
// return decimal numbers what you want two digits or what you want.

//TODO: ---------------- --> Loop <-- ---------------------

// for loop 
let forLoop = 10;
for (let i = 0; i <= forLoop; i++){
  let loop = i;
}

//while loop
let whileLoop = true;
while (whileLoop) {
  const statement = `when the condition is true he continues infinitely he doesn't know when I'd stop. that's why the condition in your hand if you want to stop then use the break method or false.`

  whileLoop = false;
  break;
}

// do while loop 
let doWhileLoop = true;
do {
  const execute = `firs, it executes then you can check the next condition`;
} while (doWhileLoop) {
  const statement = `above check "while loop" same condition.`;
}
