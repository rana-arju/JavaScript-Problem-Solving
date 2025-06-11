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

console.log(countOccurrences([23, 34, 34, 534, 6754, 5, 74, 5, 6]));
