// Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.
// a = 1, e = 2, i = 3, o = 4, u = 5
// Examples
// ⮚ replaceVowel("karachi") ➞ "k1r1ch3"
// ⮚ replaceVowel("chembur") ➞ "ch2mb5r"
// ⮚ replaceVowel("khandbari") ➞ "kh1ndb1r3"
// Note:The input will always be in lowercase.

var str = window.prompt("Enter a word:");
var replaceVowel = () => {
  console.log(typeof str);
  console.log(str.length);

  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        str[i] = "1";
        break;
      case "e":
        str[i] = "2";
        break;
      case "e":
        str[i] = "2";
        break;
      case "e":
        str[i] = "2";
        break;
      case "e":
        str[i] = "5";
        break;
    }
  }
  console.log(str);
};
replaceVowel();
