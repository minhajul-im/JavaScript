// for in loop on object..

const obj = {
  name: "for in loop",
  type: "object in loop",
};

const forInLoop = (obj) => {
  for (const key in obj) {
    console.log(key, obj[key]);
  }
};
forInLoop(obj);

// using for loop
const forLoop = (x) => {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
};
console.log(forLoop(x));
