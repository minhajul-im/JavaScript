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

const prime_number = primeNumberCheckGeneral(11);
console.log(prime_number);
