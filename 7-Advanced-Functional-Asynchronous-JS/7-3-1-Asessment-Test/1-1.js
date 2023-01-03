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
  items.forEach((item, index) => {
    setTimeout(() => {
      console.log(`${index + 1}. ${item.name}`);
    }, item.delay * 1000);
  });
}

printItems(myItems);
