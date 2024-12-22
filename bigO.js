/* 
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms
*/

// What is the Big O of the below function?
// (Hint, you may want to go line by line)
const anotherFunChallenge = (input) => {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
};

// Big O(4 + 5n)
// Big O(n)
anotherFunChallenge(5);

// Space complexity O(1)

/*
Space Complexity
================================================================
When a program executes it has two ways to remember things

Heap - Store variables
Stack - Keep track of function calls
What causes Space Complexity?

Variables
Data Structures
Function Call
Allocations
*/
const name = (n) => {
  // space allocation for i is O(1)
  for (let i = 0; i < n.length; i++) {
    console.log("Rana Arju");
  }
};
name([1, 2, 3, 4, 5]);

// Space complexity O(n)
const arrayOfHiNTimes = (n) => {
  // space allocation for Data Structures hiArray is O(n)
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
};
arrayOfHiNTimes(6);
