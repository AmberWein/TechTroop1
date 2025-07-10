// reverse a string using recursion
function reverseString(str) {
  // base case: empty or 1-char string
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"