/*
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

//Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
/*
 When a function is used as a constructor function using the new keyword, this refers to the newly created instance of the object being constructed.
 */
const person = new Person(`John`, 21);
console.log(`Hello, I'm ${person.name} & I'm ${person.age}`);

// you can use call, bind & apply
const obj1 = {
  name: "John",
  age: 25,
  live: "Dhaka",
};
const obj2 = {
  name: "Jonas",
  age: 24,
  country: "USA",
};

function useThis() {
  // console.log(`Hello ${this.name} from ${this.live}, I'm ${this.age}.`); // call
  console.log(`Hello ${this.name} from ${this.country}, I'm ${this.age}.`); // apply
}
useThis.call(obj1); // call only call

useThis.apply(obj2); // apply only call

// "bind" is slightly different, you have to store in a variable and then call.
const bind = useThis.bind(obj2);
bind();
