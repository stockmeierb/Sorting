function split(wholeArray) {
  const size = wholeArray.length;
  const halfLength = Math.floor(wholeArray.length / 2);
  if (size <= 1) {
    return wholeArray;
  } else {
    const firstHalf = wholeArray.slice(0, halfLength);
    const secondHalf = wholeArray.slice(halfLength);
    return [firstHalf, secondHalf];
  }
}

function merge(arr1, arr2) {
  let newArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  if (arr1.length > 0) {
    newArr.push(...arr1);
  } else {
    newArr.push(...arr2);
  }
  return newArr;
}

function mergeSort(array) {
  /* your code here */
  if (array.length <= 1) {
    return array;
  }
  let splitArr = split(array); //returns one giant array
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}
