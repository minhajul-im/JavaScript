// <-- ---------------TODO: More Example and Clear ConceptTODO:--------- -->

const string = "String"; // you can any data store in string.

let name = "Minhajul Islam"; //let it's a variable you can change.
name = "Minhaj Muhammad";

const names = "Minhajul, Minhaj"; // const It's a variable never change.

//  Template String You can use multi line string and you can use function and condition whatever it is.
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
