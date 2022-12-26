let timerNode = document.createElement('h1');

let mainNode = document.getElementById('main');
mainNode.append(timerNode);

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

function countDown(n, delay) {
  let myInterval = setInterval(function () {
    if (n <= 0) {
      bodyNode.style.backgroundColor = 'green';
      n = 'Done';
      clearInterval(myInterval);
    }
    timerNode.innerHTML = n;
    n--;
    return n;
  }, delay);
}

countDown(10, 1000);
