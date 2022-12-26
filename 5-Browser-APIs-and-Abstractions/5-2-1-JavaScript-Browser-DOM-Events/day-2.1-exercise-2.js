function getRandom(max) {
  return Math.random() * max;
}

const listNode = document.querySelector('.itemlist');
listNode.addEventListener('click', function (event) {
  const red = getRandom(255);
  const green = getRandom(255);
  const blue = getRandom(255);
  event.target.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
});

const resetButtonNode = document.getElementById('reset');
resetButtonNode.addEventListener('click', function () {
  Array.from(listNode.children).forEach(function (child) {
    child.style.color = '#000';
  });
});
