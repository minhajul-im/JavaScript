// "this" using in object.

const obj = {
  //if wanna use this num key & value,
  num: 20,

  // you can use this syntax in the function
  sum: function (tk) {
    return this.num + tk;
  },

  // this syntax valid
  multi() {
    const times = (a) => a * this.num;

    return times;
  },

  // you can't access any property in this object when you using arrow function like
  plus: (number) => {
    // when you write num "error=> num is not defined"
    // return number - num
    return number + number;
  },

  // yeah you can you arrow function but you have to take regular function in arrow function, like,
  minus() {
    // 1st you have to take this then you can use arrow function.
    const num = this.num;

    const arrowFunc = (number) => number - num;

    return arrowFunc;
  },

  // template string using this keyword, you can access function
  str(name) {
    return ` Heyo, How's it going? I'm ${name}, I'm ${this.num} `;
  },
};

console.log(obj.sum(10)); //20

console.log(obj.multi()(10)); //100

console.log(obj.plus(10)); //20

// syntax simple you can check my closer folder
console.log(obj.minus()(100)); // 90

console.log(obj.str("MinhaJ"));
