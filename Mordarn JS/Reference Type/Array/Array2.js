const persons = [
  {
    id: "c6941175-cc4e-4c56-b13e-eeaabd914a51",
    name: "Nasir",
    age: 34,
    contact: "nasir@gmail.com",
  },
  {
    id: "3ff58ea0-4615-4225-a599-fddfe21ddbd0",
    name: "Mosta",
    age: 28,
    contact: "mosta@gmail.com",
  },
  {
    id: "d16a8fea-627c-4268-a145-958ae132f106",
    name: "Mash",
    age: 37,
    contact: "mash@gmail.com",
  },
  {
    id: "7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75",
    name: "Tamim",
    age: 31,
    contact: "tamim@gmail.com",
  },
];

// return something.
const myMap = persons.map((id) => id?.id);

// if you give a condition then all check then return.
const myFind = persons.find((name) => name?.name === "Mosta");

// if you give a condition all check then return.
const myFIlter = persons.filter((age) => age?.age < 30);

// no return just for something show.
persons.forEach((contact) => contact?.contact);

// return index number.
const getId = "3ff58ea0-4615-4225-a599-fddfe21ddbd0";
const myFindIndex = persons.findIndex((id) => id?.id === getId);

// "reduce" have taken two parameters. (acc, cur) any kind of operation on "cur" value but at the end of the day return  "acc" . "cur" will value push in "acc".
const reduces = [1, 2, 3, 4, 5, 6, 8];
const myReduces = reduces.reduce((acc, cur) => {
  if (cur % 2 === 1) acc[cur] = cur;

  return acc;
}, {});

const myReduce = reduces.reduce((acc, cur) => {
  if (cur % 2 === 0) acc.push(cur);

  return acc;
}, []);

const sumReduce = reduces.reduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);

//destructuring Array.
const [one, two, ...others] = reduces;

// when you use (...) another place that is called spread Operator.
const spread = [1, 2, 3, 4, 5, 6];
const spreadOperator = [...spread, 9, 10, 11];

//when you use (...) in the function that is called rest Operator.
const restOperator = function (a, b, ...rest) {
  const x = a + b;
  return rest;
};
restOperator(1, 2, 3, 4, 5, 6, 7, 8);
