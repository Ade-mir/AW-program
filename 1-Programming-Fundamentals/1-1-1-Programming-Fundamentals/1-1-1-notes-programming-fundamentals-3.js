// Evaluation

10; // This line evaluates to 10.

'Hello' + 'Hei'; // evaluates to 'HelloHei'.

// Multiple steps in evaluation, (inside out).
// ((1 + 2) + 3) + 4; // Evaluates (1 + 2) first, then (3 + 3), then (6 + 4).

let a = 1;
let b = 2;
let c = 3;
let d = 4;

a, b, c, d; // => 4. Evaluates to 4, because d is last, and in JS the last number in the row of commas is the one it evaluates to.

// You can clear the console in chrome by typing 'clear()'.

let x = (console.log('hei'), 100); // it will print 'hei, but x => 100.

console.log(x);

let f = 1; // => undefined. Declaring a variable does not evaluate to anything.
f = 5; // => 5
