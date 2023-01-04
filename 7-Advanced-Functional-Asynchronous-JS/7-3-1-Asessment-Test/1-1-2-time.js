// Create a function printItems(items), where items is an array of objects, where each object contains a name and delay property.

// The name and position of each item should be printed after delay seconds, with the following behavior as seen in the example below.

// var myItems = [
//   {
//     name: 'shovel',
//     delay: 1
//   },
//   {
//     name: 'shoe',
//     delay: 3
//   },
//   {
//     name: 'newspaper',
//     delay: 5
//   }
// ];

// printItems(myItems);
// (after a total of 1 second)
// => item 1 is a shovel
// (after a total of 3 seconds)
// => item 2 is a shoe
// (after a total of 5 seconds)
// => item 3 is a newspaper

var myItems = [
  {
    name: 'shovel',
    delay: 1,
  },
  {
    name: 'shoe',
    delay: 3,
  },
  {
    name: 'newspaper',
    delay: 5,
  },
];

printItems(myItems);

function printItems(items) {
  items.forEach(function callback(item, index) {
    setTimeout(function () {
      console.log('item ' + `${index + 1}` + ' is a ' + item.name);
    }, 1000 * item.delay);
  });
}
