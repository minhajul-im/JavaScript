/*
 *  How does work Promise.all?
 *  (Promise.all)will take maximum time for the promise.
 *  because will wait for all of them to finish (fulfill), then execute all promises.
 */
const promise1 = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("promise1"), 1000);
});

const promise2 = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("promise2"), 3000);
});

const promise3 = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("promise3"), 6000);
});

const allPromisesResolve = Promise.all([promise1, promise2, promise3]);

const asyncResolveFunc = async () => {
  try {
    const res = await allPromisesResolve;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
asyncResolveFunc();

/**
 *  if anyone's promise has been rejected then all promises will be rejected.
 *  If any promise is rejected (Promise.all), it takes minimum time for rejection.
 */
const promise4 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise1"), 1000);
});

const promise5 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise2"), 3000);
});

const promise6 = new Promise((_resolve, reject) => {
  setTimeout(() => reject("promise3"), 6000);
});

const allPromisesReject = Promise.all([promise1, promise2, promise3]);

const asyncRejectFunc = async () => {
  try {
    const res = await allPromisesReject;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
