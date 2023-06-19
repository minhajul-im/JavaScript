// prime number check

const positiveNum1 = (num) => {
  if (num === undefined || num < 2) return false;

  if (num === 2) return true;

  for (let i = 0; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const positiveNum2 = (num) => {
  if (num === undefined || num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
};
const positiveNumPrime1 = positiveNum1(2);
console.log(positiveNumPrime1);
const positiveNumPrime2 = positiveNum2(5);
console.log(positiveNumPrime2);

//given one max number but generate two random number return function two generated number, now you have gotten two generate number you can any kind operation .
const generateRand = (max, whatDoYouWant) => {
  const r1 = Math.trunc(Math.random() * max);
  const r2 = Math.trunc(Math.random() * max);
  const result = whatDoYouWant(r1, r2);
  return result;
};
const a = generateRand(100, (r1, r2) => r1 + r2);
const b = generateRand(20, (a1, a2) => a1 - a2);
const c = generateRand(20, (a1, a2) => a1 * a2);
const d = generateRand(20, (a1, a2) => a1 / a2);
