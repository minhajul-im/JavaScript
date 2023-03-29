// <-- ---------------TODO: More Example and Clear ConceptTODO:--------- -->

const string = 'String'; // you can any data store in string.
const number = 1111; // you can store any number.

let name = 'Minhajul Islam'; //let it's a variable you can change.
name = 'Minhaj Muhammad';

const names = 'Minhajul, Minhaj'; // const It's a variable never change.

const num1 = 5; // variable for example.
const num2 = 10; //variable for example.

const greaterThan = num1 > num2; // greater than condition.
const lessThan = num1 < num2; // less than condition.

const greaterThanOrEqual = num1 >= num2 // greater than or equal
const lessThanOrEqual = num1 <= num2 // less than or equal 

const equalToEqual = num1 === num2; // Type Check and value check.
const notEqual = num1 !== num2; //  check not equal.

const orCondition = num1 > 10 || num2 < 10; // return true
const andCondition = num1 === 20 && num2 > 5; // return true

const orOperator = false || 'default'; // return always true.
const nullishCoalescing = false ?? 'default'; // return any kind of data.
// nullish coalescing operator (null & undefined) without any kind data executed.

//TODO: (false, null, undefined, NaN, "", 0) => All are return False.
// TODO:([], {}, "undefined", true, number, -734,) => All are return True.
const falseValue = 0;
if (falseValue) { false } else { true };

// it is a if else statement.
const truthy = true;
if (truthy) {
  const a = `if value is true then it's executed.`
} else if (!truthy) {
  const b = `! this symbol If it ware true then it would change.`;
} else {
  const c = `when all aren't true then come to me.`;
}

const ternaryOperator = num1 > 10 ? true : false; // you can any kind of data check.

const chainingObj = {
  name: {
    firstName: 'Minhajul',
    lastName : 'Islam'
  },
  age: 'TwentyOne',
}
const chainingOperatorObj = chainingObj?.name?.lastName;
// Chaining Operator check if yes or not then use Chaining Operator.

const chainingArr = [10, 20, 30, 40];
const chainingOperatorArr = chainingArr?.at(4);
//if there is no index length then return undefined not return error.


///TODO: <-- --------------- String ------------- -->

const templateString = `Hello Bangladesh, It's a small country. Many population live in Bangladesh.`;
//  Template String You can use multi line string and you can use function and condition whatever it is.
const templateStringFunc = `Hey, I'm ${chainingObj?.name?.firstName} ${chainingObj?.name?.lastName}. I'm in now ${chainingArr?.at(1)}`;

const str = 'Bangladesh';

const includes = str.includes('d');
// when you check (have it or haven't it) return Boolean.

const concat = str.concat(templateString);// just for joining use this method.

const search = str.search('l'); // return index number 
const indexOf = str.indexOf('d'); // when you want to index number.
const lastIndexOf = str.lastIndexOf('d');

const trim = str.trim();
const trimStart = str.trimStart(); // (start and end) space remove done.
const trimEnd = str.trimEnd();

const slice = str.slice(4, 8); // start to end slice

const split = templateString.split('');
// when you want to use split method(symbol, space, semicolon) return Array.


const strLength = str.length;// you can check length

const padStart = str.padStart(15, '*'); 
// when you want to (start and end) keep something. The first parameter is Max length and the second parameter is(symbol, number letter, whatever it is).
const padEnd = str.padEnd(15, '*');

const startWith = str.startsWith('B');
// when you want to check (what is the start and end) then you can use the method. return Boolean.
const endWith = str.endsWith('a');

const replaceAll = templateString.replaceAll(`Bangladesh`, `Dhaka`); 
// replaceAll all string