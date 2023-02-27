// Explicitly Set Context:

// you can use call, bind & apply
const obj1 = {
  name: "John",
  age: 25,
  live: "Dhaka",
};

const obj2 = {
  name: "Jonas",
  age: 24,
  country: "USA",
};

function forThisCall(greeting) {
  return `${greeting} ${this.name}. You're from ${this.country}, You're ${this.age}.`;
}

//The call method allows you to call a function with a specified this value and individual arguments. It takes the this value as its first argument and then accepts subsequent arguments, which are passed directly to the function.

const call = forThisCall.call(obj2, "Heyoo, how's it going ");
console.log(call);
