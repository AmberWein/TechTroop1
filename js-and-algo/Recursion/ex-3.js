// recursively move elements from arr1 to arr2
function swap(arr1, arr2) {
  // base case: nothing to move
  if (arr1.length === 0) {
    return;
  }
  
  arr2.push(arr1.shift()); // remove first from arr1, add to arr2
  swap(arr1, arr2);
}
