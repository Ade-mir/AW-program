// Write a function printPattern(n, m) that prints the following patterns.

function printPattern(n) {
  let stars = '';
  for (let i = 0; i < n; i++) {
    stars += '*';
    console.log(stars);
  }
  for (let j = n - 1; j > 0; j--) {
    stars = '*'.repeat(j);
    console.log(stars);
  }
}

printPattern(10);
