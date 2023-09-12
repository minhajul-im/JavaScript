/**
 * What is async?
 * async is a keyword in javascript & when creating an async function then need the async. an async function always returns value inside the wrap of the promise.
 */

const asyncFunc = async () => {
  return "Return value inside the wrap of the promise!";
};

asyncFunc(); //Promise {<fulfilled>: 'Return value inside the wrap of the promise!'}
