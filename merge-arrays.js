function merge(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  return arr1.sort((a, b) => a - b);
}