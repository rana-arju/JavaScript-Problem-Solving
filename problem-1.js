// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const commonItems = (arr1, arr2) => {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
    
  }
  return false;
  
};
const array1 = ["a", "b", "c", "x", "a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
console.log(commonItems(array1, array2)) // true;

// using building function
const commonItems2 = (arr1, arr2) => {
   return arr1.some((item) => arr2.includes(item))

}
const arr1 = ["a", "b", "c", "x", "a", "b", "c", "x"];
const arr2 = ["z", "y", "x"];
console.log(commonItems2(arr1, arr2)); // true;