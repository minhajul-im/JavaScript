/**
 * What is prime number?
 * A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself.
 */

const primeNumberCheckUseMathSqrt = (num) => {
  if (num === undefined || num <= 1) return false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const prime_check = primeNumberCheckUseMathSqrt(2);
console.log(prime_check);

// another way to check prime number
const primeNumberCheckGeneral = (num) => {
  if (num === undefined || num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
};

const prime_number = primeNumberCheckGeneral(200);
console.log(prime_number);

//given one max number but generate two random number return function two generated number, now you have gotten two generate number you can any kind operation .
const generateRandomNumberUse = (max, whatDoYouWant) => {
  const r1 = Math.trunc(Math.random() * max);
  const r2 = Math.trunc(Math.random() * max);
  const result = whatDoYouWant(r1, r2);

  return result;
};

const sum = generateRandomNumberUse(100, (r1, r2) => r1 + r2);
const sub = generateRandomNumberUse(20, (r1, r2) => r1 - r2);
const multi = generateRandomNumberUse(20, (r1, r2) => r1 * r2);
const divided = generateRandomNumberUse(20, (r1, r2) => r1 / r2);
