function quickSort(items) {
  // terminate execution and return array if empty
  // or containing one elemrnt
  if (items.length <= 1) return items;

  // set the pivot to the last item on the list
  const pivot = items[items.length - 1];

  // create temporary contaners
  const leftItems = [];
  const rightItems = [];

  // loop through the array to put the pivot in its sorted position
  for (let i = 0; i < items.length-1; i++) {
    if (items[i] < pivot) {
      leftItems.push(items[i]);
    } else {
      rightItems.push(items[i]);
    }
  }

  // repeat same processes above on both partition
  // until every item is at its sorted position
  return [...quickSort(leftItems), pivot, ...quickSort(rightItems)];
}

console.log(quickSort([5, 667, 76, 2, 4]));

