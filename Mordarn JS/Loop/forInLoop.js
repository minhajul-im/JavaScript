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
