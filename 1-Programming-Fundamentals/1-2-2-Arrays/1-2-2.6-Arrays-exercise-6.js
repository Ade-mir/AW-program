let exampleArray = [1, 2, 3];

function repeatList(list, n) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < n; j++) {
      arr = arr.concat(list[i]);
    }
  }
  console.log(arr);
}

repeatList(exampleArray, 3);

console.log(exampleArray.concat(exampleArray));
