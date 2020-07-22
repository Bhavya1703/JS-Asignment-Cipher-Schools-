// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.
// Examples
// ⮚ convert (5) ➞ 300
// ⮚ convert (3) ➞ 180
// ⮚ convert (2) ➞ 120
// Note:Don't forget to return the result.

var minutes = window.prompt("Enter a digit:");
var minsTosecs = () => {
  return minutes * 60;
};
let result = minsTosecs();
console.log("Your Answer:" + result + " secs");
