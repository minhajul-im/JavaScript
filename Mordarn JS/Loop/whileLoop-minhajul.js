//while loop
let whileLoop = true;
while (whileLoop) {
  const statement = `when the condition is true he continues infinitely he doesn't know when I'd stop. that's why the condition in your hand if you want to stop then use the break method or false.`;

  whileLoop = false;
  break;
}

// using while loop
const whileLoops = (x) => {
  let sum = 0,
    start = 0;

  while (x.length > start) {
    sum += x[start];
    start++;
  }

  return sum;
};
console.log(whileLoops(x));
