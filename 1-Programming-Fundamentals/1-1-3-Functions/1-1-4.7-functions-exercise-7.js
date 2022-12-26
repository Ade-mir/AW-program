// Write a function printPattern(n, m) that prints the following patterns.

function printPattern(n, m) {
  let stars = '';
  for (let i = 0; i < n; i++) {
    stars += '*';
  }
  for (let j = 0; j < m; j++) {
    console.log(stars);
  }
}

printPattern(2, 15);
