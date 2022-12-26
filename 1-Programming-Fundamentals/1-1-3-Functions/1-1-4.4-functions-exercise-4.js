// Prints every x number between m and n

function printEveryXInRangeBackwards(n, m, x) {
  for (m; m >= n; m--) if (m % x === 0) console.log(m);
}

printEveryXInRangeBackwards(1, 100, 5);
