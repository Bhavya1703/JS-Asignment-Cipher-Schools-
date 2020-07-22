/* Divides Evenly
Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
Examples
⮚ dividesEvenly (98, 7) ➞ true
# 98/7 = 14
⮚ dividesEvenly (85, 4) ➞ false
# 85/4 = 21.25
Note: a will always be greater than or equal to b.*/

var a = window.prompt("Enter first no.:");
var b = window.prompt("Enter second no.:");
var dividesEvenly = () => {
  if (a % b == 0) return true;
  else return false;
};
let result = dividesEvenly();
console.log(result);
