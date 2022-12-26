// Write a function printTable(n, m) that: produces multiplication tables.

function printTable(n, m) {
  let table = '';
  for (let i = 1; i <= n; i++) {
    table += i + ' ';
    for (let j = 0; j < m; j++) {
      console.log(table);
    }
  }
}

printTable(4, 2);

// It doesnt work quite yet.
