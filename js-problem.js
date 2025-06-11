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
    return arr.flat(Infinity)
}
console.log(flattenArray([2,[423,["afdas"]]]));
