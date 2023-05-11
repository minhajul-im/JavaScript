//TODO:<-- ---------------- --> Object <-- ------------------- -->

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

// return all keys in array.
const sakibKeys = Object.keys(sakibObj);

// return all values in array.
const sakibValues = Object.values(sakibObj);

//return (key & value) in array.
const sakibEntries = Object.entries(sakibObj);

// you can use "For-Of-Loop" in Object.
for (const key of sakibKeys) {
  // console.log(key);
}
for (const value of sakibValues) {
  // console.log(value);
}
for (const [key, value] of sakibEntries) {
  // console.log(`"${key}" : "${value}"`);
}
//-----------> for in loop ------------>
for (const key in sakibObj) {
  // console.log(`${key} : ${sakibObj[key]}`);
}

const Student = {
  name: "Sakib",
  age: 35,
};
const createObj = Object.create(Student); // Object create & assign same method.
// It's totally different object returns an empty object but if you want to all operation do it.

const freezeMethod = {
  name: "Tamim",
  age: "36",
};
Object.freeze(freezeMethod); // You can do never anything to an object.
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

const { name: fname, age, ...occupation } = obj1; // destructuring.
