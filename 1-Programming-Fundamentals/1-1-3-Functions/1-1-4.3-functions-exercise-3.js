// Prints every x number between n and m
function printEveryXInRange(n, m, x) {
  for (n; n <= m; n++) if (n % x === 0) console.log(n);
}

printEveryXInRange(1, 100, 5);
