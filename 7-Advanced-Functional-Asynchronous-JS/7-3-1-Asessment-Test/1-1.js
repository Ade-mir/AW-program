// Create a function printItems(items), where items is an array of objects, where each object contains a name and delay property.

// The name and position of each item should be printed after delay seconds, with the following behavior as seen in the example below.

let myItems = [
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

function printItems(items) {
  items.forEach(function (item, index) {
    setTimeout(function () {
      console.log('item ' + `${index + 1} is a ${item.name}`);
    }, item.delay * 1000);
  });
}

printItems(myItems);
