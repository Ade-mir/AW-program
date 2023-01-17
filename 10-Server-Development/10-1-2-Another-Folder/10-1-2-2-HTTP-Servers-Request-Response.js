const http = require('http');

let jsonJokes = {
  joke1: 'this is the first joke',
  joke2: 'this is the second joke',
  joke3: 'this is the third joke',
  joke4: 'this is the fourth joke',
  joke5: 'this is the fifth joke',
  joke6: 'this is the sixth joke',
};

const server = http.createServer(function (req, res) {
  // console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(`
  {
    ${Object.keys(jsonJokes)[0]}: ${jsonJokes.joke1},
    ${Object.keys(jsonJokes)[1]}: ${jsonJokes.joke2},
    ${Object.keys(jsonJokes)[2]}: ${jsonJokes.joke3},
    ${Object.keys(jsonJokes)[3]}: ${jsonJokes.joke4},
    ${Object.keys(jsonJokes)[4]}: ${jsonJokes.joke5},
    ${Object.keys(jsonJokes)[5]}: ${jsonJokes.joke6},
  }
  `);
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
