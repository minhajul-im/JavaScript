/**
 * What is map?
Map is a built-in data structure that allows you to store key-value pairs.
 It is similar to an object, but with a few important differences. 
 The key can be any data type (including objects or functions), 
 not just strings or symbols as in objects. Moreover, 
 a map maintains the order of the entries, 
 whereas the order of properties in an object is not guaranteed.
*/
let map = new Map();

// set method used for adding in object map, when you set key & value definitely keys & value to be string, and if you give a number okay.
map.set("name", "Jack");
map.set("age", 22);
map.set("married", false);
map.set("contact", null);

// get method used for get value but you have to give key.
const getMap = map.get("married");

// has method used for checking weather the key has or not return boolean.
const hasMap = map.has("contact");

// size method used for checking size length.
const sizeMap = map.size;

// delete method used for deletion but you have to give a key return boolean.
const deleteMap = map.delete("age");

// clear method used for clearing all the map.
const clearMap = map.clear();

// map iterator
for (const [key, value] of map) {
  console.log(key, value);
}

console.log(map.get("name"));
