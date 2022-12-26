function printDivisibleRange(n, m, x) {
  for (n; n <= m; n++) if (n % x === 0) console.log(n);
}

printDivisibleRange(1, 100, 5);
