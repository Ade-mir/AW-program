// You have been provided two functions that perform asynchronous operations (see bottom of task)

// compress(input, callback)
// encrypt(input, callback)
// Each of the operations take an input string
// Each of the operations take a function callback in the form function (err, result) {}

// Do the following:

// Write a program that compresses, and then encrypts the string "the secret key is 123543", where you console.log the encrypted result at the end
// How could you have converted this program into using promises instead of nested callbacks?

function compress(input, callback) {
  setTimeout(function () {
    callback(null, input.slice(0, 3));
  }, 100);
}

function encrypt(input, callback) {
  setTimeout(function () {
    callback(null, input.split('').reverse().join(''));
  }, 100);
}

async function main() {
  try {
    const input = 'the secret key is 123543';
    const compressed = await new Promise((resolve, reject) => {
      compress(input, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    const encrypted = await new Promise((resolve, reject) => {
      encrypt(compressed, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    console.log(encrypted);
  } catch (err) {
    console.error(err);
  }
}

main();
