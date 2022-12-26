let peopleAsArray = [
    { id: 'a', name: "Eirik", age: 20 },
    { id: 'b', name: "Frank", age: 20  },
    { id: 'c', name: "Per", age: 20 },
];

let peopleAsObject = {
    a: { id: 'a', name: "Eirik", age: 20 },
    b: { id: 'b', name: "Frank", age: 20 },
    c: { id: 'c', name: "Per", age: 20 }
}

// Generate object from array
peopleAsArray.reduce(function (accu, current) {
   return {
       ...accu,
       [current.id]: current
   } 
}, {});

// Generate array from objects
Object.values(peopleAsObject)
