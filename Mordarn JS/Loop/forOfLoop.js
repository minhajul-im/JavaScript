// for of loop you can use array and object.

const wordsArr = ["hello", "hi", "hey", "how", "what"];
for (const word of wordsArr) {
  console.log(word);
}

// you can use "For-Of-Loop" in Object.
const objNames = {
  name1: "hello1",
  name2: "hello2",
  name3: "hello3",
  name4: "hello4",
  name5: "hello5",
  name6: "hello6",
};
//you can use this example, but if you want to keys, values & entries what you want.

// return all keys in array.
const sakibKeys = Object.keys(objNames);
for (const key of sakibKeys) {
  console.log(key);
}

// return all values in array.
const sakibValues = Object.values(objNames);
for (const value of sakibValues) {
  console.log(value);
}

//return (key & value) in array.
const sakibEntries = Object.entries(objNames);
for (const [key, value] of sakibEntries) {
  console.log(`"${key}" : "${value}"`);
}
