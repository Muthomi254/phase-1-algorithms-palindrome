function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false



function isPalindrome(str) {
  // Convert the input string to lowercase to ensure case-insensitivity.
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  // Loop through the string until the left pointer is less than the right pointer.
  while (left < right) {
    // If the characters at the left and right pointers are not the same, return false.
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  // If the loop completes without returning false, the string is a palindrome, so return true.
  return true;
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
