// recursive function that calculates a factorial of a given number.
function findFactorial(n) {
  // base case
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * findFactorial(n - 1);
}

console.log(findFactorial(5)); // 120