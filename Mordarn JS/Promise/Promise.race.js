/**
 * How does Promise.race?
 * (Promise.race) will give as soon as the first Promise in the iterable settles (either fulfilled or rejected), regardless of whether it fulfills or rejects.
 */

/**
 * @param {return} not_array
 * promise1
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

const allPromises = Promise.race([promise1, promise2, promise3]);

const promiseRace = async () => {
  try {
    const res = await allPromises;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

promiseRace();
