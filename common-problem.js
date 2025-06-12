//factorial
function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

// fibonacci

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

// sum of digits
function sumOfDigits(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, num) => sum + parseInt(num), 0);
}
console.log(sumOfDigits(1234)); // 6
