// Create a function repeatString(str, n, callback), that takes a string str, that will be repeated n times.

// The function does not return anything (undefined), but instead takes a function callback which it will call with the result of the operation

function repeatString(str, n, callback) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  callback(result);
}

repeatString('heh ', 2, function (result) {
  if (result == '') {
    console.log('Please provide a number larger than 0 for n');
  }
  console.log(result);
});
