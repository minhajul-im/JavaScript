/**
 * What is the constructor new Function?
 * The new Function constructor is a feature in JavaScript that allows you to create functions dynamically at runtime by using a string to define the function's body. It provides a way to define and execute functions on the fly using strings of JavaScript code.
 */

//  if you wanna use the constructor function most important parameters all have to be string, all parameters could be a number or any type but must you have to take a string or backtick. the last parameter deserves a function,
const sum = new Function("a", "b", `return a + b`);
console.log(sum(20, 30));

/**
 * how does it work?
 *
 * the Function constructor is used to dynamically create a new function. The first argument passed to the constructor is the list of parameter names ("multi"), and the second argument is the function body as a string template.
 */

const obj = {
  a: 10,
  b: 30,
};

const func = ({ ...num }, multi) => {
  const newFunc = new Function("multi", `return ${num.a}${multi}${num.b} `);

  const result = newFunc(multi);

  console.log(result);
};

func(obj, "*");
