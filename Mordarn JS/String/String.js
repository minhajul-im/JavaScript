const string = "String"; // you can any data store in string.

//let it's a variable you can change.
let name = "Minhajul Islam";
name = "Minhaj Muhammad";

// const It's a variable never change.
const names = "Minhajul, Minhaj";

//  Template String You can use multi line string and you can use function and condition whatever it is.
const str = `Bangladesh`;
const templateString = `Hello Bangladesh, It's a small country. Many population live in Bangladesh.`;

const minhaj = {
  name: {
    firstName: "Minhajul",
    lastName: "Islam",
  },
  age: ["twenty"],
};
const templateStringFunc = `Hey, I'm ${minhaj?.name?.firstName}
 ${minhaj?.name?.lastName}. I'm in now ${minhaj.age[0]}`;

// just for joining use this method.
const concat = str.concat(templateString);

// (start and end) space remove done.
const trimStr = "     minhaj      ";
// const trimStart = trimStr.trimStart();
// const trim = trimStr.trim();
// const trimEnd = trimStr.trimEnd();

console.log(trimStr.length);

// start to end slice
const slice = str.slice(1, 9);

// when you want to use split method(symbol, space, semicolon) return Array.
const split = templateString.split("");

// when you can check length
const strLength = str.length;

// when you want to (start and end) keep something. The first parameter is Max length and the second parameter is(symbol, number letter, whatever it is).
const padStart = str.padStart(15, "*");
const padEnd = str.padEnd(15, "*");

// when you want to check (what is the start and end) then you can use the method. return Boolean.
const startWith = str.startsWith("B");
const endWith = str.endsWith("a");

const replaceAll = templateString.replaceAll(`Bangladesh`, `Dhaka`);
// replaceAll all string
