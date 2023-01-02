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
