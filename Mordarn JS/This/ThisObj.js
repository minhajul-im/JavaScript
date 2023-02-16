// "this" using in object.

const obj = {
  //if wanna use this num key & value,
  num: 10,

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
};

console.log(obj.sum(10));

console.log(obj.multi()(10));

console.log(obj.plus(10));
