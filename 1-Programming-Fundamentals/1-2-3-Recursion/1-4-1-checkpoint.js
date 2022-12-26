// LEVEL 1
// 1.a) Volume of sphere

// console.log(volumeOfSphere(7));

// function volumeOfSphere(r) {
//   if (typeof r === 'number') {
//     return ((4 / 3) * Math.PI * r ** 3).toFixed(2);
//   } else console.log('Please input a number for the radius value.');
// }

// 1.b) Countdown

// countDown(-1);

// function countDown(fromN) {
//   if (fromN < 1) {
//     console.log('fromN must be bigger than 0');
//   } // KUNNE PUTTE ELSE
//   for (i = fromN; i >= 0; i--) {
//     console.log(i);
//   }
// }

// 1.c) Print sequence

// printSequence(100, 1);

// function printSequence(n, m) {
//   if (n == m) console.log('Please input two different numbers.');
//   if (n < m) {
//     for (i = n; i <= m; i++) {
//       if (i % 3 === 0 && i % 7 === 0) {
//         console.log('wubbalubba');
//       } else if (i % 3 === 0) {
//         console.log('wubba');
//       } else if (i % 7 === 0) {
//         console.log('lubba');
//       } else console.log(i);
//     }
//   } else if (m < n) {
//     for (i = m; i <= n; i++) {
//       if (i % 3 === 0 && i % 7 === 0) {
//         console.log('wubbalubba');
//       } else if (i % 3 === 0) {
//         console.log('wubba');
//       } else if (i % 7 === 0) {
//         console.log('lubba');
//       } else console.log(i);
//     }
//   }
// }

// Holiday Greeting

// holidayGreeting();

// function holidayGreeting() {
//   let name = prompt('What is your name?');
//   if (name == '') {
//     alert('Please input a valid name and do not leave the field blank.');
//     return holidayGreeting();
//   } else alert('Happy holidays ' + name + '!');
// }

// 1.e) Remove Divisible

// exampleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// exampleList2 = true;

// console.log(removeDivisibleByThreeOrFive(exampleList2));

// function removeDivisibleByThreeOrFive(list) {
//   let newArray = [];
//   if (Array.isArray(list) !== true) {
//     console.log('Please input a valid array.');
//   } else {
//     for (i = 0; i < list.length; i++) {
//       if (list[i] % 3 !== 0 && list[i] % 5 !== 0) {
//         newArray.push(list[i]);
//       }
//     }
//     return newArray;
//   }
// }

// LEVEL 2
// 2.a) Print RepeatedRange

// printRepeatedRange(10, 6, 5);

// function printRepeatedRange(n, m, x) {
//   if (n == m) console.log('Please input two different numbers for n and m.');
//   if (n < m) {
//     for (j = 0; j < x; j++) {
//       for (i = n; i <= m; i++) {
//         console.log(i);
//       }
//     }
//   } else if (m < n) {
//     for (j = 0; j < x; j++) {
//       for (i = m; i <= n; i++) {
//         console.log(i);
//       }
//     }
//   }
// }

// 2.b) Print Pattern

// printPattern(10, 'x ');

// function printPattern(n, str) {
//   if (n > 0) {
//     let input = '';
//     for (let i = 0; i < n; i++) {
//       input += str;
//       console.log(input);
//     }
//   } else {
//     console.log('Please input a number larger than 0.');
//   }
// }

// 2.c) Dear santa

// dearSanta(['motorcycle', 'car', 'rudolf']);

// function dearSanta(forbidden) {
//   let isNaughty = 0;
//   let answer = prompt(
//     'Ho ho ho! What do you want for Christmas?'
//   ).toLowerCase();
//   if (answer == '') {
//     alert(
//       'Please do not keep Santa waiting, I have many gifts to give and I need to know if you have been naughty or nice! What do you want for Christmas?'
//     );
//     dearSanta(forbidden);
//   }
//   for (i = 0; i < forbidden.length; i++) {
//     if (forbidden[i] === answer) {
//       isNaughty++;
//     }
//   }
//   if (isNaughty !== 0) {
//     alert(
//       'You have been naughty this year and will only get coal in your stockings!'
//     );
//   } else if (isNaughty === 0 && answer !== '') {
//     alert('You have been nice this year and will get socks for Christmas!');
//   }
// }

// 2.d) Countdown with Recursion.

// console.log(countDown(10));

// function countDown(fromN) {
//   let count = 0;
//   if (fromN == 0) {
//     count = 1;
//   } else {
//     count = fromN;
//     console.log(count);
//     countDown(fromN - 1);
//   }
// }

// 2.c Print seq. using recursion

printSequence(1, 100);

function printSequence(n, m) {
  let count = 0;
  if (m == 0) {
    return 1;
  } else if (n < m) {
    {
      count = m;
      if (m % 3 === 0 && m % 7 === 0) {
        console.log('wubbalubba');
      } else if (m % 3 === 0) {
        console.log('wubba');
      } else if (m % 7 === 0) {
        console.log('lubba');
      } else console.log(count);
      printSequence(n, count - 1);
    }
  } // ADD n > m
}
