/**
 * How does work Promise.any?
 * (Promise.any) will wait for the first result (fulfilled)  until the can't.
 * if there is not (fulfilled) the result will return the aggregate error.
 */

/**
 * @return {two_type}
 * 1. [AggregateError: All promises were rejected]
 * 2. promise1
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise1"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise2"), 3000);
});

const promise3 = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("promise3"), 1000);
});

const allPromises = Promise.any([promise1, promise2, promise3]);

const promiseAny = async () => {
  try {
    const res = await allPromises;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

promiseAny();

/**
 * reject any
 */

const promise4 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise4"), 1000);
});

const promise5 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise5"), 3000);
});

const promise6 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise6"), 6000);
});

const allPromisesReject = Promise.any([promise4, promise5, promise6]);

const anyRejectFunc = async () => {
  try {
    const data = await allPromisesReject;
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log(error.errors); // [ 'promise4', 'promise5', 'promise6' ]
  }
};

anyRejectFunc();
