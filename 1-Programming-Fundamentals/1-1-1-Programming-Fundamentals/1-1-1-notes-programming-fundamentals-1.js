// Declaration / Assignment

let a; // Decleraing vairables with no value.
let b;

a = 10; // Assigning a's value to 10.
b = 20;

// Otherwise you could declerare with initialization.
c = 20;
d = 15;

// The keyword 'var' you could reassign like 'let'. It's the oldschool way of assigning variables before 'let' and 'const'.

// Re-assignment
c = d;
d = a;

// If you want to reassign two variables you need an 'extra' variable.

x = 1;
z = 2;

y = x;
x = z;
z = y;

// Local variables
var f = 10;
var g = 20;

// Avoid creating global variables!

// NUMERICAL OPERATORS

5 % 10; // => 5 is the rest. 10 is not going into 5 at all, but 5 is left as the 'remainder'.

// Presedence = Which thing to multiply first.

// Increment
let i = 0;
i = i + i;
i++;
++i;

// and operator (true && false);
true && false; // => false
false || true; // => true
