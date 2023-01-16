// One function (just make something of your own choice - f.ex a sum function)

function sumTwoNumbers(a, b) {
  return a + b;
}

// One string (hello world)

const helloWorld = 'hello world';

// One number (12345)

const oneToFive = 12345;

// One object (just make something of your own choice)

let classRoom = {
  tables: 16,
  students: 16,
  teacher: 1,
};
// One class (just make something of your own choice or copy from a previous exercise)

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const Rectangle1 = new Rectangle(100, 200);

module.exports = {
  sumTwoNumbers: sumTwoNumbers,
  helloWorld: helloWorld,
  oneToFive: oneToFive,
  classRoom: classRoom,
  Rectangle: Rectangle,
};
