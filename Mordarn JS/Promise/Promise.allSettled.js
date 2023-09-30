/**
 * How does Promise.allSettled?
 * Promise.allSettled, on the other hand, will wait for all the promises in the array to settle (either fulfill or reject) and then return an array of promise settlement results.
 * Each result in the array will be an object with two properties!
 */

/**
 * @param {return} like_this
 * [ { status: 'fulfilled', value: 'promise1' },
  { status: 'rejected', reason: 'promise2' },
  { status: 'fulfilled', value: 'promise3' } ]
 */

const promise1 = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("promise1"), 1000);
});

const promise2 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise2"), 3000);
});

const promise3 = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("promise3"), 6000);
});

const allPromises = Promise.allSettled([promise1, promise2, promise3]);

const promiseAllSettled = async () => {
  try {
    const res = await allPromises;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

promiseAllSettled();
