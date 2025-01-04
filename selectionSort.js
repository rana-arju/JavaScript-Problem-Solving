const numbers = [2, 45, 54, 6, 34, 6, 4, 2, 47, 2, 11, 24, 23, 354];
const SelectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};
SelectionSort(numbers);
console.log(numbers);
