// Write a function generateList(value, len) that:
// Returns an array containing the same value repeated len times.

function generateList(value, len) {
  arr = [];
  for (i = 0; i < len; i++) {
    arr.push(value);
  }
  console.log(arr);
}

generateList(true, 3);

// let exampleList = [];
// exampleList.push(3);
// exampleList.push(4);
// console.log(exampleList);
