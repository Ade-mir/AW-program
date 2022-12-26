// Print multiplication table
// I used the Array.prototyp.map() to create a new arraty populated with the result of calling a provided function on every element in the calling array. https://stackoverflow.com/questions/29111002/multiply-by-number-all-ellements-of-an-array-with-foreach-in-javascript

let tableStart = [1, 2, 3, 4, 5, 6];
let multipliedTable = tableStart;

function print() {
  for (i = 2; i < tableStart.length + 2; ++i) {
    console.log(multipliedTable);
    multipliedTable = tableStart.map(function (element) {
      return element * i;
    });
  }
}

print();
