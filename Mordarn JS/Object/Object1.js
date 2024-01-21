//OBJECT

const sakibObj = {
  name: "Sakib",
  age: 35,
  virtu: "Handsome",
  type: "Cricketer",
};

// set key & value in sakibObj.
const setProperty = (sakibObj.country = "Bangladesh");

// get value use key name.
const getType = sakibObj?.type;

// delete key & value.
const deleteSakib = delete sakibObj.age;

// update value.
const updateSakib = (sakibObj.virtu = "Handsome & All-rounder");

const Student = {
  name: "Sakib",
  age: 35,
};
// Object create & assign same method.
// It's totally different object returns an empty object but if you want to all operation do it.
const createObj = Object.create(Student);

const freezeMethod = {
  name: "Tamim",
  age: "36",
};
// You can do never anything to an object.
Object.freeze(freezeMethod);
freezeMethod.occupation = "Cricketer";
freezeMethod.age = 35;
delete freezeMethod.age;

const obj1 = {
  name: "Sakib",
  age: 30,
  occupation: "Cricketer",
};
const obj2 = {
  name: "Sakib",
  age: 30,
};
const checkFor = Object.is(obj2, obj1);

// destructuring.
const { name: fname, age, ...occupation } = obj1;
