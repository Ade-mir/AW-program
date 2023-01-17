const http = require('http');

let pingPong = {
  ping: 'ping',
  pong: 'pong',
};

const server = http.createServer(function (req, res) {
  if (req.url === '/ping') {
    console.log(req.url);
    console.log(req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`
      "response": "${pingPong.pong}"
    `);
  } else if (req.url === '/pong') {
    console.log(req.url);
    console.log(req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`
      "response": "${pingPong.ping}"
    `);
  }
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});

// Alternatively use JSON stringify instead of setting the response using dollar sign $
