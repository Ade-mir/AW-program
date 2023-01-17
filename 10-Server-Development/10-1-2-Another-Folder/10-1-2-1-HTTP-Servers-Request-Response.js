const http = require('http');

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

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`
      ${returnRandomJoke()}
  `);
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
