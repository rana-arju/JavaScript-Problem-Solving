//====================================//
// Factorial using Recursion and itaration
///=========================== //

// using Loop
const findFactorial = (n) => {
  let answer = 1;
  if (n === 1) {
    answer = 1;
  }
  if (n === 2) {
    answer = 2;
  }
  for (let i = 2; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
};
//console.log(findFactorial(5));

///useing Recursion

const findFactorial2 = (n) => {
  if (n < 2) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  return findFactorial2(n - 1) * n;
};
// console.log(findFactorial2(10));

//====================================//
// Fibonacci using Recursion and itaration
///=========================== //

// using recursion
const fibonacciRecurion = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecurion(n - 1) + fibonacciRecurion(n - 2);
};

// console.log(fibonacciRecurion(10));

// using loop

const fibonacciLoop = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push( arr[i - 1] + arr[i - 2])
  }
  return arr[n];
};

console.log(fibonacciLoop(10));
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive("yoyo master");