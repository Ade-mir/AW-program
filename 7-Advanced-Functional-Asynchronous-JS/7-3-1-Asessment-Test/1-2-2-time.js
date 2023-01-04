// Create a function repeatString(str, n, callback), that takes a string str, that will be repeated n times.

// The function does not return anything (undefined), but instead takes a function callback which it will call with the result of the operation
// Example use:

// repeatString('ha', 3, function (result) {
//   console.log(result); // => hahaha
// });

// takes 3 conditions, a string, a number, and a function.
// console logs the result from function.

repeatString('ha', 3, function (result) {
  console.log(result);
});

// function iterates 'str' by 'n' times and ads to result.
// does not return, but calls the callback function instead with the result as a condition.
function repeatString(str, n, callback) {
  let result = '';

  for (i = 0; i < n; i++) {
    result += str;
  }
  callback(result);
}
