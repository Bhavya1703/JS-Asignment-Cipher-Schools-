// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in
// the same sequential order as the old array (minus duplicates).
// Note:
// ● Tests contain arrays with both strings and numbers.
// ● Tests are case sensitive.

var arr = ["apple", "orange", "banana", "kiwi", "pomegranate", "kiwi"];
function duplicate() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        for (k = j; k < arr.length; k++) {
          arr[k] = arr[k + 1];
        }
        arr.length--;
        j--;
      }
    }
  }
  console.log(arr);
}
duplicate();
