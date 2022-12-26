// Reduce
// Folds an array from left to right.

let numbers = [1, 2, 3];

let sumOfNumbers = numbers.reduce(function (accu, current) {
  return accu + current;
}, 0);

// Example with folding objects of people into one object.

let people = [{ Eirik: 36 }, { Lise: 30 }, { Helmer: 2 }];

let allPeopleInOne = people.reduce(function (accu, current) {
  return {
    ...accu,
    ...current,
  };
}, {});

// EXPECTED RESULT

// accu = {
//   'Eirik' : 36,
//   'Lise' : 36,
//   'Helmer' : 2,
// }

let peopleAsArray = [
  { id: 'a', name: 'Eirik' },
  { id: 'b', name: 'Frank' },
  { id: 'c', name: 'Per' },
];

let peopleAsObject = {
  a: { id: 'a', name: 'Eirik' },
  b: { id: 'b', name: 'Frank' },
  c: { id: 'c', name: 'Per' },
};

// Get id value from peopleAsObject
Object.values(peopleAsObject);

// // Get id value from peopleAsArray
peopleAsArray.reduce(function (accu, current) {
  return {
    ...accu,
    [current.id]: current,
  };
}, {});

//
