const express = require('express');
const app = express();

let randomJokes = {
  joke1: 'this is the first joke',
  joke2: 'this is the second joke',
  joke3: 'this is the third joke',
  joke4: 'this is the fourth joke',
  joke5: 'this is the fifth joke',
  joke6: 'this is the sixth joke',
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function returnRandomJoke() {
  return Object.values(randomJokes)[
    getRandomInt(Object.values(randomJokes).length)
  ];
}

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: returnRandomJoke() }));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
