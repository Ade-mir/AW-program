// const { sumTwoNumbers, helloWorld, classRoom } = require('./utilities');
// let utilities = require('./utilities');

// console.log(
//   sumTwoNumbers(1, 5),
//   helloWorld,
//   classRoom,
//   new utilities.Rectangle(1, 2)
// );

let classy = require('./utils/class.js');
let hello1 = require('./utils/hello.js');
let oneToFive3333 = require('./utils/oneToFive.js');
let Rectangle = require('./utils/rectangle');
let sum = require('./utils/sum');
let capitalize = require('./node_modules/capitalize/index');
let wait = require('wait');

console.log(
  classy,
  hello1,
  oneToFive3333,
  new Rectangle(20, 40),
  sum(1, 2),
  capitalize('hello-hello')
);

async function myAsyncFunction() {
  await wait(3000);
  console.log('Ive waited');
}

myAsyncFunction();

const number = 123456.789;

console.log(
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number
  )
);

// Expected output: "123.456,79 €"
