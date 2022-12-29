// Return true if the number is a palindrome.

// 12345

function isPalindrome(num) {
  let str = num.toString();
  let center = Math.ceil(str.length / 2);

  for (let i = 0; i < center; i++) {
    let left = str.charAt(i);
    let right = str.charAt(str.length - 1 - i);

    if (left != right) {
      return false;
    }
  }
  return true;
}

isPalindrome(123456);
