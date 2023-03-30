//TODO:<-- ---------------- --> Object <-- ------------------- -->

const sakibObj = {
  name: 'Sakib',
  age: 35,
  virtu: 'Handsome',
  type: 'Cricketer',
};
/**
const setProperty = sakibObj.country = 'Bangladesh';// set key & value in sakibObj.
const getType = sakibObj?.type; // get value use key name.
const deleteSakib = delete sakibObj.age; // delete key & value.
const updateSakib = sakibObj.virtu = 'Handsome & All-rounder';// update value. */
const sakibKeys = Object.keys(sakibObj); // return all keys in array.
const sakibValues = Object.values(sakibObj); // return all values in array.
const sakibEntries = Object.entries(sakibObj);//return (key & value) in array.


// you can use "For-Of-Loop" in Object.
for (const key of sakibKeys) {
  // console.log(key);
};
for (const value of sakibValues) {
  // console.log(value);
};
for (const [key, value] of sakibEntries) {
  // console.log(`"${key}" : "${value}"`);
}
//-----------> for in loop ------------>
for (const key in sakibObj) {
  // console.log(`${key} : ${sakibObj[key]}`);
}


const Student = {
  name: 'Sakib',
  age: 35,
}
const createObj = Object.create(Student); // Object create & assign same method.
// It's totally different object returns an empty object but if you want to all operation do it.

const freezeMethod = {
  name: 'Tamim',
  age: '36',
};
Object.freeze(freezeMethod);// You can do never anything to an object.
freezeMethod.occupation = 'Cricketer';
freezeMethod.age = 35;
delete freezeMethod.age;

const obj1 = {
  name: 'Sakib',
  age: 30,
  occupation: 'Cricketer',
}
const obj2 = {
  name: 'Sakib',
  age: 30,
}
const checkFor = (Object.is(obj2, obj1));

const { name: fname, age, ...occupation } = obj1;// destructuring.

// CRUD OPERATION 

const cricketers = { 
  'c6941175-cc4e-4c56-b13e-eeaabd914a51':{
    id: 'c6941175-cc4e-4c56-b13e-eeaabd914a51',
    name: 'Nasir',
    age: 34,
    contact: 'nasir@gmail.com'
  },
  '3ff58ea0-4615-4225-a599-fddfe21ddbd0':{
    id: '3ff58ea0-4615-4225-a599-fddfe21ddbd0',
    name: 'Mosta',
    age: 28,
    contact: 'mosta@gmail.com'
  },
  'd16a8fea-627c-4268-a145-958ae132f106':{
    id: 'd16a8fea-627c-4268-a145-958ae132f106',
    name: 'Mash',
    age: 37,
    contact: 'mash@gmail.com'
  },
  '7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75': {
    id: '7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75',
    name: 'Tamim',
    age: 31,
    contact: 'tamim@gmail.com'
  }
};
// CRUD: C => create, R => read, U => update, D => delete.

// create operation done.
const create = {
  '7f42e942-fbf2-4119-9d2f-776d496e4c40': {
    id: '7f42e942-fbf2-4119-9d2f-776d496e4c40',
    name: 'Mehedi',
    age: 25,
    contact: 'mehedi@gmail.com',
  },
}
const id = create["7f42e942-fbf2-4119-9d2f-776d496e4c40"].id;
cricketers[id] = create["7f42e942-fbf2-4119-9d2f-776d496e4c40"];
// read operation done.
const mash = 'd16a8fea-627c-4268-a145-958ae132f106';
const getMash = cricketers[mash];
// update operation done.
const updateMash = {
  name: 'Mashrafi Bin Mortuza',
  age: 40,
}
cricketers[mash] = {
  ...cricketers[mash],
  ...updateMash,
}
// delete operation done.
const nasir = 'c6941175-cc4e-4c56-b13e-eeaabd914a51';
delete cricketers[nasir];

// console.log(cricketers)

