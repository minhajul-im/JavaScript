// Explicitly Set Context:

// you can use call, bind & apply

const obj = {
  name: "Jonas",
  age: 24,
  country: "USA",
};

function forThisCall(greeting) {
  return `${greeting} ${this.name}. You're from ${this.country}, You're ${this.age}.`;
}

//The call method allows you to call a function with a specified this value and individual arguments. It takes the this value as its first argument and then accepts subsequent arguments, which are passed directly to the function.

const call = forThisCall.call(obj, "Heyoo, how's it going ");
console.log(call);

//The apply method is similar to call, but it accepts the this value as its first argument and an array (or an array-like object) of arguments as the second argument. The elements of the array are passed as individual arguments to the function.
function applyFunc(hi, bye) {
  return `${hi}, I'm ${this.name} from ${this.live}. I'm ${this.age}. ${bye}....`;
}
const obj1 = {
  name: "John",
  live: "Dhaka",
  age: 25,
};

const arr = ["Hi", "good bye, see you next"];

console.log(applyFunc.apply(obj, arr));
