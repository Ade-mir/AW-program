// Write a function printTable(n, m) that: produces multiplication tables.
// n = row, m = column

function printTable(n, m) {
  // Starting Variables
  let tableStart = printColumn(m);
  let multipliedTable = tableStart;

  // Column function
  function printColumn(m) {
    let table = [];
    for (i = 1; i <= m; i++) {
      table.push(i);
    }
    return table;
  }

  // Row function
  function printRows() {
    for (j = 2; j < n + 2; j++) {
      console.log(multipliedTable);
      multipliedTable = tableStart.map(function (element) {
        return element * j;
      });
    }
  }
  printRows();
}

printTable(4, 4);

// function printColumn(m) {
//   let tableStart = [];
//   for (i = 1; i <= m; i++) {
//     tableStart.push(i);
//   }
//   return tableStart;
// }

// function printTable(n, m) {
//   let tableStart = printColumn(m);
//   let multipliedTable = tableStart;
//   for (j = 2; j < n + 2; j++) {
//     console.log(multipliedTable);
//     multipliedTable = tableStart.map(function (element) {
//       return element * j;
//     });
//   }
// }

// printTable(10, 5);
