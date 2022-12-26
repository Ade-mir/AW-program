let exampleList = [1, 2, 3, 4, 5, 5];

// Using a iteration loop.

function sumItems(array) {
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  console.log(sumArray);
}

sumItems(exampleList);

// Using reduce() method.

function sumItems2(array) {
  let sumArray = array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  console.log(sumArray);
}

sumItems2(exampleList);
