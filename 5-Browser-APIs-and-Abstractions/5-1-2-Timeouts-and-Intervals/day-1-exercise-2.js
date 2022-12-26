// let myTimeout = setTimeout(function () {
//   console.log("Hi, I'm late");
// }, 1000);

// let myInterval = setInterval(function () {
//   console.log("Hi, I'm repeating!");
// }, 1000);

// let clearMyInterval = setTimeout(function () {
//   clearInterval(myInterval);
// }, 5000);

// Exercise 1

function delayedPrint(str, delay) {
  setTimeout(function () {
    console.log(str);
  }, delay);
}

// Exercise 2

function printSequence(n, m, delay) {
  if (n === m) {
    console.log('Hey, choose two different values!');
  }
  if (n < m) {
    let myInterval = setInterval(function () {
      console.log(n);
      n++;
      if (n > m) {
        clearInterval(myInterval);
      }
    }, delay);
  }
  if (m < n) {
    let myInterval = setInterval(function () {
      console.log(m);
      m++;
      if (m > n) {
        clearInterval(myInterval);
      }
    }, delay);
  }
}

// Exercise 3 & Exercise 4
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

// Adding elements
let timerNode = document.createElement('h1');

let mainNode = document.getElementById('main');
mainNode.append(timerNode);

function getCurrentTime() {
  let date = new Date();
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function printTime(interval) {
  setInterval(function () {
    timerNode.innerHTML = getCurrentTime();
  }, interval);
}

printTime(1000);

// Exercise 4

let bodyNode = document.querySelector('body');
bodyNode.style.margin = '0';
bodyNode.style.padding = '0';
bodyNode.style.backgroundColor = 'yellow';

let h1Node = document.querySelector('h1');
h1Node.style.margin = '0';
h1Node.style.padding = '0';

mainNode.style.height = '100vh';
mainNode.style.display = 'flex';
mainNode.style.justifyContent = 'center';
mainNode.style.alignItems = 'center';
