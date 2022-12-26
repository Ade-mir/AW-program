let exampleArray = [1, 2, 3];

function repeatList(list, n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr = arr.concat(list);
  }
  console.log(arr);
}

repeatList(exampleArray, 3);
