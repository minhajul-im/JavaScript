const arr = [2, 3, 4, 5, 6, 7, 8, 9];
arr.push(10);// set last index in array.
arr.pop(); // delete last index in array.
arr.shift();//delete first index in array.
arr.unshift(1);// set first index in array.
const arrSlice = arr.slice(3, 5);
// return will new array(if you tell index number start & end).
const arrSplice = arr.splice(1, 3,);
// split delete, set whatever you want to do.
const arrLength = arr.length - 1; // check for length.
const lastIndex = arr.lastIndexOf(9); 
// check index number but you can tell any any value in array return index number.
const arrIncludes = arr.includes(9); // return boolean value.

const players = [
  {
    id: 'c6941175-cc4e-4c56-b13e-eeaabd914a51',
    name: 'Nasir',
    age: 34,
    contact: 'nasir@gmail.com'
  },
  {
    id: '3ff58ea0-4615-4225-a599-fddfe21ddbd0',
    name: 'Mosta',
    age: 28,
    contact: 'mosta@gmail.com'
  },
  {
    id: 'd16a8fea-627c-4268-a145-958ae132f106',
    name: 'Mash',
    age: 37,
    contact: 'mash@gmail.com'
  },
  {
    id: '7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75',
    name: 'Tamim',
    age: 31,
    contact: 'tamim@gmail.com'
  }
];

// CRUD: C => create, R => read, U => update, D => delete.

// create operation done.
const createMehedi = {
  id: '7f42e942-fbf2-4119-9d2f-776d496e4c40',
  name: 'Mehedi',
  age: 25,
  contact: 'mehedi@gmail.com',
}
players.push(createMehedi);
// read operation done.
const mosta = '3ff58ea0-4615-4225-a599-fddfe21ddbd0';
const index = players.find(id => id.id === mosta);
// update operation done.
const updateTamim = {
  name: 'Tamim Iqbal',
  email: 'iqbal@gmail.com',
};
const tamimId = '7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75';
const tamim = players.findIndex(id => id.id === tamimId);
players[tamim] = {
  ...players[tamim],
  ...updateTamim,
}
// delete operation start.
const nasirId = 'c6941175-cc4e-4c56-b13e-eeaabd914a51';
const nasirDelete = players.findIndex(id => id.id === nasirId);
players.splice(0, 1);

//console.log(players)

const persons = [
  {
    id: 'c6941175-cc4e-4c56-b13e-eeaabd914a51',
    name: 'Nasir',
    age: 34,
    contact: 'nasir@gmail.com'
  },
  {
    id: '3ff58ea0-4615-4225-a599-fddfe21ddbd0',
    name: 'Mosta',
    age: 28,
    contact: 'mosta@gmail.com'
  },
  {
    id: 'd16a8fea-627c-4268-a145-958ae132f106',
    name: 'Mash',
    age: 37,
    contact: 'mash@gmail.com'
  },
  {
    id: '7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75',
    name: 'Tamim',
    age: 31,
    contact: 'tamim@gmail.com'
  },
];
const myMap = persons.map(id => (id?.id));// return something.
const myFind = persons.find(name => (name?.name === 'Mosta'))
 // if you give a condition then all check then return.
const myFIlter = persons.filter(age => (age?.age < 30));
// if you give a condition all check then return.
persons.forEach(contact => contact?.contact);
// no return just for something show.
const getId = '3ff58ea0-4615-4225-a599-fddfe21ddbd0';
const myFindIndex = persons.findIndex(id => id?.id === getId); 
// return index number.


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
  return acc = acc + cur;
}, 0);

const [one, two, ...others] = reduces; //destructuring Array.
const spread = [1, 2, 3, 4, 5, 6,];
const spreadOperator = [...spread, 9, 10, 11];
// when you use (...) another place that is called spread Operator.

const restOperator = function (a, b, ...rest) {
  //when you use (...) in the function that is called rest Operator.
  const x = a + b;
  return rest;
}
const rest = restOperator(1, 2, 3, 4, 5, 6, 7, 8);

