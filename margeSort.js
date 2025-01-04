function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Move to the next element in the `left` array
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Move to the next element in the `right` array
    }
  }

  // Concatenate the remaining elements from either `left` or `right` (if any)
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
function mergeSort(array) {
  // Base case: If the array has only one element, return it (already sorted)
  if (array.length === 1) {
    return array;
  }

  // Divide the array into two halves
  const middle = Math.floor(array.length / 2); // Find the middle index
  const left = array.slice(0, middle); // Split the array into left half
  const right = array.slice(middle); // Split the array into right half

  // Recursively call mergeSort on the left and right halves
  return merge(
    mergeSort(left), // Recursively sort the left half
    mergeSort(right) // Recursively sort the right half
  );
}
//console.log(mergeSort([38, 27, 43, 3, 9, 82, 10, 0]));

// own try

const marge2 = (left, right) => {
  let result = [];
  leftIndex = 0;
  rightIndex = 0;
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
};
const margeSort2 = (array) => {
  const length = array.length;

  if (length === 1) {
    return array;
  }
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return marge2(margeSort2(left), margeSort2(right));
};
console.log(margeSort2([38,32, 27, 43, 3, 9, 82, 10, 0]));
