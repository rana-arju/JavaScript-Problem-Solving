const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};
const numbers = [2, 45, 54, 6, 34, 6, 4, 2, 47, 2, 11, 24, 23, 354];
insertionSort(numbers)
console.log(numbers);
