/**
 * Recursion Solutions
 */

/**
 * 1.
 */
function repeat(str, n) {
  if (n <= 1) {
    return str;
  } else {
    return str + repeat(str, n - 1);
  }
}

/**
 * 2.
 */
function printRange(n, m) {
  if (n > m) {
    return;
  } else {
    console.log(n);
    printRange(n + 1, m);
  }
}

/**
 * 3.
 */
function exponent(base, exp) {
  if (exp == 0) {
    return 1;
  } else {
    return base * exponent(base, exp - 1);
  }
}

/**
 * 4. (alternative 1)
 */
function fibonacciSequence(m) {
  if (m < 1) {
    return [];
  } else if (m == 1) {
    return [0];
  } else if (m == 2) {
    return [0, 1];
  } else {
    let sequence = fibonacciSequence(m - 1);
    let nextFibonacciNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextFibonacciNumber);
    return sequence;
  }
}

/**
 * 4. (alternative 2 - using .concat instead of .push)
 */
function fibonacciSequence(m) {
  if (m < 1) {
    return [];
  } else if (m == 1) {
    return [0];
  } else if (m == 2) {
    return [0, 1];
  } else {
    let sequence = fibonacciSequence(m - 1);
    let nextFibonacciNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return sequence.concat(nextFibonacciNumber);
  }
}

/**
 * 4. (alternative 3 - simplifying the stop condition)
 */
function fibonacciSequence(m) {
  if (m < 3) {
    return [0, 1].slice(0, m);
  } else {
    let sequence = fibonacciSequence(m - 1);
    let nextFibonacciNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return sequence.concat(nextFibonacciNumber);
  }
}

/**
 * 4. (alternative 4 - using array spread)
 */
function fibonacciSequence(m) {
  if (m < 3) {
    return [0, 1].slice(0, m);
  } else {
    let sequence = fibonacciSequence(m - 1);
    let nextFibonacciNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];

    return [...sequence, nextFibonacciNumber];
  }
}
