// 1-1. What are the primitive values we have available in JavaScript? Create an example of each of them as a variable.

let str = 'string';
let num = 1;
// bigint;
let bool = true;
let undef = undefined;
let sym = Symbol();
let nul = null;

// 1-2. Provide a short explanation of the concept of truthy and falsy-ness, and list the falsy values in JavaScript.

// Every condition in JavaScript comes down or evalutes to its core to a boolean, but it might not be explicidly "true" or "false". This is where "Truthy", and "Falsy" come in. Every value is considered truthy if they are not falsy. Examples below;

// Falsy values: false, 0, -0, 0n, "", null, undefined, and NaN

// Truthy values: true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity

// 1-3. getSecondWord(str) is supposed get the second word of a string of multiple words,  but at the moment it isn't working quite right - see if you can figure out and explain what is wrong and provide a working solution.

function getSecondWord(stringOfWords) {
  var words = stringOfWords.split(' ');
  return words[1];
}

getSecondWord('hello my good friend');

// It was returning the third word because the index of the second word is [1], not [2].

// 1-4. The following piece of code attempts to ask the user for two numbers and then log out the sum of those two numbers. This doesn't seem to work quite as expected - see if you can spot the issue, explain what the problem is, and provide a working solution.

function addNumbers() {
  var a = parseInt(prompt('First number'));
  var b = parseInt(prompt('Second number'));
  var result = a + b;
  console.log(result);
}

addNumbers();

// Prompt() will always always return a string, or null, so parseInt was needed to do the calculation correctly.

// 1-5. Create a program / function that does the following

// Asks the user what their favorite word is
// Asks the user how many times they want to repeat it
// Output the result to the user

// Asks the user: "What is your favorite word?"
// => "Cake"

// Asks the user: "How many times do you want me to repeat it?"
// => 3

// Outputs to the user: "Cake, Cake, Cake!"

function repeatFavWord() {
  let favWord = prompt('What is your favorite word?');
  let numOfRepeats = parseInt(
    prompt('How many times do you want me to repeat it?')
  );
  if (numOfRepeats <= 0) return repeatFavWord();
  addSpace = favWord + ', ';
  result = addSpace.repeat(numOfRepeats - 1) + favWord + '!';
  console.log(result);
}

repeatFavWord();

// 1-6. Create a function printRange(n, m) that prints the range of numbers from n to m repeatedly as many times as the length of the range being provided.

function printRange(n, m) {
  if (n == m) console.log('Please input two numbers of different size');
  if (n < m) {
    for (j = n; j <= m; j++) {
      for (i = n; i <= m; i++) {
        console.log(i);
      }
    }
  }
  if (m < n) {
    for (j = m; j <= n; j++) {
      for (i = m; i <= n; i++) {
        console.log(i);
      }
    }
  }
}

printRange(9, 11);

// 1-7.  Create a function extendString(str) that based on the length of the input string str extends it using the following rules:

// When the length is less than 5 it gives you the same string back
// When the length is 5 or more, but less than 10 it adds '!!!!' to the string
// When the length is 10 or more it adds '????' to the string

function extendString(str) {
  if (str.length >= 10) return str + '????';
  if (str.length >= 5) return str + '!!!!';
  if (str.length < 5) return str;
}

extendString('Hello');

// 1-8. Create a function padString(str, pad, len) that returns the input string str padded len times with the padding pad.

function padString(str, pad, len) {
  return pad.repeat(len) + str;
}

console.log(padString('Welcome to the party!', 'A', 10));

// 1-9. What is the difference between == and === in JavaScript? Provide a short explanation.

x = '17';
y = 17;

console.log(x == y); // => true
console.log(x === y); // => false

// In the example above we can see the difference between using == and ===. In order to evaluate wheter or not the statement is true === checks if the type of the value is the same, whereas == does not. In other words === does not do type conversion, and == does type conversion before considering the values.

// 2-1. Create the following abstraction of a counter as a class:

// The constructor takes a min and max value that the counter cannot exceed
// The counter is initialized with the min value
// (bonus) The min and max value can be provided in any order (the lowest will be treated as min and highest treated as max)

class Counter {
  constructor(a, b) {
    this.min = 0;
    this.max = 0;
    if (a == b) {
      console.log('Please choose two different numbers');
    }
    if (a == b) {
      return Counter;
    }
    if (a < b) {
      this.min = a;
    }
    if (a < b) {
      this.max = b;
    }
    if (a > b) {
      this.min = b;
    }
    if (a > b) {
      this.max = a;
    }
    this.counter = this.min;
  }
  increment() {
    if (this.counter < this.max) this.counter++;
  }
  decrement() {
    if (this.counter > this.min) this.counter--;
  }
  getValue() {
    return this.counter;
  }
}

var counter = new Counter(2, 4);

// 2-3. Given the following data:
const families = [
  {
    father: 'John',
    mother: 'Mary',
    children: ['Frank'],
  },
  {
    father: 'Mark',
    mother: 'Linda',
    children: ['Billy', 'Nina'],
  },
  {
    father: 'Chris',
    mother: 'Lisa',
    children: ['Dolly', 'Richard', 'Eva'],
  },
];
// Perform the necessary operations to provide the following results:(Note: prefer to use array methods instead of loops when possible)
let mothers = families.map(function (mom) {
  return mom.mother;
});

let mothersAndFather = families.map(function (couple) {
  return couple.mother + ' and ' + couple.father;
});

let children = families.map(function (child) {
  return child.children.join("', '");
});

let childrenUpperCase = families.map(function (child) {
  if (child.children[2]) return child.children.join(', ').toUpperCase();
});

// console.log(mothers);
// console.log(mothersAndFather);
// console.log(children);
console.log(childrenUpperCase);

// 2-4. Create a function getPropertyPairs(o) that returns the property and value pairs of an object o as an array of arrays.

var obj = {
  a: 10,
  b: 20,
  c: 30,
};

// getPropertyPairs(obj);
// => [["a", 10], ["b", 20], ["c", 30]]

console.log(Object.keys(obj));
console.log(Object.values(obj));

// 2-5. We are trying to get the life story of a person, but for some reason it's not working as expected - can you spot the error(s)? Explain why the current solution does not work, and provide a working solution.

var person = {
  name: 'Rick',
  occupation: 'crazy scientist',
  hobby: 'make a mess',
  getLifeStory: function () {
    return (
      this.name + ' is a ' + this.occupation + ' and likes to ' + this.hobby
    );
  },
};

person.getLifeStory();

// The coded needed to specify "this.name", instead of "name" because "name" can not be accesed du to scope outside of the function getLifeStory otherwise. With this.name the code seeks for a name property within "person", without this, the code seeks name proprty within "getLifeStory".
