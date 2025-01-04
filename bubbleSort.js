const numbers = [2, 45, 54, 6, 34, 6, 4, 2, 47, 2, 11, 24, 23, 354];
const BubbllSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array
};
BubbllSort(numbers);
console.log(numbers);
