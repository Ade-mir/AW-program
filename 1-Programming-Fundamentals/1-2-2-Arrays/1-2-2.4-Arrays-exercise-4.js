function generateRange(n, m) {
  arr = [];
  if (n < m) {
    for (i = n; i <= m; i++) {
      arr.push(i);
    }
  } else if (n > m) {
    for (i = m; i <= n; i++) {
      arr.push(i);
    }
  }
  console.log(arr);
}

generateRange(15, 20);
