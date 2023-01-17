const http = require('http');

let pingPong = {
  ping: 'ping',
  pong: 'pong',
};

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);
  if (req.url === '/ping') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`
      ${pingPong.pong}
    `);
  } else if (req.url === '/pong') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`
        ${pingPong.ping}
    `);
  }
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
