/**
 * What is promise?
 *A promise has three states, pending, fulfilled, and rejected. When a promise is first created, it is in the pending state. When the asynchronous operation completes successfully, the promise is fulfilled. When the asynchronous operation fails, the promise is rejected.
 */

console.log("hello 1");

let condition = false;

// promise definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (condition) {
      resolve("success");
    } else {
      reject("failed");
    }
  }, 2000);
});

//promise call
promise
  .then(function (success) {
    console.log(success);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("hello 2");
