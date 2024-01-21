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

console.log(applyFunc.apply(obj1, arr));

/**
 * bind:
The bind method returns a new function with the specified this value, but it doesn't immediately execute the function. Instead, it creates a new function that, when called, will have the original function's this value permanently set to the provided value.
 */

function bindFunc(hi, bye) {
  return `${hi}, I'm ${this.name} from ${this.live}. I'm ${this.age}. ${bye}....`;
}

const args = ["Hey", "have a good day..."];

// bind created a function but when need your function you can access that time.
const bind = bindFunc.bind(obj1);

console.log(bind(args.at(0), args.at(1)));
