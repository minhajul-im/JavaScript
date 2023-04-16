// <-- ---------------TODO: More Example and Clear ConceptTODO:--------- -->

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

// when you check (have it or haven't it) return Boolean.
const includes = str.includes("d");

// return index number
const search = str.search("l");

// when you want to index number.
const indexOf = str.indexOf("d");

//when you want last index number
const lastIndexOf = str.lastIndexOf("d");
