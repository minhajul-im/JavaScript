// for of loop you can use array and object.

const wordsArr = ["hello", "hi", "hey", "how", "what"];
for (const word of wordsArr) {
  console.log(word);
}

//implement for of loop on object

// for of loop implement object;
const objNames = {
  name1: "hello1",
  name2: "hello2",
  name3: "hello3",
  name4: "hello4",
  name5: "hello5",
  name6: "hello6",
};
//you can use this example, but if you want to keys, values & entries what you want.

// if you want keys
const object2 = Object.keys(objNames);

// if you want values
const object1 = Object.values(objNames);

//if you want both means keys & values
const object3 = Object.entries(objNames);

for (const name of object1) {
  console.log(name);
}
