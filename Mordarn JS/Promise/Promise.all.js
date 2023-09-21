/*
 *  How does work Promise.all?
 *  Promise.all take maximum time in all promises then execute the all promise.
 *  but if anyone's promise is rejected then all promises are rejected. that is the concept.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise1"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promise2"), 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise3"), 6000);
});

const allPromises = Promise.all([promise1, promise2, promise3]);
console.log(allPromises); // actually its return a promise

/**
 *  if all promises are resolved //  ['promise1', 'promise2', 'promise3']
 *  if anyone's promise is rejected// Uncaught (in promise) promise2
 */

allPromises.then((value) => console.log(value));

const asyncFunc = async () => {
  const res = await allPromises;
  console.log(res);
};
asyncFunc();
