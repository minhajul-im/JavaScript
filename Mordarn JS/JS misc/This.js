/**
 “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object,
*/

// Object in use this keyword

const obj = {
  name: "John",
  age: 25,
  useThis() {
    // correct result because inside the object. it can be many nested objects. you can access "live".
    console.log(
      `Hello ${this.name}, how are you? I live in ${this.anotherObj.inSideObj.live}`
    );
  },
  anotherObj: {
    country: "Bangladesh",
    inSideObj: {
      live: "Dhaka",
      nestedObj: {
        nestedFn() {
          // return undefined because "live" is not inside this object, "live" outside that's why undefined.
          console.log(`Hello, ${this.live}`);
        },
      },
    },
  },
};
console.log(obj.useThis());
console.log(obj?.anotherObj?.inSideObj?.nestedObj?.nestedFn());
