const listNode = document.querySelector('.itemlist');

let itemNum = 4;

listNode.addEventListener('click', function (event) {
  itemNum--;
  event.target.remove();
});

const addButtonNode = document.getElementById('addItem');

addButtonNode.addEventListener('click', function () {
  itemNum++;
  const newItemNode = document.createElement('li');
  newItemNode.innerText = 'Item ' + itemNum;
  listNode.append(newItemNode);
});
