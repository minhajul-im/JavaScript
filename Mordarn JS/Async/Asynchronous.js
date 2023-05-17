/**
 * What is Asynchronous function?
 *Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.


 *Asynchronous functions can improve the user experience by making your code more responsive, avoiding blocking the main thread, easier to read and understand.
 */

// let see example
console.log("hello world 1");

// set time out must to parameter first function & second time(milliseconds)
// setTimeout(function(){}, milliseconds)
setTimeout(() => {
  console.log("hello world 2");
}, 2000);

console.log("hello world 3");

// let see another example

console.log("hello Bangladesh1");

// it's like set time out function but it's a continue executed time after time.
// setInterval (function(){}, time)
setInterval(() => {
  console.log("hello Bangladesh2");
}, 11110000);

console.log("hello Bangladesh3");
