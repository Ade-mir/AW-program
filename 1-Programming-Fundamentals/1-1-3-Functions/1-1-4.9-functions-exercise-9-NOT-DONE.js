// Write a function printTable(n, m) that: produces multiplication tables.

// n = row, m = column

// function printTable(n, m) {
//   let table = '';
//   for (let i = 1; i <= n; i++) {
//     table += i + ' ';
//     for (let j = 0; j < m; j++) {
//       console.log(table);
//     }
//   }
// }

// let tableStart = [1, 2, 3, 4, 5, 6];
// let multipliedTable = tableStart;

// function printTable() {
//   for (i = 2; i < tableStart.length + 2; ++i) {
//     console.log(multipliedTable);
//     multipliedTable = tableStart.map(function (element) {
//       return element * i;
//     });
//   }
// }

// printTable(4, 2);

let tableStart = [];
// let multipliedTable = tableStart;

// function printTable(n, m) {
//   for (i = 2; i < n; ++i) {
//     tableStart.push(i);
//     console.log(multipliedTable);
//     multipliedTable = tableStart.map(function (element) {
//       return element * i;
//     });
//   }
// }

function printTable(n, m) {
  for (i = 0; i < n; i++) {
    tableStart.push(i);
    console.log(tableStart);
  }
}

printTable(4, 2);
