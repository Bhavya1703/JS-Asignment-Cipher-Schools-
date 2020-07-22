// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string
// (the single character) is found in the second string.
// Examples
// ⮚ charCount ("a", "edabit") ➞ 1
// ⮚ charCount ("c", "Chamber of secrets") ➞ 1
// ⮚ charCount ("b", "big fat bubble") ➞ 4
// Note:Your output must be case-sensitive (see second example).

let str = window.prompt("Enter a word:");
let alphabet = window.prompt("Enter the alphabet to be counted:");
let charCount = () => {
  console.log(typeof str);
  console.log("WORD LENGTH: ", str.length);
  console.log("WORD: " + str);
  console.log("ALPHABET TO BE COUNTED: " + alphabet);
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (alphabet === str[i]) count += 1;
  }
  console.log(count);
};
charCount();
