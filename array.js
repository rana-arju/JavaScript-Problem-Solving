class customArrayFun {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    if (this.length <= index) {
      return "Index out of range";
    }
    if (index < 0) {
      return "Index should be greater than or equal to 0";
    }

    return this.data[index];
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  delete(index) {
    if (this.length <= index) {
      return "Index out of range";
    }
    if (index < 0) {
      return "Index should be greater than or equal to 0";
    }
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const customArray = new customArrayFun();
customArray.push(5);
customArray.push(7);
customArray.push(1);
customArray.push(3);
customArray.push(9);
customArray.delete(2);
//console.log(customArray);

// reverse a string
const reverseString = (str) => {
  if (!str || str?.length < 2 || typeof str !== "string") {
    return "Invalid input, Enter any string.";
  }
  let reversed = "";
  for (let i = str?.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseString("My name is"));

const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};
//console.log(reverseString2("My name is"));

// marge sorted array of two arrays

const mergeSortedArrays = (arr1, arr2) => {
  const margeArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      margeArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      margeArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return margeArray;
};

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [0,3,4,4,6,30,31]

var merge = function (nums1, m, nums2, n) {
  const len = m + n;
  nums1.splice(len - n);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  for (let j = 1; j < len; j++) {
    console.log("first", nums1);
    if (nums1[j - 1] || nums1[j - 1] === 0) {
      
      if (nums1[j] < nums1[j - 1]) {
        let tmp = nums1[j - 1];
        nums1[j - 1] = nums1[j];
        nums1[j] = tmp;
        j = j - 2;
      }
    }
  }
   return nums1;
};
// nums1 = [1,2,3,2,5,6]
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;
console.log(merge(nums1, m, nums2, n))

