/**
 * What is async?
 * async is a keyword in javascript & when creating an async function then need the async. an async function always returns value inside the wrap of the promise.
 */

const asyncFunc = async () => {
  return "Return value inside the wrap of the promise!";
};

//Promise {<fulfilled>: 'Return value inside the wrap of the promise!'}
asyncFunc();

const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

const promiseFunc = () => {
  return promise;
};

// return Promise {<fulfilled>: 'Promise resolved'}
const getPromiseValue = promiseFunc().then((resolveValue) => {
  console.log(resolveValue); // Promise resolved
});
// when you want to value you have to use then
