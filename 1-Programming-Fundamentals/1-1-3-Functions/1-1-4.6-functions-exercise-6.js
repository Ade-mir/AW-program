// Write a function printPattern(n) that prints the following patterns.

function printPattern(n) {
  let stars = '';
  for (let i = 0; i < n; i++) {
    stars += '*';
  }
  for (let j = 0; j < n; j++) {
    console.log(stars);
  }
}

printPattern(10);
