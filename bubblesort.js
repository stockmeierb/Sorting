function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, array);
      }
    }
  }
  return array;
}

function swap(idx, array) {
  let a = array[idx];
  let b = array[idx + 1];
  array[idx] = b;
  array[idx + 1] = a;
}
