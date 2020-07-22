// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number
// you passed to the function. For example, if the input is 4 then your function should return 10 because 1
// + 2 + 3 + 4 = 10.
// Examples
// ⮚ addUp (4) ➞ 10
// ⮚ addUp (13) ➞ 91
// ⮚ addUp (600) ➞ 180300
// Note:Expect any positive number between 1 and 1000.

let number = window.prompt("Enter any number:");
let addUp = () => {
  console.log(number);
  let sum = 0;
  let i = 1;
  while (i <= number) {
    sum += i;
    i++;
  }
  return sum;
};
console.log("RESULT:" + addUp());
