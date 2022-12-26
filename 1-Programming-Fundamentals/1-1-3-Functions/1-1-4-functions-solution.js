/**
 * Functions Exercises Solutions
 */

/**
 * 1
 */
function printRange(n, m) {
  for (var i = n; i <= m; i++) {
    console.log(i);
  }
}

/**
 * 2
 */
function printEveryThirdInRange(n, m) {
  for (var i = n; i <= m; i += 3) {
    console.log(i);
  }
}

/**
 * 3
 */
function printEveryXInRange(n, m, x) {
  for (var i = n; i <= m; i += x) {
    console.log(i);
  }
}

/**
 * 4
 */
function printEveryXInRangeBackwards(n, m, x) {
  for (var i = m; i >= n; i -= x) {
    console.log(i);
  }
}

/**
 * 5
 */
function printDivisibleRange(n, m, x) {
  for (var i = n; i <= m; i++) {
    if (i % x == 0) {
      console.log(i);
    }
  }
}

/**
 * 6
 */
function printSquarePattern(n) {
  var line = '';

  for (var j = 0; j < n; j++) {
    line = line + '*';
  }

  for (var i = 0; i < n; i++) {
    console.log(line);
  }
}

/**
 * 7
 */
function printRectanglePattern(n, m) {
  for (var i = 0; i < n; i++) {
    var line = '';

    for (var j = 0; j < m; j++) {
      line = line + '*';
    }

    console.log(line);
  }
}

/**
 * 8
 */
function printTrianglePattern(m) {
  // Prints the top part of the pattern
  for (var i = 1; i <= m; i++) {
    var line = '';

    for (var j = 1; j <= i; j++) {
      line = line + '*';
    }

    console.log(line);
  }

  // Prints the bottom part of the pattern
  for (var i = m - 1; i >= 1; i--) {
    var line = '';

    for (var j = 1; j <= i; j++) {
      line = line + '*';
    }

    console.log(line);
  }
}

/**
 * 9
 */
function printTable(n, m) {
  for (var i = 1; i <= n; i++) {
    var line = '';

    for (var j = 1; j <= m; j++) {
      line = line + (i * j) + ' ';
    }

    console.log(line);
  }
}

/**
 * 10
 */
 function isPalindrome(num) {
  var str = num.toString();
  var center = Math.ceil(str.length / 2);

  for (var i = 0; i < center; i++) {
    var left = str.charAt(i);
    var right = str.charAt(str.length - 1 - i);

    if (left != right) {
      return false;
    }
  }

  return true;
}

/**
 * 11
 */
function isPalindrome(str) {
  var processedString = str
  .split(' ')
  .join('')
  .toLowerCase();

  var center = Math.ceil(processedString.length / 2);

  for (var i = 0; i < center; i++) {
    var left = processedString.charAt(i);
    var right = processedString.charAt(processedString.length - 1 - i);

    if (left != right) {
      return false;
    }
  }

  return true;
}

/**
 * 12
 */
function wordCount(str) {
  const words = str.split(' ');
  return words.length;
}

/**
 * 13
 */
function repeat(str, n) {
  var repeatedString = '';

  for (var i = 0; i < n; i++) {
    repeatedString += str;
  }

  return repeatedString;
}

/**
 * 14
 */
function reverseWords(str) {
  var words = str.split(' ');
  var result = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversedWord = '';

    for (var j = 0; j < word.length; j++) {
      reversedWord += word.charAt(word.length - 1 - j);
    }

    result += reversedWord + " ";
  }

  return result.slice(0, result.length - 1);
}

/**
 * 15
 */
function capitalize(str) {
  var firstCharacter = str.charAt(0).toUpperCase();
  var capitalizedResult = firstCharacter + str.slice(1).toLowerCase();
  return capitalizedResult;
}

/**
 * 16
 */
function areaOfCircle(r) {
  var PI = 3.14;
  return PI * (r * r);
}

/**
 * 17
 */
function exponent(base, exp) {
  var result = 1;

  for (var i = 0; i < exp; i++) {
    result = result * base;
  }

  return result;
}
