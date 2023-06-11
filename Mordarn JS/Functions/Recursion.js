var x = [10, 20, 30];

// recursion function
function recursive(x, i) {
  if (i === x.length - 1) {
    return x[i];
  }

  return x[i] + recursive(x, i + 1);
}
var sum = recursive(x, 0);
console.log(sum);
