// "this" using in object.

const obj = {
  //if wanna use this num key & value,
  num: 10,

  // you can use this syntax in the function
  sum: function (tk) {
    return this.num + tk;
  },
};

console.log(obj.sum(10));
