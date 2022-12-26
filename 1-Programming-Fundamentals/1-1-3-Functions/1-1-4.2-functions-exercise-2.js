function printEveryThirdInRange(n, m) {
  for (n; n <= m; n++) if (n % 3 === 0) console.log(n);
}

printEveryThirdInRange(1, 100);
