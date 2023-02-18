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
};

console.log(obj.sum(10));

console.log(obj.multi()(10));
