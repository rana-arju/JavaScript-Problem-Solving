// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("rana arju"));
// check for palinfrome
function isPalindrome(str) {
  const cleand = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleand === cleand.split("").reverse().join("");
}

// find the largest number in an array

function findLargest(arr) {
  return Math.max(...arr);
}

// remove dulicat from array

function removeDuplicat(arr) {
  return [...new Set(arr)];
}

//count occurrences of element in array
function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}
// Fizz Buzz Problem
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizz buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// flattenArray

function flattenArray(arr) {
  return arr.flat(Infinity);
}
//  Debounce funcion

function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
function saveInput() {
  console.log("Saving data");
}
const processChange = debounce(() => saveInput());

// check if two strings are anagrams
function isAnagram(str1, str2) {
  const format = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  return format(str1) === format(str2);
}

// find missing number in array (1 to N)

function findNumberMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}
console.log(findNumberMissing([2,4,5,6,7,8,9,10], 10));
