let mainNode = document.getElementById('main');
let bodyNode = document.querySelector('body');
let boxNode = document.createElement('div');
let boxNode2 = document.createElement('div');
let boxNode3 = document.createElement('div');

mainNode.append(boxNode, boxNode2, boxNode3);

bodyNode.style.margin = '0';
bodyNode.style.padding = '0';
bodyNode.style.backgroundColor = 'teal';

// box 1
boxNode.style.height = '50px';
boxNode.style.width = '50px';
boxNode.style.backgroundColor = 'blue';
boxNode.style.position = 'absolute';
boxNode.style.left = '0px';

let position = 0;
let step = 5;
let direction = 1;

function moveBox() {
  if (position > window.innerWidth - 55) {
    direction = -1;
  }
  if (position < 0) {
    direction = 1;
  }

  position = position + step * direction;
  boxNode.style.left = `${position}px`;
}

setInterval(moveBox, 20);

// box 2
boxNode2.style.height = '50px';
boxNode2.style.width = '50px';
boxNode2.style.backgroundColor = 'red';
boxNode2.style.position = 'absolute';
boxNode2.style.top = '200px';
boxNode2.style.left = '0px';

let position2 = 0;
let step2 = 8;
let direction2 = 1;

function moveBox2() {
  if (position2 > window.innerWidth - 55) {
    direction2 = -1;
  }
  if (position2 < 0) {
    direction2 = 1;
  }

  position2 = position2 + step2 * direction2;
  boxNode2.style.left = `${position2}px`;
}

setInterval(moveBox2, 20);

// box 3
boxNode3.style.height = '50px';
boxNode3.style.width = '50px';
boxNode3.style.backgroundColor = 'yellow';
boxNode3.style.position = 'absolute';
boxNode3.style.top = '400px';
boxNode3.style.left = '0px';

let position3 = 0;
let step3 = 15;
let direction3 = 1;

function moveBox3() {
  if (position3 > window.innerWidth - 55) {
    direction3 = -1;
  }
  if (position3 < 0) {
    direction3 = 1;
  }

  position3 = position3 + step3 * direction3;
  boxNode3.style.left = `${position3}px`;
}

setInterval(moveBox3, 20);
